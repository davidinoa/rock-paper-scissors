import { createActorContext } from '@xstate/react'
import { assign, setup } from 'xstate'

export const choices = ['rock', 'paper', 'scissors'] as const

export type Choice = (typeof choices)[number]
export type Winner = 'player' | 'computer' | 'draw'

const determineWinner = (playerChoice: string, computerChoice: string) => {
  if (playerChoice === computerChoice) return 'draw'
  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'player'
  }
  return 'computer'
}

type Context = {
  playerChoice: Choice | null
  computerChoice: Choice | null
  winner: Winner | null
  playerScore: number
}

const initialContext: Context = {
  playerChoice: null,
  computerChoice: null,
  winner: null,
  playerScore: 0,
}

type Event =
  | { type: 'PLAY' }
  | { type: 'SELECT'; choice: Choice }
  | { type: 'PLAY_AGAIN' }

const machine = setup({
  types: {} as {
    context: Context
    events: Event
  },
}).createMachine({
  id: 'rockPaperScissors',
  initial: 'playerTurn',
  context: initialContext,
  states: {
    playerTurn: {
      on: {
        SELECT: {
          target: 'computerTurn',
          actions: [
            assign({
              playerChoice: ({ event }) => event.choice,
            }),
          ],
        },
      },
    },
    computerTurn: {
      after: {
        1000: {
          target: 'determineWinner',
          actions: [
            assign({
              computerChoice: () =>
                choices[Math.floor(Math.random() * choices.length)],
            }),
          ],
        },
      },
    },
    determineWinner: {
      always: {
        target: 'end',
        actions: [
          assign(({ context }) => {
            const winner = determineWinner(
              context.playerChoice!,
              context.computerChoice!,
            )
            return {
              ...context,
              winner,
              playerScore:
                winner === 'player'
                  ? context.playerScore + 1
                  : context.playerScore,
            }
          }),
        ],
      },
    },
    end: {
      on: {
        PLAY_AGAIN: {
          target: 'playerTurn',
          actions: [
            assign({
              ...initialContext,
              playerScore: ({ context }) => context.playerScore,
            }),
          ],
        },
      },
    },
  },
})

export const MachineContext = createActorContext(machine)

export default machine

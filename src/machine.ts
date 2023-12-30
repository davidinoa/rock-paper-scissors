import { createActorContext } from '@xstate/react'
import { assign, setup } from 'xstate'

export const choices = ['rock', 'paper', 'scissors'] as const

const determineWinner = (
  playerChoice: string,
  computerChoice: string,
): 'player' | 'computer' | 'draw' => {
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

type Choice = (typeof choices)[number]
type Winner = 'player' | 'computer' | 'draw'

type Context = {
  playerChoice: Choice | null
  computerChoice: Choice | null
  winner: Winner | null
}

const initialContext: Context = {
  playerChoice: null,
  computerChoice: null,
  winner: null,
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
  initial: 'start',
  context: initialContext,
  states: {
    start: {
      on: {
        PLAY: {
          target: 'playerTurn',
        },
      },
    },
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
          assign({
            winner: ({ context }) =>
              determineWinner(context.playerChoice!, context.computerChoice!),
          }),
        ],
      },
    },
    end: {
      on: {
        PLAY_AGAIN: {
          target: 'start',
          actions: [assign(initialContext)],
        },
      },
    },
  },
})

export const MachineContext = createActorContext(machine)

export default machine

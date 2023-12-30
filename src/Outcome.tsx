import PaperIcon from './PaperIcon'
import RockIcon from './RockIcon'
import ScissorsIcon from './ScissorsIcon'
import { MachineContext, Winner } from './machine'

export default function Outcome() {
  const state = MachineContext.useSelector((s) => s)
  const { send } = MachineContext.useActorRef()
  const icons = {
    paper: <PaperIcon />,
    scissors: <ScissorsIcon />,
    rock: <RockIcon />,
  }

  function getResultText(winner: Winner) {
    switch (winner) {
      case 'player':
        return 'You Win'
      case 'computer':
        return 'You Lose'
      case 'draw':
        return "It's a Tie"
      default:
        throw new Error('Invalid winner')
    }
  }

  return (
    <>
      <div className="flex min-w-[20.625rem] justify-center gap-[4.25rem] text-[0.9375rem] uppercase">
        <div className="flex flex-1 flex-col items-center">
          <h2>You Picked</h2>
          {icons[state.context.playerChoice!]}
        </div>
        <div className="flex flex-1 flex-col items-center">
          <h2>The House Picked</h2>
          <div className="flex grow items-center">
            {state.matches('computerTurn') && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="111"
                height="111"
                viewBox="0 0 111 111"
                fill="none"
              >
                <circle
                  cx="55.3154"
                  cy="55.3153"
                  r="55"
                  fill="black"
                  fillOpacity="0.1"
                />
              </svg>
            )}
            {state.matches('determineWinner') ||
              (state.matches('end') && icons[state.context.computerChoice!])}
          </div>
        </div>
      </div>
      {state.matches('end') && (
        <div className="mt-[62px] flex flex-col gap-4">
          <h2 className="text-center text-[3.5rem] uppercase leading-tight">
            {getResultText(state.context.winner!)}
          </h2>
          <button
            type="button"
            className="text-midnight-blue h-[48px] w-[220px] rounded-lg bg-white text-base font-[600] uppercase tracking-[0.15625rem]"
            onClick={() => send({ type: 'PLAY_AGAIN' })}
          >
            Play Again
          </button>
        </div>
      )}
    </>
  )
}

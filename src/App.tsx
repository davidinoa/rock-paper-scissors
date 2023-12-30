import Choices from './Choices'
import Header from './Header'
import { MachineContext } from './machine'

export default function App() {
  const { send } = MachineContext.useActorRef()
  const state = MachineContext.useSelector((s) => s)

  return (
    <>
      <Header />
      <main className="mt-[105px] grid h-full place-items-center text-4xl text-white">
        {state.matches('start') && (
          <button
            type="button"
            className="rounded-md bg-green-600 px-4 py-2 text-white"
            onClick={() => send({ type: 'PLAY' })}
          >
            Start Game
          </button>
        )}
        {state.matches('playerTurn') && <Choices />}
        {state.matches('computerTurn') && (
          <div>
            <h1>Computer is thinking...</h1>
          </div>
        )}
        {state.matches('end') && (
          <div>
            <h1>Game Over</h1>
            <h2>Computer chose: {state.context.computerChoice}</h2>
            <h2>Player chose: {state.context.playerChoice}</h2>
            <h2>Winner: {state.context.winner}</h2>
            <button
              type="button"
              className="rounded-md bg-green-600 px-4 py-2 text-white"
              onClick={() => send({ type: 'PLAY_AGAIN' })}
            >
              Play Again
            </button>
          </div>
        )}
      </main>
    </>
  )
}

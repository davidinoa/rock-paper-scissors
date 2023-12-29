import { useMachine } from '@xstate/react'
import machine, { choices } from './machine'

function App() {
  const [state, send] = useMachine(machine)

  return (
    <div className="grid h-screen place-items-center bg-black text-4xl text-white">
      {state.matches('start') && (
        <button
          type="button"
          className="rounded-md bg-green-600 px-4 py-2 text-white"
          onClick={() => send({ type: 'PLAY' })}
        >
          Start Game
        </button>
      )}
      {state.matches('playerTurn') &&
        choices.map((choice) => (
          <button
            type="button"
            className="rounded-md bg-green-600 px-4 py-2 text-white"
            key={choice}
            onClick={() => send({ type: 'SELECT', choice })}
          >
            {choice}
          </button>
        ))}
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
    </div>
  )
}

export default App

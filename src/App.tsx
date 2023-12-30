/* eslint-disable no-nested-ternary */
import Choices from './Choices'
import Header from './Header'
import Outcome from './Outcome'
import { MachineContext } from './machine'

export default function App() {
  const state = MachineContext.useSelector((s) => s)

  return (
    <>
      <Header />
      <main className="mt-[105px] grid h-full place-items-center text-4xl text-white">
        {state.matches('playerTurn') ? <Choices /> : <Outcome />}
      </main>
    </>
  )
}

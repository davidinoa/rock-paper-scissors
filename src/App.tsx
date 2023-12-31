import Choices from './Choices'
import Header from './Header'
import Outcome from './Outcome'
import RulesModal from './RulesModal'
import { MachineContext } from './machine'

export default function App() {
  const state = MachineContext.useSelector((s) => s)

  return (
    <>
      <Header />
      <main className="grid h-full place-items-center text-white">
        {state.matches('playerTurn') ? <Choices /> : <Outcome />}
      </main>
      <footer className="flex justify-center">
        <RulesModal />
      </footer>
    </>
  )
}

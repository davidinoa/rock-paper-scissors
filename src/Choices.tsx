import PaperIcon from './PaperIcon'
import RockIcon from './RockIcon'
import ScissorsIcon from './ScissorsIcon'
import bgTriangleSvg from './assets/images/bg-triangle.svg'
import { MachineContext } from './machine'

export default function Choices() {
  const { send } = MachineContext.useActorRef()
  return (
    <div className="relative grid h-[282px] w-[312px] place-items-center">
      <img src={bgTriangleSvg} alt="bg-triangle" className="h-[188px]" />
      <button
        type="button"
        aria-label="paper choice"
        className="absolute left-0 top-0"
        onClick={() => send({ type: 'SELECT', choice: 'paper' })}
      >
        <PaperIcon />
      </button>
      <button
        type="button"
        aria-label="scissors choice"
        className="absolute right-0 top-0"
        onClick={() => send({ type: 'SELECT', choice: 'scissors' })}
      >
        <ScissorsIcon />
      </button>
      <button
        type="button"
        aria-label="rock choice"
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        onClick={() => send({ type: 'SELECT', choice: 'rock' })}
      >
        <RockIcon />
      </button>
    </div>
  )
}

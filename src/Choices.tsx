import bgTriangleSvg from './assets/images/bg-triangle.svg'
import paperSvg from './assets/images/paper.svg'
import rockSvg from './assets/images/rock.svg'
import scissorsSvg from './assets/images/scissors.svg'
import { MachineContext } from './machine'

export default function Choices() {
  const { send } = MachineContext.useActorRef()

  return (
    <div className="relative grid h-[282px] w-[312px] place-items-center">
      <img src={bgTriangleSvg} alt="bg-triangle" className="h-[188px]" />
      <button
        type="button"
        className="group absolute left-0 top-0"
        onClick={() => send({ type: 'SELECT', choice: 'paper' })}
      >
        <img
          src={paperSvg}
          alt="paper"
          className="rounded-full outline outline-0 -outline-offset-2 outline-white/5 transition-all hover:outline-[1rem]"
        />
      </button>
      <button
        type="button"
        className="absolute right-0 top-0"
        onClick={() => send({ type: 'SELECT', choice: 'scissors' })}
      >
        <img
          src={scissorsSvg}
          alt="scissors"
          className="rounded-full outline outline-0 -outline-offset-2 outline-white/5 transition-all hover:outline-[1rem]"
        />
      </button>
      <button
        type="button"
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        onClick={() => send({ type: 'SELECT', choice: 'rock' })}
      >
        <img
          src={rockSvg}
          alt="rock"
          className="rounded-full outline outline-0 -outline-offset-2 outline-white/5 transition-all hover:outline-[1rem]"
        />
      </button>
    </div>
  )
}

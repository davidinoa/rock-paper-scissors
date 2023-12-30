import logo from './assets/images/logo.svg'
import { MachineContext } from './machine'

export default function Header() {
  const score = MachineContext.useSelector((s) => s.context.playerScore)

  return (
    <header className="flex items-center justify-between rounded-md border-2 border-white/30 p-3">
      <h1 className="pt-1">
        <img src={logo} alt="Rock Paper Scissors" className="w-[5.1875rem]" />
      </h1>
      <div
        className="flex flex-col items-center justify-center rounded-md px-6 py-2.5"
        style={{
          background: 'linear-gradient(0deg, #F3F3F3 0%, white 100%)',
        }}
      >
        <h2
          id="score-label"
          className="text-[0.625rem] font-[600] uppercase leading-3 tracking-[1.5px] text-royal-blue"
        >
          Score
        </h2>
        <p
          aria-atomic="true"
          aria-live="polite"
          aria-labelledby="score-label"
          className="text-[2.5rem] font-bold tabular-nums leading-none text-slate-gray"
        >
          {score}
        </p>
      </div>
    </header>
  )
}

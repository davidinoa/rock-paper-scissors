import rockSvg from './assets/images/rock.svg'

export default function RockIcon() {
  return (
    <img
      src={rockSvg}
      alt="rock icon"
      className="w-[8.125rem] rounded-full outline outline-0 -outline-offset-2 outline-white/5 transition-all hover:outline-[1rem]"
    />
  )
}

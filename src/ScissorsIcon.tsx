import scissorsIcon from './assets/images/scissors.svg'

export default function ScissorsIcon() {
  return (
    <img
      src={scissorsIcon}
      alt="scissors icon"
      className="w-[8.125rem] rounded-full outline outline-0 -outline-offset-2 outline-white/5 transition-all hover:outline-[1rem]"
    />
  )
}

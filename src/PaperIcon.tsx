import paperSvg from './assets/images/paper.svg'

export default function PaperIcon() {
  return (
    <img
      src={paperSvg}
      alt="paper icon"
      className="w-[8.125rem] rounded-full outline outline-0 -outline-offset-2 outline-white/5 transition-all hover:outline-[1rem]"
    />
  )
}

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './Dialog'

import rulesSvg from './assets/images/image-rules.svg'

export default function RulesModal() {
  return (
    <Dialog>
      <DialogTrigger className="h-10 w-[8rem] rounded-lg border border-white text-base uppercase tracking-[0.15625rem] text-white">
        Rules
      </DialogTrigger>
      <DialogContent className="grid max-w-[min(90vw,400px)] place-items-center gap-8 rounded-lg bg-white">
        <DialogHeader>
          <DialogTitle className="text-[2rem] font-[700] uppercase leading-none text-midnight-blue">
            Rules
          </DialogTitle>
        </DialogHeader>
        <img src={rulesSvg} alt="illustration of the game rules" />
        <section className="sr-only">
          <p>rule 1: paper beats rock</p>
          <p>rule 2: rock beats scissors</p>
          <p>rule 3: scissors beats paper</p>
        </section>
      </DialogContent>
    </Dialog>
  )
}

import type { LoveSentence } from '../types'

interface LoveNoteProps {
  loveSentences: LoveSentence[]
}

export function LoveNote({ loveSentences }: LoveNoteProps) {
  const mainSentence = loveSentences[0]?.text
  const secondarySentence = loveSentences[1]?.text

  return (
    <section className="love-note" aria-labelledby="love-note-title">
      <div className="love-note__stamp" aria-hidden="true">
        ♡
      </div>
      <div>
        <p className="module-label" id="love-note-title">
          今日情话
        </p>
        {mainSentence ? <p className="love-note__main">{mainSentence}</p> : null}
        {secondarySentence ? <p className="love-note__sub">{secondarySentence}</p> : null}
      </div>
    </section>
  )
}

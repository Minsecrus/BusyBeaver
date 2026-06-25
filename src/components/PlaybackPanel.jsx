import { Gauge } from 'lucide-react'
import { SPEEDS } from '../data/playback'
import { formatSpeed } from '../lib/format'

export function PlaybackPanel({ speed, onSpeedChange }) {
  return (
    <section className="control-panel flex items-center gap-4 px-5 py-4">
      <Gauge className="h-4 w-4 text-cyan-300" aria-label="Playback speed" />
      <div className="speed-grid flex-1">
        {SPEEDS.map((item) => (
          <button
            type="button"
            key={item}
            className={item === speed ? 'is-active' : ''}
            onClick={() => onSpeedChange(item)}
          >
            {formatSpeed(item)}
          </button>
        ))}
      </div>
    </section>
  )
}

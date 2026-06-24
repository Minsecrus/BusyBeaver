import { Gauge } from 'lucide-react'
import { SPEEDS } from '../data/playback'
import { formatNumber, formatSpeed } from '../lib/format'

export function PlaybackPanel({ speed, view, onSpeedChange }) {
  return (
    <section className="control-panel grid grid-cols-[1fr_1.25fr] gap-4 px-5 py-4">
      <div>
        <div className="mb-3 flex h-5 items-center">
          <Gauge
            className="h-4 w-4 text-cyan-300"
            aria-label="Playback speed"
          />
        </div>
        <div className="speed-grid">
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
      </div>

      <div className="grid grid-cols-3 gap-3">
        <Stat label="Steps" value={formatNumber(view.steps)} />
        <Stat label="State" value={view.state} tone="cyan" />
        <Stat label="Ones" value={formatNumber(view.ones)} />
      </div>
    </section>
  )
}

function Stat({ label, value, tone = 'slate' }) {
  return (
    <div className="stat-cell">
      <span>{label}</span>
      <strong className={tone === 'cyan' ? 'text-cyan-200' : ''}>{value}</strong>
    </div>
  )
}

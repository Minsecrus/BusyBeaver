import { formatNumber } from '../lib/format'
import { Meter } from './Meter'

export function TapeStage({ machine, view }) {
  const progress = Math.min(100, (view.steps / machine.targetSteps) * 100)
  const span = view.max - view.min + 1
  const activeRule = view.lastRule ?? 'waiting'

  return (
    <section className="machine-stage relative min-h-0 overflow-hidden px-6 py-5">
      <div className="scanline" />
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-300">
            Head at cell {formatNumber(view.head)} / state {view.state}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
            Last transition
          </p>
          <p className="mt-1 font-mono text-sm text-cyan-200">{activeRule}</p>
        </div>
      </div>

      <div className="relative flex h-[58%] items-center">
        <div className="tape-shadow" />
        <div className="tape-row">
          {view.cells.map((cell) => (
            <div
              key={cell.position}
              className={`tape-cell ${
                cell.position === view.head ? 'is-head' : ''
              } ${cell.value === 1 ? 'is-one' : ''}`}
            >
              <span>{cell.value}</span>
              <small>{cell.position}</small>
            </div>
          ))}
        </div>
        <div className="head-marker">
          <span>{view.state}</span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <Meter
          label="Progress"
          value={`${progress.toFixed(view.steps < 1000 ? 1 : 2)}%`}
          fill={progress}
        />
        <Meter
          label="Tape span"
          value={formatNumber(span)}
          fill={Math.min(100, (span / 128) * 100)}
        />
        <Meter
          label="Written ones"
          value={formatNumber(view.ones)}
          fill={(view.ones / machine.targetOnes) * 100}
        />
      </div>
    </section>
  )
}

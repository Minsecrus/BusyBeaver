import { formatNumber, formatSpeed } from '../lib/format'

export function StatusFooter({ machine, view, isRunning, speed }) {
  return (
    <footer className="control-panel grid grid-cols-[1.1fr_1fr_1fr] gap-4 px-5 py-4">
      <StatusBlock
        label="Machine target"
        value={`${formatNumber(machine.targetSteps)} steps / ${formatNumber(
          machine.targetOnes,
        )} ones`}
      />
      <StatusBlock
        label="Visited range"
        value={`${formatNumber(view.min)} to ${formatNumber(view.max)}`}
      />
      <StatusBlock
        label="Playback"
        value={
          view.state === 'H'
            ? 'halted'
            : isRunning
              ? `${formatSpeed(speed)} running`
              : 'paused'
        }
        tone={isRunning ? 'cyan' : view.state === 'H' ? 'amber' : 'slate'}
      />
    </footer>
  )
}

function StatusBlock({ label, value, tone = 'slate' }) {
  const color =
    tone === 'cyan'
      ? 'text-cyan-200'
      : tone === 'amber'
        ? 'text-amber-200'
        : 'text-slate-200'

  return (
    <div>
      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
        {label}
      </p>
      <p className={`mt-2 font-mono text-lg ${color}`}>{value}</p>
    </div>
  )
}

export function Meter({ label, value, fill }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
        <span>{label}</span>
        <span className="font-mono text-slate-200">{value}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-900">
        <div
          className="h-full rounded-full bg-cyan-300"
          style={{ width: `${Math.max(0, Math.min(100, fill))}%` }}
        />
      </div>
    </div>
  )
}

import { useMemo } from 'react'

export function SidePanel({ machine, view }) {
  const activeRule = view.lastRule ?? 'waiting'
  const ruleRows = useMemo(
    () =>
      machine.states.flatMap((state) =>
        [0, 1].map((read) => ({
          key: `${state}${read}`,
          rule: machine.rules[state]?.[read],
        })),
      ),
    [machine],
  )

  return (
    <aside className="min-h-0">
      <section className="control-panel h-full min-h-0 overflow-hidden px-5 py-4">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
            Transition table
          </p>
          <span className="font-mono text-xs text-slate-500">
            read {'->'} write move next
          </span>
        </div>
        <div className="rule-table">
          {ruleRows.map((row) => {
            const ruleText = row.rule ? row.rule.join('') : '---'
            const isActive = activeRule.startsWith(row.key)
            return (
              <div
                key={row.key}
                className={`rule-row ${isActive ? 'is-active' : ''}`}
              >
                <span>{row.key}</span>
                <strong>{ruleText}</strong>
              </div>
            )
          })}
        </div>
      </section>
    </aside>
  )
}

import { useMemo } from 'react'

export function SidePanel({ machine, view }) {
  const activeRule = view.lastRule ?? 'waiting'
  const transitionRows = useMemo(
    () =>
      machine.states.map((state) => ({
        state,
        transitions: [0, 1].map((read) => ({
          read,
          key: `${state}${read}`,
          rule: machine.rules[state]?.[read],
        })),
      })),
    [machine],
  )

  return (
    <aside className="min-h-0">
      <section className="control-panel h-full min-h-0 overflow-hidden px-5 py-4">
        <div className="transition-table">
          <div className="transition-head transition-state">q</div>
          <div className="transition-head">0</div>
          <div className="transition-head">1</div>
          {transitionRows.map((row) => (
            <div className="transition-row" key={row.state}>
              <div className="transition-state">{row.state}</div>
              {row.transitions.map((transition) => {
                const isActive = activeRule.startsWith(transition.key)
                return (
                  <div
                    key={transition.key}
                    className={`transition-cell ${isActive ? 'is-active' : ''}`}
                  >
                    {transition.rule ? transition.rule.join('') : '---'}
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </section>
    </aside>
  )
}

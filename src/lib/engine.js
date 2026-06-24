import { MACHINES } from '../data/machines'

export const WINDOW_RADIUS = 10

export function makeEngine(machineKey) {
  return {
    machineKey,
    tape: new Set(),
    head: 0,
    state: 'A',
    steps: 0,
    min: 0,
    max: 0,
    lastRule: null,
  }
}

export function stepEngine(engine) {
  if (engine.state === 'H') return false

  const machine = MACHINES[engine.machineKey]
  const read = engine.tape.has(engine.head) ? 1 : 0
  const rule = machine.rules[engine.state]?.[read]

  if (!rule) {
    engine.state = 'H'
    return false
  }

  const [write, move, next] = rule
  const from = engine.head

  if (write === '1') {
    engine.tape.add(engine.head)
  } else {
    engine.tape.delete(engine.head)
  }

  engine.head += move === 'R' ? 1 : -1
  engine.min = Math.min(engine.min, engine.head, from)
  engine.max = Math.max(engine.max, engine.head, from)
  engine.lastRule = `${engine.state}${read} -> ${write}${move}${next}`
  engine.state = next
  engine.steps += 1
  return true
}

export function runSteps(engine, count) {
  let remaining = count
  while (remaining > 0 && stepEngine(engine)) {
    remaining -= 1
  }
}

export function snapshot(engine) {
  return {
    machineKey: engine.machineKey,
    head: engine.head,
    state: engine.state,
    steps: engine.steps,
    ones: engine.tape.size,
    min: engine.min,
    max: engine.max,
    lastRule: engine.lastRule,
    cells: Array.from({ length: WINDOW_RADIUS * 2 + 1 }, (_, index) => {
      const position = engine.head + index - WINDOW_RADIUS
      return {
        position,
        value: engine.tape.has(position) ? 1 : 0,
      }
    }),
  }
}

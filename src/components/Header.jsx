import { useState } from 'react'
import {
  Activity,
  Info,
  Pause,
  Play,
  RotateCcw,
  StepForward,
} from 'lucide-react'
import { InfoDialog } from './InfoDialog'
import { MACHINE_KEYS, MACHINES } from '../data/machines'

export function Header({
  machine,
  machineKey,
  isRunning,
  isHalted,
  onMachineChange,
  onReset,
  onStep,
  onToggleRun,
}) {
  const [isInfoOpen, setIsInfoOpen] = useState(false)

  return (
    <>
      <header className="control-panel flex items-center justify-between gap-4 px-5">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <Activity className="h-5 w-5 text-cyan-300" aria-hidden="true" />
            <h1 className="text-2xl font-semibold tracking-normal">
              BusyBeaver
            </h1>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <div className="segmented">
            {MACHINE_KEYS.map((key) => (
              <button
                type="button"
                key={key}
                className={key === machineKey ? 'is-active' : ''}
                onClick={() => onMachineChange(key)}
              >
                {MACHINES[key].label.match(/\d+/)?.[0] ?? key}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="icon-button"
            aria-label={isRunning ? 'Pause' : 'Run'}
            title={isRunning ? 'Pause' : 'Run'}
            onClick={onToggleRun}
            disabled={isHalted}
          >
            {isRunning ? <Pause /> : <Play />}
          </button>
          <button
            type="button"
            className="icon-button"
            aria-label="Step"
            title="Step"
            onClick={onStep}
            disabled={isHalted}
          >
            <StepForward />
          </button>
          <button
            type="button"
            className="icon-button"
            aria-label="Reset"
            title="Reset"
            onClick={onReset}
          >
            <RotateCcw />
          </button>
          <button
            type="button"
            className="icon-button"
            aria-label="Info"
            title="Info"
            onClick={() => setIsInfoOpen(true)}
          >
            <Info />
          </button>
        </div>
      </header>

      {isInfoOpen ? <InfoDialog onClose={() => setIsInfoOpen(false)} /> : null}
    </>
  )
}

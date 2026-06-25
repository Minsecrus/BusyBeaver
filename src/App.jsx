import { useEffect, useRef, useState } from 'react'
import { Header } from './components/Header'
import { PlaybackPanel } from './components/PlaybackPanel'
import { SidePanel } from './components/SidePanel'
import { TapeStage } from './components/TapeStage'
import { MACHINES } from './data/machines'
import { DEFAULT_MACHINE_KEY, DEFAULT_SPEED } from './data/playback'
import { makeEngine, runSteps, snapshot, stepEngine } from './lib/engine'

function App() {
  const [machineKey, setMachineKey] = useState(DEFAULT_MACHINE_KEY)
  const [speed, setSpeed] = useState(DEFAULT_SPEED)
  const [isRunning, setIsRunning] = useState(false)
  const [initialEngine] = useState(() => makeEngine(DEFAULT_MACHINE_KEY))
  const engineRef = useRef(initialEngine)
  const carryRef = useRef(0)
  const lastFrameRef = useRef(null)
  const lastPaintRef = useRef(0)
  const [view, setView] = useState(() => snapshot(initialEngine))

  const machine = MACHINES[machineKey]

  function changeMachine(nextMachineKey) {
    engineRef.current = makeEngine(nextMachineKey)
    carryRef.current = 0
    lastFrameRef.current = null
    setIsRunning(false)
    setView(snapshot(engineRef.current))
    setMachineKey(nextMachineKey)
  }

  useEffect(() => {
    if (!isRunning) {
      lastFrameRef.current = null
      return undefined
    }

    let frameId

    function tick(now) {
      const last = lastFrameRef.current ?? now
      const elapsed = Math.min(250, now - last)
      lastFrameRef.current = now
      carryRef.current += (elapsed / 1000) * speed

      const stepsToRun = Math.floor(carryRef.current)
      if (stepsToRun > 0) {
        carryRef.current -= stepsToRun
        runSteps(engineRef.current, stepsToRun)
      }

      if (now - lastPaintRef.current > 50 || engineRef.current.state === 'H') {
        lastPaintRef.current = now
        setView(snapshot(engineRef.current))
      }

      if (engineRef.current.state === 'H') {
        setIsRunning(false)
        return
      }

      frameId = requestAnimationFrame(tick)
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [isRunning, speed])

  function reset() {
    engineRef.current = makeEngine(machineKey)
    carryRef.current = 0
    lastFrameRef.current = null
    setIsRunning(false)
    setView(snapshot(engineRef.current))
  }

  function stepOnce() {
    setIsRunning(false)
    stepEngine(engineRef.current)
    setView(snapshot(engineRef.current))
  }

  return (
    <main className="h-screen overflow-hidden bg-[#07090d] text-slate-100">
      <div className="lab-grid mx-auto grid h-full max-w-[1500px] grid-rows-[76px_1fr] gap-3 px-5 py-4">
        <Header
          machine={machine}
          machineKey={machineKey}
          isRunning={isRunning}
          isHalted={view.state === 'H'}
          onMachineChange={changeMachine}
          onReset={reset}
          onStep={stepOnce}
          onToggleRun={() => setIsRunning((value) => !value)}
        />

        <section className="grid min-h-0 grid-cols-[1fr_360px] gap-3">
          <div className="grid min-h-0 grid-rows-[1fr_86px] gap-3">
            <TapeStage machine={machine} view={view} />
            <PlaybackPanel speed={speed} onSpeedChange={setSpeed} />
          </div>
          <SidePanel machine={machine} view={view} />
        </section>
      </div>
    </main>
  )
}

export default App

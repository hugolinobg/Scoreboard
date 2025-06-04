import './Scores.css'
import { useState, useRef } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

const Scores = () => {
  const [seconds, setSeconds] = useState(300) // 5 minutos = 300 segundos
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef(null)

  // Formata os segundos para mm:ss
  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60)
    const remainingSeconds = secs % 60
    return `${String(minutes).padStart(2, '0')}:${String(
      remainingSeconds
    ).padStart(2, '0')}`
  }

  const startTimer = () => {
    if (intervalRef.current !== null) return // Já está rodando

    setIsRunning(true)
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          stopTimer()
          handleSendToAPI(0)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
      setIsRunning(false)
      handleSendToAPI(seconds)
    }
  }

  const resetTimer = () => {
    stopTimer()
    setSeconds(300) // Reset para 5 minutos
  }

  const handleSendToAPI = (elapsedSeconds) => {
    console.log(`Enviar para API: ${elapsedSeconds} segundos restantes`)
    // Aqui você pode fazer um fetch ou axios.post para enviar os dados.
    // Exemplo:
    // fetch('/api/timer', { method: 'POST', body: JSON.stringify({ time: elapsedSeconds }) })
  }

  return (
    <div className="items-center gap-6 pb-15 pt-15 pr-30 pl-30">
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900">
              Personal Information
            </h2>

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
              <div className="mt-4 justify-center items-center space-x-2">
                <h1 className="font-semibold">Timer: {formatTime(seconds)}</h1>
                <p className="mt-2 font-semibold">
                  Segundos restantes: {seconds}
                </p>

                <div className="mt-4 space-x-3">
                  <button
                    type="button"
                    onClick={startTimer}
                    className="rounded bg-green-500 px-4 py-2 text-white"
                    disabled={isRunning}
                  >
                    Start
                  </button>

                  <button
                    type="button"
                    onClick={stopTimer}
                    className="rounded bg-red-500 px-4 py-2 text-white"
                    disabled={!isRunning}
                  >
                    Stop
                  </button>

                  <button
                    type="button"
                    onClick={resetTimer}
                    className="rounded bg-blue-500 px-4 py-2 text-white"
                  >
                    Reset
                  </button>
                </div>
              </div>
              {/* ... restante do seu form ... */}
              <div className="sm:col-span-full">
                <label
                  htmlFor="country"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Level
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
              </div>

              {/* ... outros campos do form ... */}
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Scores

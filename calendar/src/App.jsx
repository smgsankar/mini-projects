import { Calendar } from './components/Calendar'

function App() {
  return (
    <div className="max-w-md mx-auto bg-dark-surface rounded-lg shadow-xl p-6">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-accent-white">Calendar</h1>
        <p className="text-text-secondary">Navigate through months and years</p>
      </div>
      <Calendar />
    </div>
  )
}

export default App

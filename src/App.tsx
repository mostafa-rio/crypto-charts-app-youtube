import Dashboard from './components/Dashboard'
import Header from './components/Header'

function App() {
  return (
    <>
      <div className="container px-5 mx-auto min-h-screen py-5">
        {/* header */}
        <div className="mb-5">
          <Header />
        </div>
        {/* dashboard */}
        <Dashboard />
      </div>
    </>
  )
}

export default App

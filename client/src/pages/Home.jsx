import { useState, useEffect } from 'react'
import axios from 'axios'

function Home() {
  const [apiStatus, setApiStatus] = useState('checking')

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const res = await axios.get('/api/health')
        if (res.data.status === 'ok') {
          setApiStatus('connected')
        } else {
          setApiStatus('error')
        }
      } catch {
        setApiStatus('disconnected')
      }
    }
    checkHealth()
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-primary">
          Hustle Hub
        </h1>
        <p className="text-xl text-gray-600">
          University Marketplace — Buy, Sell & Find Gigs
        </p>

        {/* API Health Check */}
        <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-sm">
          <span
            className={`w-2.5 h-2.5 rounded-full ${
              apiStatus === 'connected'
                ? 'bg-green-500'
                : apiStatus === 'checking'
                ? 'bg-yellow-400 animate-pulse'
                : 'bg-red-500'
            }`}
          />
          <span className="text-gray-700">
            API:{' '}
            {apiStatus === 'connected'
              ? 'Connected'
              : apiStatus === 'checking'
              ? 'Checking...'
              : 'Disconnected'}
          </span>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 text-gray-400 text-sm">
        Built with MERN Stack • Tailwind CSS v4
      </footer>
    </div>
  )
}

export default Home

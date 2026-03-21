import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Owner Routes */}
      {/* <Route path="/owner/*" element={<OwnerLayout />} /> */}

      {/* Admin Routes */}
      {/* <Route path="/admin/*" element={<AdminLayout />} /> */}

      {/* Customer Routes */}
      {/* <Route path="/customer/*" element={<CustomerLayout />} /> */}
    </Routes>
  )
}

export default App

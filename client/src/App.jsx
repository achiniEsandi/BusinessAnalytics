import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import MainLayout from './components/MainLayout';
import DevTools from './components/DevTools';
import Home from './pages/Home';
import Landing from './pages/Landing';
import AdminDashboard from './pages/admin/AdminDashboard';
import Analytics from './pages/dashboard/Analytics';
import CreateProduct from './pages/dashboard/CreateProduct';
import CustomerDashboard from './pages/dashboard/CustomerDashboard';
import OwnerDashboard from './pages/dashboard/OwnerDashboard';
import StoreEditor from './pages/dashboard/StoreEditor';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/admin" element={<MainLayout><AdminDashboard /></MainLayout>} />
          <Route path="/dashboard" element={<MainLayout><OwnerDashboard /></MainLayout>} />
          <Route path="/customer-dashboard" element={<MainLayout><CustomerDashboard /></MainLayout>} />
          <Route path="/store-editor" element={<MainLayout><StoreEditor /></MainLayout>} />
          <Route path="/create-product" element={<MainLayout><CreateProduct /></MainLayout>} />
          <Route path="/analytics" element={<MainLayout><Analytics /></MainLayout>} />
          <Route path="*" element={<MainLayout><Home /></MainLayout>} />
        </Routes>
        <Toaster position="top-right" reverseOrder={false} />
        <DevTools />
      </Router>
    </AuthProvider>
  );
}

export default App;

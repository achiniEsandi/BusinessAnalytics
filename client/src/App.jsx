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
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/dashboard" element={<OwnerDashboard />} />
            <Route path="/customer-dashboard" element={<CustomerDashboard />} />
            <Route path="/store-editor" element={<StoreEditor />} />
            <Route path="/create-product" element={<CreateProduct />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </MainLayout>
        <Toaster position="top-right" reverseOrder={false} />
        <DevTools />
      </Router>
    </AuthProvider>
  );
}

export default App;

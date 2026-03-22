import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import AdminHeader from './AdminHeader';
import OwnerHeader from './OwnerHeader';
import CustomerHeader from './CustomerHeader';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  const { user } = useContext(AuthContext);

  const getHeader = () => {
    switch (user?.role) {
      case 'admin':
        return <AdminHeader />;
      case 'owner':
        return <OwnerHeader />;
      case 'customer':
        return <CustomerHeader />;
      default:
        return <CustomerHeader />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f3ee]">
      {getHeader()}
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const MaterialIcon = ({ name, size = 20 }) => (
  <span
    className="material-symbols-rounded text-inherit"
    style={{ fontSize: size, lineHeight: 1 }}
  >
    {name}
  </span>
);

const OwnerHeader = () => {
  const { user, logout } = useContext(AuthContext);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-4 sm:px-10 py-3 bg-white border-b border-[rgba(10,10,15,0.08)] shadow-sm backdrop-blur-md bg-white/80">
      {/* Left: Logo & Core Nav */}
      <div className="flex items-center gap-10">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg no-underline text-[#0a0a0f]">
          <span className="w-[30px] h-[30px] bg-[#051094] rounded-lg grid place-items-center text-white text-base font-bold">
            H
          </span>
          Hustle-Hub
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/dashboard" className="text-sm font-medium text-gray-600 hover:text-[#051094] no-underline transition-colors flex items-center gap-2">
            <MaterialIcon name="dashboard" size={18} />
            Dashboard
          </Link>
          <Link to="/analytics" className="text-sm font-medium text-gray-600 hover:text-[#051094] no-underline transition-colors flex items-center gap-2">
            <MaterialIcon name="analytics" size={18} />
            Analytics
          </Link>
          <Link to="/create-product" className="text-sm font-medium text-gray-600 hover:text-[#051094] no-underline transition-colors flex items-center gap-2">
            <MaterialIcon name="add_box" size={18} />
            Add Product
          </Link>
          <Link to="/store-editor" className="text-sm font-medium text-gray-600 hover:text-[#051094] no-underline transition-colors flex items-center gap-2">
            <MaterialIcon name="design_services" size={18} />
            Store Editor
          </Link>
        </div>
      </div>

      {/* Right: User Menu */}
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex flex-col items-end mr-2">
          <span className="text-sm font-bold text-gray-900">{user?.name || 'Owner'}</span>
          <span className="text-[10px] uppercase tracking-wider font-bold text-[#051094]">Owner Account</span>
        </div>

        <div className="relative">
          <button 
            onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            className="w-10 h-10 rounded-full bg-[#f5f3ee] border border-gray-200 flex items-center justify-center text-[#051094] hover:bg-[#ede9e0] transition-all overflow-hidden border-none bg-transparent cursor-pointer"
          >
            <MaterialIcon name="account_circle" size={32} />
          </button>

          {isProfileMenuOpen && (
            <>
              <div 
                className="fixed inset-0 z-40"
                onClick={() => setIsProfileMenuOpen(false)}
              />
              <div className="absolute right-0 mt-3 w-56 bg-white border border-gray-100 rounded-xl shadow-xl z-50 p-2 py-3">
                <div className="px-3 pb-3 mb-2 border-b border-gray-50">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Signed in as</p>
                  <p className="text-sm font-bold text-gray-900 truncate">{user?.name || 'Owner'}</p>
                </div>
                
                <button 
                  onClick={logout}
                  className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-500 hover:bg-red-50 rounded-lg transition-colors font-medium border-none bg-transparent cursor-pointer text-left"
                >
                  <MaterialIcon name="logout" size={18} />
                  Sign Out
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default OwnerHeader;

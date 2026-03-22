// components/Header.jsx
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const MaterialIcon = ({ name, size = 20 }) => (
  <span
    className="material-symbols-rounded"
    style={{ fontSize: size, lineHeight: 1 }}
  >
    {name}
  </span>
);

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-4 sm:px-10 py-[18px] bg-[rgba(245,243,238,0.88)] backdrop-blur-md border-b border-[rgba(10,10,15,0.1)]">
      <Link to="/" className="flex items-center gap-2 font-bold text-lg no-underline text-[#0a0a0f]">
        <span className="w-[30px] h-[30px] bg-[#0000ff] rounded-lg grid place-items-center text-white text-base font-bold">
          H
        </span>
        Hustle-Hub
      </Link>
      <div className="flex gap-3 items-center">
        {!user || user.role === 'guest' ? (
          <>
            <Link to="/landing" className="bg-none border-none cursor-pointer text-sm text-[#6b6860] px-4 py-2 rounded-lg font-medium hover:text-[#0a0a0f] no-underline">
              Log In
            </Link>
            <button className="bg-[#0a0a0f] text-[#f5f3ee] border-none cursor-pointer font-semibold text-sm px-5 py-2 rounded-lg hover:bg-[#0000ff] hover:-translate-y-[1px] transition-all">
              Join Now
            </button>
          </>
        ) : (
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
                  <div className="px-3 pb-3 mb-2 border-b border-gray-50 text-left">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Signed in as</p>
                    <p className="text-sm font-bold text-gray-900 truncate">{user?.name}</p>
                    <p className="text-[10px] text-[#051094] font-bold uppercase tracking-tighter">{user?.role}</p>
                  </div>
                  
                  {user.role === 'customer' && (
                    <Link to="/customer-dashboard" className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors no-underline">
                      <MaterialIcon name="dashboard" size={18} />
                      My Dashboard
                    </Link>
                  )}

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
        )}
      </div>
    </nav>
  );
};

export default Header;
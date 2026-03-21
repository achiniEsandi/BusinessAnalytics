import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const DevTools = () => {
    const { mockLogin, logout, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    if (process.env.NODE_ENV === 'production') return null;

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
            >
                🛠️
            </button>

            {isOpen && (
                <div className="absolute bottom-14 right-0 w-64 bg-white/90 backdrop-blur-md rounded-xl shadow-2xl p-4 border border-gray-200">
                    <h3 className="text-sm font-bold text-gray-500 uppercase mb-3">Dev Tools</h3>

                    <div className="space-y-2 mb-4">
                        <p className="text-xs text-gray-400 font-semibold uppercase">Quick Login</p>
                        <button onClick={() => mockLogin('owner')} className="w-full text-left px-3 py-2 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium hover:bg-indigo-100 transition">
                            👤 Login as Owner
                        </button>
                        <button onClick={() => mockLogin('admin')} className="w-full text-left px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-100 transition">
                            🛡️ Login as Admin
                        </button>
                        <button onClick={() => mockLogin('customer')} className="w-full text-left px-3 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-medium hover:bg-green-100 transition">
                            🛍️ Login as Customer
                        </button>
                        <button onClick={logout} className="w-full text-left px-3 py-2 bg-red-50 text-red-700 rounded-lg text-sm font-medium hover:bg-red-100 transition">
                            🚪 Logout
                        </button>
                    </div>

                    <div className="space-y-2">
                        <p className="text-xs text-gray-400 font-semibold uppercase">Navigation</p>
                        <button onClick={() => navigate('/analytics')} className="w-full text-left px-3 py-1.5 hover:bg-gray-100 rounded text-sm text-gray-600">
                            📊 Analytics
                        </button>
                        <button onClick={() => navigate('/dashboard')} className="w-full text-left px-3 py-1.5 hover:bg-gray-100 rounded text-sm text-gray-600">
                            🏠 Owner Dashboard
                        </button>
                        <button onClick={() => navigate('/admin')} className="w-full text-left px-3 py-1.5 hover:bg-gray-100 rounded text-sm text-gray-600">
                            🏫 Admin Dashboard
                        </button>
                        <button onClick={() => navigate('/')} className="w-full text-left px-3 py-1.5 hover:bg-gray-100 rounded text-sm text-gray-600">
                            🚀 Landing Page
                        </button>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-100 text-xs text-center text-gray-400">
                        Current Role: <span className="font-bold text-gray-600">{user?.role || 'Guest'}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DevTools;

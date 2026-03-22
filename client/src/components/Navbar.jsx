import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 font-display">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <span className="text-xl font-extrabold tracking-tight text-primary">Hustle Hub</span>
                    </Link>

                    {/* Desktop Nav Links */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link className="text-sm font-bold text-slate-600 hover:text-primary transition-colors" to="/dashboard">Sell</Link>
                        <Link className="text-sm font-bold text-slate-600 hover:text-primary transition-colors" to="/my-orders">My Orders</Link>
                        <a className="text-sm font-bold text-slate-600 hover:text-primary transition-colors" href="#">Messages</a>

                        {/* Dev Access: Dashboards Dropdown */}
                        <div className="relative group">
                            <button className="text-sm font-bold text-slate-400 hover:text-primary transition-colors flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">construction</span>
                                DEV
                            </button>
                            <div className="absolute left-0 mt-2 w-48 bg-white border border-slate-100 rounded-xl shadow-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                <Link to="/admin" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary">Admin Panel</Link>
                                <Link to="/customer-dashboard" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary">Customer Dashboard</Link>
                                <Link to="/dashboard" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary">Owner Dashboard</Link>
                                <Link to="/analytics" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary">Analytics</Link>
                                <Link to="/my-orders" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary">Orders List</Link>
                                <Link to="/store" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary">Store URL (Shop)</Link>
                                <Link to="/store-editor" className="block px-4 py-2 text-sm font-bold text-primary hover:bg-primary/5">Storefront Editor</Link>
                            </div>
                        </div>
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <button className="p-2 rounded-full hover:bg-slate-100 transition-colors relative group">
                            <span className="material-symbols-outlined text-slate-600 group-hover:text-primary">notifications</span>
                            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                        <button className="p-2 rounded-full hover:bg-slate-100 transition-colors group">
                            <span className="material-symbols-outlined text-slate-600 group-hover:text-primary">shopping_cart</span>
                        </button>

                        {user ? (
                            <div className="flex items-center gap-3 pl-4 border-l border-slate-200 group relative">
                                <div className="text-right hidden sm:block">
                                    <p className="text-sm font-bold leading-none">{user.name}</p>
                                    <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">{user.role}</p>
                                </div>
                                <div className="h-9 w-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center overflow-hidden cursor-pointer hover:ring-2 ring-primary/20 transition-all">
                                    <span className="font-bold text-primary">{user.name.charAt(0)}</span>
                                </div>
                                {/* Logout Tooltip/Dropdown would go here */}
                                <button onClick={logout} className="p-1 hover:text-red-500 transition-colors">
                                    <span className="material-symbols-outlined text-sm">logout</span>
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center gap-3">
                                <Link to="/" className="text-sm font-bold text-slate-600 hover:text-primary">Login</Link>
                                <Link to="/register" className="px-5 py-2 bg-primary !text-white rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95">
                                    Sign Up
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

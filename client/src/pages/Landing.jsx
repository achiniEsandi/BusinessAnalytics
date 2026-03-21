import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="bg-white text-black antialiased font-display -mx-4 -my-8 sm:-mx-6 lg:-mx-8">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
                {/* Hero Search Section */}
                <section className="py-12 md:py-20 text-center max-w-4xl mx-auto">
                    <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 border border-primary/20 uppercase tracking-widest">
                        🚀 The Student Marketplace
                    </span>
                    <h1 className="text-4xl md:text-7xl font-black text-black mb-8 leading-tight">
                        Turn your <span className="text-primary italic">Campus Hustle</span> into a <span className="underline decoration-primary decoration-8 underline-offset-8">Business Empire</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
                        Hustle Hub is the exclusive platform for student entrepreneurs. Verify your ID, set up your shop, and reach thousands of peers instantly.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                        <Link to="/register" className="px-10 py-4 bg-primary !text-white rounded-2xl font-black text-xl shadow-xl shadow-primary/20 hover:scale-105 transition-all active:scale-95">
                            Start Selling Now
                        </Link>
                        <Link to="/login" className="px-10 py-4 bg-white text-black border-2 border-slate-200 rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all">
                            Browse Marketplace
                        </Link>
                    </div>

                    <div className="relative group max-w-2xl mx-auto">
                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                            <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary">search</span>
                        </div>
                        <input className="block w-full pl-14 pr-32 py-5 bg-white border border-slate-200 rounded-2xl shadow-2xl shadow-primary/5 focus:ring-2 focus:ring-primary text-lg placeholder-slate-400 outline-none" placeholder="Search textbooks, tech, food, and more..." type="text" />
                        <div className="absolute inset-y-2 right-2">
                            <button className="h-full px-8 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all">
                                Search
                            </button>
                        </div>
                    </div>
                </section>

                {/* Featured Categories */}
                <section className="mb-24">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold tracking-tight">Popular Categories</h2>
                        <Link className="text-primary font-semibold text-sm hover:underline" to="/login">View All</Link>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {[
                            { name: 'Textbooks', icon: 'menu_book', img: 'https://images.unsplash.com/photo-1544640808-32ca72ac7f67?auto=format&fit=crop&q=80&w=400' },
                            { name: 'Tech', icon: 'devices', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400' },
                            { name: 'Food', icon: 'restaurant', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=400' },
                            { name: 'Services', icon: 'design_services', img: 'https://images.unsplash.com/photo-1454165833772-d996d49510d1?auto=format&fit=crop&q=80&w=400' }
                        ].map((cat) => (
                            <div key={cat.name} className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-200">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                                <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={cat.img} alt={cat.name} />
                                <div className="absolute bottom-4 left-4 z-20">
                                    <span className="material-symbols-outlined text-white mb-2">{cat.icon}</span>
                                    <h3 className="text-white font-bold text-lg">{cat.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Feature Cards Section */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
                        <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 text-3xl">🎓</div>
                        <h3 className="text-xl font-bold text-black mb-4">Campus Verified</h3>
                        <p className="text-slate-600">Trusted community. Only verified students can sell, ensuring a safe and relatable marketplace.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-violet-50 rounded-full blur-2xl"></div>
                        <div className="w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center mb-6 text-3xl">📈</div>
                        <h3 className="text-xl font-bold text-black mb-4">Smart Analytics</h3>
                        <p className="text-slate-600">Track growth with professional dashboards, revenue charts, and AI-powered sales predictions.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-cyan-50 rounded-full blur-2xl"></div>
                        <div className="w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center mb-6 text-3xl">🛍️</div>
                        <h3 className="text-xl font-bold text-black mb-4">Custom Storefronts</h3>
                        <p className="text-slate-600">Build your brand with a dedicated store page. Showcase your products to the entire university.</p>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-primary rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-black mb-6">Join the Future of Campus Commerce</h2>
                        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                            Whether you're selling old textbooks or launching a startup, Hustle Hub is your launchpad.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/register" className="px-10 py-4 bg-white text-primary font-bold rounded-xl text-lg hover:shadow-2xl transition-all active:scale-95">
                                Create Your Account
                            </Link>
                            <Link to="/login" className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/40 !text-white font-bold rounded-xl text-lg hover:bg-white/20 transition-all">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    );
};

export default Landing;

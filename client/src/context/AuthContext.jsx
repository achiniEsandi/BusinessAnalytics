import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({ name: 'Guest', role: 'guest' });

    const mockLogin = (role) => {
        setUser({ name: `Mock ${role}`, role });
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, mockLogin, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;

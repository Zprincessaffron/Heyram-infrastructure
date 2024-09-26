import React, { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const login = async (email, otp) => {
        try {
            const response = await axios.post('/api/verify-otp', { email, otp });
            Cookies.set('token', response.data.token, { expires: 1 }); // Expires in 1 day
            setIsAuthenticated(true);
        } catch (error) {
            console.error(error);
            throw new Error('Invalid OTP');
        }
    };

    const logout = () => {
        Cookies.remove('token');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

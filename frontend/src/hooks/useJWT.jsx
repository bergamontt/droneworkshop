import { useState, useEffect, useRef } from 'react';
import { jwtService } from '../services/JWTService.jsx';
import { jwtDecode } from 'jwt-decode';

const isTokenExpired = (token) => {
    if (!token) return true;
    try {
        const { exp } = jwtDecode(token);
        return Date.now() >= exp * 1000;
    } catch {
        return true;
    }
};

const getUsernameFromToken = (token) => {
    if (!token) return null;
    try {
        const decoded = jwtDecode(token);
        return decoded.sub || null;
    } catch {
        return null;
    }
};

export const useJWT = () => {
    const getValidToken = () => {
        const t = jwtService.getToken();
        return isTokenExpired(t) ? null : t;
    };

    const [token, setTokenState] = useState(getValidToken);
    const [currentUsername, setCurrentUsername] = useState(() => getUsernameFromToken(token));
    const [isLoggedIn, setIsLoggedIn] = useState(() => !!token);
    const intervalRef = useRef(null);

    const updateStateFromToken = (newToken) => {
        const validToken = isTokenExpired(newToken) ? null : newToken;
        setTokenState(validToken);
        setCurrentUsername(getUsernameFromToken(validToken));
        setIsLoggedIn(!!validToken);
    };

    const setToken = (newToken) => {
        const validToken = isTokenExpired(newToken) ? null : newToken;
        jwtService.setToken(validToken);
        updateStateFromToken(validToken);
    };

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            const currentToken = jwtService.getToken();
            if (isTokenExpired(currentToken)) {
                setToken(currentToken);
            }
        }, 5000);

        return () => clearInterval(intervalRef.current);
    });

    useEffect(() => {
        const syncToken = () => {
            const latest = jwtService.getToken();
            updateStateFromToken(latest);
        };

        window.addEventListener('storage', syncToken);
        return () => window.removeEventListener('storage', syncToken);
    }, []);

    useEffect(() => {
        const observer = setInterval(() => {
            const current = jwtService.getToken();
            if (current !== token) {
                updateStateFromToken(current);
            }
        }, 200);

        return () => clearInterval(observer);
    }, [token]);

    return { token, currentUsername, isLoggedIn, setToken };
};

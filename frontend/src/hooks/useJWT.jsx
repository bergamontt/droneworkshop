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
    const [token, setTokenState] = useState(() => {
        const t = jwtService.getToken();
        return isTokenExpired(t) ? null : t;
    });

    const [currentUsername, setCurrentUsername] = useState(
        () => getUsernameFromToken(jwtService.getToken()));
    const [isLoggedIn, setIsLoggedIn] = useState(
        () => !isTokenExpired(jwtService.getToken()));

    const intervalRef = useRef(null);

    const updateStateFromToken = (newToken) => {
        const validToken = isTokenExpired(newToken) ? null : newToken;
        setTokenState(validToken);
        setCurrentUsername(getUsernameFromToken(validToken));
        setIsLoggedIn(!!validToken);
    };

    const setToken = (newToken) => {
        if (!newToken || isTokenExpired(newToken)) {
            jwtService.setToken(null);
        } else {
            jwtService.setToken(newToken);
        }
        updateStateFromToken(newToken);
    };

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            const currentToken = jwtService.getToken();
            if (isTokenExpired(currentToken)) {
                jwtService.setToken(null);
                updateStateFromToken(null);
            }
        }, 5000);

        return () => clearInterval(intervalRef.current);
    }, []);

    useEffect(() => {
        const syncToken = () => {
            const t = jwtService.getToken();
            updateStateFromToken(t);
        };

        window.addEventListener('storage', syncToken);
        return () => window.removeEventListener('storage', syncToken);
    }, []);

    return { token, currentUsername, isLoggedIn, setToken };
};

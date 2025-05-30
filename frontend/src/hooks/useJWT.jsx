import { useState, useEffect } from 'react';
import { jwtService } from "../services/JWTService.jsx"

export const useJWT = () => {
    const [token, setTokenState] = useState(jwtService.getToken());

    const setToken = (newToken) => {
        jwtService.setToken(newToken);
        setTokenState(jwtService.getToken());
    };

    const getToken = () => {
        const t = jwtService.getToken();
        if (t !== token) setTokenState(t);
        return t;
    };

    const isLoggedIn = () => {
        return getToken() !== null;
    };

    useEffect(() => {
        const syncToken = () => {
            setTokenState(jwtService.getToken());
        };

        window.addEventListener('storage', syncToken);
        return () => window.removeEventListener('storage', syncToken);
    }, []);

    return { token: getToken(), setToken, getToken, isLoggedIn };
};
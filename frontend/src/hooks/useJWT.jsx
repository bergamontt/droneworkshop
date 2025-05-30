import { useState, useEffect } from 'react';

export const useJWT = () => {
    const [token, setTokenState] = useState(() => {
        return localStorage.getItem('jwt') || null;
    });

    const setToken = (newToken) => {
        if (newToken) {
            localStorage.setItem('jwt', newToken);
            setTokenState(newToken);
        } else {
            localStorage.removeItem('jwt');
            setTokenState(null);
        }
    };

    const getToken = () => {
        return localStorage.getItem('jwt');
    };

    useEffect(() => {
        const syncToken = () => {
            setTokenState(localStorage.getItem('jwt'));
        };

        window.addEventListener('storage', syncToken);
        return () => window.removeEventListener('storage', syncToken);
    }, []);

    return { token, setToken, getToken };
}


const parseJWT = (token) => {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
            atob(base64)
                .split('')
                .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                .join('')
        );
        return JSON.parse(jsonPayload);
    } catch {
        return null;
    }
};

const isTokenExpired = (token) => {
    const payload = parseJWT(token);
    if (!payload || !payload.exp) return true;
    return Date.now() >= payload.exp * 1000;
};

export const jwtService = {
    getToken() {
        const token = localStorage.getItem('jwt');
        if (token && isTokenExpired(token)) {
            localStorage.removeItem('jwt');
            return null;
        }
        return token;
    },

    setToken(token) {
        if (token) {
            localStorage.setItem('jwt', token);
        } else {
            localStorage.removeItem('jwt');
        }
    },

    isLoggedIn() {
        return this.getToken() !== null;
    },

    getUsername() {
        const token = this.getToken();
        if (!token) return null;
        const payload = parseJWT(token);
        return payload?.username ?? null; 
    }

};
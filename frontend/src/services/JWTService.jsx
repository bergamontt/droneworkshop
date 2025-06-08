export const jwtService = {
    getToken() {
         return localStorage.getItem('jwt');
    },

    setToken(token) {
        if (token) {
            localStorage.setItem('jwt', token);
        } else {
            localStorage.removeItem('jwt');
        }
    }
};
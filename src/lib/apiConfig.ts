const API_BASE_URL = import.meta.env.VITE_PUBLIC_API_BASE_URL;

export const API_ENDPOINTS = {
    // Auth
    register: `${API_BASE_URL}/auth/register`,
    login: `${API_BASE_URL}/auth/login`,
    logout: `${API_BASE_URL}/auth/logout`,
    me: `${API_BASE_URL}/auth/me`,

    updateUser: (user_id: number) => `${API_BASE_URL}/users/update/${user_id}`,

    completeProfile: `${API_BASE_URL}/company/create`,
    getInfoByEmailPhone:`${API_BASE_URL}/company/get-by-email-phone`,

}
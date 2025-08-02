const baseAPI = 'https://api.example.com';
const apiVersion = 'v1';


// auth api url 
export const authAPI = `${baseAPI}/${apiVersion}/auth`;
export const signupAPI = `${authAPI}/signup`;
export const loginAPI = `${authAPI}/login`;
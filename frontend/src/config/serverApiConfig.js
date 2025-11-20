export const API_BASE_URL =`http://localhost:10000/api/`;
export const BASE_URL = `http://localhost:10000/`; 
export const WEBSITE_URL = 'https://erp-crm-we20.onrender.com/';
export const DOWNLOAD_BASE_URL =
  import.meta.env.PROD || import.meta.env.VITE_DEV_REMOTE
    ? import.meta.env.VITE_BACKEND_SERVER + 'download/'
    : 'http://localhost:10000/download/';
export const ACCESS_TOKEN_NAME = 'x-auth-token';

export const FILE_BASE_URL = import.meta.env.VITE_FILE_BASE_URL;


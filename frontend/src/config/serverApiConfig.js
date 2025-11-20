export const API_BASE_URL = `https://erp-crm-we20.onrender.com/api/`;
export const BASE_URL = `https://erp-crm-we20.onrender.com/`; 
export const WEBSITE_URL = 'https://erp-crm-we20.onrender.com/';
export const DOWNLOAD_BASE_URL =
  import.meta.env.PROD || import.meta.env.VITE_DEV_REMOTE
    ? import.meta.env.VITE_BACKEND_SERVER + 'download/'
    : 'https://erp-crm-we20.onrender.com/download/';
export const ACCESS_TOKEN_NAME = 'x-auth-token';

export const FILE_BASE_URL = import.meta.env.VITE_FILE_BASE_URL;


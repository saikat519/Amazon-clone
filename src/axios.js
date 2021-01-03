import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:5001/clone-ad8e1/us-central1/api" , // backend API (Cloud Function) Url
});

export default instance;

// firebase emulators:start  to get localhost address which i have used as baseUrl
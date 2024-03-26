import axios from 'axios';
import { getEnvVariables } from '../helpers';

const { VITE_API_URL, VITE_API_KEY} = getEnvVariables();

const gamesApi = axios.create({
    baseURL: `${VITE_API_URL}`,
    
    params:{
        key: VITE_API_KEY
    }
})

export default gamesApi;
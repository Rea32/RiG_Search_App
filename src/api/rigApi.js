import axios from "axios";
import { getEnvVariables } from "../helpers";


const { RIG_API_URL } = getEnvVariables();
// console.log(`${RIG_API_URL}`)
const rigApi = axios.create({
    baseURL: "http://localhost:3001/api"
})

export default rigApi;
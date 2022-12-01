import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';
const {VITE_DOG_API } = getEnvVariables();
const DogApi = axios.create({
    baseURL: VITE_DOG_API,
});

export default DogApi
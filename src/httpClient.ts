import axios, { AxiosInstance} from 'axios';
import Config  from './config.json';

let client: AxiosInstance;

client = axios.create({
    baseURL: `${Config.API_BASE.STAGING}`,
    headers: {
      Accept: 'application/json',
    },
});

export default client;

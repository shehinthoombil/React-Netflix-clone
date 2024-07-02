import axios from "axios";
import {baseUrl} from './Constants/Contstants'

const instance = axios.create({
    baseURL: baseUrl,
  });

  export default instance
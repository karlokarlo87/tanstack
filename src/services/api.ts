import axios from "axios";
import { SportType } from "../types/SportType";

const BASE_URL = "http://192.168.100.142:3333/";
const axiosInstance = axios.create({ baseURL: BASE_URL });
export const getSportTypes = async () => {
  return (await axiosInstance.get<SportType[]>("live/getSportTypes")).data.map(
    (sporttype) => sporttype
  );
};

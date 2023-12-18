import axios from "axios";

import { GetGames } from "../types/GetGames";
const BASE_URL = "http://192.168.100.142:3333/";
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getgetGames = async () => {
  return (await axiosInstance.get<GetGames[]>("live/getGames")).data.map(
    (games) => games
  );
};
export const getgetGame = async (id: number) => {
  return (await axiosInstance.get<GetGames[]>(`live/getGames/${id}`)).data;
};

export const getRelatedGames = async (id: number, sport: number) => {
  return (
    await axiosInstance.get<GetGames[]>(`live/getRelatedGames/${id}/${sport}`)
  ).data;
};

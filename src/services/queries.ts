import { useQuery } from "@tanstack/react-query";
import { getSportTypes } from "./api";
import {
  getgetGames,
  getgetGame,
  getRelatedGames,
  getGameInfo,
  getGameOdds,
} from "./apiGames";
export function useSportTypes() {
  return useQuery({
    queryKey: ["live"],
    queryFn: getSportTypes,
    staleTime: Infinity,
    //refetchInterval: 500,
    refetchOnWindowFocus: false,
  });
}

export function useGetGames() {
  return useQuery({
    queryKey: ["games"],
    queryFn: getgetGames,
    //refetchInterval: 5000,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
}

export function useGetGame(id: number) {
  return useQuery({
    queryKey: ["game", id],
    queryFn: () => getgetGame(id),
    //refetchInterval: 5000,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
}

export function useRelatedGames(id: number, sport: number) {
  return useQuery({
    queryKey: ["liveRelate", id],
    queryFn: () => getRelatedGames(id, sport),
    //refetchInterval: 5000,
    refetchOnWindowFocus: false,
  });
}

export function useGameInfo(id: number) {
  return useQuery({
    queryKey: ["info", id],
    queryFn: () => getGameInfo(id),
    //refetchInterval: 5000,
    refetchOnWindowFocus: false,
    //staleTime: Infinity,
  });
}
export function useGameOdds(id: number) {
  return useQuery({
    queryKey: ["odds", id],
    queryFn: () => getGameOdds(id),
    refetchInterval: 1000,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
}

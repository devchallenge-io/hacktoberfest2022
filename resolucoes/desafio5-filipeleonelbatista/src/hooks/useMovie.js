import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

export function useMovie() {
  const value = useContext(MovieContext);
  return value;
}

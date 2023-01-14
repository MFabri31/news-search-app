import { useContext } from "react";
import { NewsContext } from "../context/newsContext";

export const useNewsContext = () => useContext(NewsContext);

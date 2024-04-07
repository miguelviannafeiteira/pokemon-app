import axios from "axios";
import { Pokemon } from "../types";

export async function getPokemons(urls: string[]): Promise<Pokemon[]> {
    const response = await axios.all(urls.map((url) => axios.get<Pokemon>(url)))
    const data: Pokemon[] = response.map(response => response.data);

    return data
}
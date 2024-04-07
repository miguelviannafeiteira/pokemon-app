/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useMemo, useState } from "react";
import { Input } from "../Input";
import { useDispatch } from "react-redux";
import { GetPokemonsUseCase } from "../../useCases/GetPokemonsUseCase";
import { SearchPokemonUseCase } from "../../useCases/SearchPokemonUseCase";

export function Header() {
    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();
    const getPokemons = useMemo(() => new GetPokemonsUseCase(dispatch), [])
    const searchPokemon = useMemo(() => new SearchPokemonUseCase(dispatch, getPokemons), [])


    const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        await searchPokemon.execute(event.target.value)
    };

    return (
        <header className="w-full h-20 bg-[#d3d3d3] flex items-center">
            <Input onChange={handleInputChange} value={inputValue} />
        </header>
    )
}
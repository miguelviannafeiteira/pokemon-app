/* eslint-disable react-hooks/exhaustive-deps */
import { Pagination } from "@mui/material";
import { ChangeEvent, useEffect, useMemo, useState } from "react"

import { RootState } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemonsUseCase } from "./useCases/GetPokemonsUseCase";
import { getPokemonTypeBackgroundColor, getPokemonTypeColor } from "./types/pokemonTypes";

function App() {
  const [currentPage, setCurrentPage] = useState(1)

  const dispatch = useDispatch();
  const getPokemons = useMemo(() => new GetPokemonsUseCase(dispatch), [])

  const loading = useSelector((state: RootState) => state.pokemonsList?.loading);
  const pokemons = useSelector((state: RootState) => state.pokemonsList.pokemonsList);
  const total = useSelector((state: RootState) => state.pokemonsUrlsData.pokemonsUrls.count);

  const changePage = (event: ChangeEvent<unknown>, value: number) => {
    getPokemons.execute(value)
    setCurrentPage(value);
  };

  useEffect(() => {
    getPokemons.execute()
  }, [])

  return (
    <div className="w-screen">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full mt-28">
        {pokemons?.map((pokemon) => (
          <div
            key={pokemon.name}
            style={{ backgroundColor: getPokemonTypeBackgroundColor(pokemon.types[0].type.name) }}
            className={`justify-self-center flex w-[200px] p-5 rounded-2xl shadow-md cursor-pointer`}
          >
            <div>
              <p className="text-[#fff] font-semibold capitalize text-lg">{pokemon?.name}</p>
              {pokemon.types.map((type) => (
                <span
                  className="p-1 rounded-3xl grid mt-2 text-center capitalize text-sm"
                  style={{ backgroundColor: getPokemonTypeColor(pokemon.types[0].type.name) }}
                >
                  {type.type.name}</span>
              ))}
            </div>

            <img className="justify-self-end" src={pokemon.sprites.front_default} alt="" />
          </div>
        ))}

      </div>
        <Pagination
          count={Math.ceil(total / 20)}
          page={currentPage}
          onChange={changePage}
          className="w-max mx-auto mt-10"
          variant="outlined"
          shape="rounded"
        />
    </div >
  )
}

export default App

{/* <div>
  {pokemon.abilities.map((ability) => (
    <span>{ability.ability.name}</span>
  ))}
</div>
<div>
  {pokemon.stats.map((state) => (
    <>
      <span>{state.stat.name}</span>
      <span>{state.base_stat}</span>
    </>
  ))}
</div> */}
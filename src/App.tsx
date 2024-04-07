/* eslint-disable react-hooks/exhaustive-deps */
import { Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react"

import { RootState } from "./types";
import { Modal } from "./components/Modal";
import { useModal } from "./hooks/useModal";
import { PokemonCard } from "./components/PokemonCard";
import { ShimmerEffect } from "./components/ShimmerEffect";
import { PokemonDetails } from "./components/PokemonDetails";
import { GetPokemonsUseCase } from "./useCases/GetPokemonsUseCase";

function App() {
  const modalRef = useRef<HTMLDivElement>(null)
  const [currentPage, setCurrentPage] = useState(1)

  const dispatch = useDispatch();
  const getPokemons = useMemo(() => new GetPokemonsUseCase(dispatch), [])
  const { outSideClick, showModal, isModalVisible, hideModal } = useModal()

  const loading = useSelector((state: RootState) => state.pokemonsList.loading);
  const pokemons = useSelector((state: RootState) => state.pokemonsList.pokemonsList);
  const pokemonDetails = useSelector((state: RootState) => state.pokemonDetails.pokemon);
  const total = useSelector((state: RootState) => state.pokemonsUrlsData.pokemonsUrls.count);

  const changePage = (_event: ChangeEvent<unknown>, value: number) => {
    getPokemons.execute(value)
    setCurrentPage(value);
  };

  useEffect(() => {
    getPokemons.execute()
  }, [])

  useEffect(() => {
    outSideClick(modalRef)
  })

  return (
    <div className="w-screen">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full mt-28">
        {pokemons?.map((pokemon, index) => (
          <ShimmerEffect isLoading={loading} className="w-[230px] h-[150px] rounded-lg" key={pokemon.id + index}>
            <PokemonCard pokemon={pokemon} showModal={showModal} key={pokemon.id + index} />
          </ShimmerEffect>
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

      <Modal isVisible={isModalVisible} modalRef={modalRef}>
        <PokemonDetails pokemon={pokemonDetails} closeModal={hideModal} />
      </Modal>
    </div >
  )
}

export default App

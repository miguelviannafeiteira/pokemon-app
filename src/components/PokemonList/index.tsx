import { useDispatch, useSelector } from "react-redux";
import { ShimmerEffect } from "../ShimmerEffect";
import { PokemonCard } from "../PokemonCard";
import { PokemonNotFound } from "../PokemonNotFound";
import { Pagination } from "@mui/material";
import { ChangeEvent, useEffect, useMemo, useRef } from "react";
import { GetPokemonsUseCase } from "../../useCases/GetPokemonsUseCase";
import { RootState } from "../../types";
import { changePage } from "../../redux/paginationActions";
import { Modal } from "../Modal";
import { PokemonDetails } from "../PokemonDetails";
import { useModal } from "../../hooks/useModal";

export function PokemonList() {
    const dispatch = useDispatch();
    const modalRef = useRef<HTMLDivElement>(null)
    const getPokemons = useMemo(() => new GetPokemonsUseCase(dispatch), [])
    const { outSideClick, showModal, isModalVisible, hideModal } = useModal()

    const pokemonDetails = useSelector((state: RootState) => state.pokemonDetails.pokemon);
    const loading = useSelector((state: RootState) => state.pokemonsList.loading);
    const currentPage = useSelector((state: RootState) => state.currentPage.value);
    const pokemons = useSelector((state: RootState) => state.pokemonsList.pokemonsList);
    const total = useSelector((state: RootState) => state.pokemonsUrlsData.pokemonsUrls.count);

    const handleChangePage = (_event: ChangeEvent<unknown>, value: number) => {
        getPokemons.execute(value)
        dispatch(changePage(value))
    };

    useEffect(() => {
        outSideClick(modalRef)
    })

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full mt-10">
                {pokemons.length > 0 ? (pokemons?.map((pokemon, index) => (
                    <ShimmerEffect isLoading={loading} className="w-[230px] h-[150px] rounded-lg" key={pokemon.id + index}>
                        <PokemonCard pokemon={pokemon} showModal={showModal} key={pokemon.id + index} />
                    </ShimmerEffect>
                ))) : (<PokemonNotFound />)}

            </div>

            {total > 20 &&
                <Pagination
                    count={Math.ceil(total / 20)}
                    page={currentPage}
                    onChange={handleChangePage}
                    className="w-max mx-auto mt-10"
                    variant="outlined"
                    shape="rounded"
                />
            }

            <Modal isVisible={isModalVisible} modalRef={modalRef}>
                <PokemonDetails pokemon={pokemonDetails} closeModal={hideModal} />
            </Modal>
        </>
    )
}
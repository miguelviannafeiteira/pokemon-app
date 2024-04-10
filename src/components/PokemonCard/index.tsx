import { Pokemon } from "../../types"
import { getPokemonTypeBackgroundColor, getPokemonTypeColor } from "../../types/pokemonTypes"

type Props = {
    pokemon: Pokemon
    showModal(pokemon: Pokemon): void
}

export function PokemonCard({ pokemon, showModal }: Props) {
    return (
        <div
            data-testid="pokemon-card"
            onClick={() => showModal(pokemon)}
            style={{ backgroundColor: getPokemonTypeBackgroundColor(pokemon.types[0].type.name) }}
            className="justify-self-center flex justify-between w-[230px] p-5 rounded-2xl shadow-md cursor-pointer hover:scale-110"
        >
            <div>
                <p className="text-[#fff] font-semibold capitalize text-lg">
                    {pokemon?.name}
                </p>

                {pokemon.types.map((type, index) => (
                    <span
                        key={index}
                        className="p-1 rounded-3xl grid mt-2 text-center capitalize text-sm font-semibold"
                        style={{ backgroundColor: getPokemonTypeColor(pokemon.types[0].type.name) }}
                    >
                        {type.type.name}
                    </span>
                ))}
            </div>

            <img className="justify-self-end" src={pokemon.sprites.front_default} alt="" />
        </div>
    )
}
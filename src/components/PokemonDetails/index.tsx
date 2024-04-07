import { ChangeEvent, useState } from "react";
import { TabContext, TabPanel } from '@mui/lab'
import { Pokemon } from "../../types";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Box, Tab, Tabs } from "@mui/material";
import { LabelValueComponent } from "../LabelValueComponent";
import { getPokemonTypeBackgroundColor, getPokemonTypeColor } from "../../types/pokemonTypes";

type Props = {
    pokemon: Pokemon
    closeModal(): void
}

export function PokemonDetails({ pokemon, closeModal }: Props) {
    const [selectedTab, setSelectedTab] = useState('data');

    const handleTabChange = (_event: ChangeEvent<unknown>, tabValue: string) => {
        setSelectedTab(tabValue);
    };

    return (
        <div className=" md:w-[300px] lg:w-[500px]">
            <header
                className="rounded-t-xl p-5 grid"
                style={{ background: getPokemonTypeBackgroundColor(pokemon.types[0].type.name) }}
            >
                <FaArrowLeftLong className="cursor-pointer" onClick={closeModal} fill="#fff" />

                <div className="flex justify-between items-center mt-5 text-white">
                    <div>
                        <h2 className="font-bold capitalize text-2xl">{pokemon.name}</h2>
                        <div className="flex gap-1">
                            {pokemon.types.map((type) => (
                                <span
                                    style={{ backgroundColor: getPokemonTypeColor(pokemon.types[0].type.name) }}
                                    className="py-1 px-3 rounded-3xl grid mt-2 text-center capitalize text-sm font-semibold"
                                >
                                    {type.type.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <span className="font-bold text-2xl">#{pokemon.id}</span>
                </div>
                <img className="justify-self-center" src={pokemon.sprites.front_default} width={200} height={200} alt="" />
            </header>

            <div className=" bg-white py-5 rounded-xl mt-[-10px] h-[340px]">
                <TabContext value={selectedTab}>
                    <Box>
                        <Tabs value={selectedTab} onChange={handleTabChange} aria-label="Pokemon Details Tabs">
                            <Tab label="Dados" value="data" />
                            <Tab label="Sobre" value="about" />
                        </Tabs>

                        <TabPanel value="data">
                            <div>
                                {pokemon.stats.map((state) => (
                                    <LabelValueComponent key={state.stat.name} label={state.stat.name} value={state.base_stat} />
                                ))}
                            </div>
                        </TabPanel>

                        <TabPanel value="about">
                            <div className="flex gap-2 justify-between pb-1 border-b-[1px] border-b-[#f4f4f4f4]">

                                <span className="text-[#C4C6C9] font-bold">Habilidades</span>
                                <div className="flex gap-2">
                                    {pokemon.abilities.map((ability) => (
                                        <p className="text-[#222222] font-bold">{ability.ability.name}</p>
                                    ))}
                                </div>

                            </div>
                            <LabelValueComponent label="Peso" value={pokemon.weight} />
                            <LabelValueComponent label="Altura" value={pokemon.height} />
                            <LabelValueComponent label="Experiência Base" value={pokemon.base_experience} />
                            {/* // <LabelValueComponent key={ability.ability.name} label={"Habilidades"} value={ability.ability.name} /> */}
                        </TabPanel>
                    </Box>
                </TabContext>
            </div>
        </div>
    )
}
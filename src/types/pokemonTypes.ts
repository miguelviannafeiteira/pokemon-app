type PokemonTypeColorMap = {
    [key in string]: string;
};

const typeColorMap: PokemonTypeColorMap = {
    "normal": "#C7C7C7",
    "fire": "#F88C8C",
    "water": "#8FD1FE",
    "electric": "#FFE580",
    "grass": "#61E0C9",
    "ice": "#BFE9E9",
    "fighting": "#E08C82",
    "poison": "#C492C4",
    "ground": "#E8D4A2",
    "flying": "#B1A7FF",
    "psychic": "#FFB3C5",
    "bug": "#C6D187",
    "rock": "#D5C2A4",
    "ghost": "#A796B9",
    "dragon": "#A296FF",
    "dark": "#A89A8C",
    "steel": "#CBCBD9",
    "fairy": "#F4CCCC",
};

export function getPokemonTypeColor(type: string): string {
    if (type in typeColorMap) {
        return typeColorMap[type];
    } else {
        return "#FFFFFF";
    }
}

export const typeBackgroundColorMap: PokemonTypeColorMap = {
    "normal": "#A8A878",
    "fire": "#FB6C6C",
    "water": "#75BBFD",
    "electric": "#FFD86F",
    "grass": "#48D0B0",
    "ice": "#98D8D8",
    "fighting": "#C03028",
    "poison": "#A040A0",
    "ground": "#E0C068",
    "flying": "#A890F0",
    "psychic": "#F85888",
    "bug": "#A8B820",
    "rock": "#B8A038",
    "ghost": "#705898",
    "dragon": "#7038F8",
    "dark": "#705848",
    "steel": "#B8B8D0",
    "fairy": "#EE99AC",
};

export function getPokemonTypeBackgroundColor(type: string): string {
    if (type in typeBackgroundColorMap) {
        return typeBackgroundColorMap[type];
    } else {
        return "#FFFFFF";
    }
}
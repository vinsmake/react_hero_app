import { heroes } from "../../data/heroesData"

/* If the hero with the id exist, returns, else, indefined. */
export const getHeroById = (id) => {
    return heroes.find(hero => hero.id === id);
}
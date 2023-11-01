import {heroes} from '../../data/heroesData'

export const getHeroesByName = (name = '') => {

    if (name.length === 0) return [];

    return heroes.filter(
        hero => hero.superhero.toLocaleLowerCase().includes(name)
    );
}
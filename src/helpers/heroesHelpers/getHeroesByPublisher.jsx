import { heroes } from "../../data/heroesData";

export const getHeroesByPublisher = (publisher) => {
    /* available publishers */
    const publishersList = ['DC Comics', 'Marvel Comics'];

    /* if the publisherList doesn't include the obtained publisher, throw an error */
    if (!publishersList.includes(publisher)) {
        throw new Error(`${publisher} is not a valid publisher`);
    }

    /* If everything is ok, then return a filtered heroes list */
    return heroes.filter(heroe => heroe.publisher === publisher);
}
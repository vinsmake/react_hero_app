import { getHeroesByPublisher } from "../../helpers/heroesHelpers/GetHeroesByPublisher"
import { HeroCard } from "./HeroCard";

export const HeroesList = ({publisher}) => {

    const heroesList = getHeroesByPublisher(publisher);

    return (
        <>
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroesList.map(hero => (
                    /* hero.id as key, with ... we spread the rest */
                    <HeroCard key={hero.id} {...hero}/>
                ))

            }
            </div>
        </>
    )
}
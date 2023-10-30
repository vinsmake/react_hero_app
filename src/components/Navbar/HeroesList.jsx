import { getHeroesByPublisher } from "../../helpers/heroesHelpers/GetHeroesByPublisher"

export const HeroesList = ({publisher}) => {

    const heroesList = getHeroesByPublisher(publisher);

    return (
        <>
        <ul>
            {
                heroesList.map(hero => (
                    <li key={hero.id}>
                        {hero.superhero}
                    </li>
                ))

            }
            </ul>
        </>
    )
}
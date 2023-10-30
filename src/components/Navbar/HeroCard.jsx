import { Link } from "react-router-dom"

export const HeroCard = ({
    id,
superhero,
publisher,
alter_ego,
first_appearance,
characters,
}) => {

    const heroSrc = `src/assets/img/heroes/${id}.jpg`

    return (
    <>
        <article className="col">
            <div className="card">

                <div className="row no-glutters">

                    <div className="col-4">
                        <img src={heroSrc} className="card-img" alt={superhero}/>
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">
                                {superhero}
                            </h5>
                            <p className="card-text">{alter_ego}</p>
                            {
                                /* if alter ego is not characters */ /* && = then */ /* create this code */
                                (alter_ego != characters) && (<p className="card-text">Other characters: {characters}</p>)
                            }
                            <p className="card-text text-muted">{first_appearance}</p>
                            <Link to={`/hero/${id}`}>More</Link>
                        </div>
                    </div>
                </div>

            </div>
        </article>
    </>
    )
}
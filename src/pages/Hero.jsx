import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/heroesHelpers/getHeroById";
import { useMemo } from "react";

export const Hero = () => {

    const {id} = useParams();

    /* Only renderizes again when id changes */
    const hero = useMemo(() => getHeroById(id), [id])

    if (!hero) {
        return <Navigate to='/search'/>
    }

    const navigate = useNavigate();
    const onNavigateBack = () => {
        navigate(-1)
    }

    return (
    <>
    <div className="row mt-5">
        <div className="col-4 animate__animated  animate__bounceInLeft">
            <img
            src={`./heroes/${hero.id}.jpg`}
            alt=""
            className="img-thumbnail"
            />
        </div>

        <div className="col-8 animate__animated  animate__bounceInRight">
            <h3>{hero.superhero}</h3>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <b>Alter ego:</b> {hero.alter_ego}
                </li>
                <li className="list-group-item">
                    <b>Publisher:</b> {hero.publisher}
                </li>
                <li className="list-group-item">
                    <b>First appearance:</b> {hero.first_appearance}
                </li>
                <li className="list-group-item">
                    <b>Alter ego:</b> {hero.alter_ego}
                </li>
            </ul>

            <h5 className="mt-5">Characters</h5>
            <p>{hero.characters}</p>

            <button onClick={onNavigateBack} className="btn btn-primary">
                Back
            </button>
        </div>
    </div>
        
    </>
    )
}
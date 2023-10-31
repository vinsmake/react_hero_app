import { useLocation, useNavigate } from "react-router-dom";
import { HeroCard } from "../components/HeroCard"
import { useForm } from "../hooks/useForm"

export const Search = () => {

    /* navigation */
    const navigate = useNavigate();
    const location = useLocation();
    
    /* Form */
    const {searchText, onInputChange} = useForm({
        searchText: ''
    });

    const onSearchSubmit = (e) => {
        e.preventDefault();

        /* This cleans the text */
        searchText.toLowerCase().trim()
        /* this converts the text to a url request */
        navigate(`?q=${searchText.toLowerCase().trim()}`)
    }

    return (
        <>
            <h1>Search</h1>
            <hr />

            <div className="row">

                {/* LEFT */}
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={onSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Search a hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onInputChange}
                        />

                        <button className="btn btn-outline-primary mt-1">
                            Search
                        </button>
                    </form>
                </div>

                {/* RIGHT */}
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    <div className="alert alert-primary animate__animated animate__fadeIn" >
                        Search a hero
                    </div>

                    <div className="alert alert-danger animate__animated animate__fadeIn" >
                        No hero with <b></b>
                    </div>

                </div>
            </div>


        </>
    )
}
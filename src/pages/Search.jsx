import { useLocation, useNavigate } from "react-router-dom";
import { HeroCard } from "../components/HeroCard"
import { useForm } from "../hooks/useForm"
import queryString from "query-string";

export const Search = () => {

    /* navigation */
    const navigate = useNavigate();
    const location = useLocation();

    /* Query-String package */
    /* this separates the query in diferent parameters. */
    /* we can get only the q by using 'q', provided by query-string rules */
    const {q = ''} = queryString.parse(location.search);

    
    /* Form */
    /* Initial state of the form, we take this 2 data and use it in the useForm custom hook */
    const {searchText, onInputChange} = useForm({
        /* '' as default */
        searchText: ''
    });

    /* we create this function to navigate to the expected url */
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
                        No hero with <b>{q}</b>
                    </div>

                </div>
            </div>


        </>
    )
}
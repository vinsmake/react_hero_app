import { HeroCard } from "../components/HeroCard"

export const Search = () => {
    return (
        <>
            <h1>Search</h1>
            <hr />

            <div className="row">

                {/* LEFT */}
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form>
                        <input
                            type="text"
                            placeholder="Search a hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
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
import React from "react";
import ProtoTypes from "prop-types";
import "./Movie.css";

function Movie({id, year, title, summary, poster, genres}) {
    return <div className="movies">
        <img src={poster} alt={title} />
        <div className="movies__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="genres">
                {genres.map((genre, index) => (
                    <li key={index} className="genres__genre">{genre}</li>
                ))}
            </ul>
            <p className="movie__summary">{summary}</p>
        </div>
    </div>;
}

Movie.prototype = {
    id: ProtoTypes.number.isRequired,
    year: ProtoTypes.number.isRequired,
    title: ProtoTypes.string.isRequired,
    summary: ProtoTypes.string.isRequired,
    poster: ProtoTypes.string.isRequired,
    genres: ProtoTypes.arrayOf(ProtoTypes.string).isRequired
}

export default Movie;
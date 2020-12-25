import React from "react";
import ProtoTypes from "prop-types";
import "./Movie.css";

function Movie({id, year, title, summary, poster}) {
    return <div class="movies">
        <img src={poster} alt={title} />
        <div class="movies__data">
            <h3 class="movie__title">{title}</h3>
            <h5 class="movie__year">{year}</h5>
            <p clas="movie__summary">{summary}</p>
        </div>
    </div>;
}

Movie.prototype = {
    id: ProtoTypes.number.isRequired,
    year: ProtoTypes.number.isRequired,
    title: ProtoTypes.string.isRequired,
    summary: ProtoTypes.string.isRequired,
    poster: ProtoTypes.string.isRequired
}

export default Movie;
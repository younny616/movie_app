import React from "react";
import ProtoTypes from "prop-types";

function Movie({id, year, title, summary, poster}) {
    return <h5>{title}</h5>
}

Movie.prototype = {
    id: ProtoTypes.number.isRequired,
    year: ProtoTypes.number.isRequired,
    title: ProtoTypes.string.isRequired,
    summary: ProtoTypes.string.isRequired,
    poster: ProtoTypes.string.isRequired
}

export default Movie;
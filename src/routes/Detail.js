import React from "react";

class Detail extends React.Component{
    componentDidMount() {
        const { location, history } = this.props;
        if(location.state === undefined) {
            history.push("/");
        }
        console.log(location.state);
    }
    render() {
        const { location } = this.props;
        return (
            <div className="movies">
                <div className="movie movie__detail">
                    <div className="movie__data">
                        <h3 className="movie__title">{location.state.title}</h3>
                        <h5 className="movie__year">{location.state.year}</h5>
                        <p className="movie__summary">{location.state.summary}</p>
                    </div>
                </div>
            </div>
            
            
        )
    }
}
export default Detail;
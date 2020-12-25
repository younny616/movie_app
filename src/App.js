import React from "react";
import PropTypes from "prop-types";

// data 시뮬레이션
const foodILike = [
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 4.8
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 5.5
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 4.7
  }
];

// Food(props) or Food(props.fav) or Food({fav})
function Food({name, picture, rating}) {
  return(
    <div>
      <h2>I Like {name}</h2>
      <div>{rating}/5.0</div>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.prototype = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div>
      <h1>hello</h1>
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />)}
    </div>
  );
}

export default App;

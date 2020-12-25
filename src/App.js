import React from 'react';

// Food(props) or Food(props.fav) or Food({fav})
function Food({fav}) {
return <h3>{fav}</h3>
}

function App() {
  return (
    <div>
      <h1>hello</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="samgiopsal" />
    </div>
  );
}

export default App;

import React from "react";
import PropTypes from "prop-types";

class App extends React.Component{
  // 내가 바꾸려는 데이터를 state안에 넣는다.
  state = {
    count: 0
  }
  add = () => {
    // setState 를 호출하면 react는 state를 refresh하고 render function을 호출한다.
    // this.setState({ count: this.state.count +1 }); 이 방법은 추천하지않음. react가 똑똑해서 허락해준거뿐임
    // this.setState(current => ({ count: current.count + 1 })); 이 방법이 state를 set 할때, react에서 외부의 상태에 의존하지 않는 베스트 방법
    this.setState(current => ({ count: current.count + 1 }));
  }
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }))
  }
  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;

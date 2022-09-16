import { render } from "@testing-library/react";
import React from "react";

//state는 동적 데이터를 다룰때 사용하는 react 요소

// 함수 컴포넌트
/*function App() {
  return <div>함수 컴포넌트</div>;
}*/

// 클래스 컴포넌트
/*class App extends React.Component {
  render() {
    return <div>클래스 컴포넌트</div>;
  }
}*/

class App extends React.Component {
  constructor(props) {
    super(props); // 부모 생성자 호출
    this.state = {
      count: 999,
    };
  }

  plusFn = () => {
    // this.setState({ count: this.state.count + 1 });
    this.setState(function (state) {
      return { count: state.count + 1, test: 0 };
    });
  };
  minesFn = () => {
    // this.setState({ count: this.state.count - 1 });
    this.setState(function (state) {
      return { count: state.count - 1 };
    });
  };

  render() {
    return (
      <div>
        <h1>카운터 : {this.state.count}</h1>
        <button onClick={this.plusFn}>+1</button>{" "}
        <button onClick={this.minesFn}>-1</button>
      </div>
    );
  }
}

export default App;

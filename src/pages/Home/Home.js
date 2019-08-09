import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  _handleClick() {
    this.setState({
      count: ++this.state.count
    });
  }

  render() {
    return (
      <div>
        this is home1211112~
        <p>当前记数值为：{this.state.count}</p>
        <button onClick={() => this._handleClick()}>加加</button>
      </div>
    );
  }
}

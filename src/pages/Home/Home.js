import React, { Component } from "react";
import { resolve } from "path";
import { rejects } from "assert";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  testPromise(str) {
    return new Promise((resolve, injected) => {
      if (str) {
        resolve(str);
      }
      injected("not a null~");
    });
  }
  _handleClick() {
    this.testPromise("haha")
      .then(res => {
        console.log("haha", res);
      })
      .catch(err => {
        console.log("err", err);
      });
    console.log(["a", "b"].includes("a"));
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

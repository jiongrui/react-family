import React, { Component } from "react";
import "./Home.scss";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log("submit");
  }

  testPromise(str) {
    return new Promise((resolve, rejected) => {
      if (str) {
        resolve(str);
      }
      rejected("not a null~");
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
        <div className="rate-box">
          <div className="rate-content">
            <input type="radio" name="rate" />
            <input type="radio" name="rate" />
            <input type="radio" name="rate" />
            <input type="radio" name="rate" />
            <input type="radio" name="rate" />
          </div>
        </div>
        <div className="form-box">
          <input type="text" pattern="^1[3-9]\d{9}" required />
          <input type="text" pattern="\d{4}" required />
          <button onClick={this.handleSubmit} />
        </div>
        <div className="padding">说啥呢</div>
        <div className="move">
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className="chart" />
      </div>
    );
  }
}

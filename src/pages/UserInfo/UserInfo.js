import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserInfo } from "../../redux/actions/userInfo";

import "./UserInfo.css";

class UserInfo extends Component {
  render() {
    const { isLoading, userInfo, errorMsg } = this.props.userInfo;
    return (
      <div>
        {isLoading ? (
          "信息请求中.。。。222...."
        ) : errorMsg ? (
          errorMsg
        ) : (
          <div>
            <p>用户信息：</p>
            <p>用户姓名：{userInfo.name}</p>
            <p>介绍：{userInfo.intro}</p>
          </div>
        )}
        <button
          className="btn-userInfo"
          onClick={() => this.props.getUserInfo()}
        >
          请求用户信息
        </button>
      </div>
    );
  }
}

export default connect(
  state => ({ userInfo: state.userInfo }),
  { getUserInfo }
)(UserInfo);

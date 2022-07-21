import React, { Component } from "react";

export default class Header extends Component {
    render() {
      return (
        
      <div className="header">
      <div className="menu-circle" />
      <div className="header-menu">
        <a className="menu-link is-active" href="#">主页</a>
        <a className="menu-link notify" href="#">消息</a>
        <a className="menu-link" href="#">数据市场</a>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      
      <div className="header-profile">
        <a href="https://www.peopledata.org.cn/" target="_blank">
          <img className="profile-img" src="./assets/papaya.png" alt="papaya" />
        </a>
      </div>
    </div>
  );
 }
};
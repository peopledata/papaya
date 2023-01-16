import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import Avatar, { genConfig } from "react-nice-avatar";
import "./Header.scss";

const Header = () => {
  const config = genConfig("hi@dapi.to");

  return (
    <div className="header">
      <div className="menu-circle" />
      <div className="header-menu">
        <Link key="main" className="menu-link " to="/">
          主页
        </Link>
        <Link key="msg" className="menu-link " to="#">
          消息
        </Link>
        <Link key="market" className="menu-link" to="/market">
          数据市场
        </Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>

      <div className="header-profile">
        <Avatar className="profile-img" {...config} />
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { Outlet, Link } from "react-router-dom";
import BaseLayout from "./BaseLayout";
import "./main.css";

export default function MainLayout() {
  return (
    <BaseLayout>
      <div>
        <nav className="navbar">
          <div className="navbar-logo">
            <h1>NorthStar</h1>
          </div>
          <ul className="navbar-links">
            <li>
              <Link to="/">
                <h1>Home</h1>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <h1>About</h1>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <h1>Contact US</h1>
              </Link>
            </li>
          </ul>
          <div className="navbar-icons">
            <a href="/profile" className="icon user-icon">
              <i className="fas fa-user" />
            </a>
            <a href="/menu" className="icon menu-icon">
              <i className="fas fa-bars" />
            </a>
          </div>
        </nav>
      </div>
      <Outlet />
    </BaseLayout>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import logo from "./image/logopng.png";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand nav-link logo">
            <img src={logo} className="logoImg" height={55} width={60} />
            Zi Recipe-Zone
          </a>
          <div className>
            <ul className="nav justify-content-center">
              <li className="nav-item ">
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/Recipe"} className="nav-link">
                  Meal
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/SignUp"} className="nav-link">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

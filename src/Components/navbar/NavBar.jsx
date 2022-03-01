import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const handleLogout = () => {
    // TODO: por hacer
    console.log("Logout");
  };
  return (
    <nav className="p-2 navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Heroes App
      </Link>
      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({isActive}) =>
              "nav-item nav-link" + (isActive ? " active" : " ")
            }
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link" + (isActive ? " active" : "")
            }
            to="/dc"
          >
            DC
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-warning ">Luis</span>
          <button
            className="nav-item nav-link btn"
            onClick={handleLogout}
            to="/login"
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
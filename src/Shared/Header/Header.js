import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const menuItem = (
    <>
      <Link to="/" className="mr-4 btn btn-ghost">
        Home
      </Link>
      {user?.email ? (
        <>
          <Link to="/orders" className="mr-4 btn btn-ghost">
            Orders
          </Link>
          <Link to="" className="mr-4 ">
            <button onClick={handleLogout} className="btn btn-ghost">
              Log out
            </button>
          </Link>
        </>
      ) : (
        <Link to="/login" className="btn btn-ghost ">
          Login
        </Link>
      )}
    </>
  );
  return (
    <div className="navbar h-28 bg-base-100 pt-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <Link className="text-xl">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItem}</ul>
      </div>
      <div className="navbar-end">
        <span className="mr-5">{user?.uid && user?.email}</span>
        <button className="btn btn-primary btn-outline">Appointment</button>
      </div>
    </div>
  );
};

export default Header;

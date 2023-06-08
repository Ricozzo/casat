/* eslint-disable no-unused-vars */
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import QueerLink from "../../assets/logosite.png"
import {AuthContext} from "../../Context/auth.context"

function Navbar() {
  const [showOptions, setShowOptions] = useState(false);
  const {user, logoutUser, isLoggedIn} = useContext(AuthContext)

  const navigate = useNavigate()

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <nav className="navbar">
      <a href="/" className="logoNav">
        <img src={QueerLink} alt="Bootstrap" width="35" height="35" />
      </a>
      <div className="options">
        <Link to="/">
          <button className="buttonNav">Home</button>
        </Link>
        {isLoggedIn ? (
          <>
            <Link to="/events">
              <button className="buttonNav">Events</button>
            </Link>
            <button
              className="buttonNav"
              onClick={() => {
                logoutUser();
                navigate("/");
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="buttonNav">Login</button>
            </Link>
            <Link to="/signup">
              <button className="buttonNav">Signup</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );

}

export default Navbar;

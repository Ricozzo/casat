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
      <a href="/">
        <img src={QueerLink} alt="Bootstrap" width="35" height="35" />
      </a>
      <div>
        <button
          className={`menu-button ${showOptions ? "active" : ""}`}
          onClick={handleToggleOptions}
        >
          Menu
        </button>
        <div className={`options ${showOptions ? "show" : ""}`}>
          <Link to="/">
            <button>Home</button>
          </Link>
          {isLoggedIn ? (
            <>
              <Link to="/depositions">
                <button>Forum</button>
              </Link>
              <Link to="/events">
                <button>Events</button>
              </Link>

              <button
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
                <button>Login</button>
              </Link>
              <Link to="/signup">
                <button>Signup</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

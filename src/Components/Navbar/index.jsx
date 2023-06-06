import { useState } from "react";
import { Link } from "react-router-dom";
import QueerLink from "../../assets/QueerLink.png"

function Navbar() {
  const [showOptions, setShowOptions] = useState(false);

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <nav className="navbar">
      <img src={QueerLink} alt="Bootstrap" width="35" height="35"/>
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
          <Link to="/about">
            <button>History</button>
          </Link>
          <Link to="/events">
            <button>Events</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

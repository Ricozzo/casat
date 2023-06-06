import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showOptions, setShowOptions] = useState(false);

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <nav className='navbar'>
      <div>
        <button
          className={showOptions ? 'active' : ''}
          onClick={handleToggleOptions}
        >
          {showOptions ? 'Menu' : 'Menu'}
        </button>
        <div className={`options ${showOptions ? 'show' : ''}`}>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/about">
            <button>About Us</button>
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

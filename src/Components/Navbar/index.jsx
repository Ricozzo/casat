import {Link} from 'react-router-dom';
import {useContext} from 'react'; 
/* import { AuthContext } from '../../Context/auth.context'; */

function Navbar() {
/*   const {isLoggedIn, user, logOutUser} = 
  useContext(AuthContext); */


  return (
    <nav>
    <div>

    <Link to="/">
        <button>Home</button>
    </Link>

    <Link to="/about">
        <button>About Us</button>
    </Link>

    <Link to="/donations">
        <button>Donations</button>
    </Link>
    
    <Link to="/events">
        <button>Events</button>
    </Link>

    </div>
    {/* {isLoggedIn? (
      <div>
        <Link to="/projects">
          <button>Projects</button>
        </Link>
        <button onClick={logOutUser}>Logout</button>
        <p>{user && user.name}</p>
      </div>
    ): 
    (
      <div>
        <Link to="/signup"><button>Signup</button></Link>
        <Link to="/login"><button>Login</button></Link>
      </div>
    )
  }  */}
    </nav>
  )
}

export default Navbar;
import { Link } from "react-router-dom";
import { useLogout } from "../Hooks/useLogout";

const Navbar = () => {
  const { logout } = useLogout();
  const handleClick = (e) => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Tracker</h1>
        </Link>
        <nav>
          <div>
            <button onClick={handleClick}>Log out</button>
          </div>
          <div>
            <Link to="/login">Login</Link>
            <Link to="/SignUp">Sign Up</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

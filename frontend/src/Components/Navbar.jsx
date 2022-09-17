import { Link } from "react-router-dom";
import { useAuthContext } from "../Hooks/useAuthContext";
import { useLogout } from "../Hooks/useLogout";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

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
          {user ? (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          ) : (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/SignUp">Sign Up</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import "../styling/Navigation.css";

function Navigation() {
  return (
    <div className="navigation-container">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/About">
        About Me
      </Link>
      <Link className="link" to="/Contact">
        Contact Me
      </Link>
      <a className="link" href="https://github.com/Holy0S">
        GitHub
      </a>
    </div>
  );
}

export default Navigation;

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar">
      <span className="app-logo">MetaDiction</span>

      <input type="checkbox" id="menu-toggle" />
      <label for="menu-toggle" class="menu-icon">&#9776;</label>

      <ul class="nav-links">
        <li>
          <Link to="/" className="nav-link">
            Dictionary
          </Link>
        </li>
        <li>
          <Link to="/urban-dict" className="nav-link">
            Urban Dictionary
          </Link>
        </li>
        <li>
          <Link to="/word-tools" className="nav-link">
            Word Tools
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

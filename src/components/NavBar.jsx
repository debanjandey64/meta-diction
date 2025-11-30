import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setIsMobile(false); // Close mobile menu when switching to a larger screen
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWindowWidth]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
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

        <div
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          <div className={`hamburger ${isMobile ? "active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {isMobile && <div className="help-text">Click for tools</div>}
      </div>
    </nav>
  );
};

export default Navbar;

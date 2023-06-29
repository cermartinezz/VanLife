import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="menu">
      <Link to="/" className="menu-logo">
        #VANLIFE
      </Link>
      <div className="menu-right">
        <Link to="/about" className="menu-item">
          About
        </Link>
        <Link to="/vans" className="menu-item">
          Vans
        </Link>
      </div>
    </nav>
  );
}

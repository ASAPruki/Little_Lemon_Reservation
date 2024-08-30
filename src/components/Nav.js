import logo from "../images/logo.png";
import nav from "../styles/nav.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Nav() {
  return (
    <div className="shadow">
      <div className="nav-bar">
        <img id="logo" src={logo} />
        <ul id="list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <HashLink to="/#about-us" smooth>
              About Us
            </HashLink>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/reservation">Reservation</Link>
          </li>
          <li>
            <Link to="/login">Log in</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

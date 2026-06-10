import { Link } from "react-router";
import "../assets/style/header.css";
export default function Header() {
  return (
    <header className="header">
      <Link to="/home" className="logo-link">
        <p>Ummu Afifa Collection</p>
      </Link>
      {/* <Link to={"/about"}>
        <button>Hubungi Kami</button>
      </Link> */}
    </header>
  );
}

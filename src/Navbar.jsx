import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import profile from './assets/profile.jpg'
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* LEFT - MENU ICON */}
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>

      {/* CENTER - BRAND */}
      <h2>TR Sulphur Comedy</h2>

      {/* RIGHT - PROFILE */}
      <div className="profile">
        <img src={profile} alt="profile" />
      </div>

      {/* NAV LINKS (dropdown/mobile) */}
      <div className={`nav-links ${open ? "active" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/programs" onClick={() => setOpen(false)}>Programs</Link>
        <Link to="/events" onClick={() => setOpen(false)}>Events</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        <Link to="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
        <Link to="/donate" onClick={() => setOpen(false)}>Donate</Link>
      </div>

    </nav>
  );
}
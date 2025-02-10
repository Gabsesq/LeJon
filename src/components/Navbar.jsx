import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Navbar.css';

const resourcesDropdown = [
  {
    name: "Career Opportunities",
    path: "/resources/career"
  },
  {
    name: "Financial Options",
    path: "/resources/financial"
  },
  {
    name: "Patient Forms",
    path: "/resources/forms"
  },
  {
    name: "Patient Specials",
    path: "/resources/specials"
  },
  {
    name: "Reviews",
    path: "/resources/reviews"
  }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="logo">
          <img src="/OS.png" alt="Oasis Studio" className="logo-image" />
        </Link>
        
        <button className="hamburger" onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          
          {/* Desktop: dropdown, Mobile: direct link */}
          <div className="dropdown desktop-only">
            <span className="dropdown-trigger">About</span>
            <div className="dropdown-content">
              <Link to="/about/tour">Tour the Office</Link>
              <Link to="/about/team">Meet the Team</Link>
            </div>
          </div>
          <Link to="/about" className="mobile-only" onClick={toggleMenu}>About</Link>

          {/* Desktop: dropdown, Mobile: direct link */}
          <div className="dropdown desktop-only">
            <span className="dropdown-trigger">Services</span>
            <div className="dropdown-content">
              <Link to="/services/cosmetic">Cosmetic Dentistry</Link>
              <Link to="/services/technology">Dental Technology</Link>
              <Link to="/services/general">General & Family Dentistry</Link>
              <Link to="/services/medspa">Medspa</Link>
              <Link to="/services/orthodontic">Orthodontic Treatments</Link>
              <Link to="/services/restorative">Restorative Dentistry</Link>
              <Link to="/services/sedation">Sedation Dentistry</Link>
              <Link to="/services/sleep-apnea">Sleep Apnea Treatments</Link>
            </div>
          </div>
          <Link to="/services" className="mobile-only" onClick={toggleMenu}>Services</Link>

          {/* Desktop: dropdown, Mobile: direct link */}
          <div className="dropdown desktop-only">
            <span className="dropdown-trigger">Patient Resources</span>
            <div className="dropdown-content">
              {resourcesDropdown.map((item) => (
                <Link key={item.path} to={item.path}>{item.name}</Link>
              ))}
            </div>
          </div>
          <Link to="/resources" className="mobile-only" onClick={toggleMenu}>Patient Resources</Link>

          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
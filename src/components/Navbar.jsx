import { Link } from 'react-router-dom';
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
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="logo">
          <img src="/OS.png" alt="Oasis Studio" className="logo-image" />
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <div className="dropdown">
            <span className="dropdown-trigger">About</span>
            <div className="dropdown-content">
              <Link to="/about/tour">Tour the Office</Link>
              <Link to="/about/team">Meet the Team</Link>
            </div>
          </div>
          <div className="dropdown">
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
          <div className="dropdown">
            <span className="dropdown-trigger">Patient Resources</span>
            <div className="dropdown-content">
              {resourcesDropdown.map((item) => (
                <Link key={item.path} to={item.path}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
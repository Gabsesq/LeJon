import '../styles/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><a href="tel:303-933-2066">303-933-2066</a></p>
          <p>10901 W. Toller Dr., Suite 100<br />Littleton, CO 80127</p>
        </div>

        <div className="footer-section">
          <h3>Hours</h3>
          <div className="hours-grid">
            <p>Monday - Friday</p>
            <p>8:00 a.m. - 5:00 p.m.</p>
            <p>Wednesday</p>
            <p>8:00 a.m. - 6:00 p.m.</p>
            <p>Saturday</p>
            <p>9:00 a.m. - 2:00 p.m.*</p>
          </div>
          <p className="hours-note">*Open select Saturdays</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <nav className="footer-nav">
            <Link to="/about/team">Meet the Team</Link>
            <Link to="/services/cosmetic">Cosmetic Dentistry</Link>
            <Link to="/resources">Patient Resources</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Oasis Studio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 
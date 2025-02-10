import { Link, Outlet, useLocation } from 'react-router-dom';
import '../styles/ServicePage.css';

const About = () => {
  const location = useLocation();
  const isMainRoute = location.pathname === '/about';

  return (
    <div className="service-page">
      <div className="container">
        {isMainRoute ? (
          <>
            <h1>About Our Practice</h1>
            <div className="welcome-text">
              <p>
                Welcome to Oasis Studio Carreon Dental & Aesthetics! Our team is committed to providing 
                exceptional dental care in a comfortable, state-of-the-art environment. Get to know more 
                about our practice and our dedicated team below:
              </p>
            </div>
            <div className="service-links">
              <Link to="tour" className="service-link">Tour Our Office</Link>
              <Link to="team" className="service-link">Meet Our Team</Link>
            </div>
          </>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default About; 
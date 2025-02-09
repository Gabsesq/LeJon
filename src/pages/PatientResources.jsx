import { Link, Outlet, useLocation } from 'react-router-dom';
import '../styles/ServicePage.css';

const PatientResources = () => {
  const location = useLocation();
  const isMainRoute = location.pathname === '/resources';

  return (
    <div className="service-page">
      <div className="container">
        {isMainRoute ? (
          <>
            <h1>Patient Resources</h1>
            <div className="service-links">
              <Link to="career" className="service-link">Career Opportunities</Link>
              <Link to="financial" className="service-link">Financial Options</Link>
              <Link to="forms" className="service-link">Patient Forms</Link>
              <Link to="specials" className="service-link">Patient Specials</Link>
              <Link to="reviews" className="service-link">Reviews</Link>
            </div>
          </>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default PatientResources; 
import { Link, Outlet, useLocation } from 'react-router-dom';
import '../../styles/ServicePage.css';

const SedationDentistry = () => {
  const location = useLocation();
  const isMainRoute = location.pathname === '/services/sedation';

  const getPageTitle = () => {
    switch(location.pathname) {
      case '/services/sedation/nitrous-oxide':
        return 'Nitrous Oxide';
      case '/services/sedation/oral-conscious':
        return 'Oral Conscious Sedation';
      default:
        return 'Sedation Dentistry';
    }
  };

  return (
    <div className="service-page">
      <div className="container">
        <h1>{getPageTitle()}</h1>
        {isMainRoute ? (
          <div className="service-links">
            <Link to="nitrous-oxide" className="service-link">Nitrous Oxide</Link>
            <Link to="oral-conscious" className="service-link">Oral Conscious Sedation</Link>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default SedationDentistry; 
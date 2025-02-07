import { Link, Outlet, useLocation } from 'react-router-dom';
import '../../styles/ServicePage.css';

const DentalTechnology = () => {
  const location = useLocation();
  const isMainRoute = location.pathname === '/services/technology';

  const getPageTitle = () => {
    switch(location.pathname) {
      case '/services/technology/digital-xrays':
        return 'Digital X-rays';
      case '/services/technology/intraoral-scanner':
        return 'Intraoral Scanner';
      case '/services/technology/soft-tissue-laser':
        return 'Soft Tissue Laser';
      default:
        return 'Dental Technology';
    }
  };

  return (
    <div className="service-page">
      <div className="container">
        <h1>{getPageTitle()}</h1>
        {isMainRoute ? (
          <div className="service-links">
            <Link to="digital-xrays" className="service-link">Digital X-rays</Link>
            <Link to="intraoral-scanner" className="service-link">Intraoral Scanner</Link>
            <Link to="soft-tissue-laser" className="service-link">Soft Tissue Laser</Link>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default DentalTechnology; 
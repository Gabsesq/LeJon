import { Link, Outlet, useLocation } from 'react-router-dom';
import '../../styles/ServicePage.css';

const RestorativeDentistry = () => {
  const location = useLocation();
  const isMainRoute = location.pathname === '/services/restorative';

  const getPageTitle = () => {
    switch(location.pathname) {
      case '/services/restorative/fillings':
        return 'Composite Dental Fillings';
      case '/services/restorative/bridges':
        return 'Dental Bridges';
      case '/services/restorative/crowns':
        return 'Dental Crowns';
      case '/services/restorative/implants':
        return 'Dental Implant Restorations';
      case '/services/restorative/inlays-onlays':
        return 'Dental Inlays & Onlays';
      case '/services/restorative/dentures':
        return 'Dentures';
      default:
        return 'Restorative Dentistry';
    }
  };

  return (
    <div className="service-page">
      <div className="container">
        <h1>{getPageTitle()}</h1>
        {isMainRoute ? (
          <div className="service-links">
            <Link to="fillings" className="service-link">Composite Dental Fillings</Link>
            <Link to="bridges" className="service-link">Dental Bridges</Link>
            <Link to="crowns" className="service-link">Dental Crowns</Link>
            <Link to="implants" className="service-link">Dental Implant Restorations</Link>
            <Link to="inlays-onlays" className="service-link">Dental Inlays & Onlays</Link>
            <Link to="dentures" className="service-link">Dentures</Link>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default RestorativeDentistry; 
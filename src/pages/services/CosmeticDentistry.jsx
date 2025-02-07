import { Link, Outlet, useLocation } from 'react-router-dom';
import '../../styles/ServicePage.css';

const CosmeticDentistry = () => {
  const location = useLocation();
  const isMainRoute = location.pathname === '/services/cosmetic';

  const getPageTitle = () => {
    switch(location.pathname) {
      case '/services/cosmetic/veneers':
        return 'Dental Veneers';
      case '/services/cosmetic/bonding':
        return 'Dental Bonding';
      case '/services/cosmetic/invisalign':
        return 'Invisalign® Clear Aligners';
      case '/services/cosmetic/six-month-smiles':
        return 'Six Month Smiles®';
      case '/services/cosmetic/teeth-whitening':
        return 'Teeth Whitening Treatments';
      default:
        return 'Cosmetic Dentistry';
    }
  };

  return (
    <div className="service-page">
      <div className="container">
        <h1>{getPageTitle()}</h1>
        {isMainRoute ? (
          <div className="service-links">
            <Link to="bonding" className="service-link">Dental Bonding</Link>
            <Link to="veneers" className="service-link">Dental Veneers</Link>
            <Link to="invisalign" className="service-link">Invisalign® Clear Aligners</Link>
            <Link to="six-month-smiles" className="service-link">Six Month Smiles®</Link>
            <Link to="teeth-whitening" className="service-link">Teeth Whitening Treatments</Link>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default CosmeticDentistry; 
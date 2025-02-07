import { Link, Outlet, useLocation } from 'react-router-dom';
import '../../styles/ServicePage.css';

const OrthodonticTreatments = () => {
  const location = useLocation();
  const isMainRoute = location.pathname === '/services/orthodontic';

  const getPageTitle = () => {
    switch(location.pathname) {
      case '/services/orthodontic/invisalign':
        return 'Invisalign® Clear Aligners';
      case '/services/orthodontic/six-month-smiles':
        return 'Six Month Smiles®';
      default:
        return 'Orthodontic Treatments';
    }
  };

  return (
    <div className="service-page">
      <div className="container">
        <h1>{getPageTitle()}</h1>
        {isMainRoute ? (
          <div className="service-links">
            <Link to="invisalign" className="service-link">Invisalign® Clear Aligners</Link>
            <Link to="six-month-smiles" className="service-link">Six Month Smiles®</Link>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default OrthodonticTreatments; 
import { Link, Outlet, useLocation } from 'react-router-dom';
import '../../styles/ServicePage.css';

const Medspa = () => {
  const location = useLocation();
  const isMainRoute = location.pathname === '/services/medspa';

  const getPageTitle = () => {
    switch(location.pathname) {
      case '/services/medspa/botox':
        return 'BOTOX® Treatments';
      case '/services/medspa/morpheus8':
        return 'Morpheus8 Radiofrequency Microneedling';
      case '/services/medspa/dermal-fillers':
        return 'Dermal Fillers';
      case '/services/medspa/diolaze':
        return 'Diolaze Laser Hair Removal';
      case '/services/medspa/forma':
        return 'Forma Bipolar Radiofrequency';
      case '/services/medspa/hormone-therapy':
        return 'Hormone Replacement Therapy';
      case '/services/medspa/lumecca':
        return 'Lumecca Intense Pulsed Light';
      case '/services/medspa/vitamin-therapy':
        return 'Vitamin Therapy';
      case '/services/medspa/weight-loss':
        return 'Weight Loss Injections';
      default:
        return 'Medspa Services';
    }
  };

  return (
    <div className="service-page">
      <div className="container">
        <h1>{getPageTitle()}</h1>
        {isMainRoute ? (
          <div className="service-links">
            <Link to="botox" className="service-link">BOTOX® Treatments</Link>
            <Link to="morpheus8" className="service-link">Morpheus8 Radiofrequency Microneedling</Link>
            <Link to="dermal-fillers" className="service-link">Dermal Fillers</Link>
            <Link to="diolaze" className="service-link">Diolaze Laser Hair Removal</Link>
            <Link to="forma" className="service-link">Forma Bipolar Radiofrequency</Link>
            <Link to="hormone-therapy" className="service-link">Hormone Replacement Therapy</Link>
            <Link to="lumecca" className="service-link">Lumecca Intense Pulsed Light</Link>
            <Link to="vitamin-therapy" className="service-link">Vitamin Therapy</Link>
            <Link to="weight-loss" className="service-link">Weight Loss Injections</Link>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default Medspa; 
import { Link, Outlet, useLocation } from 'react-router-dom';
import '../../styles/ServicePage.css';

const GeneralDentistry = () => {
  const location = useLocation();
  const isMainRoute = location.pathname === '/services/general';

  const getPageTitle = () => {
    switch(location.pathname) {
      case '/services/general/childrens-dentistry':
        return "Children's Dentistry";
      case '/services/general/cleanings-and-exams':
        return 'Dental Cleanings & Exams';
      case '/services/general/dental-sealants':
        return 'Dental Sealants';
      case '/services/general/emergency':
        return 'Emergency Dentistry';
      case '/services/general/fluoride':
        return 'Fluoride Treatments';
      case '/services/general/night-guards':
        return 'Night Guards';
      case '/services/general/cancer-screenings':
        return 'Oral Cancer Screenings';
      case '/services/general/hygiene-counseling':
        return 'Oral Hygiene Counseling';
      case '/services/general/scaling-root-planing':
        return 'Scaling & Root Planing';
      case '/services/general/sports-guards':
        return 'Sports Mouth Guards';
      case '/services/general/tmj':
        return 'TMJ Treatments';
      case '/services/general/extractions':
        return 'Tooth Extractions';
      default:
        return 'General & Family Dentistry';
    }
  };

  return (
    <div className="service-page">
      <div className="container">
        <h1>{getPageTitle()}</h1>
        {isMainRoute ? (
          <div className="service-links">
            <Link to="childrens-dentistry" className="service-link">Children's Dentistry</Link>
            <Link to="cleanings-and-exams" className="service-link">Dental Cleanings & Exams</Link>
            <Link to="dental-sealants" className="service-link">Dental Sealants</Link>
            <Link to="emergency" className="service-link">Emergency Dentistry</Link>
            <Link to="fluoride" className="service-link">Fluoride Treatments</Link>
            <Link to="night-guards" className="service-link">Night Guards</Link>
            <Link to="cancer-screenings" className="service-link">Oral Cancer Screenings</Link>
            <Link to="hygiene-counseling" className="service-link">Oral Hygiene Counseling</Link>
            <Link to="scaling-root-planing" className="service-link">Scaling & Root Planing</Link>
            <Link to="sports-guards" className="service-link">Sports Mouth Guards</Link>
            <Link to="tmj" className="service-link">TMJ Treatments</Link>
            <Link to="extractions" className="service-link">Tooth Extractions</Link>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default GeneralDentistry; 
import { Link, Outlet, useLocation } from 'react-router-dom';
import '../styles/ServicePage.css';

const Services = () => {
  const location = useLocation();
  const isMainRoute = location.pathname === '/services';

  const serviceCategories = [
    {
      title: "Cosmetic Dentistry",
      path: "cosmetic",
      subServices: [
        { name: "Dental Bonding", path: "bonding" },
        { name: "Dental Veneers", path: "veneers" },
        { name: "Invisalign® Clear Aligners", path: "invisalign" },
        { name: "Six Month Smiles®", path: "six-month-smiles" },
        { name: "Teeth Whitening Treatments", path: "teeth-whitening" }
      ]
    },
    {
      title: "Dental Technology",
      path: "technology",
      subServices: [
        { name: "Digital X-Rays", path: "digital-xrays" },
        { name: "Intraoral Scanner", path: "intraoral-scanner" },
        { name: "Soft Tissue Laser", path: "soft-tissue-laser" }
      ]
    },
    {
      title: "General & Family Dentistry",
      path: "general",
      subServices: [
        { name: "Children's Dentistry", path: "childrens-dentistry" },
        { name: "Dental Cleanings & Exams", path: "cleanings-and-exams" },
        { name: "Dental Sealants", path: "dental-sealants" },
        { name: "Emergency Dentistry", path: "emergency" },
        { name: "Fluoride Treatments", path: "fluoride" },
        { name: "Night Guards", path: "night-guards" },
        { name: "Oral Cancer Screening", path: "cancer-screenings" },
        { name: "Oral Hygiene Counseling", path: "hygiene-counseling" },
        { name: "Root Canal Therapy", path: "scaling-root-planing" },
        { name: "Sports Mouth Guards", path: "sports-guards" },
        { name: "TMJ Treatments", path: "tmj" },
        { name: "Tooth Extractions", path: "extractions" }
      ]
    },
    {
      title: "Medspa",
      path: "medspa",
      subServices: [
        { name: "BOTOX® Treatments", path: "botox" },
        { name: "Morpheus8 Radiofrequency Microneedling", path: "morpheus8" },
        { name: "Dermal Fillers", path: "dermal-fillers" },
        { name: "Diolaze Laser Hair Removal", path: "diolaze" },
        { name: "Forma Bipolar Radiofrequency", path: "forma" },
        { name: "Hormone Replacement Therapy", path: "hormone-therapy" },
        { name: "Lumecca Intense Pulsed Light", path: "lumecca" },
        { name: "Vitamin Therapy", path: "vitamin-therapy" },
        { name: "Weight Loss Injections", path: "weight-loss" }
      ]
    },
    {
      title: "Restorative Dentistry",
      path: "restorative",
      subServices: [
        { name: "Composite Dental Fillings", path: "fillings" },
        { name: "Dental Bridges", path: "bridges" },
        { name: "Dental Crowns", path: "crowns" },
        { name: "Dental Implant Restorations", path: "implants" },
        { name: "Dental Inlays & Onlays", path: "inlays-onlays" },
        { name: "Dentures", path: "dentures" }
      ]
    },
    {
      title: "Sedation Dentistry",
      path: "sedation",
      subServices: [
        { name: "Nitrous Oxide", path: "nitrous-oxide" },
        { name: "Oral Conscious Sedation", path: "oral-conscious" }
      ]
    }
  ];

  return (
    <div className="service-page">
      <div className="container">
        {isMainRoute ? (
          <>
            <h1>Our Services</h1>
            <div className="welcome-text">
              <p>
                One thing that you can count on at Oasis Studio Carreon Dental & Aesthetics is personalized care. 
                Our dentist and team know that every smile is as unique as the person who wears it, and we will 
                take the time to listen to your needs and find the right treatment plan for you. We offer the 
                following dental services in Littleton, Colorado:
              </p>
            </div>
            <div className="service-categories">
              {serviceCategories.map((category) => (
                <div key={category.title} className="service-category">
                  <h2>
                    <Link to={category.path}>{category.title}</Link>
                  </h2>
                  <ul>
                    {category.subServices.map((service) => (
                      <li key={service.path}>
                        <Link to={`${category.path}/${service.path}`}>
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default Services; 
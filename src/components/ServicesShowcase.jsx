import { Link } from 'react-router-dom';
import '../styles/ServicesShowcase.css';

const ServicesShowcase = () => {
  const services = [
    {
      title: "DENTAL CROWNS",
      image: "/dental-crowns.jpg",
      link: "/services/restorative",
      description: "Restore damaged teeth with natural-looking crowns"
    },
    {
      title: "IMPLANT RESTORATIONS",
      image: "/implants.jpg",
      link: "/services/restorative",
      description: "Replace missing teeth with permanent solutions"
    },
    {
      title: "SLEEP APNEA TREATMENTS",
      image: "/sleep-apnea.jpg",
      link: "/services/sleep-apnea",
      description: "Get better rest with custom sleep solutions"
    },
    {
      title: "BOTOX & DERMAL FILLERS",
      image: "/medspa.jpg",
      link: "/services/medspa",
      description: "Enhance your natural beauty with medspa treatments"
    },
    {
      title: "INVISALIGN®",
      image: "/invisalign.jpg",
      link: "/services/cosmetic/invisalign",
      description: "Straighten your smile with clear aligners"
    },
    {
      title: "SIX MONTH SMILES®",
      image: "/six-month-smiles.jpg",
      link: "/services/cosmetic/six-month-smiles",
      description: "Quick and effective orthodontic treatment"
    },
    {
      title: "COSMETIC DENTISTRY",
      image: "/cosmetic.jpg",
      link: "/services/cosmetic",
      description: "Transform your smile with custom treatments"
    },
    {
      title: "FAMILY DENTISTRY",
      image: "/family.jpg",
      link: "/services/general",
      description: "Comprehensive care for the whole family"
    }
  ];

  return (
    <section className="services-showcase">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service) => (
            <Link to={service.link} key={service.title} className="service-item">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase; 
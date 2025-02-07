import { useState } from 'react';
import '../styles/Home.css';
import AppointmentPopup from '../components/AppointmentPopup';
import { Scene3D } from '../components/Scene3D';
import ServicesShowcase from '../components/ServicesShowcase';

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePayNowClick = () => {
    // You can replace this with your payment portal URL
    window.open('https://your-payment-portal-url.com', '_blank');
  };

  return (
    <div className="home">
      <header className="hero">
        <div className="container hero-content">
          <h1>OASIS STUDIO</h1>
        </div>
      </header>

      <div className="header-image">
        <div className="header-overlay"></div>
        <div className="model-container">
          <Scene3D />
        </div>
      </div>
      
      <div className="appointment-section">
        <div className="button-group">
          <button 
            className="btn-primary"
            onClick={() => setIsPopupOpen(true)}
          >
            Request Appointment
          </button>
          <button 
            className="btn-primary btn-pay"
            onClick={handlePayNowClick}
          >
            Pay Now
          </button>
        </div>
      </div>

      <div className="container hero-content-bottom">
        <h2>Welcome to Oasis Studio Carreon Dental & Aesthetics</h2>
        <p className="welcome-text">
          At Oasis Studio Carreon Dental & Aesthetics, we believe in treating patients like family. For over 15 years, our practice has become a trusted name in the community, led by Dr. Carreon and Dr. Kissinger. From regular cleanings to advanced dental implants, we offer personalized care that meets the unique needs of every patient. Our expanded services now include medspa treatments to help you look and feel your best. Whether you're here for dental care or a little self-care, you'll always feel right at home. We understand that feeling good isn't just about oral health-it's about total wellness. That's why we offer a range of medspa services to help you look and feel your best, right here in the office you know and trust. We want every medspa treatment to be a relaxing experience, which is why we offer numbing options for maximum comfort.
        </p>
      </div>
      
     
      
      <ServicesShowcase />
      
      <AppointmentPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />
    </div>
  );
};

export default Home; 
import { useState } from 'react';
import '../styles/Home.css';
import AppointmentPopup from '../components/AppointmentPopup';
import { Scene3D } from '../components/Scene3D';

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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
        <button 
          className="btn-primary"
          onClick={() => setIsPopupOpen(true)}
        >
          Request Appointment
        </button>
      </div>

      <div className="container hero-content-bottom">
        <h2>Welcome to Oasis Studio Carreon Dental & Aesthetics</h2>
        <p className="welcome-text">
          At Oasis Studio Carreon Dental & Aesthetics, we believe in treating patients like family. For over 15 years, our practice has become a trusted name in the community, led by Dr. Carreon and Dr. Kissinger. From regular cleanings to advanced dental implants, we offer personalized care that meets the unique needs of every patient. Our expanded services now include medspa treatments to help you look and feel your best. Whether you're here for dental care or a little self-care, you'll always feel right at home. We understand that feeling good isn't just about oral health-it's about total wellness. That's why we offer a range of medspa services to help you look and feel your best, right here in the office you know and trust. We want every medspa treatment to be a relaxing experience, which is why we offer numbing options for maximum comfort.
        </p>
      </div>
      
      <section className="features">
        <div className="container">
          <h2>Why Choose Oasis Studio?</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Expert Care</h3>
              <p>Experienced dental professionals dedicated to your smile</p>
            </div>
            <div className="feature-card">
              <h3>Modern Technology</h3>
              <p>State-of-the-art equipment for precise treatment</p>
            </div>
            <div className="feature-card">
              <h3>Comfortable Environment</h3>
              <p>Relaxing atmosphere for stress-free visits</p>
            </div>
          </div>
        </div>
      </section>
      
      <AppointmentPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />
    </div>
  );
};

export default Home; 
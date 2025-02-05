import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <div className="container hero-content">
          <h1>Welcome to Oasis Studio</h1>
          <p>Your Premier Dental Care Destination</p>
          <button className="btn-primary">Book Appointment</button>
        </div>
      </header>
      
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
    </div>
  );
};

export default Home; 
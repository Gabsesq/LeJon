const PatientSpecials = () => {
  return (
    <div className="sub-route">
      <div className="container">
        <h1>Patient Specials</h1>
        
        <div className="welcome-text">
          <p>
            Dr. LeJon Carreon and the team at Oasis Studio Carreon Dental & Aesthetics appreciate your confidence in us. To thank you for trusting us with the care of your smile, we like to offer specials on our dental services. There is more information about our specials below, and you can visit our social media sites for updates. If you would like to visit with Dr. LeJon Carreon and take advantage of our specials, call our office at <a href="tel:303-933-2066">303-933-2066</a> and speak with a member of our team.
          </p>

          <div className="specials-images">
            <div className="special-image">
              {/* <img src="/specials/special1.jpg" alt="Special Offer 1" /> */}
              <div className="image-placeholder">Special Offer 1</div>
            </div>
            <div className="special-image">
              {/* <img src="/specials/special2.jpg" alt="Special Offer 2" /> */}
              <div className="image-placeholder">Special Offer 2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientSpecials; 
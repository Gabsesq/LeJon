import { Link } from 'react-router-dom';

const PatientForms = () => {
  return (
    <div className="sub-route">
      <div className="container">
        <h1>Patient Forms</h1>
        <div className="welcome-text">
          <p>
            We want you to get as much as possible out of your visit to Oasis Studio Carreon Dental & Aesthetics, which includes spending time with our dentist and team, focusing on your smile and just enjoying our <Link to="/about/tour">amenities</Link>. We have provided access to our patient forms below so you can save time during your dental appointment.
          </p>

          <p>
            Check back soon to access your forms online!
          </p>

          <p>
            Please contact Oasis Studio Carreon Dental & Aesthetics at <a href="tel:303-933-2066">303-933-2066</a> if you have questions about your paperwork or would like to schedule your visit with Dr. LeJon Carreon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PatientForms; 
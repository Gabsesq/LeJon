import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <h1>Contact Your Dentist in Littleton, Colorado</h1>
        
        <div className="contact-content">
          <div className="contact-info">
            <p className="welcome-text">
              Thank you for visiting Oasis Studio Carreon Dental & Aesthetics online! Our dentist, Dr. LeJon Carreon, and our team are here to offer compassionate, patient-centered dental care in Littleton, Colorado, and to clients from Denver, Centennial, Morrison and Highlands Ranch. We offer a comprehensive line of dental treatments and are open evenings to accommodate your busy schedule. To see what we can do for your smile, contact a member of your team to start planning your visit.
            </p>
            
            <div className="contact-details">
              <h2>Contact</h2>
              <p className="phone">303-933-2066</p>
              <p className="address">
                10901 W. Toller Dr., Suite 100<br />
                Littleton, CO 80127
              </p>
            </div>
          </div>

          <div className="hours-section">
            <h2>Hours</h2>
            <table className="hours-table">
              <tbody>
                <tr>
                  <td>Monday</td>
                  <td>8:00 a.m. - 5:00 p.m.</td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>8:00 a.m. - 5:00 p.m.</td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>8:00 a.m. - 6:00 p.m.</td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td>8:00 a.m. - 5:00 p.m.</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>8:00 a.m. - 5:00 p.m.</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>9:00 a.m. - 2:00 p.m.*</td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td>Closed</td>
                </tr>
              </tbody>
            </table>
            <p className="hours-note">*Open select Saturdays, call for appointment</p>
          </div>
        </div>

        <div className="map-section">
          <h2>Find Us</h2>
          <div className="map-container">
            <iframe
              title="Oasis Studio Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3071.9015440297184!2d-105.1183873!3d39.6453077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b79d4ee2d2c2b%3A0x3f0a75b6c40c974d!2s10901%20W%20Toller%20Dr%20%23100%2C%20Littleton%2C%20CO%2080127!5e0!3m2!1sen!2sus!4v1707198176545!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 
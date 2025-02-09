import { Link } from 'react-router-dom';
import { FaStar, FaFacebook, FaInstagram, FaGoogle } from 'react-icons/fa';

const Reviews = () => {
  const reviews = [
    { author: "Lisa T.", text: "All the staff cares greatly for their patients." },
    { author: "Michael Z.", text: "a very caring, patient-centered dentist. they have treated me and my family well for over 7 years. highly recommended!" },
    { author: "P. F.", text: "Knowledge and friendly staff!" },
    { author: "Linda B.", text: "Michelle was great had braces and whitening and it has been a great experience" },
    { author: "Linda H.", text: "Both Dr. Carreon and Delilah gave excellent customer service this morning regarding two fillings. I always have some inner anxiety at any dentist office and they know how to put my mind at ease. It's 8pm same day of fillings done and no pain. Both fillings are beautiful, smooth and a great bite down. Thank you ladies! See you again soon!" },
    { author: "Carmen A.", text: "Friendly staff clean facility. Explain the different options they were fantastic and I would definitely recommend them." },
    { author: "Laura M.", text: "I had my first visit to Dr. Carreon's office on Friday, May 9, 2019. Vanessa was very thorough and performed an excellent cleaning." },
    { author: "Liz L.", text: "Friendly staff and great service. I've had some rough dental experiences in the past, so I really appreciate that Carreon makes the experience comfortable." },
    { author: "Derrick B.", text: "Great staff, kept my little one calm and entertained through his procedure." },
    { author: "Angelika G.", text: "Dr. Carreon and her team have been terrific! Not only were they the most affordable Invisalign provider I found (and I did my research), but they have also taken superb care of me throughout the process. Their office is clean and inviting, Dr. Carreon and the hygienists are all very friendly and attentive to my concerns, and Taylor, her office manager, is always so helpful - love her. Shoot! I love their whole crew. Thanks for my getting my smile all fixed up, Ladies!" },
    { author: "Toribio R.", text: "Very good service, and the patience Is very satisfying." },
    { author: "Mark U.", text: "Jodi performed excellent job in cleaning my teeth and informing me of new laser treatment for next appointment to enhance cleaning my gums." },
    { author: "Jeff H.", text: "Great staff and Dr. Carreon is wonderful. I've been coming here for years and have recommend them to many friends who are also extremely satisfied." },
    { author: "Jamie A.", text: "We have been coming to this office for years now! Great staff! Amazing dentist! Everything is so easy. Highly recommend." },
    { author: "William R.", text: "Very relaxing and laid back on both visit s . Everyone was very nice and professional!" },
    { author: "Melissa G.", text: "Did such a great job following all the new CDC guidelines...friendly and comfortable as always." },
    { author: "Marv V.", text: "I had a return visit for a little maintenance. The attention I received up to an including my visit was quick and convenient." },
    { author: "Alexander F.", text: "My family has been coming here for many years. The quality of service keeps us coming back. Jodi has been cleaning my teeth since the beginning and is very curtious and endearing. Dr. Carreon is extremely professional and maintains a very comfortable, clean, and pleasant practice." },
    { author: "A.J. G.", text: "Super clean, super friendly, super efficient. Super time" },
    { author: "Jane M.", text: "Had a crown completed today. Found a cheery, caring and respectful doctor and assistant waiting for me. Glad to be their patient. Would recommend readily to anyone needing dentistry." },
    { author: "Michelle M.", text: "Dr. Carreon's office staff is polite, professional, and takes the time to take care of you and make sure your taken care of. I highly recommend going here for your dental need." },
    { author: "Tresa R.", text: "Great service and a great dental cleaning, accommodating to special needs." },
    { author: "Debbie K.", text: "This place runs very smoothly! Dr. Carreon and her staff are extremely friendly, and they always make you feel so comfortable. She takes excellent care of me, and I am so glad to have found her practice." },
    { author: "Jill V.", text: "very pleasant and professional folks" },
    { author: "Sue M.", text: "The dental care is excellent at all levels from hygienist, technicians & Dr. Carreon. Their new administrative assistant/ receptionist is professional & very experienced. We've been going here 10 years." },
    { author: "Kim F.", text: "I hate going to the dentist but I love going to this office!! Everyone is so friendly! Their number one goal is patient comfort. For people like me who have high dental anxiety, this experience is a welcome change from dental visits in the past." },
    { author: "Carlos B.", text: "The team here is awesome!" },
    { author: "Pam C.", text: "This is the best dental office in the Denver area!! So gentle, so efficient and fun!! How about a free warm wax hand treatment while you get your teeth cleaned?? I love this place!! ?" },
    { author: "Karrie L.", text: "Great professional office with friendly staff. Everyone makes you feel welcome! Love the results from my services." },
    { author: "James J.", text: "Great family dentist office that offers Botox" },
    { author: "Brandon D.", text: "I've had terrible anxiety and fear of the dentist my entire life. Still have the same fear, but LeJon and her team are absolutely amazing, have always catered to my needs, understanding of my fear, and go out of their way to make me comfortable!" },
    { author: "Erik L.", text: "Everyone was very friendly and put me at ease, which I really needed since this is the first time that I had been to the dentist in many years. I appreciated their explanation and prioritization of my problem areas and it definitely wasn't as bad as I thought it was going to be!" },
    { author: "Kyle C.", text: "Great service and great employees!" },
    { author: "April F.", text: "Extremely skilled, friendly, and efficient. Everything you want in a dentist & staff. I highly recommend this place." },
    { author: "Caleb D.", text: "I've been going here for well over five years, and they've never let me down! Nicest people in the world, and service is always fast and comfortable." },
    { author: "Jennifer S.", text: "I have had the worst luck with dentists my whole life and it hasn't been fun to go in even though I knew how important it is. Now that I have been going to Carreon Dental, I feel so comfortable and not self conscious. They are so genuine and understanding. The friendliest people work here!" },
    { author: "Josh C.", text: "Excellent service. Incredible and kind staff. Very forgiving and flexible with scheduling." },
    { author: "Jess", text: "Not only is their customer service amazing but the dentistry is top notch." },
    { author: "Sarah A.", text: "I have been going to Dr. Carreon for years. She is kind and knowledgeable. Her office staff are always friendly and professional. I will never go to another dentist. They are amazing!" },
    { author: "Colin S.", text: "Great people. Very friendly. Quick but thorough." },
    { author: "Raul M.", text: "Very nice, friendly staff, excellent customer service!! Very clean location. Great parodical of COVID 19 make me feel safe." },
    { author: "Allan L.", text: "Great place to get Crowned, don't really feel like I have been to a dentist no pain, like I have received from other dentists over the years ." },
    { author: "Julia", text: "I had a great experience at Dr Carreon Family Dentistry! It was hands down the best experience I've ever had! I would definitely recommend this practice to all my friends and family. And big thank you to Julie, who did such a great job cleaning my teeth." },
    { author: "Lisa Z.", text: "Awesome thank you as always great care!" },
    { author: "Mandi M.", text: "I've been going to Lejon for the past three years. She is absolutely the best dentist out there!" },
    { author: "Marleen S.", text: "Always so helpful, kind, and accommodating!! Even when I call on an off day, they will do what they can to help. I'm so glad I found them." }
  ];

  return (
    <div className="sub-route">
      <div className="container">
        <h1>Reviews</h1>
        
        <div className="welcome-text">
          <p>
            Since 2007, our dentist and team have been providing dental care in Littleton, Colorado, to patients of all ages. We have had the chance to welcome many new members to our dental family, and you can read below what they have said about their visits with Dr. LeJon Carreon. We welcome your feedback, and you can tell us about your experience at our office on our social media sites or on this page. To see for yourself why so many people have made Oasis Studio Carreon Dental & Aesthetics their dental home, call <a href="tel:303-933-2066">303-933-2066</a> for your appointment.
          </p>

          <div className="social-links">
            <a 
              href="https://www.facebook.com/CarreonDentistry" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a 
              href="https://www.instagram.com/carreon_dental/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a 
              href="#" // Add Google review link
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Google Reviews"
            >
              <FaGoogle />
            </a>
          </div>

          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>
                <p className="review-text">{review.text}</p>
                <p className="review-author">- {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews; 
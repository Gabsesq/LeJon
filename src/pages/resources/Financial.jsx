const Financial = () => {
  return (
    <div className="sub-route">
      <div className="container">
        <h1>Financial Options</h1>
        
        <div className="welcome-text">
          <p>
            Dr. LeJon Carreon and the Oasis Studio Carreon Dental & Aesthetics team believe that everyone should have access to quality care for their smiles, and we will work with you to find a payment solution that will be the right fit for your budget.
          </p>

          <p>
            Our office works with most PPO plans, and we will be happy to help you file your claims, perform a benefits check and maximize your coverage. Please contact our team with your insurance information before your visit. To meet the cost of your co-pay or out-of-pocket expenses, we accept:
          </p>

          <ul>
            <li>Cash</li>
            <li>Checks</li>
            <li>Credit cards</li>
            <li>Flexible spending accounts</li>
            <li>Health savings accounts</li>
          </ul>

          <p>
            You may find that financing your visit is the best choice for you. We work with CareCredit®, a third-party lender which may be able to finance the entire cost of your treatments. Please follow the link below to complete your application.
          </p>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a 
              href="https://www.carecredit.com/apply/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
            >
              Care Credit
            </a>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a 
              href="#" // Replace with actual payment portal URL
              className="btn-primary"
            >
              Pay Now
            </a>
          </div>

          <p style={{ marginTop: '2rem' }}>
            We invite you to call <a href="tel:303-933-2066">303-933-2066</a> to schedule your dental appointment in Littleton, Colorado, with Dr. LeJon Carreon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Financial; 
import React from 'react';



function LandingPage() {
  return (
    <div className="landing-container">
      <h1 className="landing-title">Welcome to TEMO</h1>
      <p className="landing-subtitle">
        Discover amazing things and explore our world of possibilities.
      </p>
      <button className="landing-button">Learn More</button>

  
      <form className="contact-form">
        <input type="text" placeholder="Name" className="form-input" required />
        <input type="email" placeholder="Email" className="form-input" required />
        <input type="tel" placeholder="Phone Number" className="form-input" required />
        <button type="submit" className="form-submit">Submit</button>
      </form>
    </div>
  );
}

export default LandingPage;

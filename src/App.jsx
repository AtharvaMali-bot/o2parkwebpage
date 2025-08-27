import React from 'react';

// Main App component that renders the entire website
const App = () => {
  return (
    <>
      {/* Styles for the entire app, translated from Tailwind CSS */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap');
        
        .app-container {
          min-height: 100vh;
          background-color: white;
          font-family: 'Inter', sans-serif;
          color: #2D3748;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        
        .hero-section {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
        }

        .hero-background img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: black;
          opacity: 0.3;
        }
        
        .hero-content {
          position: relative;
          z-index: 10;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 50vh;
          text-align: center;
          color: white;
        }
        
        .hero-header {
          display: flex;
          align-items: flex-start;
          width: 100%;
          max-width: 24rem;
          margin-bottom: 2rem;
          gap: 1rem;
        }
        
        .hero-logo {
          width: 5rem;
          height: 5rem;
          border-radius: 9999px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        .hero-text-container {
          text-align: right;
        }
        
        .hero-title {
          font-size: 1.5rem;
          line-height: 2rem;
          font-weight: 800;
          font-style: italic;
          margin-bottom: 0.25rem;
        }
        
        .hero-subtitle {
          font-size: 1.25rem;
          line-height: 1.75rem;
          font-weight: 700;
          font-style: italic;
        }

        @media (min-width: 640px) {
          .hero-title {
            font-size: 1.875rem;
            line-height: 2.25rem;
          }
          .hero-subtitle {
            font-size: 1.5rem;
            line-height: 2rem;
          }
        }
        
        .intro-text {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .intro-paragraph {
          font-size: 1.125rem;
          max-width: 48rem;
        }
        
        .section-padding {
          width: 100%;
          padding-top: 3rem;
          padding-bottom: 3rem;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .who-we-are-section {
          background-color: white;
          justify-content: center;
        }
        
        .impact-area-list {
          list-style: none;
          padding: 0;
          margin-top: 2rem;
        }

        .impact-area-list li {
          line-height: 1.5rem;
        }

        .vision-section {
          background-color: #F7FAFC;
        }

        .milestones-section {
          background-color: #FDBA74;
          color: white;
        }
        
        .participation-section {
          background-color: #991B1B;
          color: white;
        }
        
        .partner-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          width: 100%;
          max-width: 64rem;
        }
        
        @media (min-width: 768px) {
          .partner-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        
        .partner-grid img {
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .footer {
          width: 100%;
          background-color: #1A202C;
          color: #CBD5E0;
          padding: 3rem 1.5rem;
          text-align: center;
        }

        .footer-content {
          max-width: 28rem;
          margin-left: auto;
          margin-right: auto;
        }

        .footer-content h3 {
          font-size: 1.125rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
        }
        
        .footer-content p {
          font-size: 0.875rem;
          line-height: 1.5;
        }
        
        .footer-content .bold-text {
          font-weight: 700;
        }
        
        .footer-content .copyright {
          font-size: 0.75rem;
          margin-top: 1rem;
        }
        `}
      </style>

      <div className="app-container">
        {/* Hero section with logo and header text */}
        <section className="hero-section">
          <div className="hero-background">
            <img
              src="https://placehold.co/1200x600/609966/FFFFFF?text=Website+Background"
              alt="Organic background"
            />
            <div className="hero-overlay"></div>
          </div>

          <div className="hero-content">
            <div className="hero-header">
              <img
                src="https://placehold.co/80x80/4CAF50/FFFFFF?text=O2+Logo"
                alt="O2 Park Logo"
                className="hero-logo"
              />
              <div className="hero-text-container">
                <h1 className="hero-title">
                  O2 PARK
                </h1>
                <p className="hero-subtitle">
                  My Adda
                </p>
              </div>
            </div>
            
            <h2 className="intro-text">घर स अतरषय सर तक</h2>
            <p className="intro-paragraph">
              O2 Park is a revolutionary Platform connecting Self-Sustainable Environment & Economy
            </p>
          </div>
        </section>

        {/* WHO WE ARE section */}
        <section className="section-padding who-we-are-section">
          <h2 className="intro-text">WHO WE ARE</h2>
          <p className="intro-paragraph">
            S2E2 is the heart of every initiative - where natural resources regenerate themselves and communities prosper without dependency.
          </p>
          
          <div className="impact-area-list">
            <h3 className="intro-text">Impact Area</h3>
            <ul className="impact-area-list">
              <li>Ecological Restoration</li>
              <li>Economic Transformations</li>
              <li>Social Transformations</li>
              <li>Spiritual & Wellness Retreat</li>
            </ul>
          </div>
        </section>

        {/* VISION AND DRIVING PHILOSOPHY section */}
        <section className="section-padding vision-section">
          <h2 className="intro-text">VISION AND DRIVING PHILOSOPHY</h2>
          <p className="intro-paragraph">
            To create Eco-Friendly & Sustainable Living Models in harmony with nature, while restoring ecological balance and empowering rural communities.
          </p>
          <div className="mt-6">
            <h3 className="intro-text">Our Driving Philosophy – S2E2</h3>
            <p className="intro-paragraph">
              Self-Sustainable Environment & Economy. S2E2 is the heart of every initiative - where natural resources regenerate themselves and communities prosper without dependency.
            </p>
          </div>
        </section>

        {/* Milestones section */}
        <section className="section-padding milestones-section">
          <h2 className="intro-text">Milestones of O2 (my adda)</h2>
          <img
            src="https://placehold.co/300x50/FFFFFF/000000?text=Milestones+Timeline"
            alt="Milestones timeline"
            className="rounded-lg"
          />
        </section>

        {/* OUR STRATEGIC PARTICIPATION section */}
        <section className="section-padding participation-section">
          <h2 className="intro-text">OUR STRATEGIC PARTICIPATION</h2>
          <div className="partner-grid">
            <img src="https://placehold.co/100x100/FFF8DC/000000?text=Partner1" alt="Partner 1" />
            <img src="https://placehold.co/100x100/A0522D/FFFFFF?text=Partner2" alt="Partner 2" />
            <img src="https://placehold.co/100x100/FFD700/000000?text=Partner3" alt="Partner 3" />
            <img src="https://placehold.co/100x100/C0C0C0/000000?text=Partner4" alt="Partner 4" />
            <img src="https://placehold.co/100x100/FF6347/FFFFFF?text=Partner5" alt="Partner 5" />
            <img src="https://placehold.co/100x100/4682B4/FFFFFF?text=Partner6" alt="Partner 6" />
            <img src="https://placehold.co/100x100/CD5C5C/FFFFFF?text=Partner7" alt="Partner 7" />
            <img src="https://placehold.co/100x100/20B2AA/FFFFFF?text=Partner8" alt="Partner 8" />
          </div>
        </section>

        {/* Footer section with contact details */}
        <footer className="footer">
          <div className="footer-content">
            <h3>O2 Park & Ventures Private Limited</h3>
            <p>
              Talun, Barwani<br />
              Madhya Pradesh 451551<br />
              India
            </p>
            <p>
              <span className="bold-text">Contact Details:</span><br />
              9081039222<br />
              8827738222
            </p>
            <p>
              <span className="bold-text">Email:</span> info@o2myadda.com<br />
              <span className="bold-text">Website:</span> www.o2myadda.com
            </p>
            <p className="copyright">
              © all rights reserved to O2myadda
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;

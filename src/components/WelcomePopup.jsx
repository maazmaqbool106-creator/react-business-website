import { useState, useEffect } from "react";
import Logo from "../assets/Logo.png";

function WelcomePopup() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Lock body scrolling when popup is open
    document.body.style.overflow = "hidden";

    // Set a timer to close the popup after 4.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "auto";
    }, 4500);

    // Cleanup function to clear timeout and restore scroll
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    document.body.style.overflow = "auto";
  };

  if (!isVisible) return null;

  return (
    <div className="popup-overlay" onClick={handleClose}>
      <div className="popup-card" onClick={(e) => e.stopPropagation()}>
        <button 
          className="popup-close-btn" 
          onClick={handleClose} 
          aria-label="Close popup"
        >
          &times;
        </button>
        <div className="popup-content">
          <div className="popup-icon-container">
            <img src={Logo} alt="MSICS Logo" className="popup-logo" />
          </div>
          <h2>Welcome to MSICS</h2>
          <p className="popup-tagline">Psilocybin Pioneers</p>
          <p className="popup-description">
            Developing and providing innovative naturally sourced GMP psilocybin. We are loading your portal experience...
          </p>
          <div className="popup-timer-container">
            <div className="popup-timer-bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePopup;

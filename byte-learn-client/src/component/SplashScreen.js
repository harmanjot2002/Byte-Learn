import React, { useState, useEffect } from 'react';
import './SplashScreen.css'; 

const SplashScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    loading && (
      <div className="splash-screen">
        <div className="loading-image"></div>
      </div>
    )
  );
};

export default SplashScreen;
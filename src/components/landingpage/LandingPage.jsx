import { useState, useEffect } from 'react';
import './LandingPage.css';
import LeftSide from './landingpage_components/LeftSide';
import RightSide from './landingpage_components/RightSide';

function LandingPage() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <main className="landing-main">
        <div className="landing-area">
          <LeftSide />
          <RightSide />
        </div>
        <div className={`chevron ${active ? "scrolldown-disappear" : ""}`}>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </main>
    </>
  );
}

export default LandingPage;

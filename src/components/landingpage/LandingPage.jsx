import { useState } from 'react'
import './LandingPage.css'
import LeftSide from './landingpage_components/LeftSide'
import RightSide from './landingpage_components/RightSide'

function LandingPage() {

  const [active, setActive] = useState(false);

  return (
    <>
      <main className="landing-main">
        <div className="landing-area">
          <LeftSide />
          <RightSide />
        </div>
        <div onClick={() => { setActive(true); handleClick(); }} className={`chevron ${active ? "scrolldown-disappear" : ""}`}><i className="fa-solid fa-chevron-down"></i></div>
      </main>
    </>
  )
}

export default LandingPage

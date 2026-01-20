import './LandingPage.css'
import LeftSide from './landingpage_components/LeftSide'
import RightSide from './landingpage_components/RightSide'

function LandingPage() {

  return (
    <>
      <main className="landing-main">
        <div className="landing-area">
          <LeftSide />
          <RightSide />
        </div>
        <div className="chevron"><i class="fa-solid fa-chevron-down"></i></div>
      </main>
    </>
  )
}

export default LandingPage

import './LandingPage.css'
import LeftSide from './landingpage_components/LeftSide'

function LandingPage() {

  return (
    <>
      <main className="landing-main">
        <div className="landing-area">
          <LeftSide />
          <div className="ambiente-circle"></div>
        </div>
      </main>
    </>
  )
}

export default LandingPage

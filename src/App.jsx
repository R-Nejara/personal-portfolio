import './App.css'
import About from './components/aboutme/About.jsx'
import Footer from './components/footer/Footer.jsx'
import LandingPage from './components/landingpage/LandingPage'
import SelectedProjects from './components/selected_projects/SelectedProjects.jsx'
import Upcomming from './components/upcomming/Upcomming.jsx'

function App() {

  return (
    <>
      <LandingPage />
      <SelectedProjects />
      <About />
      <Upcomming/>
      <Footer/>
    </>
  )
}

export default App

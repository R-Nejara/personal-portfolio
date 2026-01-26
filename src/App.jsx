import './App.css'
import About from './components/aboutme/About.jsx'
import LandingPage from './components/landingpage/LandingPage'
import SelectedProjects from './components/selected_projects/SelectedProjects.jsx'

function App() {

  return (
    <>
      <LandingPage />
      <SelectedProjects />
      <About />
    </>
  )
}

export default App

import './SelectedProjects.css'
import Card from './Card.jsx'
import data from './CardData.js'
function SelectedProjects() {


  return (
    <>
      <div className="selected-projects-main">
        <div className="selected-projects-area">
          <div className="title">
          </div>
          <div className="title">
            <h2 className="card-heading">portfolio</h2>
            <h1 className="card-type-heading">ausgewählte projekte</h1>
            <h3 className="description-heading">eine zusammenfassung von meinen Projekten
              mit Dokumentierung auf Github</h3>
          </div>
          <div id='cards' className="card-section">
            {data.map((content) => {
              return <Card data={content} />
            })}
          </div>
          <a href="https://github.com/R-Nejara?tab=repositories"><button className="btn card-button all-projects-btn">Alle Projekte <i className="fa-brands fa-github"></i></button></a>
        </div>
      </div>
    </>
  )
}

export default SelectedProjects

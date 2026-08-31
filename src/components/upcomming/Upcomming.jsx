import upcommingImg from '/images/upcomming.png'
import sternhalmaImg from '/images/sternhalma.png'
import './Upcomming.css'

const projects = [
  {
    title: 'boardle',
    description: 'mein neustes Projekt ist eine multiplayer Brettspiel Plattform mit einer großen Auswahl üblicher Brettspiele REVISIONED',
    img: upcommingImg,
    imgAlt: 'boardle',
  },
  {
    title: 'sternhalma',
    description: 'ein interaktiver Sternhalma-Klon mit schlichtem Design, klaren Regeln und flüssigem Gameplay – inspiriert vom klassischen chinesischen Sternhalma.',
    img: sternhalmaImg,
    imgAlt: 'sternhalma',
  },
]

function Upcomming() {

  return (
    <>
      <div className="upcomming-main">
        <div className="upcomming-section">
          <h2 className="upcomming-heading">neuste projekte</h2>
          <div className="upcomming-cards">
            {projects.map((project) => (
              <div key={project.title} className="upcomming-card">
                <h2 className="upcomming-title">{project.title}</h2>
                <h3 className="upcomming-description">{project.description}</h3>
                <div className="upcomming-img"><img src={project.img} alt={project.imgAlt} /></div>
                <button className="boardle-button disabled-btn"><span className="mehr">mehr</span><span className="zu">zu</span></button>
                <p className="wip-text">work in progress</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Upcomming

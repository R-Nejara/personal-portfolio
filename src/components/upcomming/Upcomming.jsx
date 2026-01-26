import './Upcomming.css'
function Upcomming() {

  return (
    <>
      <div className="upcomming-main">
        <div className="upcomming-section">
          <h2 className="upcomming-heading">neustes projekt</h2>
          <h2 className="upcomming-title">boardle</h2>
          <h3 className="upcomming-description">mein neustes Projekt ist eine multiplayer Brettspiel Plattform
            mit einer großen Auswahl üblicher Brettspiele REVISIONED</h3>
          <div className="upcomming-img"><img src="/images/upcomming.png" alt="upcomming" /></div>
          <button className="boardle-button disabled-btn"><span className="mehr">mehr</span><span className="zu">zu</span></button>
          <p className="wip-text">work in progress</p>
        </div>
      </div>
    </>
  )
}

export default Upcomming

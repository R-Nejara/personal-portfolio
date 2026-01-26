import './About.css'
function About() {

  return (
    <>
      <div className="about-main">
        <div className="about-section">
          <div className="car-img"><img src="/public/images/Car.png" alt=""/></div>
          <h2 className="about-type-title">über mich</h2>
          <h1 className="about-title">wer bin ich?</h1>
          <p className="about-description">Hey, Ich bin <b>Rayan und 20 Jahre jung.</b><br />
            Meine Technik Begeisterung begann bereits im Alter von elf Jahren, wobei ich <b>mit 13 schon meine erste Webseite entwickelte.</b><br /><br />
            Das Gefühl etwas<b> zu Entwickeln, was es davor noch nicht gab</b> ist
            das, was mich heute noch dazu bewegt immer wieder neue Ideen umzusetzen<br /><br />
            Ich Dokumentiere gerne meine Fortschritte und das <b>nicht nur um zu zeigen, was ich bisher erreicht habe</b>, sondern, um einen Ort bereitzustellen meine Projekte aus einer <b>persönlichen Perspektive zu beschreiben.</b><br /><br />
            Aktuell <b>studiere ich noch Informatik</b> an einer Technischen Hochschule mit dem <b>Ziel in die Automotive Branche einzusteigen</b> und ein aktiver Bestandteil eines wertvollen Teams zu werden. </p>
        </div>
      </div>
    </>
  )
}

export default About

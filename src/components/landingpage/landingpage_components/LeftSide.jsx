function LeftSide() {

  return (
    <>
      <main>
        <h4 className="introduction-title">web developer & ui/ux designer</h4>
        <h1 className="name"><span className="first-name">rayan</span><span className="last-name">nejara</span></h1>
        <h3 className="location"><i class="gps fa-solid fa-location-dot"></i><span>germany</span></h3>
        <div className="tech-stack">
          <ul className="skill-list">
            <li className="skill skill1"><div className="icon-border"><i className="fa-brands fa-figma"></i></div><span>Figma</span></li>
            <li className="skill skill2"><div className="icon-border"><i className="fa-solid fa-pen-nib"></i></div><span>UI/UX Design</span></li>
            <li className="skill skill3"><div className="icon-border"><i className="fa-brands fa-js"></i></div><span>JavaScript</span></li>
            <li className="skill skill4"><div className="icon-border"><i className="fa-brands fa-html5"></i></div><span>HTML</span></li>
            <li className="skill skill5"><div className="icon-border"><i className="fa-brands fa-css3-alt"></i></div><span>CSS</span></li>
          </ul>
        </div>
        <p className="person-description">
          Ich entwickle Webapps, um Ideen kreativ umzusetzen und fertige Projekte zu schaffen,
          die meine Begeisterung für Technik widerspiegeln – von virtuellen Showrooms bis zu interaktiven Experimenten.
        </p>
        <div className="landing-buttons">
          <a href="#"><button className="btn project-btn">projekte<i class="fa-solid fa-arrow-down"></i></button></a>
          <a href="#"><button className="btn contact-btn">kontakt</button></a>
        </div>
      </main>
    </>
  )
}

export default LeftSide

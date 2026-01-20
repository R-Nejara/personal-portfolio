function LeftSide() {

  return (
    <>
      <h4 className="introduction-title">web developer & ui/ux designer</h4>
      <h1 className="name"><span className="first-name">rayan</span><span className="last-name">nejara</span></h1>
      <h3 className="location"><i class="gps fa-solid fa-location-dot"></i><span>germany</span></h3>
      <div className="tech-stack">
        <ul className="skill-list">
          <li className="skill skill1"><i class="fa-brands fa-figma"></i><span>Figma</span></li>
          <li className="skill skill2"><i class="fa-solid fa-pen-nib"></i><span>UI/UX Design</span></li>
          <li className="skill skill3"><i class="fa-brands fa-js"></i><span>JavaScript</span></li>
          <li className="skill skill4"><i class="fa-brands fa-html5"></i><span>HTML</span></li>
          <li className="skill skill5"><i class="fa-brands fa-css3-alt"></i><span>CSS</span></li>
        </ul>
      </div>
      <p>
        Ich entwickle Webapps, um Ideen kreativ umzusetzen und fertige Projekte zu schaffen,
        die meine Begeisterung für Technik widerspiegeln – von virtuellen Showrooms bis zu interaktiven Experimenten.
      </p>
      <div className="landing-buttons">
      <button className="btn project-btn">projekte</button>
      <button className="btn contact-btn">kontakt</button>
      </div>
    </>
  )
}

export default LeftSide

import './SelectedProjects.css'

function Card(props) {
  console.log(props)

  return (
    <>
      <div className="card">
        <div className="card-img"><img src={props.data.img} alt="" /></div>
        <div className="card-title"> <h1>{props.data.title}</h1> </div>
        <div className="card-line"></div>
        <div className="technology-list">
          <div className="technology technology1">{props.data.technologys[0]}</div>
          <div className="technology technology2">{props.data.technologys[1]}</div>
        </div>
        <div className="card-description">
          <p>
            {props.data.description}
          </p>
        </div>
        <a href={props.data.link}><button className="btn card-button"><i className="fa-solid fa-book-open"></i> GitHub</button></a>
      </div>
    </>
  )
}

export default Card


function Card(props) {
  const { title, author, year, language, country, imageLink } = props.data;
  const { click, exist } = props;

  return (

    <div className="card" style={{ width: "25%" }} >
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">{title}</h5>
          <i onClick={() => { click(props.data, exist) }} style={{ color: "orange", cursor: "pointer", fontSize: "22px" }} className={`${exist ? 'fa-solid' : 'fa-regular'} fa-star`}></i>
        </div>
        <h6 className="card-subtitle mb-2 text-body-secondary">{author}</h6>
        <p className="card-text">{language}</p>
        <p className="card-text">{country}</p>
        <p className="card-text">{year}</p>

      </div>
    </div>

  )
}

export default Card
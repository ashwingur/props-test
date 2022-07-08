export default function Card(props) {
  return (
    <div className="full_card">
      <div className="card">
        <img className="card--image" src={props.imageUrl} />
        <div className="card--details">
          <div>
            <img
              className="card--location_icon"
              src={require("../images/location_icon.png")}
            />
            <span className="card--location">{props.location}</span>
            <a className="card-url" href={props.googleMapsUrl}>
              View on Google Maps
            </a>
          </div>
          <h2>{props.title}</h2>
          <p className="card--dates">
            {props.startDate} - {props.endDate}
          </p>
          <p>{props.description}</p>
        </div>
      </div>
      {!props.isLast && <hr />}
    </div>
  );
}

export default function Card(props) {
  return (
    <div className="card">
      <img className="card--image" src={props.imageUrl} />
      <div className="card--details">
        <div>
          <img src={require("../images/location_icon.png")} />
          <span>{props.location}</span>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2>{props.title}</h2>
        <p className="card--dates">
          {props.startDate} - {props.endDate}
        </p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

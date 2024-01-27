import reactImage from "./1.jpg";

const CardDisplay = (props) => {
  console.log(props);

  return (
    <div className="card" style={{ width: 300 }}>
      <img className="card-img-top" src={reactImage} alt="Card image" style={{ width: "100%" }} />
      <div className="card-body">
        <h4 className="card-title" style={{color:props.color}}>{props.name}</h4>
        <p className="card-text" >{props.profile.designation}</p>
        <p className="card-text" >{props.profile.salary}</p>

        <a href="#" className="btn btn-primary">
          See Profile
        </a>
      </div>
    </div>
  );
};

export default CardDisplay;

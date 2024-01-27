
import reactImage from "./2.jpg";

const InsertCard=(props)=>{
    console.log(props)
    return(
<div className="container">
        <h2>Card Image</h2>
        <p>Image at the top:</p>
        <div className="card" style={{ width: '400px' }}>
          <img
            className="card-imgage"
            src={reactImage}
            alt="Card image"
            style={{ width: '100%' }}
          />
          <div className="card-body">
            <h4 className="card-title">{props.profile.name}</h4>
            
            <h3 className="card-title">{props.profile.color}</h3>

            <p className="card-text" >
            {props.profile.age}
            </p>
            <a href="#" className="btn btn-primary">
              See Profile
            </a>
          </div>
        </div>
      </div>
    )
}
export default InsertCard
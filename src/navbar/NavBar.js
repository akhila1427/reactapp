import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataShare } from "../navigation/navigation";

const NavBar = () => {
  const sharedContext=useContext(DataShare)
  console.log(sharedContext)
  const{name}=sharedContext
    const link={textDecoration:"none",color:"black",margin:"10px"}
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <div className="container-fluid"  style={{backgroundColor:"lightskyblue",padding:"20px"}}>
        <ul className="navbar-nav" >
          <li className="nav-item">
            <Link to="/" style={link}>{name}</Link>
          </li>
          <li className="nav-item">
            <Link to="/AboutPage" style={link}>ABOUT</Link>
          </li>
          <li className="nav-item">
            <Link to="/SettingsPage" style={link}>SETTING</Link>
          </li>
          <li className="nav-item">
            <Link to="/ProductsPage" style={link}>PRODUCT</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

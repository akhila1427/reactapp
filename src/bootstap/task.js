import TableFormat from "./tasktable"
import FormsInput from "./taskform";
const Task=()=>{
    const tableDetails=[
      {
        name:"rohith",
        Lastname:"Reddy",
        email:"rohithreddy@gmail.com"
      
      },
      {
        name:"akhila",
        Lastname:"Reddy",
        email:"akhilareddy@gmail.com"
      },
      {
        name:"laxmi",
         Lastname:"Reddy",
          email:"laxmireddy@gmail.com"
      }
      
    ];
    return(
      <>
<nav className="navbar navbar-expand-sm bg-light">
<ul className="navbar-nav" style={{backgroundColor:"lightblue", width:"100%"}}>
  <li className="nav-item" >
    <a className="nav-link" href="https://www.w3schools.com/bootstrap4/bootstrap_navbar.asp">Link 1</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="https://www.w3schools.com/bootstrap4/tryit.asp?filename=trybs_navbar&stacked=h">Link 2</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="https://www.youtube.com/shorts/TezSWd4qwng">Link 3</a>
  </li>
</ul>
</nav>
<table className="table table-dark table-striped">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {tableDetails.map((profile, index) => (
              <tr key={index}>
                <td>{profile.name}</td>
                <td>{profile.Lastname}</td>
                <td>{profile.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <FormsInput/>
<hr/>
        <footer style={{backgroundColor:"lightblue"}}>
          <p>These is my website you can view</p>
        </footer>
</>

    )
}
export default Task
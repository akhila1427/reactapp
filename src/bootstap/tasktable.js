const TableFormat=(props)=>{
    console.log(props)

    return(
        <div className="container">
  <h2>Dark Striped Table</h2>
  <p>Combine .table-dark and .table-striped to create a dark, striped table:</p>            
  <table className="table table-dark table-striped">
    <thead>
      <tr>
        <th>Firstname </th>
        <th>Lastname </th>
        <th>Email </th>
      </tr>
    </thead>
    <tbody>
      <tr>
       
        {props.profile.name}
     
      </tr>
      <tr>
       
        {/* {props.profile.Lastname} */}
     
      </tr>
      <tr>
      {props.profile.email}
 
      </tr>
    </tbody>
  </table>
</div>

    )
}
export default TableFormat
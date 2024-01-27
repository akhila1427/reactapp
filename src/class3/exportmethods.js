// export const Name=()=>{
//     return(
//         <h1>hai akhila welcome to react class2</h1>
//     )
// }

// export const Name2=()=>{
//     return(
//         <h2>welcome to react export methods</h2>
//     )
// }
export const Method = () => {
    const details = {
      id: 1,
      title: "Hedy Lamarr's Todos",
      description: "Inventor and Actress",
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwdEEO-mCKk-1ZV-y9xarZawuakiH4VY381g&usqp=CAU",
      imageALT: "Hedy Lamarr",
      listItems: ["Invent new traffic lights", "Rehearse a movie scene", "Improve the spectrum technology"]
    };
  
    const { id, title, description, imageURL } = details;
  
    return (
      <div>
        <h1>{id}</h1>
        <h3>{title}</h3>
        <h3>{description}</h3>
        <img src={imageURL} alt={details.imageALT} />
        <form>
          <label htmlFor="fname">First name: {id}</label>
          <input type="text" id="fname" name="fname" /><br /><br />
          <label htmlFor="lname">Last name: {title}</label>
          <input type="text" id="lname" name="lname" /><br /><br />
          <label htmlFor="desc">Description: {description}</label>
          <input type="text" id="desc" name="desc" /><br /><br />
          <label htmlFor="img">Image: {imageURL}</label>
          <input type="text" id="img" name="img" />
        </form>
      </div>
    );
  };
  
 
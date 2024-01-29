import { useState } from "react";

const RegistrationForm=()=>{

    const[UserName,setUserName]=useState("")
    const[Password,setPassword]=useState("")
    const[Email,setEmail]=useState("")
    const[Gender, setGender] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("");

    const[UserNameError,setUserNameError]=useState("")
    const[PasswordError,setPasswordError]=useState("")
    const[EmailError,setEmailError]=useState("")
    const[ConfirmPasswordError, setConfirmPasswordError] = useState("")
  
 

const userNameHandler=(event)=>{
    setUserName(event.target.value)
    // console.log(event.target.value)
    if(event.target.value.length>10){
        setUserNameError("username is invalid")
      
    }
    else{setUserNameError("")}
}


const userPasswordHandler=(event)=>{
    setPassword(event.target.value)
    console.log(event.target.value)
const result=validatePassword(event.target.value)
if(result){
    console.log("password valid")
    setPasswordError("")
}
 else {
    setPasswordError("error")
 }  
}


const EmailHandler=(event)=>{
setEmail(event.target.value)
// console.log(event.target.value)
const Final=validateEmail(event.target.value)
if(Final){
    console.log("email id valid")
setEmailError("")
}
else{
setEmailError("email is invalid")
}
}

const GenderHandler = (event) => {
    setGender(event.target.value);
  };


  

const confirmPassHandler = (event) => {

    let pass = event.target.value

    const confirmPasswordValue = event.target.value;

console.log(confirmPasswordValue);

    if (confirmPasswordValue===pass) {
        setConfirmPasswordError("");


    } else {
        setConfirmPasswordError("Passwords do not match");
    }

    setConfirmPassword(confirmPasswordValue);
    console.log(confirmPasswordValue);
}


function validateEmail(email) {

    const regex = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)\.([a-zA-Z]{2,9})$/;
    if (!regex.test(email)) {
       console.log("enter a valid email")
        return false;
    }

    return true;
}


function validatePassword(psw) {
    let msg = true;

    switch (true) {
        case (psw.length < 8 || psw.length > 13):
            msg =  true;
            break;
        case !(/[0-9]/.test(psw)):
            msg = false;
            break;
        case !(/[a-z]/.test(psw)):
            msg = false;
            break;
        case !(/[A-Z]/.test(psw)):
            msg = false;
            break;
        case UserName && psw.includes(UserName):
            msg = false;
            break;
        default:
            break;
    }
    return msg;
}


const handleSubmit = (event) => {
    event.preventDefault();

    if (Password !== ConfirmPassword) {
        setConfirmPasswordError("Passwords do not match");
        return;
    } else {
        setConfirmPasswordError("");
        console.log("you have been successfully logged in")
    }

    const UserDetails = {
        UserName,
        Password,
        ConfirmPassword,
        Email,
        Gender,
    };
    console.log(UserDetails);
    alert("successfully registered")
   console.log("successfully logged in")
};

    return(
        <>
        <form onSubmit={handleSubmit}  style={{backgroundColor:"lightskyblue"}}>
    
          <div className="mb-3 mt-3">
         <label htmlFor="usr" className="form-label"> USERNAME</label>
            <input type="text" className="form-control" id="usr" placeholder="Enter username" name="pswd" value={UserName}  onChange={userNameHandler}/>
          {
            UserNameError?
        <h2 style={{color:"red"}}>{UserNameError}</h2>:
        null
          }
          
          </div>
        

          <div className="mb-3">
            <label htmlFor="pwd" className="form-label"> PASSWORD:</label>
            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" value={Password} onChange={userPasswordHandler}/>
            {
            PasswordError ?
        <h2 style={{color:"red"}}>{PasswordError}</h2>:
        null
          }
          </div>



          <div className="mb-3">
  <label htmlFor="confirmPwd" className="form-label">Confirm Password:</label>
  <input type="password"  className="form-control" id="confirmPwd" placeholder="Confirm password" name="confirmPwd" value={ConfirmPassword} onChange={confirmPassHandler}/>

  {
        ConfirmPasswordError
           ?
         
        <h2 style={{color:"red"}}>{ConfirmPasswordError}</h2>: null
        
          }
</div>



          <div className="mb-34">
            <label htmlFor="ema" className="form-label"> EMAIL:ID</label>
            <input type="email" className="form-control" id="ema" placeholder="Enter email" name="emaid" value={Email} onChange={EmailHandler}/>
            {
           EmailError?
        <h2 style={{color:"red"}}>{EmailError}</h2>:
        null
          }
          </div>


          <div className="mb-343">
  <label htmlFor="gen" className="form-label"> GENDER:</label><br/><br/>
  <input type="radio" id="male" name="gender" value="Male" onChange={GenderHandler}/>
  <label htmlFor="male">Male</label><br/><br/>
<input type="radio" id="female" name="gender" value="Female" onChange={GenderHandler}/>
  <label htmlFor="female">Female</label>
</div>
<br/><br/>

{
  !UserNameError && !PasswordError && !EmailError && !ConfirmPasswordError &&
  <button type="submit" className="btn btn-primary">Register Now</button>
}

        </form>
      </>
    );
    }
    export default RegistrationForm
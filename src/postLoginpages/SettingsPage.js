import { useContext } from "react";
import NavBar from "../navbar/NavBar";
import { DataShare } from "../navigation/navigation";

const SettingPage=()=>{

   const{darkTheme} =useContext(DataShare)
    return(
        <>
        <NavBar/>
        <div style={{ height:100,width:100,backgroundColor:darkTheme?"black":"red"}}></div>

        <h1>Welcome to settingpage in my webpage</h1>
        
        </>
    )
}

export default SettingPage;
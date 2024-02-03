import React from "react";
import {Route,Routes} from 'react-router-dom'
import InvalidPage from "../preLogin/invalidPage";
import LoginScreen from "../preLogin/loginPage";


function PreLogin(){
    return(
<Routes>
<Route path="/" Component={LoginScreen}/>
<Route path="/" Component={InvalidPage}/>
   </Routes>

    )
}
export default PreLogin
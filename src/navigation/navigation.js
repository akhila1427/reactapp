import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "../postLoginpages/HomePage"
import AboutPage from "../postLoginpages/AboutPage"
import ProductsPage from "../postLoginpages/ProductsPage"
import SettingsPage from "../postLoginpages/SettingsPage"
// import InvalidPage from "../postLoginpages/invalidPage"
import ProductDetails from "../postLoginpages/productDetails"
import { createContext, useState } from "react"
import LoginScreen from "../preLogin/loginPage"
import PostLogin from "./postLoginRoute"
import PreLogin from "./preLoginRoute"


export const DataShare=createContext()

const NavigationStack =()=>{

    const[name,setName]=useState("welcome to our website")
    const[darkTheme,setDarkTheme]=useState(false)
    const[login,setLogin]=useState(false)

    const changeTheme=()=>{
        setDarkTheme(!darkTheme)
    }

    const loginTrue=()=>{
        setLogin(true)
    }

    return(
        <DataShare.Provider  value={{name,darkTheme,changeTheme,loginTrue}}>
<BrowserRouter>

    {
        true?<PostLogin/>:<PreLogin/>

        
    }
</BrowserRouter>
        </DataShare.Provider>
   

    )
}

export default NavigationStack

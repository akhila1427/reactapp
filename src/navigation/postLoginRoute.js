import React from "react";
import { Route,Routes } from "react-router-dom";
import HomePage from "../postLoginpages/HomePage";
import AboutPage from "../postLoginpages/AboutPage";
import SettingsPage from "../postLoginpages/SettingsPage";
import ProductsPage from "../postLoginpages/ProductsPage";
import InvalidPage from "../preLogin/invalidPage";
import ProductDetails from "../postLoginpages/productDetails";
import context from "react-bootstrap/esm/AccordionContext";

function PostLogin(){
    return(

        <Routes>
            <Route path="/" Component={HomePage}/>
<Route path="/AboutPage" Component={AboutPage}/>
<Route path="/ProductsPage" Component={ProductsPage}/>
    <Route path="/SettingsPage" Component={SettingsPage}/>
    <Route path="/productlistview/:id" Component={ProductDetails}/>
    <Route path="*" Component={InvalidPage}/>

            </Routes>
          
          )
        }
        
       
export default PostLogin
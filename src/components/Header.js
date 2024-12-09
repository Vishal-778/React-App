import {LOGO_URL} from "../utils/constants";
import {useState,useEffect} from  "react";
import {Link} from "react-router-dom";

const Header = () =>
    {
        
        
        const[btnNameReact,setBtnNameReact]=useState("LOGIN");
        console.log("Header Render");
        useEffect(()=>{
            console.log("useEffect render");
        },[]);
        return(
            
         <div className="header">
            <div className="logo">
                <img className="logoimage" src={LOGO_URL} alt="" />
            </div>
            <div className="navitems" >
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <li>
                        <button className="login"
                            onClick={() => {
                                let btnName="LOGOUT";
                                setBtnNameReact(btnName);
                            }}>{btnNameReact}</button>
                        </li>
                    
    
                </ul>
            </div>
         </div>
        )
    }
    export default Header;
    
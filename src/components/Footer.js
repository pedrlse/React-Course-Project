import React from "react"
import twitter from '../Twitter Icon.png'
import github from '../GitHub Icon.png'
import facebook from '../Facebook Icon.png'
import instagram from '../Instagram Icon.png'
export default
function Footer() {
    return(
        <footer className="icons">
            <img src = {twitter} className="twitter"/>
            <img src = {github} className = "github"/>
            <img src = {facebook} className = "facebook"/>
            <img src = {instagram} className = "instagram"/>
        </footer>
    );
}
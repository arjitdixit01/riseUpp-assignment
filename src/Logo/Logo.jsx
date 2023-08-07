import React from "react";
import logo from "./Logo.png"
import styles from "./Logo.module.css"

function Logo() {
    return (
        <div className={styles.logo}>
         <img src={logo} alt="Logo" ></img>
        </div>
       
    )
}

export default Logo;
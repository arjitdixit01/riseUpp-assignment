import React from "react";
import styles from "./Navbar.module.css";


import Logo from "../Logo/Logo";
import Link from "../Link/Link";

function NavBar() {
    return (
        <nav className={styles.navbar}>
            <Logo />
            <Link/>
           
          
        </nav>
    )
}


export default NavBar;
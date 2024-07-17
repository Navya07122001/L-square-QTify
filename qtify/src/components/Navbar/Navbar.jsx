import React from "react";
import { Link } from "react-router-dom";

import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";
import Button from "../Button/Button";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
     <Button children={"Give Feedback"}/>
    </nav>
  );
}

export default Navbar;

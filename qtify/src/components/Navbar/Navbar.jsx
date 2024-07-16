import React from "react";
import { Link } from "react-router-dom";
import ButtonStyle from "../ButtonStyle/ButtonStyle";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

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
      <ButtonStyle>Give Feedback</ButtonStyle>
    </nav>
  );
}

export default Navbar;

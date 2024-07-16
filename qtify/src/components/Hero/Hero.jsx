import React from "react";
import styles from "./Hero.module.css";
import ButtonStyle from "../ButtonStyle/ButtonStyle";
function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <ButtonStyle>Hellooooooooo</ButtonStyle>
      <div>
        <img
          src={require("../../assets/headphone.png")}
          width={212}
          alt="headphones"
        />
      </div>
    </div>
  );
}

export default Hero;

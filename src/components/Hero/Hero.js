import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
// import Button from "../../styles/GlobalComponents/Button";
// import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <div
    style={{
      backgroundImage: `url(/images/pexels-leon-woods-535157.jpg)`,
      height: 500,
      width: "100%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: 20,
      boxShadow: "-1px -1px 15px 0px rgba(0, 0, 0, 0.75)",
    }}
  >
    <SectionTitle main center>
      Güçlenerek <br />
      Gelişmenizde
      <br /> Güvenli Liman
      <br /> G Psikoloji
    </SectionTitle>
  </div>
);

export default Hero;

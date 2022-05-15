import React from "react";

import { BannerTitle } from "../../styles/GlobalComponents";

const Banner = (props) => (
  <a
    href={props.url}
    target="_blank"
    style={{
      cursor: "pointer",
    }}
  >
    <div
      style={{
        backgroundImage: `${props.image}`,
        height: 300,
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: 20,
        boxShadow: "-1px -1px 15px 0px rgba(0, 0, 0, 0.75)",
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      <BannerTitle
        style={{
          color: `${props.color}`,
        }}
      >
        {props.text}
      </BannerTitle>
      {!!props?.icon && (
        <props.icon
          size="10vw"
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            margin: 20,
            color: `${props.color}`,
          }}
        />
      )}
    </div>
  </a>
);

export default Banner;

import React from "react";

// import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import {
  CardContainer,
  BlogCard,
  HeaderThree,
  Img,
  TitleBox,
} from "./PeopleCardStyles";

const PeopleCard = (props) => {
  return (
    <CardContainer>
      <a href={`/uzmanlarimiz/${props.url}`}>
        <BlogCard>
            <Img src={props.image} />
          <TitleBox>
            <HeaderThree title={props.title}>{props.title}</HeaderThree>
            <span>{props.subTitle}</span>
          </TitleBox>
        </BlogCard>
      </a>
    </CardContainer>
  );
};

export default PeopleCard;

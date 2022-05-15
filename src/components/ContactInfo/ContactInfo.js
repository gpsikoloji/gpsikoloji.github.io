import React from "react";
import { AiFillPhone, AiFillMail, AiOutlineWhatsApp } from "react-icons/ai";
import { MdMap } from "react-icons/md";

import {
  LinkColumn,
  LinkItem,
  LinkText,
  FlexContainer,
  FlexHalfBox,
} from "./ContactInfoStyles";
import GoogleMap from "../GoogleMap/GoogleMap";

const ContactInfo = () => {
  return (
    <FlexContainer>
      <FlexHalfBox>
        <LinkColumn>
          <LinkItem href="mailto:gpsikoloji06@gmail.com">
            <AiFillMail size="3rem" />
            <LinkText>gpsikoloji06@gmail.com</LinkText>
          </LinkItem>
          <LinkItem href="tel:+905332293256">
            <AiFillPhone size="3rem" />
            <LinkText>+90 533 229 3256</LinkText>
          </LinkItem>
          <LinkItem href="https://wa.me/+905332293256" target="_blank">
            <AiOutlineWhatsApp size="3rem" />
            <LinkText>WhatsApp</LinkText>
          </LinkItem>
          <LinkItem>
            <LinkText>
              ÇAYYOLU MAH.2673 CAD.GOLD N STATE İŞ MERKEZİ No:38 DAİRE 45
              Çankaya/ANKARA
            </LinkText>
          </LinkItem>
        </LinkColumn>
      </FlexHalfBox>
      <FlexHalfBox>
        <GoogleMap />
      </FlexHalfBox>
    </FlexContainer>
  );
};

export default ContactInfo;

import styled from "styled-components";

import { Layout } from "../layout/Layout";

import { Section } from "../styles/GlobalComponents";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "/images/office/office_0.jpg",
    caption: "office_0",
  },
  {
    url: "/images/office/office_1.jpg",
    caption: "office_1",
  },
  {
    url: "/images/office/office_2.jpg",
    caption: "office_2",
  },
  {
    url: "/images/office/office_3.jpg",
    caption: "office_3",
  },
  {
    url: "/images/office/office_4.jpg",
    caption: "office_4",
  },
  {
    url: "/images/office/office_5.jpg",
    caption: "office_5",
  },
  {
    url: "/images/office/office_6.jpg",
    caption: "office_6",
  },
  {
    url: "/images/office/office_7.jpg",
    caption: "office_7",
  },
  {
    url: "/images/office/office_8.jpg",
    caption: "office_8",
  },
  {
    url: "/images/office/office_9.jpeg",
    caption: "office_9",
  },
  {
    url: "/images/office/office_10.jpeg",
    caption: "office_10",
  },
];

export const Description = styled.p`
  font-weight: 500;
  color: ${(props) => props.theme.colors.cardText};
  padding: 0.5rem 0;
  font-size: 2rem;
  & ul {
    padding-left: 3rem;
    & li {
      line-height: 3rem;
    }
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 2rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.5rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
  }
`;

export const Title = styled.h4`
  font-weight: bold;
  color: ${(props) => props.theme.colors.cardText};
  padding: 0.5rem 0;
  font-size: 2rem;
  & ul {
    padding-left: 3rem;
    & li {
      line-height: 3rem;
    }
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 2rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.5rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
  }
`;

const ServiceDetail = (props) => {
  return (
    <Layout>
      <Section>
        <Description>
          <h3>
            <strong>Misyonumuz</strong>
          </h3>
          <p>
            <br />
            Psikoterapi ve danışmanlık alanında bilgi birikimi ve yetkinliğiyle
            uzman psikologlarımızla, etik
            <br />
            kurallara bağlı kalarak danışanlarımızın g&uuml;&ccedil;lenerek
            gelişme yolculuğunda eşlik etmeyi
            <br />
            hedefledik. Her zaman değişime, gelişime ve yenilenmeye a&ccedil;ık
            kalarak; danışanların &uuml;st&uuml;n
            <br />
            yararını &ouml;ncelemeyi, mesleki sınırlarımızı ve
            sorumluluklarımızın farkında olmayı, d&uuml;r&uuml;st olmayı,
            <br />
            insan haklarına saygılı olmayı ve hi&ccedil;bir ayrımcılık yapmadan
            g&uuml;venli liman olmayı ilke edindik.
          </p>
          <p>
            <br />
            G&uuml;&ccedil;lenerek Gelişmenizde G&uuml;venli Liman
            <br />G Psikoloji
          </p>
        </Description>
      </Section>
      <Section>
        <Title>Ofisimizden Kareler</Title>
        <div className="slide-container">
          <Slide
            style={{ boxShadow: "-1px -1px 15px 0px rgba(0, 0, 0, 0.75)" }}
          >
            {slideImages.map((slideImage, index) => (
              <div className="each-slide" key={index}>
                <div
                  style={{
                    backgroundImage: `url(${slideImage.url})`,
                    height: 500,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* <span>{slideImage.caption}</span> */}
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </Section>
    </Layout>
  );
};

export default ServiceDetail;

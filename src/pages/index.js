// import Acomplishments from "../components/Acomplishments/Acomplishments";
// import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
// import Projects from "../components/Projects/Projects";
// import Technologies from "../components/Technologies/Technologies";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Banner from "../components/Banner/Banner";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Home = () => {
  return (
    <Layout>
      <Section>
        <Hero />
        {/* <BgAnimation /> */}
      </Section>
      <Section>
        <Banner
          url={"https://wa.me/+905332293256"}
          text={"Randevu Alın"}
          image={"url(/images/pexels-jess-bailey-designs-1558691.jpg)"}
          icon={AiOutlineWhatsApp}
          color="#075E54"
        />
      </Section>
      {/* <Projects />
      <Technologies />
      <Acomplishments /> */}
    </Layout>
  );
};

export default Home;

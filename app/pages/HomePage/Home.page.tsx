import React , { useEffect } from "react";
import Header from "../../components/Header/HeaderComponents";
import { Container } from "@mui/material";
import "./MainPageStyles.scss";
import { AdvantagesCardInfo } from "../../assets/Advantages";
import Card from "../../components/Cards/CardComponent";

import OurGift from "../../components/OurGift/OurGiftComponent";
import OurWorks from "../../components/OurWorks/OurWorksComponent";
import OurGuarantees from "../../components/OurGuarantees/OurGuaranteesComponents";
import ContactForm from "../../components/ContactForm/ContactFormComponent";
import Footer from "../../components/Footer/FooterComponents";
import AOS from "aos";
import "aos/dist/aos.css";
const HomePage = () => {  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div>
      <Header />
      <div className="mainPageHolder">
        <video
          className="video-player"
          autoPlay={true}
          disablePictureInPicture={true}
          disableRemotePlayback={true}
          loop={true}
          muted={true}
          preload="auto"
          playsInline={true}
          crossOrigin="anonymous"
        >
          <source
            src="https://uploads-ssl.webflow.com/570118c96d89fd540a96498d/5713d0ada39927f6421c92f2_Fountain-In-Park-transcode.mp4"
            type="video/mp4"
          />
          Ваш браузер не поддерживает видео.
        </video>
        <Container className="subTextOnVideo" maxWidth="md">
          <h1>
            Проектирование
            <span> садового дизайна</span> и <span>благоустройство </span>
            территории
          </h1>
          <div className="horizontalSeparator"></div>
          <p>
            Только до 30 февраля вызов специалиста совершенно{" "}
            <span>бесплатно</span>.
          </p>
          <button>Заказать вызов мастера</button>
        </Container>
      </div>
      <Container className="contentContainer" maxWidth="md">
        <h2>Преимущества работы с нами</h2>
        <div className="horizontalSeparatorVer2"></div>
      </Container>
      <div className="AdvantagesCardHolder">
        {AdvantagesCardInfo.map((elem, index) => {
          return (
            <Card
              key={index}
              iconSrc={elem.iconSrc}
              text={elem.text}
              index={index}
            />
          );
        })}
      </div>
  
      <OurGift />

      <OurWorks />

      <OurGuarantees />

      <ContactForm />

      <Footer />
      <div className = "authorContainer"  data-aos="zoom-in" data-aos-delay="1000">
        made by Aivanii
      </div>
    </div>
  );
};

export default HomePage;

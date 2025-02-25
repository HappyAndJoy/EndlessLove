import React, { useEffect } from "react";//useState
import { Layout } from "antd";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";
import "antd/dist/antd.css";
import Gallery from "../components/gallery";
import Greeting from "../components/greeting";
import Title from "../components/title";
import "../styles/index.css";

import GroovePaper from "../assets/GroovePaper.png";
import Location from "../components/location";
import CongratulatoryMoney from "../components/congratulatoryMoney";
import Share from "../components/share";
// import Quote from "../components/quote";
// import Song from "../assets/song.mp3";

import AOS from "aos";
import "aos/dist/aos.css";

// markup
const { Footer } = Layout;

const Wrapper = styled.div`
  background: #FFFBE6;
  background-image: url(${GroovePaper});
  width: 100%;
`;


const IndexPage = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
    document.head.appendChild(script);

    return () => {
      document.head.romoveChile(script);
    };
  }, []);
// [] -> 렌더링시 1회 실행
// [something] -> something이 변할 때 마다, 렌더링 재실행

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  });
  return (
    <Wrapper>
      {/* <audio autoPlay loop>
        <source src={Song} />
      </audio> */}
      <Title />
      <Greeting />
      <Gallery/>
      <Location />
      {/* <Quote /> */}
      <CongratulatoryMoney />
      <Share />
      <Footer
        style={{
          // background: "#D7CCC8",
          background: "#D7CCC8",
          backgroundImage: `url(${GroovePaper})`,
          opacity: 0.6,
          textAlign: "center",
        }}
      >        
      </Footer>
    </Wrapper>
  );
};

export default IndexPage;
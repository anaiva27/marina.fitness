import React from "react";
import styled from "styled-components";
// import img1 from "./img/CERT1.png";
import img1 from "./img/CERT1-1.png";
import img7 from "./img/CERT2-2.png";
import img2 from "./img/CERT2.png";
import img3 from "./img/CERT3.png";
import img4 from "./img/CERT4.png";
import img5 from "./img/CERT5.png";
import img6 from "./img/CERT6.png";
// import img7 from "./img/CERT7.png";

export const Certificate = () => {
  return (
    <Wrapper id="Experience">
      <Container>
        <MainHeading>Experience You Can Trust</MainHeading>
        <SubHeading>
          Marina completed over 500 hours yoga teacher training Empowered yoga,
          Dimitra yoga, Flow school with Bonnie Weeks. Including these
          certificates and training workshops
        </SubHeading>
        <Row>
          <div>
            <img src={img1} alt="nasm certificate" />
          </div>
          <div>
            <img src={img2} alt="nasm certificate" />
          </div>
          <div>
            <img src={img3} alt="nasm certificate" className="center" />
          </div>
        </Row>
        <Row>
          <div>
            <img src={img4} alt="nasm certificate" />
          </div>
          <div>
            <img src={img5} alt="nasm certificate" />
          </div>

          <div>
            <img src={img6} alt="nasm certificate" />
          </div>
          <div>
            <img src={img7} alt="nasm certificate" />
          </div>
        </Row>
        <Row className="mobile">
          <div>
            <img src={img3} alt="nasm certificate" />
          </div>
        </Row>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin: 30px auto;
  background-color: #191919;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0px auto;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
`;
const MainHeading = styled.h1`
  font-size: 60px;
  color: #bebebe;
  text-align: center;
`;
const SubHeading = styled.p`
  font-size: 18px;
  color: #fff;
  text-align: center;
  line-height: 130%;
  @media (max-width: 768px) {
    font-size: 18px !important;
  }
`;
const Row = styled.div`
  width: 100%;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 75px;

  & > div > img {
    display: block;
    width: 100%;
    object-fit: contain;
    max-width: 200px;
  }
  &.mobile {
    display: none;
    @media (max-width: 768px) {
      display: block;
      img {
        max-width: 200px;
        margin: auto;
      }
    }
  }
  & > div > img.center {
    @media (max-width: 768px) {
      display: none;
    }
  }
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

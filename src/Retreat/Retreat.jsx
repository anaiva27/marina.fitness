import React from "react";
import heroImg from "./assets/hero-img.png";
import exploreImg from "./assets/explore-img.png";
import logoImg from "./assets/Samahdi-logo1.png";
import wallpaper1 from "./assets/wallpaper1.jpeg";
import mandalaImg from "./assets/mandala21.png";
import women1 from "./assets/women1.jpg";
import amberImg from "./assets/amberImg1.png";
import marinaImg from "./assets/marinaImg1.png";
import styled, { css } from "styled-components";

export const Retreat = () => {
  return (
    <>
      <HeroSection>
        <img src={heroImg} alt="" />
      </HeroSection>
      <IntroSection>
        <Mandala src={mandalaImg} alt="" />
        <Content>
          <H1>WHAT WOULD IT BE LIKE LIVING A LIFE AS A CELEBRATION?</H1>
          <h3>Get in touch with your sacred feminine power</h3>
          <Body>
            In today's hectic world, many of us experience disconnection,
            navigating on autopilot through the burdens of stress, work, family
            responsibilities, and health challenges.{" "}
            <strong>
              Welcome to women’s retreat at the magical land of Peru
            </strong>
            , where we offer a pathway to dissolve emotional barriers,
            rediscover vibrant health, and awaken the blissful woman within you.
          </Body>
          <ButtonPrimary>The time is now</ButtonPrimary>
        </Content>
      </IntroSection>
      <ExploreSection>
        <img src={exploreImg} alt="" />
        <Logo src={logoImg} alt="" />
        <Body>
          Samadhi is a serene and eco-conscious retreat center situated in the
          Andes Mountains of Sacred Valley, Peru. Founded by mindful
          individuals, it serves as a{" "}
          <strong>
            sanctuary for healing, sacred reciprocity, and communion
          </strong>{" "}
          with Pacha Mama (Mother Earth) and the Divine.
          <br />
          <br />
          Built with heartfelt intention, the center cultivates organic
          vegetables on-site, prepares food with blessings, and fosters a warm
          and inviting atmosphere where joy, connection, and deep healing
          thrive.
          <br />
          <br />
          Samadhi Center at the sacred land of Peru is an ideal destination for
          your next journey — a journey focused on cultural immersion,
          awe-inspiring nature,{" "}
          <strong>embodying feminine practices, self-nourishment</strong>, and
          hitting the reset button in our busy lives.
        </Body>
        <ButtonPrimary>Reserve your spot</ButtonPrimary>
      </ExploreSection>
      <WideImg src={wallpaper1} alt="" />
      <Description>
        <SideImage>
          <img src={women1} alt="" />
        </SideImage>
        <SideContent>
          <H1>This is a retreat for women who:</H1>
          <ul role="list">
            <li>
              <Body>
                <strong>—</strong> feel drawn to take a week long pause from
                their lives to nourish their system
              </Body>
            </li>
            <li>
              <Body>
                <strong>—</strong> are craving more fulfillment, passion, play
                and adventure
              </Body>
            </li>
            <li>
              <Body>
                <strong>—</strong> want to cultivate a profound sense of love
                within their bodies
              </Body>
            </li>
            <li>
              <Body>
                <strong>—</strong> are seeking deeper connection to her wild,
                feminine, fullest self-expression through sisterhood and Mother
                Earth connection
              </Body>
            </li>
          </ul>
        </SideContent>
      </Description>
      <MeetSection>
        <HostNameMobile>Meet Amber</HostNameMobile>
        <SideImg>
          <img src={amberImg} alt="" />
        </SideImg>
        <SideImgMobile>
          <img src={amberImg} alt="" />
        </SideImgMobile>
        <Legend>
          <HostName>Meet Amber</HostName>
          <Body>
            Amber has been a movement educator and student for the past 10 years
            teaching yoga, meditation, strength, and mobility. She is Internal
            Strength Specialist within Functional Range Systems, she has her
            300hr Yoga teaching train and she is Animal Flow coach.
            <br />
            <br />
            Amber has spent extensive time in holding space for women as a
            Sacred Facilitator, and is also a Somatic Parts Work coach. Aside
            from passions involving the body’s movement system, she has been a
            certified working Herbalist for 5 years and has a burning passion
            for everything plants, nature, wellness and adventure.
          </Body>
        </Legend>
      </MeetSection>
      <MeetSection>
        <HostNameMobile>Meet Marina</HostNameMobile>
        <SideImgMobile>
          <img src={marinaImg} alt="" />
        </SideImgMobile>
        <Legend marina>
          <HostName>Meet Marina</HostName>
          <Body>
            Marina is a passionate wellness and movement educator, who has been
            teaching for over decade. She is 500 hours YTT certified, as well as
            a mobility coach within FRC and Animal Flow, certified personal
            trainer, meditation teacher and nutrition coach through Precision
            Nutrition.
            <br />
            <br />
            Beyond her professional endeavors, Marina's heart lies in exploring
            the world, particularly drawn to Mexico, Central, and South America.
            Here, she discovers profound connections with the enigmatic
            cultures, traditions, and spiritual teachings that enrich her
            journey.
          </Body>
        </Legend>
        <SideImg>
          <img src={marinaImg} alt="" />
        </SideImg>
      </MeetSection>
    </>
  );
};

const H1 = styled.h1`
  font-size: 50px;
  color: #635341;
  @media (max-width: 1000px) {
    font-size: 32px;
  }
`;
const Body = styled.p`
  font-size: 20px;
  max-width: 1000px;

  @media (max-width: 1000px) {
    font-size: 18px;
  }
`;
const Logo = styled.img`
  width: 40% !important;
  margin-top: -150px;
  @media (max-width: 1000px) {
    margin-top: -60px;
    width: 60% !important;
  }
`;
const WideImg = styled.img`
  width: 100% !important;
  object-fit: cover;
  object-position: center;
  @media (max-width: 1000px) {
    width: 100% !important;
  }
`;
const SideImage = styled.div`
  width: 50% !important;
  position: relative;
  z-index: 5;
  img {
    margin-left: -20%;
    width: 100% !important;
    object-fit: cover;
    object-position: center;
  }
  @media (max-width: 1000px) {
    width: 100% !important;
    img {
      margin: 0;
    }
  }
`;
const Mandala = styled.img`
  width: 100% !important;
  position: absolute;
  scale: 1.1;
  opacity: 0.25;
  top: 0;
  max-width: 1300px;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 1;
  margin-top: -70px;
  @media (max-width: 450px) {
    margin-top: -10px;
    scale: 1.3;
    width: 100% !important;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 15;
  align-items: center;
  justify-content: center;
  gap: 35px;
  h3 {
    text-transform: uppercase;
  }
  @media (min-width: 1100px) {
    button {
      margin-top: 40px;
    }
  }
`;
const SideContent = styled.div`
  width: 50%;
  display: flex;
  height: fit-content;
  flex-direction: column;
  padding: 30px;
  margin-top: 100px;
  position: relative;
  z-index: 15;
  align-items: center;
  justify-content: center;
  gap: 35px;
  background-color: #eee3d9be;
  h1 {
    text-transform: uppercase;
  }
  ul {
    list-style: circle;
    margin-left: 15px;
    list-style-position: outside;
    li {
      position: relative;
      margin-bottom: 15px !important;
      margin-left: 15px !important;
      list-style: outside !important;
      list-style-position: outside;
      list-style-type: disc !important;

      &::marker {
        unicode-bidi: isolate;
        font-variant-numeric: tabular-nums;
        text-transform: none;
        text-indent: 10px !important;
        text-align: start !important;
        text-align-last: start !important;
        position: absolute;
        left: -10px !important;
      }
    }
  }
  @media (max-width: 1000px) {
    width: 100%;
    margin-top: 10px;
    ul {
      margin-left: 0px;
    }
  }
`;
const HeroSection = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  z-index: 10;
  img {
    object-fit: cover;
    object-position: top center;
    width: 100%;
  }
`;
const Description = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  margin: auto;
  flex-direction: row-reverse;
  gap: 35px;
  padding: 40px;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    background-color: #f5eee9;
  }
`;
const MeetSection = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  margin: auto;
  flex-direction: row;
  position: relative;
  padding: 40px;
  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 20px;
  }
`;
const HostName = styled.div`
  font-size: 50px;
  color: #635341;
  margin-bottom: 30px;
  // font-family: "Pinyon Script";
  font-weight: 600;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const HostNameMobile = styled.div`
  display: none;
  @media (max-width: 1000px) {
    font-size: 10vw;
    color: #635341;
    margin-bottom: 20px;
    margin-top: 10px;
    font-weight: 600;
    text-align: center;
    display: block;
  }
`;
const Legend = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 5;
  // align-items: center;
  justify-content: center;
  padding-left: 70px;
  padding-top: 40px;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 15px;
  }
  ${({ marina }) =>
    marina &&
    css`
      padding: 40px;
      text-align: right;
      @media (max-width: 1000px) {
        text-align: left;
      }
    `}
`;
const SideImg = styled.div`
  width: 50% !important;
  img {
    width: 100% !important;
    object-fit: cover;
    object-position: center;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;
const SideImgMobile = styled.div`
  display: none;
  @media (max-width: 1000px) {
    display: block;
    width: 100% !important;
    img {
      width: 100% !important;
      object-fit: cover;
      object-position: center;
    }
  }
`;
const IntroSection = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  z-index: 5;
  margin: 0px auto 100px;
  padding: 60px 60px 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 35px;
  align-items: center;
  justify-content: center;
  h1 {
    /* color: #1c2a14; */
  }
  img {
    object-fit: cover;
    object-position: top center;
    width: 100%;
  }
  @media (max-width: 1100px) {
    padding: 30px 20px 0;
    margin: 0 auto 60px auto;
  }
`;
const ExploreSection = styled.div`
  width: 100%;
  margin: 60px auto 100px;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 35px;
  align-items: center;
  justify-content: center;
  h1 {
    color: #1c2a14;
  }
  p {
    padding: 20px;
  }
  img {
    object-fit: cover;
    object-position: top center;
    width: 100%;
    max-width: 1200px;
  }
  @media (max-width: 1100px) {
    margin: 20px auto;
    button {
      margin-bottom: 40px;
    }
  }
`;
const ButtonPrimary = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  max-width: 350px;
  height: 55px;
  background-color: #635341;
  border: none;
  color: white;
  letter-spacing: 0.5px;
  font-weight: 600;
  font-size: 22px;
  text-transform: uppercase;
  border-radius: 4px;
`;

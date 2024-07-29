import React from "react";
import heroImg from "./assets/hero-img.png";
import exploreImg from "./assets/explore-img.png";
import styled from "styled-components";

export const Retreat = () => {
  return (
    <>
      <HeroSection>
        <img src={heroImg} alt="" />
      </HeroSection>
      <IntroSection>
        <H1>WHAT WOULD IT BE LIKE LIVING A LIFE AS A CELEBRATION?</H1>
        <h3>
          How would it feel to be fully in touch with your sacred feminine
          power?
        </h3>
        <p>
          In today's hectic world, many of us experience disconnection,
          navigating on autopilot through the burdens of stress, work, family
          responsibilities, and health challenges. Welcome to women’s retreat at
          the magical land of Peru offers a pathway to dissolve emotional
          barriers, rediscover vibrant health, and awaken the blissful woman
          within you.
        </p>
        <ButtonPrimary>The time is now</ButtonPrimary>
      </IntroSection>
      <ExploreSection>
        <img src={exploreImg} alt="" />
        <p>
          Samadhi is a serene and eco-conscious retreat center situated in the
          Andes Mountains of Sacred Valley, Peru. Founded by mindful
          individuals, it serves as a sanctuary for healing, sacred reciprocity,
          and communion with Pacha Mama (Mother Earth) and the Divine.
          <br />
          <br />
          Built with heartfelt intention, the center cultivates organic
          vegetables on-site, prepares food with blessings, and fosters a warm
          and inviting atmosphere where joy, connection, and deep healing thrive
        </p>
        <p>
          Samadhi Center at the sacred land of Peru is an ideal destination for
          your next journey—a journey focused on cultural immersion,
          awe-inspiring nature, embodying feminine practices, self-nourishment,
          and hitting the reset button in our busy lives
        </p>
      </ExploreSection>
    </>
  );
};

const H1 = styled.h1`
  font-size: 50px;
`;

const HeroSection = styled.div`
  width: 100%;
  display: flex;
  img {
    object-fit: cover;
    object-position: top center;
    width: 100%;
  }
`;
const IntroSection = styled.div`
  width: 80%;
  margin: 60px auto 100px;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 35px;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 50px;
    color: #1c2a14;
  }
  img {
    object-fit: cover;
    object-position: top center;
    width: 100%;
  }
`;
const ExploreSection = styled.div`
  width: 80%;
  margin: 60px auto 100px;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 35px;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 50px;
    color: #1c2a14;
  }
  p {
    font-size: 18px;
  }
  img {
    object-fit: cover;
    object-position: top center;
    width: 100%;
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
  background-color: #727a6c;
  border: none;
  color: white;
  font-size: 22px;
  text-transform: uppercase;
  border-radius: 4px;
`;

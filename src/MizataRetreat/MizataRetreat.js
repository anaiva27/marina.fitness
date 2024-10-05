import React from "react";
import styled from "styled-components";
import heroImg from "./assets/heroImgMizata.jpg";
import yogaImg from "./assets/yogaImg.jpg";
import artImg from "./assets/artImg.jpg";
import marinaImg from "./assets/AboutMarina.jpg";
import giannaImg from "./assets/AboutGianna.jpg";
import "./styles.css";

export const MizataRetreat = () => {
  return (
    <>
      <HeroSection>
        <HeroImage>
          <img src={heroImg} alt="" />
        </HeroImage>
        <HeroContent>
          <H1>Welcome</H1>
          <br />
          <br />
          <Body>
            Escape the hustle and bustle of everyday life and embark on a
            <span> rejuvenating retreat at Mizata, El Salvador</span>.
            <br />
            <br />
            Nestled on a black-sand beach with captivating surf breaks and lush
            greenery, immerse yourself in the serenity of nature's embrace.
            <br />
            <br />
            Led by <span> expert duo, Marina and Gianna</span>, Nurture Your
            Nature invites you to join us in mindful movement and the expressive
            medium of therapeutic art to cultivate a deeper understanding of
            your true nature and embrace the path towards holistic well-being.
            <br />
            <br />
            <span>
              {" "}
              Reconnect with your self, nourish your body, mind, and soul, and
              emerge rejuvenated, inspired, and ready to embrace life's journey
              with renewed vitality.
            </span>
          </Body>
          <ButtonMizata
            onClick={() =>
              window.open("https://buy.stripe.com/3cs17F00m0y11iwbJc", "_blank")
            }
          >
            The time is now
          </ButtonMizata>
        </HeroContent>
      </HeroSection>
      <AboutSection>
        <H1>About Us</H1>
        <AboutContent>
          <MarinaSection>
            <DesktopImg src={marinaImg} alt="" />
            <Story>
              <Subtitle>Yoga & Movement Facilitator </Subtitle>
              <br />
              <MobileImg src={marinaImg} alt="" />
              <br />
              <Body>
                Marina is a passionate wellness and fitness educator, who has
                been teaching good movement (yoga, mobility, functional strength
                training) for over decade.
                <br />
                <br />
                She is 500 hours YTT certified, as well as a mobility coach
                within FRC and Animal Flow schools, certified personal trainer
                and nutrition coach. She worked at yoga studios, boutique gyms,
                big corporate fitness centers, and now she proudly owns her own
                business.
              </Body>
            </Story>
          </MarinaSection>
          <MarinaSection>
            <Story>
              <Subtitle>Therapeutic Art Facilitator </Subtitle>
              <br />
              <MobileImg src={giannaImg} alt="" />
              <br />
              <Body>
                Gianna is an art therapist dedicated to the transformative power
                of art.
                <br />
                <br />
                With a M.A. in Art Psychotherapy, a background in environmental
                art therapy, and over a decade of experience in art education,
                she champions the accessibility of visual language and emotional
                literacy, prioritizing the creative process above the end
                result.
                <br />
                <br /> Through her approach, participants are prompted to engage
                with their surroundings, fostering a profound connection to both
                their creativity and the environment.
              </Body>
            </Story>
            <DesktopImg src={giannaImg} alt="" />
          </MarinaSection>
        </AboutContent>
      </AboutSection>
      <SectionYoga>
        <H1>Yoga & Movement</H1>
        <img src={yogaImg} alt="" />
        <YogaContent>
          <YogaTextContent>
            <Body>
              Guided by Marina, a seasoned expert in functional movement, for
              daily yoga and mobility classes. Strengthen your body, enhance
              joint flexibility, and embrace a sense of wellness as you move
              mindfully through each session.
              <br />
              <br />
              Yoga and movement cultivate physical strength, mental clarity, and
              emotional balance, promoting holistic health and well-being.
            </Body>
            <br />
            <Body> *yoga matts are provided</Body>
          </YogaTextContent>
          <YogaListContent>
            <Subtitle>Practices Include:</Subtitle>
            <Body> • Vinyasa Yoga</Body>
            <Body>• Hips Mobility Flow </Body>
            <Body>• Yin Yoga </Body>
            <Body>• Functional Fitness </Body>
            <Body>• Spine Mobility Flow </Body>
            <Body>• Sunset Meditation </Body>
          </YogaListContent>
        </YogaContent>
      </SectionYoga>
      <SectionYoga>
        <H1>Therapeutic Art</H1>
        <img src={artImg} alt="" />
        <YogaContent>
          <YogaTextContent>
            <Body>
              Guided by Gianna, an experienced environmental art therapist and
              art educator, immerse yourself in the therapeutic process of
              artmaking. Utilize natural materials sourced from our surroundings
              to express yourself creatively and tap into your inner artistic
              vision.
              <br />
              <br />
              Therapeutic art harnesses creative expression to foster healing,
              self-discovery, and personal growth, leading to increased
              self-esteem, improved communication, and inner harmony.
            </Body>
            <br />
            <Body>
              {" "}
              *no art experience required! These sessions are process-based{" "}
            </Body>
          </YogaTextContent>
          <YogaListContent>
            <Subtitle>Practices Include:</Subtitle>
            <Body> • Nature Mandala</Body>
            <Body>• Markmaking</Body>
            <Body>• Ink Floating </Body>
            <Body>• Shadow Drawing </Body>
            <Body>• Breath Painting </Body>
            <Body>• Weaving </Body>
          </YogaListContent>
        </YogaContent>
      </SectionYoga>
    </>
  );
};

const HeroSection = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  background-color: #e3dcd4;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
const H1 = styled.h1`
  font-size: 100px;
  color: #5f5234;
  font-family: "Alegreya";
  font-style: italic;
  font-weight: 400;
  @media (max-width: 1000px) {
    font-size: 66px;
    margin: auto;
  }
`;
const Body = styled.p`
  font-size: 20px;
  color: #5f5234;
  font-weight: 500;
  span {
    font-weight: 600;
    font-size: 27px;
    font-family: "Alegreya";
    font-style: italic;
    display: inline;
    color: #5f5234;
  }
  @media (max-width: 1000px) {
    font-size: 18px !important;
  }
`;
const Subtitle = styled.h2`
  font-size: 35px;
  color: #5f5234;
  font-family: "Alegreya";
  font-style: italic;
  font-weight: 600;
  @media (max-width: 1000px) {
    font-weight: 500;
    font-size: 30px !important;
  }
`;
const ButtonMizata = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-align: center;
  width: 100%;
  max-width: 350px;
  height: 55px;
  background-color: #e3dcd4;
  border: 2px solid #5f5234;
  color: #5f5234;
  letter-spacing: 0.5px;
  font-weight: 600;
  font-size: 22px;
  text-transform: uppercase;
  border-radius: 4px;
`;
const HeroContent = styled.div`
  width: 50%;
  padding: 10%;
  display: flex;
  flex-direction: column;
  button {
    margin-top: 35px;
  }
  @media (max-width: 1000px) {
    width: 100%;
    button {
      margin: 35px auto 0;
    }
  }
`;
const HeroImage = styled.div`
  width: 50%;
  display: flex;
  img {
    object-fit: cover;
    object-position: right center;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
const AboutSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #e3dcd4;
  align-items: center;
  padding: 100px 0 20px;
  @media (max-width: 1000px) {
    padding: 30px 0 20px;
  }
`;
const AboutContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #e3dcd4;
  align-items: center;
`;
const Story = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DesktopImg = styled.img`
  @media (max-width: 1000px) {
    display: none;
  }
`;
const MobileImg = styled.img`
  @media (min-width: 1000px) {
    display: none;
    margin: auto;
  }
`;
const MarinaSection = styled.div`
  width: 100%;
  display: flex;
  background-color: #e3dcd4;
  align-items: center;
  gap: 60px;
  padding: 25px;
  img {
    object-fit: cover;
    width: 50%;
  }
  p,
  h2 {
    padding: 0 30px;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    img {
      object-fit: cover;
      width: 100%;
    }
  }
`;
const SectionYoga = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #e3dcd4;
  align-items: center;
  padding: 100px 0 20px;
  gap: 40px;
  img {
    object-fit: cover;
    width: 100%;
  }
  @media (max-width: 1000px) {
    padding: 30px 0 20px;
  }
`;
const YogaContent = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
const YogaTextContent = styled.div`
  width: 50%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
const YogaListContent = styled.div`
  width: 50%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

import React from "react";
import styled from "styled-components";
import heroImg from "./assets/heroImgMizata.jpg";
import yogaImg from "./assets/yogaImg.jpg";
import artImg from "./assets/artImg.jpg";
import marinaImg from "./assets/AboutMarina.jpg";
import giannaImg from "./assets/AboutGianna.jpg";
import mizataLogo from "./assets/mizatalogo.png";
import natureImg1 from "./assets/imgNature1.png";
import natureImg2 from "./assets/imgNature2.jpg";
import roomImg1 from "./assets/rooms1.png";
import roomImg2 from "./assets/rooms2.png";
import contactImg1 from "./assets/contact1.png";
import contactImg2 from "./assets/contact2.png";
import scheduleImg from "./assets/scheduleImg.png";
import "./styles.css";

export const MizataRetreat = () => {
  return (
    <div style={{ backgroundColor: "#e3dcd4" }}>
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
      <LocationSection>
        <LogoImg src={mizataLogo} alt="" />
        <Subtitle>Playa Mizata, Teotepeque, El Salvador</Subtitle>
        <Body>
          Nestled within the breathtaking landscape of El Salvador, this
          esteemed resort offers the perfect blend of luxury amenities and
          natural serenity. With a proven track record of hosting numerous
          successful retreats, we assure our guests a safe and unforgettable
          experience. Embrace the comfort of a 5-star resort while immersing
          yourself in the authenticity of a jungle camp, where culture,
          adventure, and recalibration converge to create a truly transformative
          journey.
        </Body>
        <ButtonMizata
          onClick={() =>
            window.open("https://buy.stripe.com/3cs17F00m0y11iwbJc", "_blank")
          }
        >
          Book Now
        </ButtonMizata>
      </LocationSection>
      <WideImg src={natureImg1} alt="" />
      <H1
        style={{
          textAlign: "center",
          margin: "50px auto 30px",
          padding: "0 15px",
        }}
      >
        What's included
      </H1>
      <IncludedSection>
        <img src={natureImg2} alt="" />
        <IncludedList>
          <br />
          <Body> • 6 days / 6 nights </Body>
          <Body> • Airport shuttle </Body>
          <Body> • Accommodation </Body>
          <Body> • 3 meals a day o Fresh, locally-sourced meals </Body>
          <Body> • Daily yoga/mobility class </Body>
          <Body> • Daily meditation </Body>
          <Body> • Daily artmaking </Body>
          <Body> • Tamanique Waterfall excursion </Body>
          <Body> • Route of the Flowers excursion </Body>
          <Body>
            {" "}
            • Resort amenities o sauna / ice plunge o multiple pools o beach
            access / surf breaks o jungle gym{" "}
          </Body>
          <br />
          <Subtitle>Not included:</Subtitle>
          <Body> • Airline fare</Body>
          <Body> • Alcoholic beverages</Body>
          <Body> • Extra food</Body>
          <Body> • Additional Excursions</Body>
          <Body> • Airline fare</Body>
          <Body> • Airline fare</Body>
          <br />
          <Subtitle>Optional:</Subtitle>
          <Body> • Surf lesson</Body>
          <Body> • Horseback riding Spa services</Body>
        </IncludedList>
      </IncludedSection>
      <RoomsSection>
        <H1>Accomodation Options</H1>
        <Subtitle>The Bungalow</Subtitle>
        <WideImg src={roomImg1} alt="" />
        <Subtitle>S2,399</Subtitle>
        <YogaContent>
          <YogaListContent>
            <Body> • Up to 2 guests</Body>
            <Body>• Wifi</Body>
            <Body>• Air Conditioning </Body>
            <Body>• King size bed </Body>
            <Body>• 1 Bathroom </Body>
            <Body>• Towels </Body>
            <Body>• Reading lights </Body>
            <Body>• Charging ports </Body>
            <Body>• Bamboo surf rack </Body>
            <Body>• Safe </Body>
          </YogaListContent>
          <YogaTextContent>
            <Subtitle>Pay in Full</Subtitle>
            <Body>$2399 + 5% transaction fee = $2519</Body>
            <Body>Paying in Full saves $155</Body>
            <br />
            <Subtitle>Pay in 3 Payments:</Subtitle>
            <Body>$849 +5 % transaction fee = $892</Body>
            <br />
            <Body>$800 is not refundable</Body>
            <Body>$1600 refundable before August 16th</Body>
            <Body>$800 is refundable before October 16th</Body>
          </YogaTextContent>
        </YogaContent>
      </RoomsSection>
      <RoomsSection>
        <Subtitle>The Retreat Dorm</Subtitle>
        <WideImg src={roomImg2} alt="" />
        <Subtitle>S2,099</Subtitle>
        <YogaContent>
          <YogaListContent>
            <Body> • Up to 3 guests</Body>
            <Body>• Wifi</Body>
            <Body>• Air Conditioning </Body>
            <Body>• Twin bed </Body>
            <Body>• 1 Bathroom </Body>
            <Body>• Towels </Body>
            <Body>• Charging ports </Body>
            <Body>• Bamboo surf rack </Body>
            <Body>• Safe </Body>
          </YogaListContent>
          <YogaTextContent>
            <Subtitle>Pay in Full</Subtitle>
            <Body>$2099 + 5% transaction fee = $2119</Body>
            <Body>Paying in Full saves $173</Body>
            <br />
            <Subtitle>Pay in 3 Payments:</Subtitle>
            <Body>$729 +5 % transaction fee = $766</Body>
            <br />
            <Body>$700 is not refundable</Body>
            <Body>$1400 refundable before August 16th</Body>
            <Body>$700 refundable before October 16th</Body>
          </YogaTextContent>
        </YogaContent>
        <ButtonMizata
          onClick={() =>
            window.open("https://buy.stripe.com/3cs17F00m0y11iwbJc", "_blank")
          }
        >
          Reserve Your Spot
        </ButtonMizata>
      </RoomsSection>
      <ScheduleSection>
        <H1>Tentative Schedule</H1>
        <IncludedSection>
          <img src={scheduleImg} alt="" />
          <ScheduleList>
            <Subtitle>
              *Finalized schedule will be sent out prior to the retreat
            </Subtitle>
            <Subtitle>Morning</Subtitle>
            <Body> • Energizing morning yoga </Body>
            <Subtitle>Breakfast</Subtitle>
            <Body> • Locally-sourced, sustainable food </Body>
            <Subtitle>Early Afternoon</Subtitle>
            <Body> • Nature mandala artmaking </Body>
            <Subtitle>Lunch</Subtitle>
            <Subtitle>Afternoon</Subtitle>
            <Body> • Free time for relaxation</Body>
            <Body> • Optional activities </Body>
            <Subtitle>Late Afternoon</Subtitle>
            <Body> • Sunset meditation and Yin yoga </Body>
            <Subtitle>Dinner</Subtitle>
            <Body> • Evening gathering </Body>
          </ScheduleList>
        </IncludedSection>
      </ScheduleSection>
      <H1 style={{ margin: "10px auto", textAlign: "center" }}>Contact</H1>
      <ContactSection>
        <img src={contactImg1} alt="" />
        <ScheduleList>
          <Subtitle>Email:</Subtitle>
          <Body>marina@marinafitness.pro</Body>
          <Body>Mizata.retreat@gmail.com</Body>
          <br />
          <br />
          <Subtitle>Phone:</Subtitle>
          <Body>+1 302-747-3415</Body>
          <Body>+1 786-521-0488</Body>
          <br />
          <br />
          <Subtitle>Instagram:</Subtitle>
          <Body>@marina.bogatkina</Body>
          <Body>@giannaa.riccardii</Body>
        </ScheduleList>
      </ContactSection>
      <WideImg src={contactImg2} alt="" />
    </div>
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
    padding: 25px;
    button {
      margin: 35px auto 0;
    }
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
const LogoImg = styled.img`
  width: 50%;
  @media (max-width: 1000px) {
  }
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
    p,
    h2 {
      padding: 0 10px;
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
  h1 {
    text-align: center;
  }
  @media (max-width: 1000px) {
    padding: 30px 0 20px;
  }
`;
const YogaContent = styled.div`
  width: 100%;
  display: flex;
  margin: auto;
  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 20px;
  }
`;
const YogaTextContent = styled.div`
  width: 50%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 25px;
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
    padding: 0 25px;
  }
`;
const IncludedList = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  flex-direction: column;
  margin-left: 20px;
  @media (max-width: 1000px) {
    padding: 0 20px;
  }
`;
const ScheduleList = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  flex-direction: column;
  margin-left: 20px;
  h2 {
    margin-top: 25px;
  }
  @media (max-width: 1000px) {
    padding: 0 20px;
  }
`;
const LocationSection = styled.div`
  width: 70%;
  margin: 0px auto 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background-color: #e3dcd4;
  button {
    margin-top: 25px;
  }
  @media (max-width: 1000px) {
    width: 100%;
    padding: 20px;
  }
`;
const IncludedSection = styled.div`
  width: 100%;
  max-width: 1700px;
  margin: 0px auto 40px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 15px;
  background-color: #e3dcd4;
  img {
    width: 65%;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
    }
  }
`;
const ContactSection = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 30px;
  img {
    width: 60%;
    max-width: 800px;
  }
  div {
    width: 30%;
  }
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    & > div {
      gap: 10px;
      width: 100%;
      max-width: 400px;
      margin-bottom: 30px;
      text-align: center;
      margin-left: 0 !important;
    }
  }
`;
const ScheduleSection = styled.div`
  width: 100%;
  max-width: 1700px;
  margin: 0px auto 40px;
  display: flex;
  flex-direction: column;
  h1 {
    text-align: center;
    margin-bottom: 25px;
  }
  img {
    width: 50%;
  }
  & > div {
    align-items: center;
  }
  @media (max-width: 1000px) {
    & > div {
      flex-direction: column-reverse;
    }
    img {
      width: 100%;
    }
  }
`;
const RoomsSection = styled.div`
  width: 100%;
  margin: 0px auto 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background-color: #e3dcd4;
  img {
    width: 65%;
  }
  h1,
  & > h2 {
    text-align: center;
  }
  & > h2 {
    font-size: 45px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
    }
    button {
      margin-top: 25px;
    }
  }
`;

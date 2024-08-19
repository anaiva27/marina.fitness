import React from "react";
import heroImg from "./assets/hero-img.png";
import exploreImg from "./assets/explore-img.png";
import logoImg from "./assets/Samahdi-logo1.png";
import wallpaper1 from "./assets/wallpaper1.jpeg";
import mandalaImg from "./assets/mandala21.png";
import women1 from "./assets/women1.jpg";
import amberImg from "./assets/amberImg1.png";
import marinaImg from "./assets/marinaImg1.png";
import sliderImg1 from "./assets/sliderImg1.jpg";
import sliderImg2 from "./assets/sliderImg2.jpg";
import sliderImg3 from "./assets/sliderImg3.jpg";
import sliderImg4 from "./assets/sliderImg4.jpg";
import sliderImg5 from "./assets/sliderImg5.jpg";
import sliderImg6 from "./assets/sliderImg6.jpg";
import marinaAmberImg from "./assets/marina-abmer.jpg";
import roomsImg from "./assets/rooms.png";
import img11 from "./assets/img11.png";
import styled, { css } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "./retreat.css";

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
          <ButtonPrimary
            onClick={() =>
              window.open(
                "https://book.stripe.com/aEUcQn28u3KdbXa6oP",
                "_blank",
              )
            }
          >
            The time is now
          </ButtonPrimary>
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
        {/* <ButtonPrimary
          onClick={() =>
            window.open("https://book.stripe.com/aEUcQn28u3KdbXa6oP", "_blank")
          }
        >
          Reserve your spot
        </ButtonPrimary> */}
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
          <ButtonPrimary
            style={{ marginBottom: 25 }}
            onClick={() =>
              window.open(
                "https://book.stripe.com/aEUcQn28u3KdbXa6oP",
                "_blank",
              )
            }
          >
            Reserve your spot
          </ButtonPrimary>
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
      <HistorySection>
        <SideContent history>
          <Body>
            Marina and Amber's bond spans over a decade, evolving from friends
            and colleagues to what feels like soul sisters connected across
            countless lifetimes. United by a shared vision of life, wellness,
            and values, they have cultivated a community of empowered,
            open-minded individuals. Their combined commitment to making a
            meaningful impact on people's lives has been remarkable.
            <br />
            <br />
            Now, they invite others to join them for an unforgettable experience
            — Women’s retreat that promises to nurture physical, emotional, and
            spiritual well-being amidst the mystical landscape of Peru
          </Body>
        </SideContent>
        <SideHistoryImage>
          <img src={marinaAmberImg} alt="" />
        </SideHistoryImage>
      </HistorySection>

      <IncludedSection>
        <H1>WHAT'S INCLUDED:</H1>
        <List>
          <ul role="list">
            <li>
              <Body>
                <strong>—</strong> 6 nights of accommodation in shared chakra
                bungalows
              </Body>
            </li>

            <li>
              <Body>
                <strong>—</strong> Access to all amenities of the center
                (jacuzzi, chakra meditation garden and more!)
              </Body>
            </li>
            <li>
              <Body>
                <strong>—</strong> Shuttle services from and to Cusco airport
                Personalized gift bag
              </Body>
            </li>

            <li>
              <Body>
                <strong>—</strong> Temazcal (sweat lodge) ceremony and
                breathwork
              </Body>
            </li>
            <li>
              <Body>
                <strong>—</strong> Cacao ceremony and ecstatic dance Sharing
                circles by bonfire
              </Body>
            </li>
            <li>
              <Body>
                <strong>—</strong> Sacred feminine workshop
              </Body>
            </li>
            <li>
              <Body>
                <strong>—</strong> Sharing bonfire circle
              </Body>
            </li>
          </ul>
          <ul role="list">
            <li>
              <Body>
                <strong>—</strong> 3 organic, healthy, locally sourced mostly
                vegan or vegetarians meals (with some fish and chicken options)
              </Body>
            </li>
            <li>
              <Body>
                <strong>—</strong> Tour to Moras archeological site and Maras
                salineras
              </Body>
            </li>
            <li>
              <Body>
                <strong>—</strong> Local Trekking around Samadhi
              </Body>
            </li>
            <li>
              <Body>
                <strong>—</strong> Pottery workshop with local
              </Body>
            </li>

            <li>
              <Body>
                <strong>—</strong> Group zoom prep call + one month integration
                after retreat thought zoom classes
              </Body>
            </li>
            <li>
              <Body>
                <strong>—</strong> Personalized gift bag
              </Body>
            </li>
            <li>
              <Body>
                <strong>—</strong> Daily movement (mobility and yoga classes)
                and meditation
              </Body>
            </li>
          </ul>
        </List>
        <ButtonPrimary
          style={{ marginBottom: 25 }}
          onClick={() =>
            window.open("https://book.stripe.com/aEUcQn28u3KdbXa6oP", "_blank")
          }
        >
          Reserve your spot
        </ButtonPrimary>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={"auto"}
          loop={true}
          navigation={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          // pagination={{ clickable: true }}
          className="mySwiperRetreat"
          onPaginationUpdate={(i) => {}}
        >
          <SwiperSlide className="styled">
            <img src={sliderImg1} alt="" />
          </SwiperSlide>
          <SwiperSlide className="styled">
            <img src={sliderImg4} alt="" />
          </SwiperSlide>
          <SwiperSlide className="styled">
            <img src={sliderImg3} alt="" />
          </SwiperSlide>
          <SwiperSlide className="styled">
            <img src={sliderImg2} alt="" />
          </SwiperSlide>
          <SwiperSlide className="styled">
            <img src={sliderImg5} alt="" />
          </SwiperSlide>
          <SwiperSlide className="styled">
            <img src={sliderImg6} alt="" />
          </SwiperSlide>
        </Swiper>
      </IncludedSection>
      {/* <NotIncludedSection>
        <H1>
          WHAT'S <span>NOT</span> INCLUDED:
        </H1>
        <NotIncludedList>
          <ul role="list">
            <li>
              <Body>Airline tickets</Body>
            </li>
            <li>
              <Body>Spa services</Body>
            </li>
            <li>
              <Body>Travel insurance</Body>
            </li>
          </ul>
        </NotIncludedList>
      </NotIncludedSection> */}
      <ScheduleSection>
        <H1>TENTATIVE SCHEDULE</H1>
        <DaytName>Tuesday Arrival</DaytName>
        <Body>
          Evening yoga, opening circle + setting intention meditation.
        </Body>
        <ScheduleTable>
          <div>
            <DaytName>Day 2</DaytName>
            <Body>
              Gentle morning Yoga and Meditation <br /> Divine feminine Workshop{" "}
              <br />
              Hip Mobility <br />
              Fire sharing circle
            </Body>
          </div>
          <div>
            <DaytName>Day 4</DaytName>
            <Body>
              Spinal Mobility workshop <br />
              Pottery Workshop
              <br />
              Tour to Inkas Archeological sights
            </Body>
          </div>
          <div>
            <DaytName>Day 6</DaytName>
            <Body>
              Morning yoga + meditation <br />
              Trekking near Samadhi
              <br />
              Meditation + movement
              <br /> Temazcal + cold plunge, sharing circle
            </Body>
          </div>
          <div>
            <DaytName>Day 3</DaytName>
            <Body>
              Morning Yoga and Meditation
              <br />
              Yin yoga themed around feminine energy
              <br />
            </Body>
          </div>
          <div>
            <DaytName>Day 5</DaytName>
            <Body>
              Morning yoga + prompts for journaling <br />
              Cacao Ceremony and ecstatic dance
            </Body>
          </div>
          <div>
            <DaytName>Day 7</DaytName>
            <Body>
              Morning movement + laughing yoga <br />
              11 - 12am farewell circle (gifts giveaway) <br />
              Transportation to Cuzco or Pisac
            </Body>
          </div>
        </ScheduleTable>
      </ScheduleSection>
      <DescriptionWrapper>
        <Description
          style={{
            backgroundColor: "#cfc4c0",
            margin: "50px auto 0",
            maxWidth: 1300,
          }}
        >
          <SideImage>
            <img src={roomsImg} alt="" />
          </SideImage>
          <SideContent>
            <H1>THE ROOMS</H1>
            <Body>
              The bungalows at the Samadhi Center are modeled after the seven
              chakras, the energetic centers in yogic tradition.
              <br />
              <br />
              Each bungalow is adorned with corresponding colors, flowers, and
              crystals to symbolize the unique energy and characteristics of
              each chakra.
              <br />
              <br />
              Every room offers a breathtaking view of the mountains.
            </Body>
            {/* <ButtonPrimary
              style={{ marginBottom: 25 }}
              onClick={() =>
                window.open(
                  "https://book.stripe.com/aEUcQn28u3KdbXa6oP",
                  "_blank",
                )
              }
            >
              Reserve your spot
            </ButtonPrimary> */}
          </SideContent>
        </Description>
      </DescriptionWrapper>
      <NotIncludedSection>
        <H1>
          WHAT'S <span>NOT</span> INCLUDED:
        </H1>
        <NotIncludedList>
          <ul role="list">
            <li>
              <Body>Airline tickets</Body>
            </li>
            <li>
              <Body>Spa services</Body>
            </li>
            <li>
              <Body>Travel insurance</Body>
            </li>
          </ul>
        </NotIncludedList>
      </NotIncludedSection>
      <NotIncludedSection>
        <H1>PRICES:</H1>
        <NotIncludedList>
          <Body>$2399 Early bird Special until October 1st 2024</Body>
          <Body>After October 1st is $2699 based on triple occupancy</Body>
          <Body>$799 is non refundable deposit</Body>
          <Body>50% by December 1st (not refundable after January 1st)</Body>
          <Body>
            Another 50% by February 15th (not refundable after March 15th)
          </Body>
          <Body>
            {" "}
            <ButtonPrimary
              style={{ marginBottom: 25 }}
              onClick={() =>
                window.open(
                  "https://book.stripe.com/aEUcQn28u3KdbXa6oP",
                  "_blank",
                )
              }
            >
              Reserve your spot
            </ButtonPrimary>
          </Body>
        </NotIncludedList>
      </NotIncludedSection>
      <HistorySection>
        <SideContent history>
          <H1>TRAVEL INFORMATION</H1>
          <Body>
            For your convinience fly to Alejandro Velasco Astete International
            Airport, Cusco, Peru (CUZ).
            <br />
            <br />
            From there our dedicated shuttle service will transport you through
            the most scenic, jaw dropping journey to Samadhi retreat center in
            Huayllabamba, Sacred Valley
          </Body>
        </SideContent>
        <SideHistoryImage>
          <img src={img11} alt="" />
        </SideHistoryImage>
      </HistorySection>
      <NotIncludedSection>
        <H1>CONTACT INFO:</H1>
        <ContactList>
          <ul>
            <li>
              <Body darkColor>
                <a
                  style={{ color: "#635341" }}
                  href="https://chat.whatsapp.com/Di8wpdXuvjEHMHE234V8jX"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CLick Here to Join my WhatsApp Group
                </a>
              </Body>
            </li>
            <li>
              <Body>
                Email:{" "}
                <a href="mailto:ahom.holistichealth@gmail.com">
                  ahom.holistichealth@gmail.com
                </a>
              </Body>
            </li>
            <li>
              <Body>
                Phone numbers: M: <a href="tel:302-747-3415">1-302-747-3415</a>
              </Body>
            </li>
            <li>
              <Body>
                A: <a href="tel:302-339-7729">1-302-339-7729</a>
              </Body>
            </li>
            <li>
              <Body>
                Instagram:{" "}
                <a
                  href="https://www.instagram.com/marina.bogatkina/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @marina.bogatkina
                </a>
              </Body>
            </li>
            <li>
              <Body>
                {" "}
                <a
                  href="https://www.instagram.com/ahom.holistichealth/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @ahom.holistichealth
                </a>
              </Body>
            </li>
          </ul>
        </ContactList>
      </NotIncludedSection>
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

  ${({ darkColor }) =>
    darkColor &&
    css`
      color: #635341;
      word-wrap: break-word;
    `}
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
const SideHistoryImage = styled.div`
  width: 50% !important;
  position: relative;
  z-index: 5;
  img {
    margin-right: -30%;
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
  @media (min-width: 1000px) {
    ${({ history }) =>
      history &&
      css`
        padding: 50px 60px;
        margin-left: -40px;
      `}
  }
`;
const DescriptionWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #cfc4c0;
  img {
    object-fit: cover;
    object-position: top center;
    width: 100%;
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
    padding: 20px;
    flex-direction: column-reverse;
    background-color: #f5eee9;
  }
`;
const HistorySection = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  margin: auto;
  flex-direction: row-reverse;
  padding: 40px;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    background-color: #f5eee9;
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
const MeetSection = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  margin: auto;
  flex-direction: row;
  position: relative;
  padding: 40px;
  ${HostName} {
    border-bottom: 0.5px solid #635341;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 20px;
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
const IncludedSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 35px;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    padding: 30px 0 0;
  }
`;
const NotIncludedSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 35px;
  margin: 0px 0;
  padding: 30px;
  align-items: flex-start;
  justify-content: center;
  background-color: #cfc4c0;
  color: white !important;
  p {
    font-weight: 600;
    font-size: 20px;
    text-transform: uppercase;
  }
  span {
    color: white;
    display: inline;
  }
  h1 {
    white-space: nowrap;
    font-size: 40px;
    width: 500px;
    text-align: right;
  }
  @media (max-width: 1000px) {
    padding: 30px;
    flex-direction: column;
    align-items: center;
    h1 {
      white-space: wrap;
      font-size: 40px;
      width: fit-content;
      text-align: center;
    }
  }
`;
const DaytName = styled.div`
  font-size: 30px;
  color: #635341;
  margin-bottom: 20px;
  font-weight: 600;
`;
const ScheduleSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #cfc4c0;
  padding: 50px 30px 0px;
  ${H1} {
    margin-bottom: 25px;
  }
  ${DaytName} {
    margin-bottom: 0;
  }
  & > ${DaytName}, ${H1}, & > ${Body} {
    text-align: center;
  }
`;
const ScheduleTable = styled.div`
  max-width: 1200px;
  padding: 30px 20px 10px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  ${DaytName} {
    border-bottom: 0.5px solid #635341;
    margin-bottom: 7px;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;
const List = styled.div`
  padding: 20px 30px;
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  li {
    margin-bottom: 25px;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;
const NotIncludedList = styled.div`
  padding: 13px 0 0;
  max-width: 400px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
  li {
    margin-bottom: 25px;
    //text-shadow: 0.5px 0px 0px #000000aa;
  }
  @media (max-width: 700px) {
    padding: 0;
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
const ContactList = styled.div`
  padding: 13px 0 0;
  max-width: 400px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
  li {
    margin-bottom: 25px;
    //text-shadow: 0.5px 0px 0px #000000aa;
  }
  a {
    color: white;
    text-decoration: underline;
    cursor: pointer;
  }
  @media (max-width: 700px) {
    padding: 0;
    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    p {
      font-size: max(15px, 3vw);
    }
  }
`;
const ButtonPrimary = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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

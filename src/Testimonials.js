import React from "react";
import "./Testimonials.css";
import Project1 from "./img/portfolio-1.jpg";
import Project2 from "./img/portfolio-2.jpg";
import Project3 from "./img/portfolio-3.jpg";
import img5 from "./img/5.jpg";
import img7 from "./img/7.jpg";
import img6 from "./img/6.jpg";
import img4 from "./img/4.jpg";
import img3 from "./img/3.jpg";
import img2 from "./img/2.jpg";
import img1 from "./img/1.jpg";
import avatar from "./img/avatar.png";
import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/effect-coverflow/effect-coverflow.min.css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

import { EffectCoverflow, Autoplay, Pagination, Navigation } from "swiper";
import styled from "styled-components";

function Testimonials() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading black">
          What Marina's clients say <br />
          about their experience
        </h1>
        <p className="heading p__color">
          There are many variations of passages of Lorem Ipsum available,
        </p>
        <p className="heading p__color">
          but the majority have suffered alteration.
        </p>
      </div>
      <div className="containerSlider">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={img1} alt="slide_image" id="bg" />
            <Wrapper>
              <Avatar src={avatar} alt="customer's avatar" />
              <Name>Liz Nally</Name>
              <Text>
                Marina is a knowledgeable and intuitive fitness professional.
                Her workouts are about{" "}
                <strong>
                  total body care through breath, mobility, balance and strength
                </strong>
                . Marina brings her positive energy to every workout. Her zoom
                classes saved me during Covid lockdown. She is amazing!
              </Text>
            </Wrapper>
          </SwiperSlide>

          <SwiperSlide>
            <img src={img3} alt="slide_image" id="bg" />
            <Wrapper>
              <Avatar src={avatar} alt="customer's avatar" />
              <Name>Lugene Nighly </Name>
              <Text>
                Marina is inspirational, extremely well versed in different ways
                to effectively and safely work your body. Never boring work out!
                <strong> Always feel good after our sessions. </strong> Highly
                recommended!
              </Text>
            </Wrapper>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="slide_image" id="bg" />
            <Wrapper>
              <Avatar src={avatar} alt="customer's avatar" />
              <Name>Ginny Roberts </Name>
              <Text>
                Marina is inspiring and very accomplished teacher because she is
                always searching for self improvements! You will have fun with
                her easy going ways! I have been practicing yoga under Marina’s
                guidance{" "}
                <strong>
                  for many years and my strength and stamina is at its best!{" "}
                </strong>
              </Text>
            </Wrapper>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt="slide_image" id="bg" />
            <Wrapper>
              <Avatar src={avatar} alt="customer's avatar" />
              <Name> Karen and Rod</Name>
              <Text>
                My husband and I worked with Marina as a personal trainer for 2
                years in person and now almost a year through zoom. She was
                <strong> always very professional and detail oriented. </strong>
                Never did we do an exercise with the wrong posture or position,
                and I think it’s really important especially for us elderly
                people. She is a gem!
              </Text>
            </Wrapper>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img6} alt="slide_image" id="bg" />
            <Wrapper>
              <Avatar src={avatar} alt="customer's avatar" />
              <Name>Kim Wade </Name>
              <Text>
                Marina is a phenomenal trainer with comprehensive knowledge of
                resistance training and nutrition to fit her client’s individual
                needs! In 11 months of working together, not only{" "}
                <strong>
                  I dropped pounds, gained muscles, developed confidence, but
                  actually grew to love exercise.{" "}
                </strong>
                She is encouraging, patient and dedicated to help her clients
                achieve real lasting results!{" "}
                <strong> Highly, highly recommended! </strong>
              </Text>
            </Wrapper>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="slide_image" id="bg" />
            <Wrapper>
              <Avatar src={avatar} alt="customer's avatar" />
              <Name>Caitlin Owes</Name>
              <Text>
                Marina always displays welcoming energy! The classes are both
                <strong> challenging and creative. </strong>
              </Text>
            </Wrapper>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img7} alt="slide_image" id="bg" />
            <Wrapper>
              <Avatar src={avatar} alt="customer's avatar" />
              <Name> Allison P</Name>
              <Text>
                I love training with Marina! She is{" "}
                <strong>extremely knowledgeable about the body </strong> and
                ensures both a safe and effective training session. I learned
                how to honor the body and push it at the same time! Marina is
                amazing!
              </Text>
            </Wrapper>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} alt="slide_image" id="bg" />
            <Wrapper>
              <Avatar src={avatar} alt="customer's avatar" />
              <Name>Bob Finley</Name>
              <Text>
                I had the privilege of having Marina as my personal trainer for
                over two years! Her ability to custom fit my training with any
                and all ailments were simply awesome. With her help{" "}
                <strong>
                  {" "}
                  I increased flexibility in my body, lost weight and gained
                  strength.{" "}
                </strong>
                She was a huge part of my rehab after my shoulder surgery. She
                always has a smile and positive demeanor about her. Her
                knowledge about anatomy, training techniques is unsurpassed.
              </Text>
            </Wrapper>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="slide_image" id="bg" />
            <Wrapper>
              <Avatar src={avatar} alt="customer's avatar" />
              <Name> Larry Platt</Name>
              <Text>
                I have done functional training and mobility/stretching small
                groups and one on one with Marina for{" "}
                <strong>over 5 years </strong>, first in person sessions and now
                remotely through the zoom. Simply put, she is the best! She will
                challenge you but will always program and adapt exercise to
                one’s needs and abilities like my operated knees for example.
                I'm continuing training with Marina remotely and finding it{" "}
                <strong>
                  as effective as if we were together at the gym.{" "}
                </strong>
              </Text>
            </Wrapper>
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
        {/* <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project4} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Development</h5>
                <h4 className="project__text">
                  Getting tickets to the big show
                </h4>
                <a href="#" className="project__btn">
                  View Details
                </a>
              </div>
            </div>
          </div> */}
      </div>
    </div>
  );
}

export default Testimonials;

const Wrapper = styled.div`
  position: relative;
  height: 70%;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffffffbe;
  margin: auto;
  border-radius: 25px;
  gap: 30px;
  padding: 40px;
  margin-top: 100px;
  padding-top: 150px;
  @media (max-width: 770px) {
    padding: 20px;
    gap: 15px;
    margin-top: 70px;
    padding-top: 110px;
    height: 80%;
    width: 90%;
    justify-content: flex-start;
  }
`;
const Avatar = styled.img`
  position: absolute;
  top: -7%;
  left: 0;
  right: 0;
  margin: auto;
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 50%;
  @media (max-width: 770px) {
    top: -10%;
    height: 85px;
    width: 85px;
  }
`;
const Text = styled.div`
  color: #000;
  text-align: center;
  font-size: 16px;
  line-height: 150%;
`;
const Name = styled.div`
  color: #000;
  text-align: center;
  font-size: 22px;
  margin-top: -60px;
  @media (max-width: 770px) {
    font-size: 18px;
  }
`;

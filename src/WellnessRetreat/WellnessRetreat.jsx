import React, { useState } from "react";
import heroImg from "./assets/heroImgCR3.jpg";
import heroImgMob from "./assets/heroImgCR3-Mob.jpg";
import exploreImg from "./assets/explore-img.png";
import wallpaper1 from "./assets/wideImgHero.jpg";
import workshop1 from "./assets/workshopImg3.jpg";
import imgGrid1 from "./assets/gridImg1.jpg";
import imgGrid2 from "./assets/gridImg2.jpg";
import imgGrid3 from "./assets/gridImg3.jpg";
import imgGrid4 from "./assets/gridImg4.jpg";
import imgGrid5 from "./assets/gridImg5.jpg";
import imgGrid6 from "./assets/gridImg6.jpg";
import imgHost1 from "./assets/hostImgAg1.jpg";
import imgHost2 from "./assets/hostImgAg2.jpg";
import imgHost3 from "./assets/hostImgM1.jpg";
import imgHost4 from "./assets/hostImgM2.jpg";
import imgHost5 from "./assets/hostImgJ1.jpg";
import imgHost6 from "./assets/hostImgJ2.jpg";
import sliderImg1 from "./assets/slider1.jpg";
import sliderImg2 from "./assets/slider2.jpg";
import sliderImg3 from "./assets/slider3.jpg";
import sliderImg4 from "./assets/slider4.jpg";
import styled, { css } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "./retreat.css";
import { Modal } from "../portal";
import { useMediaQuery } from "../helpers/useMediaQuery";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(useGSAP);

export const WellnessRetreat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery();
  const openModal = (val, num) => {
    setIsOpen(val);
  };

  return (
    <>
      <HeroSection>
        <img src={isMobile ? heroImgMob : heroImg} alt="" />
      </HeroSection>
      <IntroSection>
        {/* <Mandala src={mandalaImg} alt="" /> */}
        <Content>
          <H1 style={{ textTransform: "uppercase" }}>
            This is more than just a retreat - it’s an invitation to transform
            your life!
          </H1>
          {/* <h3>Move Eat Thrive</h3> */}
          <Body>
            Reconnect with your true self, learn new skills how to cope with
            stress, change your perspective and set on a new path of healing,
            wellness and success. Returning home renewed, invigorated, with more
            tools and our support after retreat. A perfect opportunity to embark
            on a journey of profound personal growth and discovery.
            <br />
            <br />
            Press this reset button and book a tour retreat today!
          </Body>
          <ButtonPrimary onClick={() => openModal(true)}>
            The time is now
          </ButtonPrimary>
        </Content>
      </IntroSection>
      <ExploreSection>
        <img src={exploreImg} alt="" />
        {/* <Logo src={logoImg} alt="" /> */}
        <H1>Neureus Retreats</H1>
        <Body>
          Nereus Retreat center is located on the Osa Peninsula – a region
          described by National Geographic as one of the most “biologically
          intense” places on the planet located between the Pacific to the west
          and the tropical fjord Golfo Dulce on the east.
          <br />
          <br />
          Immerse yourself in the lush jungles of Costa Rica, where nature’s
          tranquility meets transformative wellness. Our exclusive retreat is
          designed to rejuvenate your mind, body, and soul through a blend of
          functional movement (mobility, yoga and strength training),
          meditation, mindfulness, self hypnosis, nutrition, and adventure.
          <br />
          <br />
          While the Osa comprises only 3% of Costa Rica’s total land area, it is
          home to more than 50% of the country’s animal and plant species.
          Famous Corcovado National Park is a biodiverse Eden home to some 140
          species of mammals, 400 species of birds, 116 species of reptiles and
          amphibians, 40 species of fish, four species of sea turtles and more
          than 500 species of trees.
        </Body>
        {/* <ButtonPrimary
          onClick={() =>
            window.open("https://book.stripe.com/aEUcQn28u3KdbXa6oP", "_blank")
          }
        >
          Reserve your spot
        </ButtonPrimary> */}
      </ExploreSection>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} variant="large">
        <Subtitle>
          Book your transformation retreat and save $ by paying a full price (by
          December 1st only, non refundable)
        </Subtitle>
        <Body>
          {" "}
          <br />
          <br />
          <Subtitle>
            1. Triple occupancy room ( XL3 twin bed with private bathroom)
          </Subtitle>
          <br />
          $2695 + transaction fee special price by December 1st, only if paid in
          full
          <br />
          <ButtonPrimary
            style={{ marginBottom: 15, marginTop: 15 }}
            onClick={() =>
              window.open("https://buy.stripe.com/7sIdUr28ugwZ6CQ00x", "_blank")
            }
          >
            Reserve your spot
          </ButtonPrimary>
          VS
          <br />
          <br />
          $2995 + transaction fees ( secure your spot with deposit, and get a
          payment plan)
          <br />
          Deposit $799 + transaction fee
          <br />
          <ButtonPrimary
            style={{ marginBottom: 15, marginTop: 15 }}
            onClick={() =>
              window.open("https://buy.stripe.com/4gwcQnaF0gwZ5yMfZy", "_blank")
            }
          >
            Reserve your spot
          </ButtonPrimary>
          <br />
          <br />
          <Subtitle>
            2. Double occupancy room ( two XL twin beds or one king size bed)
          </Subtitle>
          <br />
          $3195 + transaction fee special price if paid by December 1st and only
          if paid in full
          <br />
          <ButtonPrimary
            style={{ marginBottom: 15, marginTop: 15 }}
            onClick={() =>
              window.open("https://buy.stripe.com/8wM5nV3cy2G9bXa5kS", "_blank")
            }
          >
            Reserve your spot
          </ButtonPrimary>
          <br />
          VS
          <br />
          <br />
          $3495 + transaction fees regular price ( secure your spot with
          deposit, and get a payment plan)
          <br />
          Deposit $799 + transaction fee:
          <br />
          <ButtonPrimary
            style={{ marginBottom: 15, marginTop: 15 }}
            onClick={() =>
              window.open("https://buy.stripe.com/4gwcQnaF0gwZ5yMfZy", "_blank")
            }
          >
            Reserve your spot
          </ButtonPrimary>
          <br />
          <br />
          <Subtitle>
            {" "}
            3. Single rooms ( queen size beds. Shared bathroom with the room
            next door)
          </Subtitle>
          <br />
          $3095 + transaction fee special price if paid by December 1st and paid
          in full
          <br />
          <ButtonPrimary
            style={{ marginBottom: 15, marginTop: 15 }}
            onClick={() =>
              window.open("https://buy.stripe.com/4gw3fNdRcbcFgdqfZx", "_blank")
            }
          >
            Reserve your spot
          </ButtonPrimary>
          <br />
          VS
          <br />
          <br />
          $3395 + transaction fee regular price ( secure your spot with deposit,
          and get a payment plan)
          <br />
          Deposit $799 + transaction fee
          <br />
          <ButtonPrimary
            style={{ marginBottom: 15, marginTop: 15 }}
            onClick={() =>
              window.open("https://buy.stripe.com/4gwcQnaF0gwZ5yMfZy", "_blank")
            }
          >
            Reserve your spot
          </ButtonPrimary>
          <br />
          <br />
        </Body>
      </Modal>

      <WideImg src={wallpaper1} alt="" />
      {/* <H1>
        Experience exhilarating adventures, from guided tours to Corcovado
        National park, cacao farm, mangrove kayak tours or take a surf lesson.
      </H1>
      <br />
      <br /> */}
      <DiscroverGrid>
        <div>
          <img src={imgGrid5} alt="" />
        </div>{" "}
        <div>
          <img src={imgGrid4} alt="" />
        </div>{" "}
        <div>
          <img src={imgGrid6} alt="" />
        </div>
        <div>
          <SubtitleCap>
            {" "}
            <H1>Experience</H1> the Ultimate Mind-Body Connection in our daily
            fitness, yoga, pilates and mobility sessions, guided by Marina and
            Jeanine who will help you deepen your practice and connect with your
            physical body.{" "}
          </SubtitleCap>
        </div>
        <div>
          <img src={imgGrid3} alt="" style={{ marginTop: "2px" }} />
        </div>
        <div>
          <SubtitleCap>
            {" "}
            <H1>Expand</H1> your mindset in truly transformative workshops with
            Agustín. An expert in performance coaching, he will challenge and
            elevate your mindset and help you embrace new perspectives and
            cultivate a positive outlook.
          </SubtitleCap>
        </div>
        <div>
          <img src={imgGrid1} alt="" />
        </div>
        <div>
          <SubtitleCap>
            <H1>Nourish</H1> your body with fresh, locally-sourced ingredients
            with our specially curated nutrition plan. Each meal is designed to
            nourish and energize, supporting your physical well-being while
            delighting your taste buds. As well as learn about optimal nutrition
            with our expert Jeanine who guided hundreds on their journey.
          </SubtitleCap>
        </div>
        <div>
          <img src={imgGrid2} alt="" />
        </div>
      </DiscroverGrid>

      <MeetSection>
        <H1 style={{ margin: "50px auto" }}>Meet your facilitators</H1>
        <HostGrid>
          <div id="second">
            <img src={imgHost1} alt="" style={{ aspectRatio: 1 }} />
          </div>
          <div style={{ aspectRatio: 1 }} id="first">
            <H1 style={{ margin: "20px auto 0 " }}>Agustín</H1>
            <Body>
              Agustín R. Quevedo is the co-founder of WholeFit, LLC,
              specializing in holistic health and wellness coaching. With over
              30 years of experience across business, education, and health &
              fitness, he offers extensive expertise in comprehensive wellness
              strategies. Agustín holds a Juris Doctor from St. Thomas
              University, an MBA from the University of Miami, and an MS in
              Exercise Science and Nutrition from the University of Central
              Florida. He is also pursuing a doctorate in Performance Psychology
              from the University of Western States.
            </Body>
          </div>
          <div id="third">
            <Body>
              <Subtitle>
                Agustín's certifications demonstrate his commitment to
                excellence and include:
              </Subtitle>
              <br />
              <Body> • WholeFit Certified Master Transformation Coach</Body>
              <Body>
                {" "}
                • WholeFit Certified Mindfulness & Meditation Instructor
              </Body>
              <Body> • NCSF Master Trainer & Sports Nutritionist</Body>
              <Body> • NASM Certified Personal Trainer</Body>
              <Body> • Precision Nutrition Certified Coach</Body>
              <Body>
                {" "}
                • Precision Nutrition Certified Sleep, Stress Management, and
                Recovery Coach
              </Body>
              <Body> • NGH Certified Motivational Hypnotist & Instructor</Body>
              <Body> • Certified Master of NLP & Coaching</Body>
              <Body> • Certified Master of Emotional Release Therapy</Body>
              <Body> • University of Miami Certified Professional Coach</Body>
              <Body> • ICF Professional Coach</Body>
            </Body>
          </div>
          <div id="forth">
            <img src={imgHost2} alt="" />
          </div>
        </HostGrid>

        <HostGrid>
          <div id="second">
            <img src={imgHost3} alt="" style={{ aspectRatio: 1 }} />
          </div>
          <div style={{ aspectRatio: 1 }} id="first">
            <H1 style={{ margin: "20px auto 0 " }}>Marina</H1>
            <Body>
              Marina is a passionate wellness and movement educator, her fitness
              and wellness journey began in 2010 with yoga and it quickly grew
              into passion and lifestyle. She graduated from two 200 hours RYT
              training - Empowered Yoga in 2013 in Wilmington Delaware. The
              following year I completed Vinyasa YTT at Dimitra Yoga Lewes
              Delaware and taught there for 8 years. Years of teaching yoga lead
              her to different movement modalities such as Cross Fit and long
              distance running. Then she decided to go back to college and
              become a Physical Therapy Assistant. 3 years in PTA school
              deepened my knowledge in physiology, anatomy and kinesiology. In
              2019 she became a Certified Personal Trainer.
            </Body>
          </div>
          <div id="third">
            <Body>
              <Subtitle>Marina's credentials also include:</Subtitle>
              <br />
              <Body> • Functional Range Conditioning (FRC) coach</Body>
              <Body> • Precision Nutrition Coach L1</Body>
              <Body> • Balanced Athlete coach L1</Body>
              <Body> • Kettle Bell coach through NESTA</Body>
              <Body> • Pain Free Performance Specialist (PPSC)</Body>
              <br />
              <Body>
                She studied mindfulness with Sound True and Jack Kornfield,
                participated in four Vipassana Silent meditation retreats and
                studied Yin yoga and myofascial release. Beyond her professional
                endeavors, Marina's heart lies in exploring the world,
                particularly drawn to Mexico, Central, and South America. Here,
                she discovers profound connections with the enigmatic cultures,
                traditions, and spiritual teachings that enrich her journey.
                Through her teachings and travels, she not only inspires but
                empowers others to embrace wellness in all its forms, wherever
                their journeys may take them.
              </Body>
            </Body>
          </div>
          <div id="forth">
            <img src={imgHost4} alt="" />
          </div>
        </HostGrid>

        <HostGrid>
          <div id="second">
            <img src={imgHost5} alt="" style={{ aspectRatio: 1 }} />
          </div>
          <div style={{ aspectRatio: 1 }} id="first">
            <H1 style={{ margin: "20px auto 0 " }}>Jeanine</H1>
            <Body>
              Jeanine DeLorme is a passionate and dedicated health and wellness
              professional with over 25 years of experience in fitness, dance,
              and holistic coaching. From an early age, Jeanine immersed herself
              in a wide array of athletic pursuits, excelling in swimming,
              diving, basketball, volleyball, and track. Her love for physical
              challenge and expression eventually led her to discover the
              beauty, and complexity of classical and Russian ballet. She
              dedicated 25 years to teaching ballet, becoming a certified
              Cecchetti Ballet instructor across levels I-VII. Her teaching not
              only honed the skills of countless dancers but also deepened her
              understanding of body mechanics and movement aesthetics.
            </Body>
          </div>
          <div id="third">
            <Body>
              <Subtitle>
                Jeanine's comprehensive expertise is backed by an impressive
                array of credentials, including:
              </Subtitle>
              <br />
              <Body>
                {" "}
                • Bachelor of Science in Kinesiology and Exercise Science
              </Body>
              <Body>
                {" "}
                • Certified Cecchetti Ballet Instructor (Levels I-VII)
              </Body>
              <Body>
                {" "}
                • Pilates Certifications through Ball Fitness and Lagree
              </Body>
              <Body>
                {" "}
                • Certified Spin Instructor through Mad Dogg Athletics
              </Body>
              <Body> • Certified Zumba Instructor</Body>
              <Body>
                {" "}
                • Certified Personal Trainer through NASM (National Academy of
                Sports Medicine){" "}
              </Body>
              <Body> • ISSA (International Sports Sciences Association)</Body>
              <Body>
                {" "}
                • Nutrition Certification through Precision Nutrition
              </Body>
              <Body>
                {" "}
                • Certified Hypnotherapist through the National Guild of
                Hypnotists
              </Body>
              <Body>
                {" "}
                • Certified Master Health Coach through Dr. Sears Wellness
                Institute
              </Body>
              <Body>
                {" "}
                • Certified Metabolic Balance Coach through Metabolic Balance
              </Body>

              <br />
              <Body>
                After the birth of her three children, Jeanine faced personal
                challenges with weight gain. Determined to reclaim her health
                through holistic methods, she embarked on a journey of balanced
                nutrition and resistance training. This transformative
                experience ignited a new passion for fitness and wellness
                coaching. Jeanine's enthusiasm for body movement and athletic
                challenges continued to flourish as she competed in women's
                fitness and bikini competitions, earning recognition and fame at
                the professional level. Her relentless drive and positive
                attitude have been instrumental in her success as both a
                competitor and a coach.
                <br />
                <br />
                As a seasoned coach and personal trainer, Jeanine has dedicated
                herself to guiding clients toward realizing their full
                potential. Her extensive experience and empathetic approach have
                empowered countless men and women to soar to new heights in
                their health and wellness journeys.
              </Body>
            </Body>
          </div>
          <div id="forth">
            <img src={imgHost6} alt="" />
          </div>
        </HostGrid>
      </MeetSection>

      <IncludedSection>
        <H1>WHAT'S INCLUDED:</H1>
        <List>
          <ul role="list">
            <li>
              <Body>
                <strong>—</strong> 7 night accommodation of your choice
              </Body>
            </li>

            <li>
              <Body>
                <strong>—</strong> 3 organic, locally sourced, cooked with love
                and ancient knowledge meals tailored to your needs
              </Body>
            </li>
            <li>
              <Body>
                <strong>—</strong> Shuttle from and to airport
              </Body>
            </li>

            <li>
              <Body>
                <strong>—</strong> Daily mindful movement practice : yoga,
                stretching, mobility, pilates and strength training lead by
                Jeanine and Marina
              </Body>
            </li>
            <li>
              <Body>
                <strong>—</strong> Daily meditation and mindfulness
              </Body>
            </li>

            <li>
              <Body>
                <strong>—</strong> Full day tour to Corcovado National Park
              </Body>
            </li>
            <li>
              <Body>
                <strong>—</strong> Bonfire sharing circle at the beach
              </Body>
            </li>
          </ul>
          <ul role="list">
            <li>
              <Body>
                <strong>—</strong> Resort amenities
              </Body>
            </li>
            <li>
              <Body>
                <strong>—</strong> Personal gift bag + manual
              </Body>
            </li>
            <li>
              <Body>
                <strong>—</strong> Five transformative workshops: meditation &
                mindfulness, self hypnosis, spine and hips mobility, and
                nutrition workshop (***read the workshop's description below) to
                empower your mind, body and soul through the science of
                mindfulness, movement and nutrition led by Augustine, Jeanine
                and Marina.
              </Body>
            </li>
            <li>
              <Body>
                <strong>—</strong> Group zoom prep call + one month integration
                after retreat through zoom session (one guided meditation and
                QnA, one session of QnA for nutrition with Jeannie, one month
                access to Marina’s online yoga and mobility classes).
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
        </Swiper>
      </IncludedSection>

      <WorkshopSection>
        <H1>Workshop Details </H1>
        <Subtitle>
          Evidence-Based Mindfulness & Meditation Training (6-8 hrs):
        </Subtitle>
        <Body>
          Mindfulness can make drastic positive shifts in your physical and
          mental health.
        </Body>
        <Body>
          Researches have shown that people who are more mindful are generally
          happier and report less anxiety, symptoms of depression, anger, and
          worries. A higher degree of mindfulness is also associated with
          reduced stress and increased gratitude, hope, and vitality.
          <br />
          <br />
          So, if practicing mindfulness holds such powerful potential for our
          well-being, why aren’t we all doing it every day? The reason is that
          we often need more guidance and support than simply downloading an
          app. We need to better understand the underlying processes and
          research behind mindfulness. <br />
          <br /> This program is designed to walk you through everything you
          need to fully understand mindfulness and experience the profound
          effects it can have on your life.
        </Body>
        <Subtitle>
          What you will learn and how it’s going to benefit you:
        </Subtitle>
        <ListWorkshop>
          <ul role="list">
            <li>
              <Body>
                <strong>—</strong> Information and practice integrated with
                research and evidence.
              </Body>
            </li>
            <li>
              <Body>
                <strong>—</strong> Small, informal practices that help weave
                mindfulness into your daily routine.
              </Body>
            </li>
            <li>
              <Body>
                <strong>—</strong> An examination of mindfulness in the broader
                context of life and how we perceive things.
              </Body>
            </li>
            <li>
              <Body>
                <strong>—</strong> Understanding the foundation of psychological
                processes that mindfulness rests upon.
              </Body>
            </li>
            <li>
              <Body>
                <strong>—</strong> A detailed handbook with worksheets and
                homework to practice and integrate the knowledge and experience.
              </Body>
            </li>
          </ul>
        </ListWorkshop>

        <Subtitle>Mastering the Art of Self Hypnosis (6-8 hrs):</Subtitle>
        <Body>
          You will learn how to unlock the power of your subconscious mind with
          our comprehensive Self-Hypnosis for Health & Wellness course. This
          training program is designed to teach you the fundamentals of
          self-hypnosis, providing you with effective tools to promote
          relaxation, enhance personal development, and achieve your goals.
          <br />
          <br />
          Based on scientific research and practical applications, this course
          offers step-by-step guidance to help you master the art of
          self-hypnosis. Whether you are new to hypnosis or looking to deepen
          your practice, our structured yet flexible program is suitable for all
          experience levels.
        </Body>
        <Subtitle>What you will learn:</Subtitle>
        <ListWorkshop>
          <ul role="list">
            <li>
              <Body>
                <strong>—</strong> How to reach a state of deep relaxation and
                how to reduce the impact of daily stressors.
              </Body>
            </li>
            <li>
              <Body>
                <strong>—</strong> How to enhance the quality of your sleep by
                calming your mind and body before bedtime.
              </Body>
            </li>
            <li>
              <Body>
                <strong>—</strong> How to boost your concentration and mental
                clarity for improved performance in various areas of life.
              </Body>
            </li>
            <li>
              <Body>
                <strong>—</strong> How to manage anxiety, negative thoughts, and
                emotions through effective self-hypnosis techniques.
              </Body>
            </li>
            <li>
              <Body>
                <strong>—</strong> How to set and achieve personal goals, build
                self-confidence, and foster a positive mindset, alleviate
                chronic pain and enhance physical well-being.
              </Body>
            </li>
          </ul>
        </ListWorkshop>
        <Body>
          By the end of the course, you will have gained the skills and
          confidence to practice self-hypnosis independently, allowing you to
          harness the full potential of your mind for lasting wellness and
          personal transformation
        </Body>
        <br />
        <br />
        <Subtitle> The Holistic Nutrition & Metabolic Workshop</Subtitle>
        <Body>
          This is a comprehensive, hands-on experience designed to empower
          participants with the knowledge and tools to optimize their health
          through natural and integrative approaches. This workshop delves deep
          into the interconnectedness of nutrition, metabolism, and overall
          well-being, emphasizing the importance of a balanced lifestyle that
          harmonizes body, mind, and spirit.
          <br />
          <br />
          Participants will explore the fundamentals of holistic nutrition,
          learning how whole foods, herbs, and natural supplements can enhance
          metabolic function, support detoxification, and boost energy levels.
          The workshop will cover topics such as the role of macronutrients and
          micronutrients, the impact of stress and sleep on metabolism, and
          personalized dietary strategies based on individual metabolic types.
          <br />
          <br />
          In addition to educational sessions, the workshop includes practical
          activities such as meal planning, cooking demonstrations, and guided
          meditations to help participants integrate what they've learned into
          their daily lives. Attendees will also have the opportunity to assess
          their current health status through various diagnostic tools, receive
          personalized nutrition and lifestyle recommendations, and participate
          in group discussions to share experiences and insights.
          <br />
          <br />
          By the end of the workshop, participants will leave with a deeper
          understanding of how to nourish their bodies holistically, achieve
          metabolic balance, and maintain long-term health and vitality. This
          workshop is ideal for anyone seeking to take a proactive approach to
          their health, whether they are new to holistic practices or looking to
          deepen their existing knowledge.
        </Body>
        <br />
        <br />
        <Subtitle>IV and V Hips and Spine Mobility workshop</Subtitle>
        <Body>
          These two workshops are 90 minutes long each are body weight movement
          practice, however true mobility is strength! Despite the fact we are
          not gonna be using external load (weights), the practice does
          challenge the body and nervous system as much as resistance training -
          so be ready to work hard!
          <br />
          <br />
          These two workshops are dedicated to enhancing hips and spine mobility
          through the Functional Range System (FRS). It will cover techniques
          and exercises designed to improve the range of motion, joint health,
          and overall movement quality of the hips and spine. The sessions
          integrate scientific principles with practical applications to address
          mobility limitations and support functional movement. First we will
          earn the foundational concepts of the Functional Range System,
          focusing on controlled articular rotations (CARs) and end-range
          training.
          <br />
          <br />
          As built on we will learn Pails and Rails techniques to help teach the
          central nervous system (CNS) how to control and function in newly
          acquired ranges. Utilizing isometric contraction teaches the nervous
          system to have active control over a particular range. <br />
          <br />
          These techniques help expand the available range of motion at any
          given joint, will help build strength and tissue adaptation in both
          the shortened and lengthened ranges of motion. With the basic
          principles from the FRC system we will move through creative,
          intelligent and functional sequences that will make you rethink what
          functional movement is.
          <br />
          <br />
          As a result you will learn how to move better with more control, as
          well as you will learn skills to enhance hip and spine mobility,
          drills to mitigate risk of injuries, strengthen your joints, and
          improve movement efficiency ! and most importantly feel great in your
          body.
        </Body>
      </WorkshopSection>

      <WideImg src={workshop1} alt="" />

      <ScheduleSection>
        <H1>TENTATIVE SCHEDULE</H1>
        <DaytName>Day 1 April 23rd</DaytName>
        <Body>
          Arrival + Gentle yoga with Marina <br />
          Introduction circle with gift bag giveaway <br />
          Dinner
        </Body>
        <ScheduleTable>
          <div>
            <DaytName>Day 2</DaytName>
            <Body>
              8.30 - 9.30 am Full Body Strength with Jeanine <br />
              9.45 - 11 am breakfast
              <br />
              11 am - 1 pm Mindfulness workshop part I with Agustin
              <br />
              1 pm - 2 pm lunch <br />
              2.00 pm - 5.30 pm Mindfulness workshop part II with Agustine
              <br />
              6 pm - 7pm Power Yoga with Marina
              <br />
              7.30 pm dinner
              <br />
              8.30 pm sharing circle
              <br />
            </Body>
          </div>
          <DayMobile>
            <DaytName>Day 3</DaytName>
            <Body>
              8 -8.30 Morning meditation w/Agustin
              <br />
              8.30-9.30 am HIIT w/Jeanine
              <br />
              9.45 Breakfast
              <br />
              11am - 1 pm Self hypnosis workshop part one w/Agustin
              <br />
              1.00- 2.00 Lunch <br />
              2.00 pm - 6 pm Self hypnosis workshop part two w/Agustin
              <br />
              Free time <br />
              7.30 pm Dinner
              <br />
            </Body>
          </DayMobile>
          <div>
            <DaytName>Day 4</DaytName>
            <Body>
              8.00 - 9.00 Morning Meditation w/Agustin
              <br />
              9 am - 10.30 Spine mobility w/Marina <br />
              10.30 Breakfast <br />
              Free time for excursions and spa
              <br />
              5 -6 pm Stretch class w/Jeanine at the beach and sunset meditation
              <br />
              7.30 Dinner <br />
            </Body>
          </div>
          <DayMobile>
            <DaytName>Day 5</DaytName>
            <Body>
              8- 9 Meditation with Agustin
              <br />
              9.00 - 10.30 Hips Mobility workshop w/Marina
              <br />
              Breakfast <br />
              Free time
              <br />
              6 -7 Pilates w/Jeannie
              <br />
              7.30 pm Dinner <br />
            </Body>
          </DayMobile>
          <DayDesktop>
            <DaytName>Day 6</DaytName>
            <Body>
              Meditation w/Agustin + Breakfast
              <br />
              8 - 4 Day tour to Corcovado National Park <br />
              5 - 6 Yin Yoga with Marina
              <br />
              7.30 Dinner
              <br />
            </Body>
          </DayDesktop>
          <DayDesktop>
            <DaytName>Day 3</DaytName>
            <Body>
              8 -8.30 Morning meditation w/Agustin
              <br />
              8.30-9.30 am HIIT w/Jeanine
              <br />
              9.45 Breakfast
              <br />
              11am - 1 pm Self hypnosis workshop part one w/Agustin
              <br />
              1.00- 2.00 Lunch <br />
              2.00 pm - 6 pm Self hypnosis workshop part two w/Agustin
              <br />
              Free time <br />
              7.30 pm Dinner
              <br />
            </Body>
          </DayDesktop>
          <DayDesktop>
            <DaytName>Day 5</DaytName>
            <Body>
              8- 9 Meditation with Agustin
              <br />
              9.00 - 10.30 Hips Mobility workshop w/Marina
              <br />
              Breakfast <br />
              Free time
              <br />
              6 -7 Pilates w/Jeannie
              <br />
              7.30 pm Dinner <br />
            </Body>
          </DayDesktop>
          <DayMobile>
            <DaytName>Day 6</DaytName>
            <Body>
              Meditation w/Agustin + Breakfast
              <br />
              8 - 4 Day tour to Corcovado National Park <br />
              5 - 6 Yin Yoga with Marina
              <br />
              7.30 Dinner
              <br />
            </Body>
          </DayMobile>
          <div>
            <DaytName>Day 7</DaytName>
            <Body>
              8 am Meditation w/Agustin
              <br />
              8.30-9.30 Power Yoga w/Marina <br />
              9.30 -10.30 Breakfast
              <br />
              11 - 1 pm Nutrition workshop with Jeanine
              <br />
              Free time <br />
              6.30 pm - 8.30 Final Yoga class + closing ceremony <br />
              7.30 dinner
              <br />
            </Body>
          </div>
        </ScheduleTable>
        <DaytName>Day 8 April 30th</DaytName>
        <Body>Breakfast + departure to airport</Body>
      </ScheduleSection>

      <PaymentSection>
        <H1>Accommodation options and pricing</H1>
        <Body>
          Villa-style rooms – kitted out with air-conditioning, screened windows
          and powerful fans to keep cool air flowing – are thoughtfully
          decorated and feature locally sourced furnishings, specially
          commissioned contemporary art and en-suite bathrooms. The body and
          hair care products provided in guests’ bathrooms are plant-based,
          biodegradable and made in Costa Rica. Beds and linens are of the
          highest quality throughout.
        </Body>
        <Subtitle>
          {" "}
          • Triple occupancy room ( XL3 twin bed with private bathroom){" "}
        </Subtitle>
        $2695 Early bird special price if paid by December 1st and paid in full
        <br />
        $2995 regular price ( secure your spot with deposit, and get a payment
        plan)
        <br />
        <Subtitle>
          {" "}
          • Double occupancy room ( two XL twin beds or one king size bed){" "}
        </Subtitle>
        $3195 Early bird special price if paid by December 1st and paid in full{" "}
        <br />
        $3495 regular price ( secure your spot with deposit, and get a payment
        plan)
        <Subtitle>
          {" "}
          • Single rooms ( queen size beds. Shared bathroom with the room next
          door){" "}
        </Subtitle>
        $3095 Early bird special price if paid by December 1st and paid in full
        <br />
        $3395 regular price ( secure your spot with deposit, and get a payment
        plan)
        <H1>Payment</H1>
        <Body>
          • Pay in full and get an amazing discount (special offer is available
          by December 1st and non refundable) *unless extraordinary
          circumstances come up and we can discuss it case by case
        </Body>
        <Body>
          • Save your spot by submitting a deposit - only $799 (nonrefundable)
          and the rest in two payments : 1. 50 % by January 1st and 2. By March
          1st. (once payments are made they become non refundable) *unless
          extraordinary circumstances come up and we can discuss it case by case
        </Body>
        <H1>What's not included and optional</H1>
        <Body>• Adventures and excursions in your free time</Body>
        <Body>• Spa services</Body>
        <Body>• Airplane tickets</Body>
        <Body>• Travel insurance (if you wish to have one)</Body>
      </PaymentSection>

      <ScheduleSection>
        <H1>Contact Info</H1>
        <Body>
          Email:{" "}
          <a href="mailto:marina@marinafitness.pro">marina@marinafitness.pro</a>
        </Body>
        <Body>
          Phone numbers: M: <a href="tel:302-747-3415">1-302-747-3415</a>
        </Body>
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
      </ScheduleSection>
      {/* <Description>
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
      </Description> */}

      {/* <MeetSection>
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
      </MeetSection> */}

      {/* <HistorySection>
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
      <YuliaSection>
        <SideHistoryImage>
          <img src={yuliaImg} alt="" />
        </SideHistoryImage>
        <SideContent yulia>
          <HostName>Guest Teacher Yulia</HostName>
          <Body>
            Yulia is an art and mindfulness educator with over{" "}
            <strong>15 years of global experience as an art curator</strong>.
            Eight years ago, she discovered Human Design and began incorporating
            mindfulness practices to gain deeper insights into her own path and
            better serve others. <br /> <br /> Four years ago, Yulia moved to
            Mexico, where she immersed herself in ancient traditions and
            techniques related to the four elements and spiritual temazcal,
            actively engaging with the local community. She is a Sun-Dancer in
            Lakota traditions, a Human Design and Genetic Keys reader, a
            dedicated Vipassana meditator, a Reiki Master, and an art historian.
            Yulia's mission is to{" "}
            <strong>
              empower women by blending ancient and contemporary mindfulness
              tools
            </strong>{" "}
            to achieve transformative results.
          </Body>
        </SideContent>
        <HostNameMobile>Guest Teacher Yulia</HostNameMobile>
      </YuliaSection> */}

      {/* <IncludedSection>
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
                <strong>—</strong> Cacao ceremony and ecstatic dance
              </Body>
            </li>

            <li>
              <Body>
                <strong>—</strong> Sharing bonfire circle
              </Body>
            </li>
            <li>
              <Body>
                <strong>—</strong> Daily movement (mobility and yoga classes)
                and meditation
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
                <strong>—</strong> 4 elements and altar creation workshop with
                Yulia
              </Body>
            </li>

            <li>
              <Body>
                <strong>—</strong> Temazcal led by Yulia
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
          <SwiperSlide className="styled">
            <img src={sliderImg7} alt="" />
          </SwiperSlide>
          <SwiperSlide className="styled">
            <img src={sliderImg9} alt="" />
          </SwiperSlide>
          <SwiperSlide className="styled">
            <img src={sliderImg10} alt="" />
          </SwiperSlide>
          <SwiperSlide className="styled">
            <img src={sliderImg8} alt="" />
          </SwiperSlide>
          <SwiperSlide className="styled">
            <img src={sliderImg11} alt="" />
          </SwiperSlide>
          <SwiperSlide className="styled">
            <img src={sliderImg12} alt="" />
          </SwiperSlide>
        </Swiper>
      </IncludedSection> */}

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

      {/* <ScheduleSection>
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
          <DayMobile>
            <DaytName>Day 3</DaytName>
            <Body>
              Morning Yoga and Meditation
              <br />
              Yin yoga themed around feminine energy
              <br />
            </Body>
          </DayMobile>
          <div>
            <DaytName>Day 4</DaytName>
            <Body>
              Spinal Mobility workshop <br />
              Pottery Workshop
              <br />
              Tour to Inkas Archeological sights
            </Body>
          </div>
          <DayMobile>
            <DaytName>Day 5</DaytName>
            <Body>
              Morning yoga + prompts for journaling <br />
              Cacao Ceremony and ecstatic dance
            </Body>
          </DayMobile>
          <DayDesktop>
            <DaytName>Day 6</DaytName>
            <Body>
              Morning yoga + meditation <br />
              Trekking near Samadhi
              <br />
              Meditation + movement
              <br /> Temazcal + cold plunge, sharing circle
            </Body>
          </DayDesktop>
          <DayDesktop>
            <DaytName>Day 3</DaytName>
            <Body>
              Morning Yoga and Meditation
              <br />
              Yin yoga themed around feminine energy
              <br />
            </Body>
          </DayDesktop>
          <DayDesktop>
            <DaytName>Day 5</DaytName>
            <Body>
              Morning yoga + prompts for journaling <br />
              Cacao Ceremony and ecstatic dance
            </Body>
          </DayDesktop>
          <DayMobile>
            <DaytName>Day 6</DaytName>
            <Body>
              Morning yoga + meditation <br />
              Trekking near Samadhi
              <br />
              Meditation + movement
              <br /> Temazcal + cold plunge, sharing circle
            </Body>
          </DayMobile>
          <div>
            <DaytName>Day 7</DaytName>
            <Body>
              Morning movement + laughing yoga <br />
              11 - 12am farewell circle (gifts giveaway) <br />
              Transportation to Cuzco or Pisac
            </Body>
          </div>
        </ScheduleTable>
      </ScheduleSection> */}

      {/* <DescriptionWrapper>
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
      </NotIncludedSection> */}

      {/* <HistorySection>
        <SideContent history>
          <H1>TRAVEL INFORMATION</H1>
          <Body>
            For your convenience fly to Alejandro Velasco Astete International
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
                <a href="mailto:marina@marinafitness.pro">
                  marina@marinafitness.pro
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
      </NotIncludedSection> */}
    </>
  );
};

const H1 = styled.h1`
  font-size: 3vw;
  color: #394406;
  text-transform: uppercase;
  @media (max-width: 1000px) {
    font-size: 6.5vw;
  }
`;
const Subtitle = styled.h2`
  font-size: 25px;
  color: #394406;
  @media (max-width: 1000px) {
    font-size: 25px !important;
  }
`;
const SubtitleCap = styled.h3`
  font-size: 20px;
  color: #394406;
  text-transform: uppercase;
  @media (max-width: 1000px) {
    font-size: 25px !important;
  }
`;
const Body = styled.p`
  font-size: 18px;
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
const DiscroverGrid = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3px;
  img {
    width: 100%;
    object-fit: cover;
    aspect-ratio: 1;
  }
  div {
    aspect-ratio: 1;
    top: 0;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h3 {
    padding: 20px;
    font-size: 1.7vw;
  }
  h1 {
    font-size: 3vw !important;
  }
  @media (min-width: 1001px) {
    div {
      position: relative;
      max-width: 33vw;
    }
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    div {
      position: sticky;
      max-width: unset;
    }
    h3 {
      padding: 20px;
      font-size: 4vw !important;
    }
    h1 {
      font-size: 6.5vw !important;
    }
  }
`;

const HostGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  & > div > p {
    padding: 30px;
  }
  div {
    /* aspect-ratio: 1; */
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h3 {
    padding: 20px;
    font-size: 1.7vw;
  }
  h1 {
    font-size: 3vw !important;
  }
  @media (min-width: 1001px) {
    div {
      position: relative;
    }
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    div {
      max-width: unset;
      aspect-ratio: unset;
    }
    h3 {
      padding: 20px;
      font-size: 4vw !important;
    }
    h1 {
      font-size: 6.5vw !important;
    }
    & > div > p {
      padding: 10px 0 30px 0;
    }
    div#first {
      order: 1;
    }
    div#second {
      order: 2;
    }
    div#third {
      order: 3;
    }
    div#forth {
      order: 4;
    }
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
  ${({ yulia }) =>
    yulia &&
    css`
      background-color: transparent !important;
      padding: 0;
      margin-bottom: 25px;
    `}
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
const YuliaSection = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  margin: auto;
  background-color: #eee3d9be;
  flex-direction: row-reverse;
  padding: 40px;
  margin-bottom: 50px;
  @media (max-width: 1000px) {
    margin-bottom: 10px;
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
  flex-direction: column;
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
    /* color: #1c2a14; */
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
    gap: 5px;
  }
`;
const WorkshopSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 35px;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;

  @media (max-width: 1000px) {
    // padding: 30px 0 0;
  }
`;
const PaymentSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 35px;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  span {
    display: inline;
    font-weight: 600;
  }
  @media (max-width: 1000px) {
    align-items: flex-start;
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
  background-color: #dce5d0;
  padding: 50px 30px 40px;
  ${H1} {
    margin-bottom: 25px;
  }
  p {
    font-size: 16px;
  }
  ${DaytName} {
    margin-bottom: 0;
    color: #394406;
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
const ListWorkshop = styled.div`
  padding: 0px 30px;
  max-width: 1200px;
  /* width: 100%; */
  display: grid;
  grid-template-columns: 1fr;
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
  background-color: #394406;
  border: none;
  color: white;
  letter-spacing: 0.5px;
  font-weight: 600;
  font-size: 22px;
  text-transform: uppercase;
  border-radius: 4px;
`;
const DayDesktop = styled.div`
  display: block;
  @media (max-width: 700px) {
    display: none;
  }
`;
const DayMobile = styled.div`
  display: none;
  @media (max-width: 700px) {
    display: block;
  }
`;

import React from "react";
import "./About.css";
import aboutImg from "./img/fruit-shop.jpg";
function About() {
  //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <div className="about component__space" id="About">
      <div className="container about">
        <div className="row about reverse">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="motto__heading">
              Supercharge vitality <br /> by increasing your <br />
              knowledge and activity
            </h1>
            <br />
            <h1 className="about__heading">Meet Marina</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                <strong>
                  {" "}
                  Her outlook on fitness and wellbeing is focused on balance
                  between strength and mobility, optimal nutrition, and
                  mindfulness with every step of the way.
                </strong>{" "}
                <br />
              </p>
              <p className="about__text p__color">
                <strong>
                  Marina strives to create an uplifting, safe environment for
                  her clients to keep them focused and motivated!
                </strong>{" "}
                She finds teaching movement the most rewarding and meaningful
                job with the mission is to engage others in a relationship with
                movement and balanced nutrition to inspire a deeper sense of
                confidence and joy in physical, emotional and spiritual
                experience as human beings.
              </p>
              <p className="about__text p__color">
                <strong>
                  She looks at the body as a complex system that needs to be
                  addressed accordingly. We are multidimensional, incredibly
                  complex, non linear and not all sizes fit beings
                </strong>
                .
              </p>
              <div
                className="about__button d__flex align__items__center"
                style={{ gap: 30 }}
              >
                <a href="#">
                  <button className="about btn pointer">Take quiz</button>
                </a>
                <a href="#">
                  <button className="about btn pointer">Work with Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;

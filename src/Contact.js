import React from "react";
import "./Contact.css";
import contactImg from "./img/marina-portrait.jpg";
function Contact() {
  return (
    <div className="contact component__space" id="Contact">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text black">Hire Me.</h1>
              <p className="hire__text black">
                Now is your time to feel empowered and educated about movement,
                nutrition and your body!
                <br />
                <br />
                Ask me a question I’m here to help:{" "}
              </p>
              <p className="hire__text black">
                <strong>marina@marinafitness.pro</strong>
              </p>

              <br />
              <br />
              <p className="hire__text black">
                Or fill up my coaching application to get started
              </p>
              <br />
              <a
                href="https://docs.google.com/forms/d/1E257IEXU7Nf48yiMpXjr9B8p1VNRMdQ1WFuh4AX1-mw"
                target="_blank"
                and
                rel="noopener noreferrer"
              >
                <button className="about btn pointer">
                  Coaching Application
                </button>
              </a>
            </div>
            {/* <div className="input__box">
              <input
                type="text"
                className="contact name"
                placeholder="Your name *"
              />
              <input
                type="text"
                className="contact email"
                placeholder="Your Email *"
              />
              <input
                type="text"
                className="contact subject"
                placeholder="Write a Subject"
              />
              <textarea
                name="message"
                id="message"
                placeholder="Write Your message"
              ></textarea>
              <button className="btn contact pointer" type="submit">
                Submit
              </button>
            </div> */}
          </div>
        </div>
        <div className="col__2">
          <img src={contactImg} alt="" className="contact__img" />
        </div>
      </div>
    </div>
  );
}

export default Contact;

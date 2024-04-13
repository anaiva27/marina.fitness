import React, { useState } from "react";
import "./Contact.css";
import contactImg from "./img/marina-portrait.jpg";
function Contact() {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
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
                <a
                  href="mailto:marina@marinafitness.pro"
                  style={{ color: "#fff", textDecoration: "underline" }}
                >
                  <strong>marina@marinafitness.pro</strong>
                </a>
              </p>
              <br />
              <p className="hire__text black">
                Or fill up this form to receive my personalized offers:{" "}
              </p>
              <div id="mc_embed_signup">
                <form
                  action="https://marinafitness.us18.list-manage.com/subscribe/post?u=81d7f5090e271a5e5249e16c7&amp;id=5616982dce&amp;f_id=00acc2e1f0"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  className="validate"
                  target="_blank"
                >
                  <div id="mc_embed_signup_scroll">
                    <div className="indicates-required">
                      {/* <span className="asterisk">*</span>  */}* indicates
                      required
                    </div>
                    <div className="mc-field-group">
                      <label for="mce-FNAME">First Name* (required) </label>
                      <input
                        type="text"
                        name="FNAME"
                        className=" text"
                        id="mce-FNAME"
                        value={formName}
                        onChange={(v) => setFormName(v.target.value)}
                      />
                    </div>
                    <div className="mc-field-group">
                      <label for="mce-EMAIL">
                        Email Address* (required)
                        {/* <span className="asterisk">*</span> */}
                      </label>
                      <input
                        type="email"
                        name="EMAIL"
                        className="required email"
                        id="mce-EMAIL"
                        required=""
                        value={formEmail}
                        onChange={(v) => setFormEmail(v.target.value)}
                      />
                    </div>
                    <div className="mc-field-group">
                      <label for="mce-MMERGE6">Message </label>
                      <input
                        type="text"
                        name="MMERGE6"
                        className=" text"
                        id="mce-MMERGE6"
                        value={formMessage}
                        onChange={(v) => setFormMessage(v.target.value)}
                      />
                    </div>
                    {/* <div className="mc-field-group input-group">
                      <strong>Subscribe confirmation </strong>
                      <ul>
                        <li>
                          <input
                            type="radio"
                            name="MMERGE7"
                            id="mce-MMERGE70"
                            value="I want to subscribe to Marina's email list to get personalized offers"
                          />
                          <label for="mce-MMERGE70">
                            I want to subscribe to Marina's email list to get
                            personalized offers
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            name="MMERGE7"
                            id="mce-MMERGE71"
                            value="I do not wish to subscribe"
                          />
                          <label for="mce-MMERGE71">
                            I do not wish to subscribe
                          </label>
                        </li>
                      </ul>
                    </div> */}
                    <div hidden="">
                      <input type="hidden" name="tags" value="159" />
                    </div>
                    <div id="mce-responses" className="clear">
                      <div
                        className="response"
                        id="mce-error-response"
                        style={{ display: "none" }}
                      ></div>
                      <div
                        className="response"
                        id="mce-success-response"
                        style={{ display: "none" }}
                      ></div>
                    </div>
                    <div
                      aria-hidden="true"
                      style={{ position: "absolute", left: "-5000px" }}
                    >
                      <input
                        type="text"
                        name="b_81d7f5090e271a5e5249e16c7_5616982dce"
                        tabindex="-1"
                        value=""
                      />
                    </div>
                    <div className="clear">
                      <input
                        type="submit"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        className="button"
                        value="SUBSCRIBE"
                        disabled={!formEmail || !formName || !formMessage}
                      />
                    </div>
                  </div>
                </form>
              </div>
              <br />
              <br />
              <p className="hire__text black">
                Alternatively, you can fill up my coaching application to get
                started
              </p>
              <br />
              <a
                href="https://docs.google.com/forms/d/1E257IEXU7Nf48yiMpXjr9B8p1VNRMdQ1WFuh4AX1-mw"
                target="_blank"
                and
                rel="noopener noreferrer"
              >
                <button className="about btn pointer">
                  COACHING APPLICATION
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

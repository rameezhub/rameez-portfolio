import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/rameez-sarguru-5b5853325"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — rameez-sarguru
              </a>
            </p>
            <h4>Info</h4>
            <p>Computer Engineering Student — AI Developer &amp; Full Stack Developer</p>
            <p>
              <a href="mailto:iamrameezsarguru@gmail.com" data-cursor="disable">
                iamrameezsarguru@gmail.com
              </a>
            </p>
            <p>+91 7709576482</p>
            <p>India</p>
          </div>

          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/rameezhub"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/rameez-sarguru-5b5853325"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/coding.keeda_"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>

          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Rameez Sarguru</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

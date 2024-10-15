import * as Icons from "react-bootstrap-icons";
import React from "react";

const Contact = () => {
  return (
      <div className="contact">
          <h2>Get in touch</h2>
          <p>
            Feel free to reach out! Whether you have a question, want to
            collaborate or just say hi, I'll be happy to chat.
          </p>
          <div id="content" className="social-media-icons">
            <div className="ig">
              <a
                href="https://www.instagram.com/patrycjabochnak/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.Instagram />
              </a>
            </div>
            <div className="linkedin">
              <a
                href="https://www.linkedin.com/in/patrycja-bochnak-779a931a7/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.Linkedin />
              </a>
            </div>
            <div className="portfolio">
              <a
                href="https://github.com/PatrycjaBochnak/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.Github />
              </a>
            </div>
          </div>
        </div>
  );
};

export default Contact;

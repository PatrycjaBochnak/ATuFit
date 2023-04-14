import { Container } from "react-bootstrap";
import React, { useState } from "react";
import Footer from "./footer";
import { Button, TextField } from "@mui/material";

function Contact() {
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");

  const handleButtonClick = () => {
    setInputValue("");
    setInputValue2("");
    setInputValue3("");
  };

  return (
    <div className="contact">
      <div className="simpleTextAboutMe">
        <span>
          I would be appreciate if you check my CV and social media accounts
          below!
        </span>
      </div>{" "}
      <Container fluid className="cont">
        <div className="contactButtons">
          <a className="CvButton">
            <Button variant="outlined" disabled>
              CV
            </Button>
          </a>
          <a
            className="LiButton"
            href="https://www.linkedin.com/in/patrycja-bochnak-779a931a7/"
            target="_blank"
          >
            <Button class="btn btn-outline-success">LinkedIn</Button>
          </a>
          <a
            className="GhButton"
            href="https://github.com/PatrycjaBochnak"
            target="_blank"
          >
            <Button class="btn btn-outline-success">GitHub</Button>
          </a>
        </div>
      </Container>
      <div className="emailText">
        <span>Questions? Text me!</span>
      </div>
      <div className="emailMessage">
        <TextField
          id="demo-helper-text-misaligned-no-helper"
          label="Name"
          value={inputValue}
          required
          onChange={(e) => setInputValue(e.target.value)}
        />
        <TextField
          id="demo-helper-text-misaligned-no-helper"
          label="E-mail"
          value={inputValue2}
          required
          onChange={(e) => setInputValue2(e.target.value)}
        />
        <TextField
          id="demo-helper-text-misaligned-no-helper"
          label="Your message"
          value={inputValue3}
          required
          onChange={(e) => setInputValue3(e.target.value)}
        />
        <div className="contactButton">
          <Button
            variant="contained"
            className="contactButton"
            class="btn btn-outline-success  py-3 px-5 mt-2 font-weight-bold"
            onClick={handleButtonClick}
          >
            Send message
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;

import { Button, Container } from "react-bootstrap";
import React, { useState } from "react"
import Footer from "./footer"

function Contact() {
    const [inputValue, setInputValue] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [inputValue3, setInputValue3] = useState('');
  
    const handleButtonClick = () => {
      // Zresetuj wartość pola tekstowego do pustej wartości
      setInputValue('');
      setInputValue2('');
      setInputValue3('');
    }

  return (
    <div className="contact">
    <div className="simpleTextAboutMe">
    <span>I would be appreciate if you check my CV and social media accounts below!</span>
    </div>
      {" "}
      <Container fluid className="cont">
        <div className="contactButtons">
          <a href="/" target="_blank">
            <Button className="buttonCV">CV</Button>
          </a>
          <a
            href="https://www.linkedin.com/in/patrycja-bochnak-779a931a7/"
            target="_blank"
          >
            <Button className="buttonLI">LinkedIn</Button>
          </a>
          <a href="https://github.com/PatrycjaBochnak" target="_blank">
            <Button className="buttonGH">GitHub</Button>
          </a>
        </div>
      </Container>
      <div className="emailText">
        <span>Questions? Text me!</span>
      </div>
      <div className="emailMessage">
        <input type="text" placeholder="Name" value={inputValue} required onChange={(e) => setInputValue(e.target.value) }/>
        <input type="email" placeholder="Email" value={inputValue2} required onChange={(e) => setInputValue2(e.target.value) } />
        <textarea placeholder="Your message"  value={inputValue3} required onChange={(e) => setInputValue3(e.target.value)} />
        <button onClick={handleButtonClick}>Send message</button>
      </div>
      <Footer />
      </div>
  );
}

export default Contact;

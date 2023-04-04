import { Button, Container } from "react-bootstrap";
import React, { useState } from "react"

function Contact() {
    const [inputValue, setInputValue] = useState('');
  
    const handleButtonClick = () => {
      // Zresetuj wartość pola tekstowego do pustej wartości
      setInputValue('');
    }
  
    const handleInputChange = (event) => {
      // Zaktualizuj wartość pola tekstowego przy każdej zmianie
      setInputValue(event.target.value);
    }

  return (
    <>
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
        <input type="text" placeholder="Name" value={inputValue} required onChange={handleInputChange}/>
        <input type="email" placeholder="Email" value={inputValue} required onChange={handleInputChange} />
        <textarea placeholder="Your message"  value={inputValue} required onChange={handleInputChange} />
        <button onClick={handleButtonClick}>Send message</button>
      </div>
    </>
  );
}

export default Contact;

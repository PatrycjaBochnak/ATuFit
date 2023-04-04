import { Button, Container } from "react-bootstrap";

function Contact() {
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
      <div className="email-message">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Your message" required />
        <button>Send message</button>
      </div>
    </>
  );
}

export default Contact;

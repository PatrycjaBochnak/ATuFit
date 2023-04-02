import { Button, Container } from "react-bootstrap";

function Contact() {
  return (
    <>
      {" "}
      <Container fluid className="cont">
        <div className="contactButtons">
          <a href="/" target="_blank">
            <Button className="btnCV">CV</Button>
          </a>
          <a
            href="https://www.linkedin.com/in/patrycja-bochnak-779a931a7/"
            target="_blank"
          >
            <Button className="btnLI">LinkedIn</Button>
          </a>
          <a href="https://github.com/PatrycjaBochnak" target="_blank">
            <Button className="btnGH">GitHub</Button>
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

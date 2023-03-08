import { Button, Container } from "react-bootstrap";

function Contact () { 
    return (
        <>        <Container fluid className="m-0 p-0 w-100">
            <h1>Contact</h1>
            
            <div className="contactButtons p-1">
                <a href="/" target="_blank"><Button className="btn mx-2">CV</Button></a>
                <a href="https://www.linkedin.com/in/patrycja-bochnak-779a931a7/" target="_blank"><Button className="btn mx-2">LinkedIn</Button></a>
                <a href="https://github.com/PatrycjaBochnak" target="_blank"><Button className="btn mx-2">GitHub</Button></a>
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
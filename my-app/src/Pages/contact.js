import React from "react"
import './contact.css'
import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap';
import contactbackground from '../Image/contactbackground.jpg'


export default function Contact() {
    return (
        <div className="contactPage" style={{
            backgroundImage: `url(${contactbackground})`,
            backgroundSize: "cover"
        }}>
            <Container className="text-center">
                <br />
                <Row>
                    <Col className="text-center">
                        <h1>
                            Contact me!
                        </h1>
                        <br />
                        <h3>
                            For any inquries please contact via email below!
                        </h3>
                    </Col>
                </Row>
                <Row>
                    <button class="contactcard">
                        <div class="contactrow clearfix">
                            <div class="right">
                                <p>
                                    <span class="big">alecchae000@gmail.com</span>
                                </p>
                                <p>(801)-448-2778</p>
                            </div>
                        </div>
                        <div class="contactrow">
                            <h3>Alec Chae</h3>
                            <h5>Software Engineer</h5>
                        </div>
                    </button>
                </Row>

            </Container>

        </div>
    )
}
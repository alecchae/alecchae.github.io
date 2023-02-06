import './projects.css'
import contentreccomendation from '../Image/contentrecommendation.PNG'
import taApplication from '../Image/TAapplication.png'
import projectbackground from '../Image/projectsbackground.webp'
import './about.css'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap';
export default function Projects() {
    return (
        <div className="projectsPage" style={{
            backgroundImage: `url(${projectbackground})`,
            backgroundSize: "cover"
        }}>
            <Container className='text-center'>
                <Row>
                    <Col className="col">
                    </Col>
                    <Col className="col-8">
                        <Card border="dark" className="first" text={'dark'}>
                            <Card.Img className="cardimage" src={contentreccomendation} />
                            <Card.Body>
                                <Card.Title>Content Recommendation</Card.Title>
                                <Card.Text>
                                    Content Recommendation is a machine learning(Google's NLP text classification model, BERT) model app. It collects web html of user's web activities on user's decision
                                    and store it in a local database(mongodb). Then if the recommend button is triggered, it will give an input of the data in database to
                                    the model and give an output of recommendation link regarding to our RSSFeed.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col">
                    </Col>
                </Row>
                <br />
                <br />
                <Row>
                    <Col className="col">
                    </Col>
                    <Col className="col-8">
                        <Card border="dark" className="first" text={'dark'}>
                            <Card.Img className="cardimage" src={taApplication} />
                            <Card.Body>
                                <Card.Title>TA Application</Card.Title>
                                <Card.Text>
                                    TA Application is a web application for TA applicants where it makes the hiring process easier for the TA applicants and the hiring committees.
                                    It is in all ASP.NET MVC application and is built with C#/ASP.Net and HTML/CSS. For databases, it uses .NET Framework known as Entity Framework to define and work with models.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col">
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
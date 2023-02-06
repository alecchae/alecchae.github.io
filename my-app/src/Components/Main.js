import React from 'react'
import { Container } from 'react-bootstrap';
import './Main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
import profilepicture from '../Image/profilepicture.jpg';
import simplebackground from '../Image/simplebackground.jpg';
import "@fontsource/league-spartan";

const Main = () => {
    return (
        <div className='main' style={{
            backgroundImage: `url(${simplebackground})`,
            backgroundSize: "cover"
        }}>
            <div className='content'>
                <Container>
                    <h1>Hello!</h1>
                    <h2>My name is Alec Chae, I am a software engineer</h2>
                    <p></p>
                    <img src={profilepicture} alt="Alec Chae" className='profile' />
                    <div className='singleCol social-media-icons-white'>
                        <a href="https://www.linkedin.com/in/alec-chae-64191a1bb/">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href='https://github.com/alecchae'>
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href='https://discordapp.com/users/FlickDaWrist#6233'>
                            <FontAwesomeIcon icon={faDiscord} />
                        </a>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Main
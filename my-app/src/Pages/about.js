import aboutbackground from '../Image/aboutbackground.webp'
import resume from '../File/Hyunwoochae_resume.pdf'
import Container from 'react-bootstrap/Container'
import "@fontsource/league-spartan";
export default function About() {
    return (
        <div className="aboutPage" style={{
            backgroundImage: `url(${aboutbackground})`,
            backgroundSize: "cover"
        }}>
            <div className='aboutContent'>
                <Container>
                    <h1>
                        Intro
                    </h1>
                    <h4>
                        I am a graduate from the University of Utah with Computer Science degree. I really enjoy solving problems such as leetcodes.
                        Although i am proficient in most of the languages, I would say my strongest language would be C#.
                        What keeps me motivated as an engineer would be learning new things everyday, i would love to try new things and be part of new
                        things such as any kind of technologies.
                    </h4>
                    <br/>
                    <h2>
                        Below is my resume
                    </h2>
                    <embed src={resume} title="testPdf" height="1150px" width="100%" />
                </Container>
            </div>
        </div>
    )
}
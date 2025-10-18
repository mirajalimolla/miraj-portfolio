import { useEffect, useRef, useState } from 'react';
import Heading from '../Component_Needs/Heading.jsx'
import ProjectCard from './ProjectCard.jsx';
import fitZone from '../../../public/fitZone.png'
import mtGamers from '../../../public/mtGamers.png';
import invitation from '../../../public/invitation.png'

function Projects({ myRef }) {
    const projectSection = useRef(null);
    const [sectionHeight, setSectionHeight] = useState(null);
    useEffect(() => {
        setSectionHeight(projectSection.current.clientHeight);
    }, []);

    return (
        <section className='border-b-1 pt-25' ref={myRef}>
            <div className="section-container">
                <Heading text={"Latest Works"} />
                <div style={{ height: `${sectionHeight}px` }} className="devider absolute left-1/2 w-1 bg-white m-auto"></div>
                <div ref={projectSection} className='project-container grid gap-25 py-10'>
                    <ProjectCard color={"#22c55e"} image={fitZone} heading={"FitZone"} link={'https://fitnes-zone.netlify.app/'} subHeading={"Fitness Website"} description={"FitZone is a gym website for a gym owner. This webiste have many feature like Whatsapp chat, Contact form, Services, Ratings, Equipment, Localtion map, social media connection etc. I build this site from scratch."} tags={["HTML", "CSS", "JavaScript", "Tailwind", "TypeScript"]} />

                    <ProjectCard reverse={true} color={"#DA114A"} image={mtGamers} heading={"MT GAMERS"} link={'https://mtgamers.42web.io'} subHeading={"Gaming Website"} description={"MT GAMERS is a Full Stack gaming website for a youtuber(Mt Gamers) and this website have all feature like login, signUp, User Dashboard, Group chat, Redeem and many many feature.I build the site from scratch."} tags={["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "Typed.js"]} />

                    <ProjectCard color={"rgb(173 11 22)"} image={invitation} heading={"Invitation"} link={'https://i-invited-you.netlify.app/'} subHeading={"Inviting Website"} description={"This website is a invitation card website for a client who need a online invitation card for his reception. The site need only put the guist name and redy your invitation card. I buid this site from scratch."} tags={["HTML", "CSS", "JavaScript"]} />
                </div>
            </div>
        </section>
    );
}

export default Projects;
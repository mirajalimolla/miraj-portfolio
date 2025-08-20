import { useRef } from 'react'
import Header from '../src/Components/Header/Header.jsx'
import Client from './Components/Client/Client.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Particle from './Components/Particles/Particles.jsx'
import Projects from './Components/Project/Projects.jsx'

function App() {
    const home = useRef(null);
    const project = useRef(null);
    const client = useRef(null);
    const contact = useRef(null);

    return (
        <>
            <section className='relative h-[100vh] text-white'>
                <Particle className="hidden" />
                <Header myRef={{
                    project, client, contact, home
                }}/>
                <Hero myRef={home}/>
            </section>
            <Projects myRef={project}/>
            <Client myRef={client}/>
            <Contact myRef={contact}/>
            <Footer />
        </>
    )
}

export default App
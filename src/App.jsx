import { useContext, useEffect, useRef } from 'react'
import Header from '../src/Components/Header/Header.jsx'
import Client from './Components/Client/Client.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Projects from './Components/Project/Projects.jsx'
import ThemeProvider from './Components/Component_Needs/ThemeChanger.jsx'
import { ThemeContext } from './Components/Component_Needs/ThemeChanger.jsx'

function App() {
    const home = useRef(null);
    const project = useRef(null);
    const client = useRef(null);
    const contact = useRef(null);
    const theme = useContext(ThemeContext);
    let themeStyle = null;

    useEffect(() => {
        if(theme === 'light'){
            themeStyle = "bg-black text-white";
        }else{
            themeStyle = "bg-white text-black";
        }
    }, [theme]);

    return (
        <>
            <section className={`relative h-[100vh] ${themeStyle}`}>
                <ThemeProvider>
                    <Header myRef={{
                        project, client, contact, home
                    }}/>
                </ThemeProvider>
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
import { VscThreeBars } from 'react-icons/vsc';
import logo from '../../../public/logo.png';
import { useContext, useEffect, useRef, useState } from 'react';
import { BsFillMoonFill } from 'react-icons/bs';
import { ThemeContext } from '../Component_Needs/ThemeChanger';

function Header({myRef}) {
    const menu = useRef(null);
    const links = useRef(null);
    const [homeHover, setHomeHover] = useState(false);
    const [aboutHover, setAboutHover] = useState(false);
    const [projectsHover, setProjectsHover] = useState(false);
    const [contactHover, setContactHover] = useState(false);
    const [scroll, setScroll] = useState("");
    const transition = "transition-all duration";
    const [headeropen, setHeaderOpen] = useState(false);

    // Theme data from other component 
    const {theme, toggleTheme} = useContext(ThemeContext);

    useEffect(() => {
        menu.current.addEventListener("click", function(){
            links.current.style.top="0%";
            setHeaderOpen(true);
        });
    }, [])

    const handleHeader = (e) => {
        e.target.parentElement.style.top="-100%";
        e.target.parentElement.style.height="100%";
        setHeaderOpen(false);
    }
    
    if(headeropen){
        links.current.addEventListener("click", handleHeader);
    }

    const scrollHandler = () => {
        if(window.pageYOffset > 45){
            setScroll(`bg-neutral-800 fixed z-50 ${transition}-300`);
        }else{
            setScroll("");
        }
    }
    window.addEventListener("scroll", scrollHandler);

    const scrollSet = (ref) => {
        const y = ref.current.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }

    
    return (
        <header className={`${scroll} h-[12%] w-full flex items-center text-[#d8d8d8] p-1.5`}>
            <div className="section-container header flex items-center justify-between h-full">
                <img src={logo} alt="logo" className='logo h-full relative' />
                <div className='flex items-center'>
                    <ul ref={links} className='link flex items-center gap-7 mr-5 max-h-[70px] font-bold text-md transition-all duration-400'>
                        <li className={`cursor-pointer text-md hover:text-[#CF1C1B] ${transition}-500 relative`} onClick={() => scrollSet(myRef.home)} onMouseEnter={() => setHomeHover(true)} onMouseLeave={() => setHomeHover(false)}>
                            HOME
                            <span className={`${homeHover ? "w-full" : "w-0"} h-[2px] bg-[#CF1C1B] block ${transition}-500`}></span>
                        </li>
                        <li className={`cursor-pointer text-md hover:text-[#CF1C1B] ${transition}-500 relative`} onClick={() => scrollSet(myRef.project)} onMouseEnter={() => setProjectsHover(true)} onMouseLeave={() => setProjectsHover(
                            false)}>PROJECTS
                            <span className={`${projectsHover ? "w-full" : "w-0"} h-[2px] bg-[#CF1C1B] block ${transition}-500`}></span>
                        </li>
                        <li className={`cursor-pointer text-md hover:text-[#CF1C1B] ${transition}-500 relative`} onClick={() => scrollSet(myRef.client)} onMouseEnter={() => setAboutHover(true)} onMouseLeave={() => setAboutHover(false)}>
                            TESTIMONIALS
                            <span className={`${aboutHover ? "w-full" : "w-0"} h-[2px] bg-[#CF1C1B] block ${transition}-500`}></span>
                        </li>
                        <li className={`cursor-pointer text-md hover:text-[#CF1C1B] ${transition}-500 relative`} onClick={() => scrollSet(myRef.contact)} onMouseEnter={() => setContactHover(true)} onMouseLeave={() => setContactHover(
                        false)}>CONTACT
                            <span className={`${contactHover ? "w-full" : "w-0"} h-[2px] bg-[#CF1C1B] block ${transition}-500`}></span>
                        </li>
                        <li className='cursor-pointer' onClick={() => toggleTheme()}><BsFillMoonFill size={25} /></li>
                    </ul>
                    <VscThreeBars ref={menu} size={27} className='menuBar mr-1 hidden'/>
                </div>
            </div>
        </header>
    );
}

export default Header;
import { useState } from "react";
import { FaFacebook, FaInstagram, FaLine, FaWhatsapp } from 'react-icons/fa'
import heroImg from '../../assets/img.jpg'
import Particles from "../Particles/Particles";
import mobileImage from '../../assets/borderLogo.png'
import moreAboutImg from '../../assets/moreAbout.svg'
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { DiMongodb } from 'react-icons/di';
import { FaXmark } from 'react-icons/fa6';
import observer from "../Component_Needs/Observer";
import { Link } from "react-router-dom";
import { BiSolidRightArrowAlt } from 'react-icons/bi';

function Hero({ myRef }) {
    const [linkedinHover, setLinkedinHover] = useState(false);
    const [facebookHover, setFacebookHover] = useState(false);
    const [whatsappHover, setWhatsappHover] = useState(false);
    const [isAnimationOff, setIsAnimationOff] = useState(false);
    const { onScreen, head } = observer();
    const [isMoreAboutMongoHover, setIsMoreAboutMongoHover] = useState(false);
    const [isMoreAboutExpressHover, setIsMoreAboutExpressHover] = useState(false);
    const [isMoreAboutReactHover, setIsMoreAboutReactHover] = useState(false);
    const [isMoreAboutNodeHover, setIsMoreAboutNodeHover] = useState(false);
    const [isAboutBtnHover, setIsAboutBtnHover] = useState(false);
    const [openAbout, setOpenAbout] = useState(false);

    // More about arrow animation in css using javascript
    const sheet = document.styleSheets[0];
    sheet.insertRule(`
        .arrowAnimate {
            right:-25px;
            transition:0.3s;
            opacity:1;
        }
    `, sheet.cssRules.length);

    const moreAboutMernHover = 'after:content-[""] after:border-[10px] after:border-r-transparent after:border-t-transparent after:rotate-[-45deg] after:bottom-[-20%] after:absolute after:translate-x-1/2 after:right-1/2';

    // If more about section is open then body can't scroll
    if (openAbout) {
        document.querySelector("body").style.overflowY = "hidden";
    } else {
        document.querySelector("body").style.overflowY = "auto";
    }

    return (
        <section ref={myRef} className=" h-[88%]">
            {isAnimationOff === false ? <Particles /> : ''}
            <div className="section-container h-full">
                <div className='h-[85%] flex items-center justify-between'>
                    <div className="heroText mt-8">
                        <h1 ref={head} className="firstHeading text-5xl h-17 font-bold relative w-fit">
                            <span className={`${onScreen ? "h-full" : "h-0"} transition-all duration-1500 block overflow-hidden`}>Hi</span>
                        </h1>
                        <h1 ref={head} className="firstHeading text-5xl h-17 font-bold relative w-fit">
                            <span className={`${onScreen ? "h-full" : "h-0"} transition-all duration-1500 block overflow-hidden`}>I'm <span className='text-[#CF1C1B]'>Miraj</span></span>
                        </h1>
                        <h1 ref={head} className="firstHeading text-5xl h-17 font-bold relative w-fit">
                            <span className={`${onScreen ? "h-full" : "h-0"} transition-all duration-1500 block overflow-hidden`}>I'm a <span className='myProfession'>Web Developer</span></span>
                        </h1>
                        <button className={`${onScreen ? "h-11" : "h-0"} aboutBtn relative px-4 pr-7 transition-all duration-800 overflow-hidden bg-[#c51f1f] font-bold rounded-lg text-lg cursor-pointer flex items-center`} onClick={() => setOpenAbout(true)} onMouseEnter={() => setIsAboutBtnHover(true)} onMouseLeave={() => setIsAboutBtnHover(false)}>
                            About Me <BiSolidRightArrowAlt className={`${isAboutBtnHover ? 'arrowAnimate' : ''} text-4xl opacity-0 absolute top-1/2 right-[0px] translate-[-50%]`} />
                        </button>
                        <div className={`${onScreen ? "h-5.5" : "h-0"} relative flex items-center w-fit gap-2 mt-2 ml-2 transition-all duration-800 overflow-hidden`}>
                            <span>Animation</span>
                            <div onClick={() => setIsAnimationOff(isAnimationOff === false ? true : false)} className={`relative flex justify-between w-12 h-5 rounded-2xl cursor-pointer transition-all duration-500 border-2 ${isAnimationOff === false ? 'border-green-500' : 'border-red-500'}`}>
                                <span className={`absolute text-[11px] font-extrabold ${isAnimationOff === true ? 'text-red-500 right-0.5' : 'text-green-500 left-0.5'}`}>{isAnimationOff === true ? 'ON' : 'OFF'}</span>
                                <span className={`absolute ${isAnimationOff === false ? 'translate-x-[130%] bg-red-500 w-[40%]' : 'translate-x-0 bg-green-500 w-[45%]'} m-0.5 h-[80%] rounded-2xl transition-all duration-500`}></span>
                            </div>
                        </div>
                    </div>

                    <div style={{ clipPath: "polygon(51% 0, 90% 30%, 90% 70%, 50% 100%, 50% 100%, 10% 70%, 10% 30%)" }} className='heroImg w-1/3 mt-15'>
                        <img src={heroImg} className='h-full' />
                    </div>

                    <div className="mobileImg h-[60%] left-1/2 translate-x-[-50%] absolute hidden">
                        <img src={mobileImage} className="h-full" />
                    </div>
                </div>

                <div className='flex items-center h-[15%]'>
                    <div className='text-center grid place-items-center'>
                        <span className={`${whatsappHover ? "visible" : "invisible"} text-[11px] bg-white text-black px-1.5 py-1 font-[700] tracking-[0.3px] rounded-md mb-1`}>WhatsApp</span>
                        <Link to={'https://wa.me/9836946145'} target="_blank">
                            <FaWhatsapp size={30} onMouseEnter={() => setWhatsappHover(true)} onMouseLeave={() => setWhatsappHover(false)} className="icon cursor-pointer relative" />
                        </Link>
                    </div>
                    <div className='text-center grid place-items-center'>
                        <span className={`${facebookHover ? "visible" : "invisible"} text-[11px] bg-white text-black px-1.5 py-1 font-[700] tracking-[0.3px] rounded-md mb-1`}>Facebook</span>
                        <Link to={'https://www.facebook.com/profile.php?id=100084295661029'} target="_blank">
                            <FaFacebook size={30} onMouseEnter={() => setFacebookHover(true)} onMouseLeave={() => setFacebookHover(false)} className="icon cursor-pointer relative" />
                        </Link>
                    </div>
                    <div className='text-center grid place-items-center'>
                        <span className={`${linkedinHover ? "visible" : "invisible"} text-[11px] bg-white text-black px-1.5 py-1 font-[700] tracking-[0.3px] rounded-md mb-1`}>Linkedin</span>
                        <Link to={'https://www.instagram.com/developer_miraj/profilecard/?igsh=ZHhvNDVpaWFtdGgz'} target="_blank">
                            <FaInstagram size={30} onMouseEnter={() => setLinkedinHover(true)} onMouseLeave={() => setLinkedinHover(false)} className="icon cursor-pointer relative" />
                        </Link>
                    </div>
                </div>

                <div className={`${openAbout ? 'scale-100' : 'scale-0'} about transition-all duration-500 flex gap-5 w-[85vw] h-[96vh] bg-black absolute top-1/2 left-1/2 translate-[-50%] shadow-[0px_0px_50px_#ffffff54] rounded-xl z-50`}>
                    <div className='relative w-full flex'>
                        <FaXmark size={36} className='closeAbout absolute right-4 top-4 cursor-pointer' onClick={() => setOpenAbout(false)} />

                        <div className='aboutText w-[45%] flex flex-col justify-center gap-10 pl-10'>
                            <div>
                                <h1 className='secondHeading font-semibold text-3xl mb-5 text-sky-400'>ABOUT ME</h1>
                                <p className='description'>I help business owners and busy web developers to design & develop creative websites that fits their vision and attracts the visitors to stay for ever. Technologies and tools that I use to create such awesome websites.</p>

                                <div className='skillTag flex gap-2 mt-3 flex-wrap'>
                                    <div className='border rounded-3xl py-1 px-2 w-fit'>#html</div>
                                    <div className='border rounded-3xl py-1 px-2 w-fit'>#css</div>
                                    <div className='border rounded-3xl py-1 px-2 w-fit'>#javascript</div>
                                    <div className='border rounded-3xl py-1 px-2 w-fit'>#php</div>
                                    <div className='border rounded-3xl py-1 px-2 w-fit'>#react</div>
                                    <div className='border rounded-3xl py-1 px-2 w-fit'>#tailwind</div>
                                    <div className='border rounded-3xl py-1 px-2 w-fit'>#bootstrap</div>
                                    <div className='border rounded-3xl py-1 px-2 w-fit'>#devTools</div>
                                    <div className='border rounded-3xl py-1 px-2 w-fit'>#git</div>
                                    <div className='border rounded-3xl py-1 px-2 w-fit'>#github</div>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <h1 className='secondHeading text-3xl font-semibold mb-5 text-sky-400'>MERN STACK</h1>
                                </div>
                                <div className='iconSkill flex justify-center gap-10'>
                                    <div onMouseEnter={() => setIsMoreAboutMongoHover(true)} onMouseLeave={() => setIsMoreAboutMongoHover(false)} className='flex flex-col items-center justify-between w-[25px] gap-3 text-center relative text-[#47A248]'>
                                        <div className={`${isMoreAboutMongoHover ? "opacity-100 top-[-32px] translate-y-[-50%]" : "opacity-0 top-5"} absolute transition-all duration-500 bg-[#47A248] text-white px-4 py-1.5 rounded-3xl text-lg font-semibold`}>
                                            <span className={`${moreAboutMernHover} after:border-[#47A248]`}>mongoDB</span>
                                        </div>
                                        <DiMongodb size={50} />
                                        <h1 className='text-2xl'>M</h1>
                                    </div>
                                    <div onMouseEnter={() => setIsMoreAboutExpressHover(true)} onMouseLeave={() => setIsMoreAboutExpressHover(false)} className='flex flex-col items-center justify-between gap-3 text-center relative text-[#D9D9D9]'>
                                        <div className={`${isMoreAboutExpressHover ? "opacity-100 top-[-32px] translate-y-[-50%]" : "opacity-0 top-5"} absolute transition-all duration-500 bg-[#D9D9D9] text-black px-4 py-1.5 rounded-3xl text-lg font-semibold`}>
                                            <span className={`${moreAboutMernHover} after:border-[#D9D9D9]`}>Express.JS</span>
                                        </div>
                                        <SiExpress size={50} />
                                        <h1 className='text-2xl'>E</h1>
                                    </div>
                                    <div onMouseEnter={() => setIsMoreAboutReactHover(true)} onMouseLeave={() => setIsMoreAboutReactHover(false)} className='flex flex-col items-center justify-between gap-3 text-center relative text-[#61DAFB]'>
                                        <div className={`${isMoreAboutReactHover ? "opacity-100 top-[-32px] translate-y-[-50%]" : "opacity-0 top-5"} absolute transition-all duration-500 bg-[#61DAFB] text-black px-4 py-1.5 rounded-3xl text-lg font-semibold`}>
                                            <span className={`${moreAboutMernHover} after:border-[#61DAFB]`}>React.JS</span>
                                        </div>
                                        <FaReact size={50} />
                                        <h1 className='text-2xl'>R</h1>
                                    </div>
                                    <div onMouseEnter={() => setIsMoreAboutNodeHover(true)} onMouseLeave={() => setIsMoreAboutNodeHover(false)} className='flex flex-col items-center justify-between gap-3 text-center relative text-[#8CC84B]'>
                                        <div className={`${isMoreAboutNodeHover ? "opacity-100 top-[-32px] translate-y-[-50%]" : "opacity-0 top-5"} absolute transition-all duration-500 bg-[#8CC84B] text-black px-4 py-1.5 rounded-3xl text-lg font-semibold`}>
                                            <span className={`${moreAboutMernHover} after:border-[#8CC84B]`}>Node.JS</span>
                                        </div>
                                        <FaNodeJs size={50} />
                                        <h1 className='text-2xl'>N</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='aboutImg w-fit flex items-center'>
                            <img src={moreAboutImg} className='h-[100vh]' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
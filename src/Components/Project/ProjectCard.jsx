import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ reverse = false, color, image, heading, link, subHeading, description, tags }) {
    const tagSection = useRef(null);
    const [animate, setAnimate] = useState(false);
    const sheet = document.styleSheets[0];

    sheet.insertRule(`
        ${reverse ? ".circle::before" : ".circle::after"} {
            border-color:${color};
        }
    `, sheet.cssRules.length);

    sheet.insertRule(`
        .tag {
            border:1px solid white;
            border-radius:20px;
            font-size:15px;
            width:fit-content;
            padding-inline:12px;
            padding-block:6px;
        }
    `, sheet.cssRules.length);

    sheet.insertRule(`
        .toolTip::after {
            border-color:transparent ${color} ${color} transparent;
        }
    `, sheet.cssRules.length);

    sheet.insertRule(`
        .animateToolTip{
            animation: toolTipAnimate 0.5s ease-in-out;
            scale:1.2;
            transition:.3s;
            top:-75px;
            opacity:1;
        }
    `, sheet.cssRules.length);

    sheet.insertRule(`
        @keyframes toolTipAnimate {
            0%{
                top:0px;
            }
            100%{
                top:-105px;
            }
        }
    `, sheet.cssRules.length);

    return (
        <div className={`project flex ${reverse ? "flex-row-reverse" : "relative"}`}>
            <div className={`imagePart flex relative items-center w-1/2 ${reverse ? "flex-row-reverse" : ""}`}>
                <div className={`circle w-1/2 absolute ${reverse ? `left-0 before:content-[""] before:rounded-full before:absolute before:border-3 before:p-[3px] before:block before:left-[-5px] before:translate-y-[-50%] before:bg-white` : `right-0 after:content-[""] after:rounded-full after:absolute after:border-3 after:border-red-600 after:p-[3px] after:block after:right-[-9px] after:translate-y-[-50%] after:bg-white`}`} style={{ borderColor: `${color}`, border:`1px solid ${color}`}}></div>
                <div className='projectImage w-[85%] relative'>
                    <div onMouseEnter={() => setAnimate(true)} onMouseLeave={() => setAnimate(false)} className={`${animate ? "animateToolTip" : ""} opacity-0 top-1 cursor-pointer absolute w-fit left-1/2 translate-x-[-50%]`}>
                        <Link to={link} target='_blank'>
                            <div style={{ backgroundColor: `${color}`}} className='toolTip description flex items-center gap-1 font-semibold px-3 py-2 rounded-lg hover:underline after:content-[""] after:border-[15px] after:absolute after:bottom-[-7px] after:left-1/2 after:translate-x-[-50%] after:rotate-[45deg]'>
                                {heading}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather-external-link">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </div>
                        </Link>
                    </div>
                    <img src={image} onMouseEnter={() => setAnimate(true)} onMouseLeave={() => setAnimate(false)} className={`${animate ? "scale-120" : ""} w-[90%] m-auto transition-all duration-500`} />
                </div>
            </div>
            <div className={`textPart flex justify-center flex-col w-1/2 ${reverse ? "pr-5" : "pl-5"}`}>
                <h1 style={{ color: `${color}` }} className="secondHeading text-4xl font-semibold">{heading}</h1>
                <h2 style={{ color: `${color}` }} className="thirdHeading text-2xl mb-4 font-medium">{subHeading}</h2>
                <p className='description text-md'>{description}</p>
                <div ref={tagSection} className='skillTag mt-4 flex flex-wrap gap-2'>{
                    tags.map((element, index) => (
                        <div key={index} style={{color:`${color}`}} className='border font-semibold rounded-2xl py-1 px-2'>{`#${element}`}</div>
                    ))
                }</div>
            </div>
        </div>
    );
}

export default ProjectCard;
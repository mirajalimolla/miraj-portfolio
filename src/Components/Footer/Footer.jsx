import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../public/logo.png'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

function Footer() {
    const [whatsappHover, setWhatsappHover] = useState(false);
    const [linkedinHover, setLinkedinHover] = useState(false);
    const [facebookHover, setFacebookHover] = useState(false);
    const [instagramHover, setInstagramHover] = useState(false);
    const [githubHover, setGithubHover] = useState(false);
    
    return (
        <footer>
            <div className="section-container py-5 grid place-items-center gap-3">
                <span>Freelancer Miraj © 2025</span>
                <img src={logo} className='w-10'/>
                <div className='flex'>
                    <div className='flex flex-col items-center w-15'>
                        <span className={`${whatsappHover ? "visible" : "invisible"} text-[11px] bg-white text-black px-1.5 py-1 font-[700] tracking-[0.3px] rounded-md mb-1`}>Whatsapp</span>
                        <Link to={'https://wa.me/9836946145'} target="_blank">
                            <FaWhatsapp size={30} onMouseEnter={() => setWhatsappHover(true)} onMouseLeave={() => setWhatsappHover(false)} className="icon cursor-pointer relative" />
                        </Link>
                    </div>
                    <div className='flex flex-col items-center w-15'>
                        <span className={`${linkedinHover ? "visible" : "invisible"} text-[11px] bg-white text-black px-1.5 py-1 font-[700] tracking-[0.3px] rounded-md mb-1`}>Linkedin</span>
                        <Link to={'https://www.linkedin.com/in/miraj-ali-molla/'} target="_blank">
                            <FaLinkedinIn size={30} onMouseEnter={() => setLinkedinHover(true)} onMouseLeave={() => setLinkedinHover(false)} className="icon cursor-pointer relative" />
                        </Link>
                    </div>
                    <div className='flex flex-col items-center w-15'>
                        <span className={`${facebookHover ? "visible" : "invisible"} text-[11px] bg-white text-black px-1.5 py-1 font-[700] tracking-[0.3px] rounded-md mb-1`}>Facebook</span>
                        <Link to={'https://www.facebook.com/profile.php?id=100084295661029'} target="_blank">
                            <FaFacebook size={30} onMouseEnter={() => setFacebookHover(true)} onMouseLeave={() => setFacebookHover(false)} className="icon cursor-pointer relative" />
                        </Link>
                    </div>
                    <div className='flex flex-col items-center w-15'>
                        <span className={`${instagramHover ? "visible" : "invisible"} text-[11px] bg-white text-black px-1.5 py-1 font-[700] tracking-[0.3px] rounded-md mb-1`}>Instagram</span>
                        <Link to={'https://www.instagram.com/developer_miraj/profilecard/?igsh=ZHhvNDVpaWFtdGgz'} target="_blank">
                            <FaInstagram size={30} onMouseEnter={() => setInstagramHover(true)} onMouseLeave={() => setInstagramHover(false)} className="icon cursor-pointer relative" />
                        </Link>
                    </div>
                    <div className='flex flex-col items-center w-15'>
                        <span className={`${githubHover ? "visible" : "invisible"} text-[11px] bg-white text-black px-1.5 py-1 font-[700] tracking-[0.3px] rounded-md mb-1`}>Github</span>
                        <Link to={'https://github.com/mirajalimolla'} target="_blank">
                            <FaGithub size={30} onMouseEnter={() => setGithubHover(true)} onMouseLeave={() => setGithubHover(false)} className="icon cursor-pointer relative" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
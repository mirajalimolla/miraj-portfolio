import Heading from '../Component_Needs/Heading'
import image from '../../../public/contact.svg'
import { FaTelegramPlane, FaUser } from 'react-icons/fa';
import { MdMessage } from 'react-icons/md';
import { PiAtBold } from 'react-icons/pi';

function Contact({myRef}) {    
    return (
        <section ref={myRef}>
            <div className="section-container py-10">
                <Heading text={"Let's Connect"} />

                <div className='contact w-full flex justify-between mt-10'>
                    <div className='w-[50%] flex items-center'>
                        <img src={image} className='w-full' />
                    </div>
                    <div className='w-[50%]'>
                        <form className='text-white'>
                            <div className='grid gap-1 mb-1.5'>
                                <label htmlFor="name" className='flex items-center gap-1'><FaUser /> <span className='contact-text text-lg'>Name</span></label>
                                <input type="text" name="name" id="name" className='border outline-0 rounded p-2 text-[16px] focus:shadow-2xl' required />
                            </div>
                            <div className='grid gap-1 mb-1.5'>
                                <label htmlFor="email" className='flex items-center gap-1'><PiAtBold /> <span className='contact-text text-lg'>Email</span></label>
                                <input type="email" name="email" id="email" className='border outline-0 rounded p-2 text-[16px] focus:shadow-2xl' required />
                            </div>
                            <div className='grid gap-1 mb-6'>
                                <label htmlFor="messege" className='flex items-center gap-1'><MdMessage /> <span className='contact-text text-lg'>Messege</span></label>
                                <input type="text" name="messege" id="messege" className='border outline-0 rounded p-2 text-[16px] focus:shadow-2xl pb-36' required />
                            </div>
                            <button className='contact-text flex items-center justify-center gap-1.5 w-full border rounded text-lg py-1.5 font-bold cursor-pointer' onClick={(e) => e.preventDefault()}><FaTelegramPlane /> Send Messege</button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Contact;
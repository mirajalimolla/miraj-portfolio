import { useEffect, useRef, useState } from 'react';
import Heading from '../../../src/Components/Component_Needs/Heading';
import ClientCard from './ClientCard';
import client from '../../assets/img.jpg'
import gymOwner from '../../assets/gymOwner.jpg'
import mtGamersOwner from '../../assets/mtGamersOwner.png'
import { PiGreaterThanBold, PiLessThanBold } from 'react-icons/pi';

function Client({myRef}) {
    const leftArrow = useRef(null);
    const rightArrow = useRef(null);
    const clientCardSection = useRef(null);
    const [childWidth, setChildWidth] = useState(null);
    const [childLength, setChildLength] = useState(null);
    const [sectionPosition, setSectionPosition] = useState(null);

    useEffect(() => {
        const child = clientCardSection.current.children[0];
        const width = child.offsetWidth;
        const length = clientCardSection.current.children.length;
        
        setChildLength(length);
        setChildWidth(width);
    }, []);
    const maxScroll = (childLength - 1) * childWidth;

    useEffect(() => {
        if(Math.abs(sectionPosition) >= childWidth){
            leftArrow.current.style.visibility="visible";
        }else{
            leftArrow.current.style.visibility="hidden";
        }

        if(Math.abs(Math.abs(sectionPosition) >= maxScroll)){
            rightArrow.current.style.visibility="hidden";
        }else{
            rightArrow.current.style.visibility="visible";
        }
    }, [sectionPosition, maxScroll]);

    const leftMove = () => {
        setSectionPosition(prev => {
            const value = Math.min(prev + childWidth, 0);
            return value;
        });
    }

    const rightMove = () => {
        setSectionPosition(prev => {
            const value = Math.min(prev - childWidth, maxScroll);
            return value;
        });
    }

    return (
        <section ref={myRef}>
            <div className="section-container py-20">
                <Heading text={"What my Client says"} addClass={"mb-10"}/>

                <div className='m-auto flex items-center justify-center backdrop-blur-2xl overflow-hidden'>
                    <div className='client-arrow absolute flex items-center justify-between w-[95%] z-10'>
                        <PiLessThanBold ref={leftArrow} size={50} className='invisible cursor-pointer text-red-500' onClick={leftMove}/>
                        <PiGreaterThanBold ref={rightArrow} size={50} className='cursor-pointer text-red-500' onClick={rightMove}/>
                    </div>
                    <div ref={clientCardSection} style={{transform:`translateX(${sectionPosition}px)`}} className='flex transition-all duration-500 w-[86%] relative p-2'>
                        <ClientCard  image={gymOwner} description={"Our gym now looks professional online thanks to Miraj. The WhatsApp and location features make it super easy for clients to connect. Highly recommended for anyone looking for a pro developer!"} name={"Tukai Ghos"} profession={"Founder FitZone"}/>

                        <ClientCard  image={mtGamersOwner} description={"Working with Freelancer Miraj was an amazing experience! Miraj built an amazing gaming website for me — fast, modern, and mobile-friendly. Highly recommended for anyone looking for a pro developer!"} name={"Rahul Khan"} profession={"Founder MT Gamers"}/>

                        <ClientCard  image={client} description={"Miraj designed a beautiful wedding invitation website that felt elegant and personal. Everything worked smoothly on mobile and it impressed all our guests. Highly recommended for special occasion websites!"} name={"Biswanat Das"} profession={"Invitation Website"}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Client;
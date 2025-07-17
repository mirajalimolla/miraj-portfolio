import {useState, useEffect, useRef} from 'react'
function Observer() {
    const [onScreen, setOnScreen] = useState(false);
    const head = useRef(null);

    const option = {
        threshold:0.,
        rootMargin:"0px"
    }

    useEffect(() => {
        const observer = new IntersectionObserver((element) => {
            element.forEach((elem) => {
                if(elem.isIntersecting){
                    setOnScreen(true);
                }
            });
        }, option);
        observer.observe(head.current);
    }, []);

    return {onScreen, head};
}

export default Observer;
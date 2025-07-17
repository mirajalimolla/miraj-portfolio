import observer from "./Observer";

function Hrading({text, addClass}) {
    const {head, onScreen} = observer();
    return (
        <div className={`relative pb-1.5 w-fit m-auto ${addClass}`}>
            <span style={{clipPath: "polygon(0% 40%, 100% 40%, 92% 55%, 0% 55%)"}} className={`${onScreen ? "opacity-100 left-[-10%]" : "left-[-100%]"} longBorder transition-all duration-1500 opacity-0 bg-red-500 h-11 w-1/2 inline-block absolute top-[-20px] left-90`}></span>

            <div className="flex items-center justify-center relative w-fit m-auto">
                <span style={{clipPath: "polygon(0 0, 30% 0, 30% 70%, 100% 70%, 100% 100%, 0 100%)"}} className={`${onScreen ? "bottom-[-5px]" : "bottom-[-15px]"} cornerBorder transition-all duration-1200 absolute left-[-6px] h-5 w-5 bg-red-500`}></span>

                <h1 ref={head} className="firstHeading font-bold text-5xl pt-[-10px] text-center"><span className={`${onScreen ? "h-fit" : "h-0"} transition-all duration-1000 overflow-hidden block`}>{text}</span></h1>

                <span style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 70% 100%, 70% 30%, 0 30%)"}} className={`${onScreen ? "top-[6px]" : "top-[-8px]"} cornerBorder transition-all duration-1200 absolute right-[-9px] h-5 w-5 bg-red-500`}></span>
            </div>
            
            <span style={{clipPath: "polygon(8% 40%, 100% 40%, 100% 55%, 0% 55%)"}} className={`${onScreen ? "opacity-100 right-[-10%]" : "right-[-100%]"} longBorder transition-all duration-1500 opacity-0 bg-red-500 h-11 w-1/2 inline-block absolute bottom-[-22px]`}></span>
        </div>
    );
}

export default Hrading;
import React from 'react';
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP)

const HomeSection = () => {

    return (
        <div id="Home" className="w-full h-auto flex flex-col home_section relative">
            <div className="w-full h-screen relative flex items-end">
                <div className="w-full pb-[5%] lg:pb-[2%] flex items-center gap-2">
                    <div className="w-1/2 flex flex-col items-end title leading-none ">
                        <div>
                            <h1 className="text-[clamp(50px,calc(5vw+1rem),200px)] font-(family-name:--font-secondary)">FRONT-</h1>
                        </div>
                        <div>
                            <h1 className="text-[clamp(50px,calc(5vw+1rem),200px)] font-(family-name:--font-primary)">DEV</h1>
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-col title leading-none ">
                        <div
                            className="text-[clamp(50px,calc(5vw+1rem),200px)] font-(family-name:--font-primary) text-white">
                            <h1>END</h1>
                        </div>
                        <div>
                            <h1 className="text-[clamp(50px,calc(5vw+1rem),200px)] font-(family-name:--font-secondary) text-white">ELOPER</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[80vh] spacer'></div>
        </div>
    );
};

export default HomeSection;
import React from 'react';
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import profileImg from "../assets/profile-img.png";

gsap.registerPlugin(ScrollTrigger, useGSAP)

const HomeSection = () => {

    return (
        <div id="Home" className="w-full h-full relative flex flex-col home_section">
            <div className="w-full h-screen relative flex items-end">
                <div className="w-full pb-10 flex items-center gap-2">
                    <div className="w-1/2 flex flex-col items-end title">
                        <div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-(family-name:--font-secondary)">FRONT-</h1>
                        </div>
                        <div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-(family-name:--font-primary)">DEV</h1>
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-col title">
                        <div
                            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-(family-name:--font-primary) text-white">
                            <h1>END</h1>
                        </div>
                        <div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-(family-name:--font-secondary) text-white">ELOPER</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-screen'></div>
            {/*<div className="w-full h-[450px] md:h-[350px] lg:h-[400px] xl:h-[300px]"></div>*/}

        </div>
    );
};

export default HomeSection;
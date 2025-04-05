import React, {useRef} from 'react';
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Carousel from "./ui/Carousel.jsx";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {

    return (
        <div id='Projects' className="w-full h-screen flex projects-section absolute top-0 left-0 opacity-0 z-40">
            <div className="w-full h-full mr-[10%] ml-[10%] flex flex-col">
                <div className="w-full h-full flex flex-col pb-10">
                    <div className="w-full flex justify-center pb-10 pt-5 relative">
                        <h1 className="text-[clamp(60px,calc(6vw+1rem),100px)] text-[rgb(227,172,133)] text-shadow font-(family-name:--font-primary)">Projects</h1>
                        <h1 className="text-[clamp(50px,calc(2vw+1rem),100px)] font-extrabold text-shadow-white tracking-widest absolute bottom-11 z-40 font-(family-name:--font-secondary)">Projects</h1>
                    </div>
                    <Carousel/>
                </div>
            </div>

        </div>
    );
};

export default ProjectsSection;
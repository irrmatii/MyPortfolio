import React, {useRef} from 'react';
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Carousel from "./ui/Carousel.jsx";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {

    return (
        <div id='Projects' className="w-full h-screen flex projects-section absolute top-0 left-0 opacity-0 pointer-events-none">
            <div className="w-full h-full mr-[10%] ml-[10%] flex flex-col">
                <div className="w-full h-full flex flex-col pb-10">
                    <div className="w-full flex justify-center pb-10 pt-10 relative">
                        <h1 className="text-8xl text-[rgb(227,172,133)] text-shadow font-(family-name:--font-primary)">Projects</h1>
                        <h1 className="text-5xl font-bold text-shadow-white tracking-widest absolute bottom-9 z-40 font-(family-name:--font-secondary)">Projects</h1>
                    </div>
                    <Carousel/>
                </div>
            </div>

        </div>
    );
};

export default ProjectsSection;
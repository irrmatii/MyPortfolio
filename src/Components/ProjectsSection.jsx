import React from 'react';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Carousel from "./ui/Carousel.jsx";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {

    return (
        <div id='Projects' className="w-full h-[100dvh] flex projects-section absolute top-0 left-0 opacity-0 z-40">
            <div className="w-full h-full px-[5%] md:px-[20%] lg:px-[10%] flex flex-col">
                <div className="w-full h-full flex flex-col md:pb-5">
                    <div className="w-full flex justify-center pb-5 pt-10 relative">
                        <h1 className="text-[clamp(50px,calc(4vw+1rem),100px)] font-extrabold text-gray-200 text-shadow tracking-widest font-(family-name:--font-fourth) uppercase">Projects</h1>
                    </div>
                    <Carousel/>
                </div>
            </div>

        </div>
    );
};

export default ProjectsSection;
import './App.css'
import {useEffect, useRef, useState} from "react";
import AboutSection from "./Components/AboutSection.jsx";
import HomeSection from "./Components/HomeSection.jsx";
import SkillsSection from "./Components/SkillsSection.jsx";
import ProjectsSection from "./Components/ProjectsSection.jsx";
import { gsap } from "gsap";
import {useGSAP} from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HomeTitle from "./Components/ui/HomeTitle.jsx";
import ContactSection from "./Components/ContactSection.jsx";

gsap.registerPlugin(ScrollTrigger, useGSAP)

function App() {

    const aboutRef = useRef(null);
    const skillsRef = useRef(null);

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        console.log(width)
        return () => window.removeEventListener('resize', handleResize);
    }, [width]);

    useGSAP(() => {
        gsap.from(".about-section", {
            xPercent: 80,
            opacity: 0,
            scrollTrigger: {
                trigger: ".gsap_con",
                start: "top top",
                endTrigger: aboutRef.current,
                end: "center top",
                scrub: 1,
                pin: true,
            },
        });
        gsap.to(aboutRef.current, {
            opacity: 0,
            scrollTrigger: {
                trigger: skillsRef.current,
                start: "5% center",
                end: "center center",
                scrub: 1,
            },
        });

        if (width < "768"){
            gsap.to(".letter-I", {
                color: "transparent",
                backgroundImage: "linear-gradient(190deg, #afd9f5, #aaa3c0, #fffec1)",
                backgroundClip: "text",
                scrollTrigger: {
                    trigger: aboutRef.current,
                    start: "bottom 95%",
                    end: "70% 45%",
                    scrub: 2,
                },
            });

            gsap.to(".surname", {
                color: "white",
                opacity: 0.9,
                stagger: {
                    each: 0.3,
                    from: "end",
                },
                scrollTrigger: {
                    trigger: aboutRef.current,
                    start: "bottom 95%",
                    end: "70% 45%",
                    scrub: 2,
                },
            });
        } else {
            gsap.to(".name", {
                color: "white",
                opacity: 0.9,
                stagger: {
                    each: 0.3,
                    from: "end",
                },
                scrollTrigger: {
                    trigger: aboutRef.current,
                    start: width > "768" ? "75% center" : "bottom bottom",
                    end: width > "768" ? "85% center" : "55% center",
                    scrub: 2,
                },
            });
            gsap.to(".word-am", {
                color: "white",
                opacity: 0.9,
                stagger: {
                    each: 0.3,
                    from: "end",
                },
                scrollTrigger: {
                    trigger: aboutRef.current,
                    start: width > "768" ? "75% center" : "bottom bottom",
                    end: width > "768" ? "85% center" : "55% center",
                    scrub: 2,
                },
            });
        };

        gsap.to(".title", {
            opacity: 0,
            scrollTrigger: {
                trigger: aboutRef.current,
                start: "50% center",
                end: "bottom center",
                scrub: 1,
            },
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".gsap_con",
                start: "48% top",
                end: "95% bottom",
                scrub: 1,
                pin: true,
            },
        });

        tl.to(".skills-section", {opacity: 0, zIndex: "40", delay: 0.2}, "start")
            .to(".projects-section", {opacity: 1, zIndex: "50", delay: 0.2}, "start")
    }, []);

    useEffect(() => {
        ScrollTrigger.refresh();
    }, []);


    return (
        <>
            <div
                className="w-full h-auto flex flex-col items-center relative">
                <div
                    className="w-full h-full flex flex-col items-center bg-gradient-5-colors relative gsap_con overflow-hidden">
                    <div className="w-1/2 h-screen absolute top-0 right-0 bg-[#111]"></div>
                    <HomeTitle/>
                    <HomeSection/>
                    <div ref={aboutRef} className="w-full h-screen absolute top-0">
                        <AboutSection/>
                    </div>
                    <div ref={skillsRef} className="w-full h-[200vh] relative">
                        <SkillsSection/>
                        <ProjectsSection/>
                    </div>
                    <ContactSection/>
                </div>
                <div className="w-full h-screen space"></div>
            </div>
            <div className="h-[25vh]" id="Contact"></div>
        </>

    )
}

export default App

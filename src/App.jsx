import './App.css'
import {useRef} from "react";
import Nav from "./Components/Nav.jsx";
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
    const bgRef = useRef(null);
    const skillsRef = useRef(null);

    useGSAP(() => {

        gsap.from(".about-section", {
            xPercent: 80,
            opacity: 0,
            duration: 2,
            scrollTrigger: {
                trigger: ".gsap_con",
                start: "top top",
                end: "+=1500",
                scrub: 1,
                pin: true,
                // markers: true,
            },
        });
        gsap.to(aboutRef.current, {
            opacity: 0,
            scrollTrigger: {
                trigger: ".gsap_con",
                start: "60% bottom",
                end: "80% bottom",
                scrub: 1,
            },
        });

        gsap.to(".name", {
            color: "white",
            opacity: 0.9,
            stagger: {
                each: 2,
                from: "end",
            },
            scrollTrigger: {
                trigger: ".about-section",
                start: "120% top",
                end: "140% -60%",
                scrub: 2,
            },
        });
        gsap.to(".word-am", {
            color: "white",
            opacity: 0.9,
            stagger: {
                each: 1,
                from: "end",
            },
            scrollTrigger: {
                trigger: ".about-section",
                start: "140% top",
                end: "140% -50%",
                scrub: 2,
                // markers: true
            },
        });
        gsap.to(".title", {
            opacity: 0,
            scrollTrigger: {
                trigger: ".about-section",
                start: "center top",
                end: "130% top",
                scrub: 1,
            },
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.gsap_con',
                start: "62% center",
                end: "99% bottom",
                scrub: 1,
                pin: true,
                markers: true,
            },
        });

        tl.to(".skills-section", {opacity: 0,}, "start")
            .to(".projects-section", {opacity: 1, pointerEvents: "auto"}, "start")

    }, []);




  return (
      <>
          <div
              className="w-full h-full flex flex-col items-center bg-gradient-5-colors relative gsap_con overflow-hidden">
              <div ref={bgRef} className="w-1/2 h-screen absolute top-0 right-0 bg-[#111]"></div>
              <Nav/>
              <HomeTitle/>
              <HomeSection/>
              <div ref={aboutRef} className="w-full h-full absolute">
                  <AboutSection/>
              </div>
              <div ref={skillsRef} className="w-full h-full relative">
                  <SkillsSection/>
                  <ProjectsSection/>
              </div>
              <div className='w-full h-full relative'>
                  <ContactSection/>
              </div>

          </div>
      </>

  )
}

export default App

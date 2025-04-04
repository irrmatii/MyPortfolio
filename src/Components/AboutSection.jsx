import React from 'react';
import profileImg from '../assets/Adobe Express - file.png'


const AboutSection = () => {

    const letters = "Let’s build something extraordinary! Let’s build something extraordinary! Let’s build something extraordinary! Let’s build something extraordinary!";
    console.log(letters.length)


    return (
        <div id="About" className="w-full flex justify-end relative about-section opacity-100">
            <div className="w-[70%] flex flex-col items-center bg-linear-to-b from-[#111] from-65% to-transparent">
                <div className="w-full h-screen flex flex-col items-center relative ">
                    <div className="relative inline-block pt-20 pl-20">
                        <h1 className="text-8xl text-[#afd9f5] text-shadow-white font-(family-name:--font-primary)">Hello</h1>
                        <h1 className="text-5xl text-white font-bold text-shadow tracking-widest absolute bottom-0 left-[19%] pl-20 font-(family-name:--font-secondary)">Hello</h1>
                    </div>
                    <div
                        className="w-[85%] h-full text-3xl pb-18 flex items-end">
                        <p className="text-[#afd9f5] text-shadow-white text-center font-(family-name:--font-fourth) uppercase">Frontend
                            development is my playground - where
                            creativity meets logic,
                            and every challenge is an opportunity to grow.</p>
                    </div>
                </div>
                <div className="w-[85%] h-auto flex text-center text-3xl pl-5 pr-5 z-20">
                    <p className="text-[#afd9f5] text-shadow-white font-(family-name:--font-fourth) uppercase">I’m
                        here
                        to craft engaging digital experiences and bring ideas to life.</p>
                </div>

                <div
                    className="w-full  max-h-[250px] md:max-h-[350px] lg:max-h-[380px] xl:max-h-[450px] flex">
                    <div className="w-1/2 z-10 flex justify-end items-center">
                        {/*<div*/}
                        {/*    className="h-[90%] aspect-square rounded-full bg-red-300 flex items-center justify-center">*/}
                        {/*    <p>Lorem ipsum dolor sit amet.</p>*/}
                        {/*</div>*/}
                    </div>
                    <div className="w-1/2 h-full flex items-end justify-end relative">
                        <img className="h-full" src={profileImg}
                             alt=""/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutSection;
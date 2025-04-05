import React from 'react';
import profileImg from '../assets/Adobe Express - file.png'


const AboutSection = () => {

    const letters = "Let’s build something extraordinary! Let’s build something extraordinary! Let’s build something extraordinary! Let’s build something extraordinary!";
    console.log(letters.length)


    return (
        <div id="About" className="w-full flex justify-end relative about-section">
            <div className="w-[72%] flex flex-col items-center bg-[#111] rounded-bl-2xl">
                <div className="w-full h-screen flex flex-col items-center relative">
                    <div className="relative inline-block pt-[5%] md:pt-[4%] lg:pt-[2%] pl-[15%] lg:pl-[20%]">
                        <h1 className="text-[clamp(60px,calc(8vw+1rem),250px)] text-[#afd9f5] text-shadow-white font-(family-name:--font-primary)">Hello,</h1>
                    </div>
                    <div
                        className="w-[85%] h-full pb-[8%] flex items-end">
                        <p className="text-[clamp(20px,calc(1.1vw+1rem),100px)] text-[#afd9f5] text-center font-(family-name:--font-fourth) uppercase">Frontend
                            development is my playground - where
                            creativity meets logic,
                            and every challenge is an opportunity to grow.</p>
                    </div>
                </div>

                <div
                    className="w-full h-auto pt-20 pb-20 max-h-[250px] md:max-h-[350px] lg:max-h-[380px] xl:max-h-[500px] flex">
                    <div className="w-[60%] h-full flex flex-col items-center justify-around text-center text-3xl pl-5 pr-5 z-20">
                        <div className='w-[90%] flex items-center justify-center'>
                            <p className="text-[clamp(20px,calc(1.1vw+1rem),100px)] text-white text-shadow-white font-(family-name:--font-primary) uppercase tracking-wide">I’m
                                here
                                to craft engaging digital experiences and bring ideas to life.</p>
                        </div>
                        <div className='w-full h-auto flex justify-center gap-3'>
                            <a href="#Contact" className='w-[8%] h-auto'>
                                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                     viewBox="0 0 24 24">
                                    <path fill="#afd9f5"
                                          d="M19.07 13.88L13 19.94V22h2.06l6.06-6.07m1.58-2.35l-1.28-1.28a.52.52 0 0 0-.38-.17c-.15.01-.29.06-.39.17l-1 1l2.05 2l1-1c.19-.2.19-.52 0-.72M11 18H4V8l8 5l8-5v2h2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7zm9-12l-8 5l-8-5z"/>
                                </svg>
                            </a>


                            <svg className="w-[8%] h-auto" xmlns="http://www.w3.org/2000/svg" width="30"
                                 height="30"
                                 viewBox="0 0 24 24">
                                <path fill="#ffffff"
                                      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/>
                            </svg>

                            <svg className="w-[8%] h-auto" xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                 viewBox="0 0 24 24">
                                <path fill="#ffffff"
                                      d="M17.303 2.25H6.697A4.447 4.447 0 0 0 2.25 6.697v10.606a4.447 4.447 0 0 0 4.447 4.447h10.606a4.447 4.447 0 0 0 4.447-4.447V6.697a4.447 4.447 0 0 0-4.447-4.447m-8.46 15.742a.4.4 0 0 1-.4.423h-1.78a.41.41 0 0 1-.4-.412V10.6a.4.4 0 0 1 .4-.411h1.78a.4.4 0 0 1 .4.411zM7.52 8.632a1.467 1.467 0 1 1 .022-2.935A1.467 1.467 0 0 1 7.52 8.63m10.817 9.35a.39.39 0 0 1-.378.388H16.08a.39.39 0 0 1-.378-.389v-3.424c0-.511.156-2.223-1.356-2.223c-1.179 0-1.412 1.2-1.457 1.734v3.991a.39.39 0 0 1-.378.39h-1.823a.39.39 0 0 1-.389-.39v-7.493a.39.39 0 0 1 .39-.378h1.822a.39.39 0 0 1 .39.378v.645a2.59 2.59 0 0 1 2.434-1.112c3.035 0 3.024 2.835 3.024 4.447z"/>
                            </svg>
                        </div>
                    </div>
                    <div className="w-[40%] h-full flex justify-center items-center relative">
                        <div
                            className='w-[90%] aspect-square rounded-full bg-radial from-[#afd9f5] to-[#111] to-[71%]  overflow-hidden flex justify-center'>
                            <img className="h-full object-center" src={profileImg}
                                 alt=""/>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutSection;
import React from 'react';

const CarouselCard = ({project}) => {
    return (

    //     className="w-full h-full bg-black border-4 border-[#fffec1] border-double rounded-xl flex
    // before:absolute before:w-full before:h-full before:bg-[rgba(255,255,255,0.25)] before:blur-[10px] before:rounded-xl before:shadow-2xl
    // ">

        <div className={`w-full h-full bg-black rounded-xl flex box-shadow
            before:absolute before:top-0 before:w-full before:h-full before:bg-black  before:blur-[7px] before:rounded-xl before:shadow-2xl`}
        >
            <div className="w-[60%] h-full flex flex-col items-center p-4 z-20">
                <h1 className="text-xl text-shadow-white font-bold pb-4"
                    style={{ color: project.color }}
                >{project.title}</h1>
                <div className="w-full h-full text-center">
                    <p className="text-[rgb(245,238,235)] font-(family-name:--font-secondary)">{project.description}</p>
                </div>

                <div className="w-full flex gap-3">
                    {project.frontLink &&
                        <a href={project.frontLink} target="_blank" rel="noopener noreferrer" className='w-[30%]'>
                            <div
                                className="w-full font-medium p-1 flex items-center justify-center gap-2 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                                style={{backgroundColor: project.color}}>
                                Front-end
                                <svg className="w-[18%] h-auto" xmlns="http://www.w3.org/2000/svg" width="30"
                                     height="30"
                                     viewBox="0 0 24 24">
                                    <path fill="black"
                                          d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/>
                                </svg>
                            </div>
                        </a>
                    }
                    {project.backLink &&
                        <a href={project.backLink} target="_blank" rel="noopener noreferrer" className='w-[30%]'>
                            <div
                                className="text-white w-full font-medium p-1 flex items-center justify-center gap-2 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                                style={{border: `2px solid ${project.color}`}}>
                                Back-end
                                <svg className="w-[18%] h-auto" xmlns="http://www.w3.org/2000/svg" width="30"
                                     height="30"
                                     viewBox="0 0 24 24">
                                    <path fill="#ffffff"
                                          d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/>
                                </svg>
                            </div>
                        </a>
                    }
                    {project.live &&
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className='w-[30%]'>
                            <div
                                className="w-full text-white font-medium p-1 flex items-center justify-center gap-2 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                                style={{border: `2px solid ${project.color}`}}>
                                Live
                                <svg className="w-[18%] h-auto" xmlns="http://www.w3.org/2000/svg" width="30"
                                     height="30"
                                     viewBox="0 0 24 24">
                                    <path fill="#ffffff"
                                          d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/>
                                </svg>
                            </div>
                        </a>
                    }
                </div>
            </div>

            <div className="w-[40%] pl-2 relative flex items-center overflow-hidden">
                <img src={project.image} alt=""
                     className="w-[100%] h-[90%] object-cover rounded-bl-lg rounded-tl-lg object-left box-shadow hover:translate-y-6 hover:translate-x-2 hover:-rotate-2 transition-all duration-300"/>
            </div>
        </div>
    );
};

export default CarouselCard;
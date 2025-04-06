import React from 'react';

const CarouselCard = ({project, screen}) => {
    return (

        <div className={`w-full h-full bg-black rounded-xl flex ${screen <= 580? 'flex-col' : 'flex-row'} box-shadow
            before:absolute before:top-0 before:w-full before:h-full before:bg-black  before:blur-[7px] before:rounded-xl before:shadow-2xl`}
        >
            <div className={` ${screen <= 580? 'w-full' : 'w-[60%]'} h-full flex flex-col items-center py-3 z-20`}>
                <h1 className="text-[clamp(18px,1.2vw,40px)] text-shadow-white text-center font-bold pb-4 uppercase"
                    style={{ color: project.color }}
                >{project.title}</h1>
                <div className={` ${screen > 580 ? 'h-full' : 'h-[50%]'} w-full mb-4 px-4 text-center overflow-y-auto hideScrollContainer`}>
                    <p className="text-[clamp(14px,1.1vw,40px)] text-[rgb(245,238,235)] font-(family-name:--font-secondary)">{project.description}</p>
                </div>

                <div className={`w-full flex items-center gap-3 ${screen <= 580 && 'h-[40%] justify-between'}`}>
                  <div className={`${screen > 580 ? 'w-full h-[30%] items-center' : 'w-[40%] h-full flex-col justify-end'} flex gap-3 pl-4`}>
                      {project.frontLink &&
                          <a href={project.frontLink} target="_blank" className={`${screen > 580 ? 'w-[40%]' : 'w-full'}`}>
                              <div
                                  className="w-full font-medium text-[clamp(13px,1.2vw,40px)] p-1 flex items-center justify-center gap-2 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
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
                          <a href={project.backLink} target="_blank" className={`${screen > 580 ? 'w-[35%]' : 'w-full'}`}>
                              <div
                                  className="text-white text-[clamp(13px,1.2vw,40px)] w-full font-medium p-1 flex items-center justify-center gap-2 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
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
                          <a href={project.live} target="_blank" className={`${screen > 580 ? 'w-[35%]' : 'w-full'}`}>
                              <div
                                  className="w-full text-white text-[clamp(13px,1.2vw,40px)] font-medium p-1 flex items-center justify-center gap-2 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
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
                    {screen <= 580 &&
                        <div className="w-[50%] h-full pl-2 relative flex items-end overflow-hidden">
                            <img src={project.imageSm === "" ? project.image : project.imageSm} alt=""
                                 className="w-[100%] h-[95%] object-cover rounded-bl-lg rounded-tl-lg object-left box-shadow hover:translate-y-6 hover:translate-x-2 hover:-rotate-2 transition-all duration-300"/>
                        </div>
                    }
                </div>

            </div>
            {screen > 580 &&
                <div className="w-[40%] pl-2 relative flex items-center overflow-hidden">
                    <img src={project.image} alt=""
                         className="w-[100%] h-[90%] object-cover rounded-bl-lg rounded-tl-lg object-left box-shadow hover:translate-y-6 hover:translate-x-2 hover:-rotate-2 transition-all duration-300"/>
                </div>
            }
        </div>
    );
};

export default CarouselCard;
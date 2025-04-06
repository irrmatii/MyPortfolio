import React from 'react';

const SkillsSection = () => {
    return (
        <div id="Skills" className="w-full h-[100dvh] flex skills-section z-50 absolute top-0">
            <div className="w-full h-full mx-[10%]">
                <div className="w-full h-full flex flex-col">
                    <div className="w-full flex justify-center md:pb-25 pt-10 relative">
                        <h1 className="text-[clamp(50px,calc(4vw+1rem),100px)] font-extrabold text-gray-200 text-shadow tracking-widest font-(family-name:--font-fourth) uppercase">Skills</h1>
                    </div>

                    <div className="w-full h-full flex flex-wrap items-center justify-center md:gap-8 pb-30">

                        <div className="relative min-w-[60px] w-[10%] group flex flex-col gap-2 items-center justify-center group">
                            <div className="flex flex-col gap-2 items-center justify-center animate-[flying_4s_linear_infinite]">
                                <div
                                    className="text-[#8c733e] font-bold text-[clamp(13px,1vw,30px)] opacity-0 group-hover:opacity-100 transition-opacity">HTML
                                </div>
                                <svg
                                    className="w-[80%] xl:w-[70%] xl:w-[70%] h-auto text-shadow group-hover:scale-110  transition-transform duration-300 drop-shadow-lg"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path className="fill-black group-hover:fill-[#8c733e] transition-all duration-300"
                                          d="m3 2 1.578 17.824L12 22l7.467-2.175L21 2H3Zm14.049 6.048H9.075l.172 2.016h7.697l-.626 6.565-4.246 1.381-4.281-1.455-.288-2.932h2.024l.16 1.411 2.4.815 2.346-.763.297-3.005H7.416l-.562-6.05h10.412l-.217 2.017Z"/>
                                </svg>
                            </div>
                            <div
                                className="w-[90%] h-[20px] bg-radial from-transparent via-[rgba(0,0,0,0.3)] blur-[4px] rounded-xl animate-[stretchingX_4s_linear_infinite]"></div>
                        </div>

                        <div className="relative min-w-[60px] w-[10%] group flex flex-col gap-2 items-center justify-center group">
                            <div className="flex w-full flex-col gap-2 items-center justify-center animate-[flying_4s_linear_infinite]">
                                <div
                                    className="text-[#2f4a5e] font-bold text-[clamp(13px,1vw,30px)] opacity-0 group-hover:opacity-100 transition-opacity">CSS
                                </div>
                                <svg
                                    className="w-[80%] xl:w-[70%] h-auto text-shadow group-hover:scale-110 transition-transform duration-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24">
                                    <path
                                        className="fill-black group-hover:fill-[#2f4a5e] transition-all duration-300"
                                        d="m3 2 1.578 17.834L12 22l7.468-2.165L21 2H3Zm13.3 14.722-4.293 1.204H12l-4.297-1.204-.297-3.167h2.108l.15 1.526 2.335.639 2.34-.64.245-3.05h-7.27l-.187-2.006h7.64l.174-2.006H6.924l-.176-2.006h10.506l-.954 10.71Z"/>
                                </svg>
                            </div>
                            <div
                                className="w-[90%] h-[20px] bg-radial from-transparent via-[rgba(0,0,0,0.3)] blur-[4px] rounded-xl animate-[stretchingX_4s_linear_infinite]"></div>
                        </div>

                        <div className="relative min-w-[60px] w-[10%] group flex flex-col gap-2 items-center justify-center group">
                            <div
                                className="flex flex-col gap-2 items-center justify-center animate-[flying_4s_linear_infinite]">
                                <div
                                    className="text-[#8a4f56] font-bold text-[clamp(13px,1vw,30px)] opacity-0 group-hover:opacity-100 transition-opacity">JavaScript
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="w-[80%] xl:w-[70%] h-auto text-shadow group-hover:scale-110 transition-transform duration-300"
                                     viewBox="0 0 24 24">
                                    <path className="fill-black group-hover:fill-[#8a4f56] transition-all duration-300"
                                          d="M3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25m9 3.25a.75.75 0 0 1 .75.75v6A1.75 1.75 0 0 1 11 18H9.75a.75.75 0 0 1 0-1.5H11a.25.25 0 0 0 .25-.25v-6A.75.75 0 0 1 12 9.5m2 1.75c0-.966.784-1.75 1.75-1.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v1.5c0 .138.112.25.25.25h.5c.966 0 1.75.784 1.75 1.75v1.5A1.75 1.75 0 0 1 16.25 18h-1.5a.75.75 0 0 1 0-1.5h1.5a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25h-.5A1.75 1.75 0 0 1 14 12.75z"/>
                                </svg>
                            </div>
                            <div
                                className="w-[90%] h-[20px] bg-radial from-transparent via-[rgba(0,0,0,0.3)] blur-[4px] rounded-xl animate-[stretchingX_4s_linear_infinite]"></div>
                        </div>

                        <div className="relative min-w-[60px] w-[10%] group flex flex-col gap-2 items-center justify-center">
                            <div
                                className="flex flex-col gap-2 items-center justify-center animate-[flying_4s_linear_infinite]">
                                <div
                                    className="text-[#3a6541] font-bold text-[clamp(13px,1vw,30px)] opacity-0 group-hover:opacity-100 transition-opacity">TypeScript
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="w-[80%] xl:w-[70%] h-auto text-shadow group-hover:scale-105 transition-transform duration-300"
                                     viewBox="0 0 24 24">
                                    <path className="fill-black group-hover:fill-[#3a6541] transition-all duration-300"
                                          d="M19.131 3H4.869c-.955 0-1.73.787-1.73 1.758v14.484c0 .97.775 1.758 1.73 1.758h14.262c.956 0 1.73-.787 1.73-1.758V4.758c0-.97-.774-1.758-1.73-1.758m-5.712 9.984h-2.215v6.434H9.439v-6.434H7.223v-1.441h6.196zm5.712 5.277c-.139.317-.377.552-.658.739a3 3 0 0 1-.969.386a5.6 5.6 0 0 1-1.177.12a6.5 6.5 0 0 1-1.211-.11a3.7 3.7 0 0 1-1.004-.33v-1.689l-.066-.053l.066-.015v.068q.441.357.972.545c.347.133.727.2 1.108.2c.242 0 .426-.021.589-.06a1.4 1.4 0 0 0 .415-.168a.7.7 0 0 0 .246-.253a.7.7 0 0 0-.052-.738a1.3 1.3 0 0 0-.346-.335a3 3 0 0 0-.52-.295c-.207-.095-.418-.194-.657-.292c-.589-.281-1.053-.562-1.35-.95c-.301-.35-.45-.808-.45-1.335c0-.422.08-.76.242-1.055c.173-.316.377-.548.658-.738c.277-.193.588-.334.969-.422c.38-.088.762-.133 1.177-.133s.762.024 1.073.073c.311.05.602.127.865.229v1.652a2.3 2.3 0 0 0-.415-.242a3.8 3.8 0 0 0-.97-.275a3 3 0 0 0-.45-.033a2.4 2.4 0 0 0-.553.057a1.3 1.3 0 0 0-.416.161a.8.8 0 0 0-.26.25a.6.6 0 0 0-.093.327q0 .194.104.351q.103.152.295.296c.114.091.27.183.45.274c.207.091.394.183.623.278c.311.133.588.281.83.422c.243.14.447.305.623.492c.187.175.322.387.416.633s.142.523.142.843c0 .457-.108.809-.246 1.125"/>
                                </svg>
                            </div>
                            <div
                                className="w-[90%] h-[20px] bg-radial from-transparent via-[rgba(0,0,0,0.3)] blur-[4px] rounded-xl animate-[stretchingX_4s_linear_infinite]"></div>
                        </div>

                        <div className="relative min-w-[60px] w-[10%] group flex flex-col gap-2 items-center justify-center">
                            <div
                                className="flex flex-col gap-2 items-center justify-center animate-[flying_4s_linear_infinite]">
                                <div
                                    className=" text-[#9c8141] font-bold text-[clamp(13px,1vw,30px)] opacity-0 group-hover:opacity-100 transition-opacity">React
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="w-[80%] xl:w-[70%] h-auto text-shadow group-hover:scale-105 transition-transform duration-300"
                                     viewBox="0 0 25 25">
                                    <path className="fill-black group-hover:fill-[#9c8141] transition-all duration-300"
                                          d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236a2.236 2.236 0 0 1-2.236-2.236a2.236 2.236 0 0 1 2.235-2.236a2.236 2.236 0 0 1 2.236 2.236m2.648-10.69c-1.346 0-3.107.96-4.888 2.622c-1.78-1.653-3.542-2.602-4.887-2.602c-.41 0-.783.093-1.106.278c-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03c-.704 3.113-.39 5.588.988 6.38c.32.187.69.275 1.102.275c1.345 0 3.107-.96 4.888-2.624c1.78 1.654 3.542 2.603 4.887 2.603c.41 0 .783-.09 1.106-.275c1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032c.704-3.11.39-5.587-.988-6.38a2.17 2.17 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127c.666.382.955 1.835.73 3.704c-.054.46-.142.945-.25 1.44a23.5 23.5 0 0 0-3.107-.534A24 24 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28c-.686.72-1.37 1.537-2.02 2.442a23 23 0 0 0-3.113.538a15 15 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707c.19-.09.4-.127.563-.132zm4.882 3.05q.684.704 1.36 1.564c-.44-.02-.89-.034-1.345-.034q-.691-.001-1.36.034c.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093q.61.874 1.183 1.86q.557.961 1.018 1.946c-.308.655-.646 1.31-1.013 1.95c-.38.66-.773 1.288-1.18 1.87a25.6 25.6 0 0 1-4.412.005a27 27 0 0 1-1.183-1.86q-.557-.961-1.018-1.946a25 25 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25 25 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16q-.336.585-.635 1.174c-.265-.656-.49-1.31-.676-1.947c.64-.15 1.315-.283 2.015-.386zm7.26 0q1.044.153 2.006.387c-.18.632-.405 1.282-.66 1.933a26 26 0 0 0-1.345-2.32zm3.063.675q.727.226 1.375.498c1.732.74 2.852 1.708 2.852 2.476c-.005.768-1.125 1.74-2.857 2.475c-.42.18-.88.342-1.355.493a24 24 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23 23 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5c-1.732-.737-2.852-1.706-2.852-2.474s1.12-1.742 2.852-2.476c.42-.18.88-.342 1.356-.494m11.678 4.28c.265.657.49 1.312.676 1.948c-.64.157-1.316.29-2.016.39a26 26 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175q.345.586.705 1.143a22 22 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423c.23 1.868-.054 3.32-.714 3.708c-.147.09-.338.128-.563.128c-1.012 0-2.514-.807-4.11-2.28c.686-.72 1.37-1.536 2.02-2.44c1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532c.66.905 1.345 1.727 2.035 2.446c-1.595 1.483-3.092 2.295-4.11 2.295a1.2 1.2 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703c.054-.46.142-.944.25-1.438zm4.56.64q.661.032 1.345.034q.691.001 1.36-.034c-.44.572-.895 1.095-1.345 1.565q-.684-.706-1.36-1.565"/>
                                </svg>
                            </div>
                            <div
                                className="w-[90%] h-[20px] bg-radial from-transparent via-[rgba(0,0,0,0.3)] blur-[4px] rounded-xl animate-[stretchingX_4s_linear_infinite]"></div>
                        </div>

                        <div className="relative min-w-[60px] w-[10%] group flex flex-col gap-2 items-center justify-center">
                            <div
                                className="flex flex-col gap-2 items-center justify-center animate-[flying_4s_linear_infinite]">
                                <div
                                    className="text-[#668f94] font-bold text-[clamp(13px,1vw,30px)] opacity-0 group-hover:opacity-100 transition-opacity">Vite
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="w-[80%] xl:w-[70%] h-auto text-shadow group-hover:scale-105 transition-transform duration-300"
                                     viewBox="0 0 25 25">
                                    <path className="fill-black group-hover:fill-[#668f94] transition-all duration-300"
                                          d="m8.525 4.63l-5.132-.915a1.17 1.17 0 0 0-1.164.468a1.16 1.16 0 0 0-.07 1.28l8.901 15.58a1.182 1.182 0 0 0 2.057-.008l8.729-15.578c.49-.875-.262-1.917-1.242-1.739l-4.574.813l-.206.754l4.906-.871a.474.474 0 0 1 .498.697L12.5 20.689a.47.47 0 0 1-.5.234a.47.47 0 0 1-.326-.231L2.772 5.112a.474.474 0 0 1 .496-.7l5.133.916l.074.013z"/>
                                    <path className="fill-black group-hover:fill-[#668f94] transition-all duration-300"
                                          d="m15.097 5.26l.162-.593l-.6.107zm-5.88-.506l.513.09l-.542.427z"/>
                                    <path className="fill-black group-hover:fill-[#668f94] transition-all duration-300"
                                          d="m15.549 2.367l-6.1 1.26a.22.22 0 0 0-.126.077a.25.25 0 0 0-.055.142l-.375 6.685a.24.24 0 0 0 .079.194a.21.21 0 0 0 .195.05l1.698-.414c.16-.038.302.11.27.278l-.505 2.606c-.034.176.122.326.285.274l1.049-.336c.162-.052.319.098.284.274l-.801 4.093c-.05.257.272.396.407.177l.09-.147l4.97-10.464c.084-.175-.06-.375-.242-.338l-1.748.356c-.165.034-.304-.128-.258-.297l1.14-4.173c.047-.17-.093-.331-.257-.297"/>
                                </svg>
                            </div>
                            <div
                                className="w-[90%] h-[20px] bg-radial from-transparent via-[rgba(0,0,0,0.3)] blur-[4px] rounded-xl animate-[stretchingX_4s_linear_infinite]"></div>
                        </div>

                        <div className="relative min-w-[60px] w-[10%] group flex flex-col gap-2 items-center justify-center">
                            <div
                                className="flex flex-col gap-2 items-center justify-center animate-[flying_4s_linear_infinite]">
                                <div
                                    className="text-[#725bb0] font-bold text-[clamp(13px,1vw,30px)] opacity-0 group-hover:opacity-100 transition-opacity">Tailwind
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="w-[80%] xl:w-[70%] h-auto text-shadow group-hover:scale-105 transition-transform duration-300"
                                     viewBox="0 0 24 24">
                                    <path className="fill-black group-hover:fill-[#725bb0] transition-all duration-300"
                                          d="M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12"/>
                                </svg>
                            </div>
                            <div
                                className="w-[90%] h-[20px] bg-radial from-transparent via-[rgba(0,0,0,0.3)] blur-[4px] rounded-xl animate-[stretchingX_4s_linear_infinite]"></div>
                        </div>

                        <div className="relative min-w-[60px] w-[10%] group flex flex-col gap-2 items-center justify-center">
                            <div
                                className="flex flex-col gap-2 items-center justify-center animate-[flying_4s_linear_infinite]">
                                <div
                                    className="text-[#4b5f41] font-bold text-[clamp(13px,1vw,30px)] opacity-0 group-hover:opacity-100 transition-opacity">Bootstrap
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="w-[80%] xl:w-[70%] h-auto text-shadow group-hover:scale-105 transition-transform duration-300"
                                     viewBox="0 0 26 26">
                                    <path className="fill-black group-hover:fill-[#4b5f41] transition-all duration-300"
                                          d="M11.79 11.5H9.72V8.19h2.47c1.26 0 1.96.56 1.96 1.59c0 1.12-.83 1.72-2.36 1.72m.37 1.13H9.72v3.64h2.56c1.56 0 2.38-.63 2.38-1.83s-.85-1.81-2.5-1.81M22 5.31v13.38C22 20.5 20.5 22 18.69 22H5.31C3.5 22 2 20.5 2 18.69V5.31C2 3.5 3.5 2 5.31 2h13.38C20.5 2 22 3.5 22 5.31m-6 9.19c0-1.38-.92-2.37-2.33-2.55v-.06c1-.18 1.79-1.18 1.79-2.26c0-1.55-1.2-2.58-2.96-2.58H8.43v10.36h4.04c2.21 0 3.53-1.09 3.53-2.91"/>
                                </svg>
                            </div>
                            <div
                                className="w-[90%] h-[20px] bg-radial from-transparent via-[rgba(0,0,0,0.3)] blur-[4px] rounded-xl animate-[stretchingX_4s_linear_infinite]"></div>
                        </div>

                        <div className="relative min-w-[60px] w-[10%] group flex flex-col gap-2 items-center justify-center">
                            <div
                                className="text-[#86851c] flex flex-col gap-2 items-center justify-center animate-[flying_4s_linear_infinite]">
                                <div
                                    className=" font-bold text-[clamp(13px,1vw,30px)] opacity-0 group-hover:opacity-100 transition-opacity">Node.Js
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="w-[80%] xl:w-[70%] h-auto text-shadow group-hover:scale-105 transition-transform duration-300"
                                     viewBox="0 0 27 27">
                                    <path className="fill-black group-hover:fill-[#86851c] transition-all duration-300"
                                          d="M11.899 24c-.322 0-.64-.084-.923-.247l-2.935-1.738c-.439-.245-.225-.332-.08-.382c.584-.204.703-.25 1.327-.605c.066-.037.152-.024.219.015l2.255 1.339a.3.3 0 0 0 .273 0l8.794-5.077a.28.28 0 0 0 .134-.237V6.919a.28.28 0 0 0-.136-.242l-8.79-5.072a.27.27 0 0 0-.271 0l-8.79 5.072a.28.28 0 0 0-.139.24v10.148c0 .097.053.19.137.236l2.408 1.391c1.308.654 2.107-.116 2.107-.891V7.785a.25.25 0 0 1 .255-.254h1.114c.139 0 .253.11.253.254v10.02c0 1.744-.95 2.745-2.604 2.745c-.509 0-.91 0-2.028-.55l-2.307-1.33a1.86 1.86 0 0 1-.922-1.605V6.917c0-.66.352-1.277.922-1.602L10.976.236a1.93 1.93 0 0 1 1.849 0l8.792 5.08c.568.329.922.943.922 1.603v10.149a1.86 1.86 0 0 1-.922 1.602l-8.792 5.079a1.85 1.85 0 0 1-.927.246zm2.716-6.993c-3.848 0-4.654-1.766-4.654-3.248c0-.14.113-.253.254-.253h1.136c.126 0 .231.091.251.215c.172 1.158.683 1.742 3.01 1.742c1.853 0 2.641-.419 2.641-1.402c0-.566-.225-.986-3.104-1.268c-2.408-.238-3.896-.768-3.896-2.694c0-1.775 1.497-2.831 4.004-2.831c2.815 0 4.211.977 4.387 3.077a.256.256 0 0 1-.255.278h-1.143a.25.25 0 0 1-.246-.199c-.275-1.217-.94-1.607-2.747-1.607c-2.023 0-2.259.705-2.259 1.233c0 .64.277.828 3.007 1.189c2.703.359 3.987.865 3.987 2.765c0 1.915-1.599 3.014-4.385 3.014z"/>
                                </svg>
                            </div>
                            <div
                                className="w-[90%] h-[20px] bg-radial from-transparent via-[rgba(0,0,0,0.3)] blur-[4px] rounded-xl animate-[stretchingX_4s_linear_infinite]"></div>
                        </div>

                        <div className="relative min-w-[60px] w-[10%] group flex flex-col gap-2 items-center justify-center">
                            <div
                                className="flex flex-col gap-2 items-center justify-center animate-[flying_4s_linear_infinite]">
                                <div
                                    className="text-[#622735] font-bold text-[clamp(13px,1vw,30px)] opacity-0 group-hover:opacity-100 transition-opacity">Mongo
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="w-[80%] xl:w-[70%] h-auto text-shadow group-hover:scale-105 transition-transform duration-300"
                                     viewBox="0 0 24 24">
                                    <path className="fill-black group-hover:fill-[#622735] transition-all duration-300"
                                          d="M13.74 4.23a35 35 0 0 1-1.713-2.216a.033.033 0 0 0-.054 0a35 35 0 0 1-1.713 2.217c-7.212 9.187 1.138 15.385 1.138 15.385l.067.047c.064.959.221 2.337.221 2.337h.628s.157-1.372.22-2.33l.069-.054s8.349-6.198 1.138-15.385M12 19.482s-.374-.32-.475-.48l-.001-.016l.453-10.002a.024.024 0 0 1 .047 0l.452 10.002v.017c-.101.16-.476.48-.476.48"/>
                                </svg>
                            </div>
                            <div
                                className="w-[90%] h-[20px] bg-radial from-transparent via-[rgba(0,0,0,0.3)] blur-[4px] rounded-xl animate-[stretchingX_4s_linear_infinite]"></div>
                        </div>

                        <div className="relative min-w-[60px] w-[10%] group flex flex-col gap-2 items-center justify-center">
                            <div
                                className="flex flex-col gap-2 items-center justify-center animate-[flying_4s_linear_infinite]">
                                <div
                                    className="text-[#9f4b10] font-bold text-[clamp(13px,1vw,30px)] opacity-0 group-hover:opacity-100 transition-opacity">Git
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="w-[80%] xl:w-[70%] h-auto text-shadow group-hover:scale-105 transition-transform duration-300"
                                     viewBox="0 0 24 24">
                                    <path className="fill-black group-hover:fill-[#9f4b10] transition-all duration-300"
                                          d="M21.623 11.11L12.89 2.376a1.29 1.29 0 0 0-1.821 0L9.256 4.191l2.3 2.3a1.53 1.53 0 0 1 1.937 1.95l2.217 2.217a1.532 1.532 0 1 1-.918.864l-2.068-2.068v5.441a1.533 1.533 0 1 1-1.26-.045V9.36a1.53 1.53 0 0 1-.832-2.01L8.365 5.081l-5.988 5.987a1.29 1.29 0 0 0 0 1.822l8.733 8.732a1.29 1.29 0 0 0 1.821 0l8.692-8.692a1.29 1.29 0 0 0 0-1.822"/>
                                </svg>
                            </div>
                            <div
                                className="w-[90%] h-[20px] bg-radial from-transparent via-[rgba(0,0,0,0.3)] blur-[4px] rounded-xl animate-[stretchingX_4s_linear_infinite]"></div>
                        </div>

                        <div className="relative min-w-[60px] w-[10%] group flex flex-col gap-2 items-center justify-center">
                            <div
                                className="flex flex-col gap-2 items-center justify-center animate-[flying_4s_linear_infinite]">
                                <div
                                    className="text-[#5e075e] font-bold text-[clamp(13px,1vw,30px)] opacity-0 group-hover:opacity-100 transition-opacity">Sockets.io
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="w-[80%] xl:w-[70%] h-auto text-shadow group-hover:scale-105 transition-transform duration-300"
                                     viewBox="0 -2 37 37">
                                    <path className="fill-black group-hover:fill-[#5e075e] transition-all duration-300"
                                          d="M15.917.021a16.2 16.2 0 0 0-3.969.505C5.708 2.078.755 7.729.12 14.139C-.667 20.202 2.401 26.52 7.645 29.65c5.152 3.224 12.125 3.095 17.167-.296c4.532-2.943 7.349-8.303 7.183-13.715c-.077-5.353-3.083-10.557-7.683-13.307C21.807.785 18.86.009 15.917.02zm-.089 2.26c6.593-.011 13.052 5.088 13.713 11.901c1.261 7.547-5.005 15.219-12.651 15.443c-7.271.724-14.303-5.443-14.511-12.745c-.541-5.911 3.36-11.781 8.932-13.735a12.1 12.1 0 0 1 4.516-.859zm6.792 4.303c-3.584 2.78-7.016 5.744-10.521 8.609c1.604.02 3.219.02 4.828.009c1.88-2.885 3.813-5.733 5.693-8.619zm-7.552 10.203c-1.88 2.891-3.817 5.744-5.699 8.635c3.595-2.776 7.011-5.76 10.537-8.609a391 391 0 0 0-4.839-.025z"/>
                                </svg>
                            </div>
                            <div
                                className="w-[90%] h-[20px] bg-radial from-transparent via-[rgba(0,0,0,0.3)] blur-[4px] rounded-xl animate-[stretchingX_4s_linear_infinite]"></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
import React from 'react';

const ContactSection = () => {
    return (
        <div
             className='w-full h-[100dvh] absolute bottom-0 flex flex-col items-center bg-linear-to-b from-transparent via-transparent to-[#111]'>
            <div className="w-full flex justify-center pb-10 pt-5 relative">
                <h1 className="text-[clamp(50px,calc(4vw+1rem),100px)] font-extrabold text-shadow text-center tracking-widest font-(family-name:--font-fourth) uppercase">Contact Me</h1>
            </div>
            <div className="w-full h-[80%] flex items-center pb-10">
                <form
                    className="flex flex-col items-center space-y-10 xl:space-y-20 w-[90%] max-w-[500px] xl:max-w-[700px] mx-auto"
                    action="https://formspree.io/f/mvgkwdlg"
                    method="POST"
                >
                    <div className='w-full flex flex-col gap-4 xl:gap-10'>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            className="p-3 border-2 border-black rounded-md text-white font-medium text-[clamp(15px,1.3vw,40px)] bg-[rgba(255,255,255,0.5)] placeholder-gray-900"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            className="p-3 border-2 border-black rounded-md text-white font-medium text-[clamp(15px,1.3vw,40px)] bg-[rgba(255,255,255,0.5)] placeholder-gray-900"
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            required
                            className="p-3 border-2 border-black rounded-md h-40 text-white font-medium text-[clamp(15px,1.3vw,40px)] resize-none overflow-y-auto hideScrollContainer bg-[rgba(255,255,255,0.5)] placeholder-gray-900"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-[90%] border border-white bg-black text-white font-bold text-[clamp(15px,1.3vw,40px)] px-6 py-2 rounded-lg hover:bg-white hover:text-black hover:border-black transition-all ease-in-out duration-400"
                    >
                        Send Message
                    </button>
                </form>
            </div>

        </div>
    );
};

export default ContactSection;
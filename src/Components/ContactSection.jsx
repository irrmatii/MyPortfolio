import React from 'react';

const ContactSection = () => {
    return (
        <div id="Contact"
             className='w-full h-screen absolute bottom-0 flex flex-col items-center bg-linear-to-b from-transparent via-transparent to-[#111]'>
            <div className="w-full flex justify-center pb-10 pt-5 relative">
                <h1 className="text-[clamp(60px,calc(6vw+1rem),100px)] text-[#e3e2a9] text-shadow font-(family-name:--font-primary)">Contact
                    Me</h1>
                <h1 className="text-[clamp(50px,calc(2vw+1rem),100px)] font-extrabold text-shadow-white tracking-widest absolute bottom-11 z-40 font-(family-name:--font-secondary)">Contact
                    Me</h1>
            </div>

            <h1>Test</h1>
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
                            className="p-3 border-2 border-black rounded-md text-white font-medium text-[clamp(15px,1.3vw,40px)] bg-[rgba(227,226,169,0.4)] placeholder-gray-900"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            className="p-3 border-2 border-black rounded-md text-white font-medium text-[clamp(15px,1.3vw,40px)] bg-[rgba(227,226,169,0.4)] placeholder-gray-900"
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            required
                            className="p-3 border-2 border-black rounded-md h-40 text-white font-medium text-[clamp(15px,1.3vw,40px)] resize-none overflow-y-auto hideScrollContainer bg-[rgba(227,226,169,0.4)] placeholder-gray-900"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-[90%] border border-white bg-black text-white font-bold text-[clamp(15px,1.3vw,40px)] px-6 py-2 rounded-lg hover:bg-white hover:text-black transition-all duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>

        </div>
    );
};

export default ContactSection;
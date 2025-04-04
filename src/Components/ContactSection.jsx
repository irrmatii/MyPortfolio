import React from 'react';

const ContactSection = () => {
    return (
        <div id="Contact" className='w-full h-screen relative flex flex-col items-center bg-linear-to-b from-transparent to-[#111] to-75%'>
            <div className="w-full flex justify-center pb-10 pt-10 relative">
                <h1 className="text-8xl text-[#e3e2a9] text-shadow font-(family-name:--font-primary)">Contact Me</h1>
                <h1 className="text-5xl font-bold text-shadow-white tracking-widest absolute bottom-9 z-40 font-(family-name:--font-secondary)">Contact Me</h1>
            </div>

            <div className="w-full h-[80%] flex items-center pb-10">
                <form
                    className="flex flex-col space-y-10 w-full max-w-md mx-auto"
                    action="https://formspree.io/f/mvgkwdlg"
                    method="POST"
                >
                    <div className='w-full flex flex-col gap-4'>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            className="p-3 border-2 rounded-md text-white font-medium bg-[rgba(227,226,169,0.4)] placeholder-gray-900"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            className="p-3 border-2 rounded-md text-white font-medium bg-[rgba(227,226,169,0.4)] placeholder-gray-900"
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            required
                            className="p-3 border-2 rounded-md h-40 text-white font-medium resize-none overflow-y-auto hideScrollContainer bg-[rgba(227,226,169,0.4)] placeholder-gray-900"
                        />
                    </div>

                    <button
                        type="submit"
                        className="border border-white text-white font-bold px-6 py-2 rounded-lg hover:bg-white hover:text-black transition-all duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>

        </div>
    );
};

export default ContactSection;
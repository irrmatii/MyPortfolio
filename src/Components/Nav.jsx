
const Nav = () => {
    return (
        <div className="w-full h-[60px] xl:h-[70px] z-50 fixed top-0 left-0 flex items-center justify-center">
            <div className="w-[60%] h-full bg-[rgba(235,233,233,0.34)] rounded-b-[20px] flex items-center justify-center">
                <ul className=" w-full flex justify-around text-2xl xl:text-3xl text-white font-(family-name:--font-primary)">
                    <li className="hover:scale-125 transition-transform duration-300">
                        <a href="#Home">HOME</a>
                    </li>
                    <li className="hover:scale-125 transition-transform duration-300">
                        <a href="#About">ABOUT</a>
                    </li>
                    <li className="hover:scale-125 transition-transform duration-300">
                        <a href="#Skills">SKILLS</a>
                    </li>
                    <li className="hover:scale-125 transition-transform duration-300">
                        <a href="#Projects">PROJECTS</a>
                    </li>
                    <li className="hover:scale-125 transition-transform duration-300">
                        <a href="#Contact">CONTACT</a>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Nav;
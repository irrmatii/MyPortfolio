
const HomeTitle = () => {
    return (
        <div className="absolute w-full top-[5%] md:top-[4%] lg:top-[2%] flex flex-col md:flex-row items-center md:items-end gap-2 w-full z-20">
            <div className="flex justify-center md:justify-end items-center w-1/2 pl-12 md:pl-0">
                <div className="h-[50%] w-auto relative flex justify-end z-20">
                    <h1 className="text-[clamp(150px,calc(30vw+1rem),700px)] leading-none font-(family-name:--font-third) text-shadow letter-I">I</h1>
                </div>
                <div className="h-full flex flex-col justify-end items-center pb-[4%]">
                    <div className="flex leading-none">
                        <h1 className="text-[clamp(60px,calc(10vw+1rem),300px)] font-(family-name:--font-fourth) word-am text-white md:text-black">a</h1>
                        <h1 className="text-[clamp(60px,calc(10vw+1rem),300px)] font-(family-name:--font-fourth) word-am text-white md:text-black">m</h1>
                    </div>
                    <div className="flex leading-none pl-1">
                        <h1 className="text-[clamp(60px,calc(10vw+1rem),300px)] font-(family-name:--font-fourth) name text-white md:text-black">r</h1>
                        <h1 className="text-[clamp(60px,calc(10vw+1rem),300px)] font-(family-name:--font-fourth) name text-white md:text-black">m</h1>
                        <h1 className="text-[clamp(60px,calc(10vw+1rem),300px)] font-(family-name:--font-fourth) name text-white md:text-black">a</h1>
                    </div>
                </div>
            </div>

            <div className="w-1/2 h-full leading-none flex items-end justify-center md:justify-start md:pb-[5.2%] gap-2">
                <div className="flex">
                    <h1 className="text-[clamp(60px,calc(10vw+1rem),300px)] font-(family-name:--font-fourth) text-white opacity-90"><span className="inline text-black md:text-white surname">Tisk</span>ute</h1>
                </div>
                <div
                    className="min-w-[13px] w-[4%] max-w-[27px] aspect-square mb-[4%] rounded-full bg-linear-150 from-[#adcde0] via-[#aaa3c0] to-[#fffec1] animate-[colorShift_8s_ease-in-out_infinite]"></div>
            </div>
        </div>
    );
};

export default HomeTitle;
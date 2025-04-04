
const HomeTitle = () => {
    return (
        <div className="absolute w-full top-[5%] flex items-end gap-2 w-full z-20">
            <div className="flex justify-end items-end w-1/2 ">
                <div className="h-full w-[180px] relative flex justify-end z-20">
                    <h1 className="text-[250px] md:text-[300px] lg:text-[350px] xl:text-[450px] font-(family-name:--font-third) text-shadow absolute -bottom-22 md:-bottom-26 lg:-bottom-33 xl:-bottom-38">I</h1>
                </div>
                <div className="h-full flex flex-col justify-end">
                    <div className="flex">
                        <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-9xl font-(family-name:--font-fourth) word-am">a</h1>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-9xl font-(family-name:--font-fourth) word-am">m</h1>
                    </div>
                    <div className="flex">
                        <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-9xl font-(family-name:--font-fourth) name">r</h1>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-9xl font-(family-name:--font-fourth) name">m</h1>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-9xl font-(family-name:--font-fourth) name">a</h1>
                    </div>
                </div>
            </div>

            <div className="w-1/2 h-full flex items-end">
                <div>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-9xl font-(family-name:--font-fourth) text-white opacity-90">Tiskute</h1>
                </div>
                <div
                    className="w-[15px] lg:w-[20px] xl:w-[25px] aspect-square m-4 lg:mb-4 xl:mb-5 rounded-full bg-linear-150 from-[#adcde0] via-[#aaa3c0] to-[#fffec1] animate-[colorShift_8s_ease-in-out_infinite]"></div>
            </div>
        </div>
    );
};

export default HomeTitle;
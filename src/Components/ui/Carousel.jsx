import {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import CarouselCard from "./CarouselCard.jsx";
import CRUD from '/src/assets/CRUD_website.jpg'
import CRUD_sm from '/src/assets/CRUD_website_sm.jpg'
import Hamburger from '/src/assets/Hamburger_Website.jpg'
import Hamburger_sm from '/src/assets/Hamburger_Website_sm.jpg'
import ShootingGame from '/src/assets/Shooting_Game.jpg'
import ShootinGame_sm from '/src/assets/Shooting_Game_sm.jpg'
import Monopoly from '/src/assets/Monopoly_Game.jpg'

const Carousel = () => {

    const [positionIndex, setPositionIndex] = useState([0,1,2,3,4])
    const [width, setWidth] = useState(window.innerWidth);


    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        console.log(width)
        return () => window.removeEventListener('resize', handleResize);
    }, [width]);

    function Next(){
        setPositionIndex((prevIndexes) => {
            const updateIndex = prevIndexes.map((prevIndex) => (prevIndex + 1) % 5)
            console.log("clicked")
            return updateIndex;
        })
    }

    function Back(){
        setPositionIndex((prevIndexes) => {
            const updateIndex = prevIndexes.map((prevIndex) => (prevIndex - 1 +5) % 5)
            console.log("clicked")
            return updateIndex;
        })
    }

    const positions = ['center', 'left1', 'left', 'right', 'right1']
    const imageVariants = {
        center: {x: "0%", scale: 1, zIndex: 5},
        left1: {
            x: width < "768" ? "0%" : "40%",
            scale: 0.7,
            zIndex: 2},
        left: {
            x: width < "1024" ? "0%" : "-70%",
            scale: 0.5,
            zIndex: 1
        },
        right: {
            x: width < "1024" ? "0%" : "70%",
            scale: 0.5,
            zIndex: 1},
        right1: {
            x: width < "768" ? "0%" : "-40%",
            scale: 0.7,
            zIndex: 2},
    }

    const projects = [
        {
            title: 'CRUD Application',
            description: 'This full-stack CRUD application lets users sign up, log in safely, and interact with posts and other users. Built with MongoDB, it uses bcrypt for password encryption and JWT for authentication. Users can create, edit, delete, and save posts to their favorites. They can also update their profiles, comment on posts, and engage in real-time chat. It is designed to be secure, easy to use, and scalable.',
            image: CRUD,
            imageSm: CRUD_sm,
            frontLink: 'https://github.com/irrmatii/Final_assignment_front.git',
            backLink: 'https://github.com/irrmatii/Final_assignment_back.git',
            live: '',
            color: '#154a5e'
        },
        {
            title: 'Hamburger website',
            description: `This interactive Burger website offers a smooth user experience. Built with React, it features a responsive design, ensuring it works across devices. As users scroll, items animate in from the side, creating an engaging visual effect. 
            Users can easily navigate between sections like the home page, recipe details, popular burgers, and contact information. The navigation menu is intuitive, with options to toggle or close it on mobile, ensuring a user-friendly experience across devices.`,
            image: Hamburger,
            imageSm: Hamburger_sm,
            frontLink: 'https://github.com/irrmatii/Hamburger_Website.git',
            backLink: '',
            live: 'https://irrmatii.github.io/Hamburger_Website/',
            color: 'rgb(236,222,188)'
        },
        {
            title: '',
            description: '',
            image: '',
            imageSm: "",
            frontLink: '',
            backLink: '',
            live: '',
            color: 'rgb(227,172,133,0.9)'
        },
        {
            title: 'Shoot the Monsters',
            description: 'Shoot the Monsters is a fun game where players fight off endless monsters. The user attacks by selecting a monster and pressing the attack button, while monsters strike back automatically. To gain an advantage, players can purchase upgrades like summoning extra monsters, refilling health, dealing double damage, attacking all monsters at once, enabling auto-attack, or reviving with 50% health. Built with React, the game delivers a smooth and interactive experience, keeping players engaged with strategic upgrades and dynamic battles.',
            image: ShootingGame,
            imageSm: ShootinGame_sm,
            frontLink: 'https://github.com/irrmatii/React-Shooting-Game.git',
            backLink: '',
            live: 'https://irrmatii.github.io/React-Shooting-Game/',
            color: 'rgb(178,155,110)'
        },
        {
            title: 'Monopoly Game',
            description: 'This live multiplayer Monopoly game lets 2 to 4 players enjoy the classic board game in real time. Players can buy streets, build houses, and upgrade to hotels, while also having to pay rent if they land on a street owned by another player. Special cards add unique twists to the gameplay, keeping things exciting. Built with React, Vite, Tailwind and Sockets, the game ensures smooth, real-time interactions, allowing players to compete and strategize together online.',
            image: Monopoly,
            imageSm: "",
            frontLink: 'https://github.com/irrmatii/Monopoly_Game_front.git',
            backLink: 'https://github.com/irrmatii/Monopoly_Game_back.git',
            live: '',
            color: 'rgb(167,210,206)'
        }
    ]

    return (
        <>
            <div className="flex flex-col gap-5 items-center justify-center w-full h-full relative mb-4">
                {projects.map((value, i) => (
                    <motion.div
                        key={i}
                        variants={imageVariants}
                        initial="center"
                        animate={positions[positionIndex[i]]} // Corrected reference
                        transition={{duration: 0.5}}
                        style={{height: '100%', position: "absolute"}}
                        className="w-full lg:w-[60%]"
                    >
                        <CarouselCard key={i} project={value} screen={width}/>
                    </motion.div>
                ))}

            </div>
            <div className="w-full flex gap-10 items-center justify-center">
                <svg onClick={Next}
                     className='cursor-pointer hover:scale-110 transition-transform duration-300'
                     xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                    <g fill="none" stroke="white" stroke-linecap="round" stroke-width="1.5">
                        <path stroke-linejoin="round"
                              d="m11.336 5.479l-3.973 3.53C5.795 10.405 5.011 11.102 5.011 12s.784 1.596 2.352 2.99l3.973 3.53c.716.637 1.074.956 1.369.823s.295-.611.295-1.57v-2.344c3.6 0 7.5 1.714 9 4.571c0-9.142-5.333-11.428-9-11.428V6.226c0-.958 0-1.437-.295-1.57c-.295-.132-.653.186-1.37.823"/>
                        <path d="M8.461 4.5L3.245 9.344a3.897 3.897 0 0 0 .126 5.823L8.46 19.5" opacity=".5"/>
                    </g>
                </svg>
                <svg onClick={Back}
                     className='cursor-pointer hover:scale-110 transition-transform duration-300'
                     xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                    <g fill="none" stroke="white" stroke-linecap="round" stroke-width="1.5">
                        <path stroke-linejoin="round"
                              d="m12.664 5.479l3.973 3.53c1.568 1.395 2.353 2.092 2.353 2.99s-.785 1.596-2.353 2.99l-3.973 3.53c-.716.637-1.074.956-1.369.823S11 18.731 11 17.772v-2.344c-3.6 0-7.5 1.714-9 4.571c0-9.142 5.333-11.428 9-11.428V6.226c0-.958 0-1.437.295-1.57c.295-.132.653.186 1.37.823"/>
                        <path d="m15.539 4.5l5.216 4.844a3.897 3.897 0 0 1-.126 5.823l-5.09 4.333" opacity=".5"/>
                    </g>
                </svg>
            </div>
        </>

    );
};

export default Carousel;
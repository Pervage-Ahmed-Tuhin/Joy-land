import { Link, NavLink } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";
import { IoMdSunny } from "react-icons/io";
import { BsMoonStarsFill } from "react-icons/bs";
const pageVariants = {
    initial: {
        opacity: 0,
        x: "-100vw"
    },
    in: {
        opacity: 1,
        x: 0
    },
    out: {
        opacity: 0,
        x: "100vw"
    }
};



const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.9
};


const Navbar = () => {
    const [theme, setTheme] = useState('light');
    const { user, LogOutUser } = useContext(AuthContext);

    console.log(user);



    const links = <>

        <li className="font-play-fare text-xl text-[#00BFA6] font-semibold"> <NavLink to='/'>Home</NavLink></li>
        <li className="font-play-fare text-xl text-[#00BFA6] font-semibold"> <NavLink to='/allTourist'>All Tourists Spot</NavLink></li>
        <li className="font-play-fare text-xl text-[#00BFA6] font-semibold"> <NavLink to='/addTourist'>Add Tourists Spot</NavLink></li>
        {/* <li className="font-play-fare text-xl text-[#00BFA6] font-semibold"> <NavLink to={`/myList/${email}`}>MY List</NavLink></li> */}

        <li className="font-play-fare text-xl text-[#00BFA6] font-semibold">
            <NavLink to='/myList'>MY List</NavLink>
        </li>

        <li className="font-play-fare text-xl text-[#00BFA6] font-semibold"> <NavLink to='/updateProfile'>Profile</NavLink></li>


    </>

    const handleLogout = () => {
        LogOutUser()
            .then(result => {
                console.log("Signed out Successfully", result);
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme);
    }, [theme],)

    const handleToggle = e => {
        if (e.target.checked) {
            setTheme('synthwave');
        }
        else {
            setTheme('light');
        }
    }

    return (

        <motion.div

            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}


            className="max-w-7xl mx-auto mb-[50px]">

            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1000] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}


                            <li>


                                <label htmlFor="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-800">
                                    <span className="text-[#00BFA6]"><IoMdSunny /></span>
                                    <span className="relative">
                                        <input

                                            onChange={handleToggle}

                                            id="Toggle1" type="checkbox" className="hidden peer" />
                                        <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-600 peer-checked:dark:bg-[#00BFA6]"></div>
                                        <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-100"></div>
                                    </span>
                                    <span className="text-[#00BFA6]"><BsMoonStarsFill /></span>
                                </label>

                            </li>

                        </ul>
                    </div>
                    <a className="btn btn-ghost  text-base md:text-3xl text-[#00BFA6] bg-base-200 font-bold mr-3">


                        <Typewriter
                            loop
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={2000}
                            words={['🎁Joy Land']}
                        />

                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>

                </div>

                {/* <div className="ml-0 md:ml-3 hidden md:block">

                    <label htmlFor="Toggle2" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-800">
                        <span className="text-sm md:text-2xl text-[#00BFA6]"><IoMdSunny /></span>
                        <span className="relative">
                            <input

                                onChange={handleToggle}

                                id="Toggle2" type="checkbox" className="hidden peer" />
                            <div className="w-10 h-4 rounded-full shadow dark:bg-gray-400 peer-checked:dark:bg-gray-400"></div>
                            <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto dark:bg-[#00BFA6]"></div>
                        </span>
                        <span className="text-sm md:text-2xl text-[#00BFA6]"><BsMoonStarsFill /></span>
                    </label>




                </div> */}

                <div className="ml-0 md:ml-3 hidden md:block">
                    <label htmlFor="Toggle2" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-800">
                        <span className="text-sm md:text-2xl text-[#00BFA6]"><IoMdSunny /></span>
                        <span className="relative">
                            <input
                                onChange={handleToggle}
                                id="Toggle2"
                                type="checkbox"
                                className="hidden peer" />
                            <div className="w-10 h-4 rounded-full shadow dark:bg-gray-400 peer-checked:dark:bg-gray-400"></div>
                            <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto dark:bg-[#00BFA6]"></div>
                        </span>
                        <span className="text-sm md:text-2xl text-[#00BFA6]"><BsMoonStarsFill /></span>
                    </label>
                </div>

                <div className="navbar-end">





                    {user ? (
                        <div className="flex  items-center gap-5">
                            <img
                                title={user.displayName}
                                className="rounded-full w-[20%] ml-3"
                                src={user.photoURL}

                                alt="You"
                            />
                            <button onClick={handleLogout} className="btn bg-[#00BFA6] text-white">
                                LogOut
                            </button>
                        </div>
                    ) : (
                        <div>
                            <Link to="/login">
                                <button className="btn bg-[#00BFA6] text-white btn-sm">LogIn</button>
                            </Link>
                            <Link to="/register">
                                <button className="btn bg-[#00BFA6] text-white btn-sm">Register</button>
                            </Link>
                        </div>
                    )}


                </div>
            </div>

        </motion.div>

    );
};

export default Navbar;
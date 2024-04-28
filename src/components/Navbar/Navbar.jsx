import { Link, NavLink } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";

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
    }, [theme])

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

                <div className="ml-3">
                    <label className="cursor-pointer grid place-items-center text-[#00BFA6]">
                        <input

                            onChange={handleToggle}

                            type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2 focus:ring-[#00BFA6] appearance-none border-none rounded-md" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>






                </div>

                <div className="navbar-end">



                    {
                        user ? <div className="flex ml-4 md:ml-0 items-center gap-5">
                            <img title={user.displayName} className="rounded-full w-[20%]" src={user.photoURL
                            } alt="You" /><button onClick={handleLogout} className="btn bg-[#00BFA6] text-white">LogOut</button>
                        </div> : <Link to="/login">
                            <button className="btn bg-[#00BFA6] text-white">LogIn</button>
                        </Link>
                    }

                </div>
            </div>

        </motion.div>

    );
};

export default Navbar;
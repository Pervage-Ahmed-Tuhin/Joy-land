import { Link, NavLink } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";

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

    const links = <>

        <li className="font-play-fare text-xl text-[#00BFA6] font-semibold"> <NavLink to='/'>Home</NavLink></li>
        <li className="font-play-fare text-xl text-[#00BFA6] font-semibold"> <NavLink to='/allTourist'>All Tourists Spot</NavLink></li>
        <li className="font-play-fare text-xl text-[#00BFA6] font-semibold"> <NavLink to='/addTourist'>Add Tourists Spot</NavLink></li>
        <li className="font-play-fare text-xl text-[#00BFA6] font-semibold"> <NavLink to='/myList'>MY List</NavLink></li>


    </>

    return (

        <motion.div

            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}


            className="max-w-6xl mx-auto mb-[50px]">

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
                    <a className="btn btn-ghost text-2xl md:text-3xl text-[#00BFA6] bg-base-200 font-bold">


                        <Typewriter
                            loop
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={2000}
                            words={['🎁Joy Land🎁']}
                        />

                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* 
                    {
                        user ? <div className="flex ml-4 md:ml-0 items-center gap-5">
                            <img title={user.displayName} className="rounded-full w-[20%]" src={user.photoURL
                            } alt="You" /><button onClick={handleLogout} className="btn bg-[#FE7A36] text-white">LogOut</button>
                        </div> : <Link to="/login">
                            <button className="btn bg-[#FE7A36] text-white">LogIn</button>
                        </Link>
                    } */}

                </div>
            </div>

        </motion.div>

    );
};

export default Navbar;
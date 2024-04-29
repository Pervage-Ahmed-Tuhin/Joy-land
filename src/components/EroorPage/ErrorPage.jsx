
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import img1 from '../../assets/img/cry.jpg';
import virus from '../../assets/img/Virus.svg';
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

const ErrorPage = () => {
    useEffect(() => {
        document.title = "Joy Land|ErrorPage";
    }, [])
    return (
        <motion.div

            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}



            className="flex justify-center items-center min-h-[50vh]" style={{ backgroundImage: `url(${virus})` }} >

            <section className="flex items-center h-full p-16 dark:bg-[#FFE4C4] dark:text-gray-800 ">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <img src={img1} className="w-full" alt="" />
                        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
                            <span className="text-[#00BFA6]">Error 404</span>
                        </h2>
                        <p className="text-2xl font-play-fare font-semibold md:text-3xl">Sorry, we couldnt find this page.</p>
                        <p className="mt-4 mb-8 dark:text-gray-400">But do not worry, you can find plenty of other things on our homepage.</p>
                        <Link> <button className="btn bg-[#00BFA6] text-white">Go TO Home</button></Link>
                    </div>
                </div>
            </section>
        </motion.div >
    );
};

export default ErrorPage;
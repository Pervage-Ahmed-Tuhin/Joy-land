
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import img1 from '../../assets/img/cry.jpg'

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



            className="flex justify-center items-center">
            <div className="flex justify-center items-center flex-col mt-[200px]">

                <img src={img1} alt="" />

                {/* thi si it */}
                <h1 className="text-5xl text-red-500 mb-5 text-center">Oops Something Went Wrong</h1>
                <Link> <button className="btn btn-primary">Go TO Home</button></Link>
            </div>
        </motion.div>
    );
};

export default ErrorPage;
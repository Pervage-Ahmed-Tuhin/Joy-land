import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import { motion } from "framer-motion";
import Loader from "../Loader/Loader";

import { useLoaderData } from "react-router-dom";
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


const Home = () => {

    const loadedData = useLoaderData();
    console.log(loadedData);

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        document.title = "T-Zone|Home";
    }, [])

    useEffect(() => {
        const delay = setTimeout(() => {
            setLoading(false);
        }, 1000)
        return () => clearTimeout(delay);
    }, [])


    return (
        <div>
            {loading && <Loader></Loader>}
            {!loading &&

                <motion.div

                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}


                >
                    <Banner></Banner>

                    <div>

                    

                    </div>

                </motion.div>

            }
        </div>

    );
};

export default Home;
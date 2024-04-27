import Banner from "../Banner/Banner";
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


const Home = () => {
    return (
        <motion.div

            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}


        >
            <Banner></Banner>
        </motion.div>
    );
};

export default Home;
import { useLoaderData } from "react-router-dom";
import TouristSpot from "../ToristSpots/TouristSpot";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
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


const AllTourist = () => {
    const loadedData = useLoaderData();
   
    const [loading, setLoading] = useState(true);
    const [sortedSpots, setSortedSpots] = useState([]);
    useEffect(() => {
        document.title = "Joy land|AllTourist";
    }, [])
    useEffect(() => {
        const delay = setTimeout(() => {
            setLoading(false);
        }, 1000)
        return () => clearTimeout(delay);
    }, [])

    const sortByElement = (items) => {
        const sorted = [...loadedData].sort((a, b) => a[items] - b[items]);
        setSortedSpots(sorted);
    };

    return (
        <div>
            {loading && <Loader></Loader>}
            {!loading &&
                <motion.div className="max-w-6xl mx-auto"


                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}


                >
                    <div className="text-center">
                        <details className="dropdown">
                            <summary className="m-1 btn bg-[#00BFA6] text-white">Sort Your Spots</summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li onClick={() => sortByElement('averageCost')}><a>Average Cost</a></li>
                                <li onClick={() => sortByElement('totalVisitorsPerYear')}><a>Visited People</a></li>
                            </ul>
                        </details>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {
                           

                            sortedSpots.length > 0 ? sortedSpots.map((data) => (
                                <TouristSpot key={data._id} data={data}></TouristSpot>
                            )) : loadedData.map((data) => (
                                <TouristSpot key={data._id} data={data}></TouristSpot>
                            ))

                        }


                    </div>

                </motion.div>


            }
        </div>

    );
};

export default AllTourist;
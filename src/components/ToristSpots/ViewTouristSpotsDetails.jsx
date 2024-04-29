import { useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import wave2 from '../../assets/img/Virus.svg';

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


const ViewTouristSpotsDetails = () => {
    const loadedData = useLoaderData();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = "Joy land|AllTourist";
    }, [])
    useEffect(() => {
        const delay = setTimeout(() => {
            setLoading(false);
        }, 1000)
        return () => clearTimeout(delay);
    }, [])


    useEffect(() => {
        document.title = "Joy land|Details page";
    }, [])
    const data = useLoaderData();
    console.log(data);
    const { image, touristsSpotName, countryName, location, averageCost, seasonality, travelTime, totalVisitorsPerYear, textarea } = data;
    return (
        <div>
            {loading && <Loader></Loader>}
            {!loading &&

                <motion.div className="hero min-h-screen" style={{ backgroundImage: `url(${wave2})` }}


                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}


                >
                    <div className="hero-content flex-col lg:flex-row gap-8">
                        <img src={image} className="max-w-xs lg:max-w-xl rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-2xl lg:text-5xl font-bold text-gray-800">Spot Name :

                                <Typewriter
                                    loop
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={2000}
                                    words={[touristsSpotName]}
                                />



                            </h1>
                            <div className="divider"></div>
                            <div className="space-y-6">
                                <h1 className="font-play-fare text-2xl font-bold text-gray-800 ">Description: <br /></h1>
                                <p className="py-6 font-play-fare text-gray-600 text-xl ">{textarea}</p>

                                <h1 className="font-play-fare"><span className="text-xl lg:text-2xl font-bold text-gray-800">Country Name:</span> <span className="text-gray-600 text-xl lg:text-2xl ">{countryName}</span></h1>

                                <h1 className="font-play-fare"><span className="text-xl lg:text-2xl  font-bold text-gray-800">Location:</span> <span className="text-gray-600 text-xl lg:text-2xl ">{location}</span></h1>

                                <h1 className="font-play-fare"><span className="text-xl lg:text-2xl  font-bold text-gray-800">Average Coast:</span> <span className="text-gray-600 text-xl lg:text-2xl ">{averageCost}$</span></h1>

                                <h1 className="font-play-fare"><span className="text-xl lg:text-2xl  font-bold text-gray-800">Seasonality:</span> <span className="text-gray-600 text-xl lg:text-2xl ">{seasonality}✨</span></h1>

                                <h1 className="font-play-fare"><span className="text-xl lg:text-2xl  font-bold text-gray-800">Traveling Time:</span> <span className="text-gray-600 text-xl lg:text-2xl ">{travelTime} days ✈</span></h1>

                                <h1 className="font-play-fare"><span className="text-xl lg:text-2xl  font-bold text-gray-800">Total Visitors Per Year:</span> <span className="text-gray-500 text-xl lg:text-2xl ">{totalVisitorsPerYear}    👨🏿‍🤝‍👨🏿👨🏿‍🤝‍👨🏿</span></h1>
                            </div>


                        </div>
                    </div>
                </motion.div>

            }
        </div>

    );
};

export default ViewTouristSpotsDetails;
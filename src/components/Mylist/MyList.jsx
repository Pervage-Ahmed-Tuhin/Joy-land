import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import wave2 from '../../assets/img/Moon.svg';
import { motion } from "framer-motion";

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




const MyList = () => {
    // fetch(`http://localhost:5000/tourists/email/${params.email}`)
    const { user } = useContext(AuthContext);
    useEffect(() => {
        document.title = "Joy land|My List";
    }, [])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const delay = setTimeout(() => {
            setLoading(false);
        }, 1000)
        return () => clearTimeout(delay);
    }, [])

    
    const [data, setData] = useState(null);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/tourists/email/${user.email}`)
                .then(response => response.json())
                .then(data => {
                    setData(data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    setLoading(false);
                });
        } else {
            setData(null);
            setLoading(false);
        }
    }, [user]);

    return (

        <div>
            {loading && <Loader></Loader>}
            {!loading &&

                <motion.div className="min-h-[100vh] max-w-6xl mx-auto text-white p-4"
                    style={{ backgroundImage: `url(${wave2})` }}

                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}


                >
                    {/* 
                    <div className="overflow-x-auto">
                        <table className="table">
                           
                            <thead>
                                <tr className="text-white text-xl">

                                    <th>Tourist Spot Name</th>
                                    <th>Spot Info</th>
                                    <th>Travel Cost and Popularity</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                <tr>

                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={image} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold text-sm md:text-lg">{touristsSpotName}</div>
                                                <div className="text-sm md:text-lg ">Country : {countryName}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="space-y-4">

                                        <span className="text-sm md:text-lg font-play-fare">{seasonality}</span>
                                        <br />
                                        <span className="text-sm md:text-lg font-play-fare">Location : {location}</span>
                                        <br />
                                        <span className="text-sm md:text-lg font-play-fare">Travel Time : {travelTime}</span>
                                    </td>
                                    <td className="space-y-4">
                                        <span className="text-sm md:text-lg font-play-fare">Average Cost : {averageCost} $</span>
                                        <br />
                                        <span className="text-sm md:text-lg font-play-fare">Travel Per Year : {totalVisitorsPerYear}</span>
                                    </td>
                                    <th className="space-y-4">
                                        <button className="btn  text-black btn-sm w-full outline-none bg-white">Update</button>
                                        <button className="btn text-black btn-sm w-full outline-none bg-white">Delete</button>
                                    </th>

                                </tr>

                            </tbody>
                           
                            <tfoot>
                                <tr className="text-white">
                                    <th></th>
                                    <th>Tourist Spot Name</th>
                                    <th>Spot Info</th>
                                    <th></th>
                                </tr>
                            </tfoot>

                        </table>
                    </div> */}

                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr className="text-white text-xl">
                                    <th>Tourist Spot Name</th>
                                    <th>Spot Info</th>
                                    <th>Travel Cost and Popularity</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold text-sm md:text-lg">{item.touristsSpotName}</div>
                                                    <div className="text-sm md:text-lg ">Country : {item.countryName}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="space-y-4">
                                            <span className="text-sm md:text-lg font-play-fare">{item.seasonality}</span>
                                            <br />
                                            <span className="text-sm md:text-lg font-play-fare">Location : {item.location}</span>
                                            <br />
                                            <span className="text-sm md:text-lg font-play-fare">Travel Time : {item.travelTime}</span>
                                        </td>
                                        <td className="space-y-4">
                                            <span className="text-sm md:text-lg font-play-fare">Average Cost : {item.averageCost} $</span>
                                            <br />
                                            <span className="text-sm md:text-lg font-play-fare">Travel Per Year : {item.totalVisitorsPerYear}</span>
                                        </td>
                                        <th className="space-y-4">
                                            <button className="btn  text-black btn-sm w-full outline-none bg-white">Update</button>
                                            <button className="btn text-black btn-sm w-full outline-none bg-white">Delete</button>
                                        </th>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr className="text-white">
                                    <th></th>
                                    <th>Tourist Spot Name</th>
                                    <th>Spot Info</th>
                                    <th></th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>


                </motion.div>


            }
        </div>






    );
};

export default MyList;
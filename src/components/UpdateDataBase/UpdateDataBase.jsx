import Swal from 'sweetalert2'
import wave2 from '../../assets/img/Snow.svg';

import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

import Loader from "../Loader/Loader";
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Authprovider/AuthProvider';
import { useLoaderData } from 'react-router-dom';


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
const UpdateDataBase = () => {

    const loadedData = useLoaderData();
    console.log(loadedData);
    const { image, touristsSpotName, countryName, location, averageCost, seasonality, travelTime, totalVisitorsPerYear, textarea } = loadedData;
    const { user } = useContext(AuthContext);
    useEffect(() => {
        document.title = "Joy land|Update Spots";
    }, [])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const delay = setTimeout(() => {
            setLoading(false);
        }, 1000)
        return () => clearTimeout(delay);
    }, [])




    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const touristsSpotName = form.touristsSpotName.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const averageCost = form.averageCost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        const textarea = form.textarea.value;
        const UserEmail = user.email;
        const UserName = user.displayName;
        console.log(UserEmail, UserName);

        const updatedSpot = { image, touristsSpotName, countryName, location, averageCost, seasonality, travelTime, totalVisitorsPerYear, textarea, UserEmail, UserName };

        console.log(updatedSpot);


        fetch(`http://localhost:5000/tourists/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Tourist Spot Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })



    }

    return (
        <div className="max-w-6xl mx-auto font-play-fare">
            {loading && <Loader></Loader>}
            {!loading && (
                <motion.div
                    className='max-w-6xl'
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                >
                    <Marquee className="marquee w-full overflow-hidden" speed={200}>
                        <h1 className="text-2xl md:text-3xl font-bold text-[#00BFA6]">🐱‍👤Update Your Spot!🐱‍👤</h1>
                    </Marquee>
                    <div className=" p-24" style={{ backgroundImage: `url(${wave2})` }}>
                        <h2 className="text-3xl font-extrabold text-white">Update Tourist Spots</h2>
                        <form onSubmit={handleUpdate} className="md:w-full">
                            {/* form name and quantity row */}
                            <div className="grid md:grid-cols-2 gap-4 mb-8">
                                <div className="form-control">
                                    <label className="label text-white">
                                        <span className="label-text text-white text-xl">image</span>
                                    </label>
                                    <label className="input-group">
                                        <input defaultValue={image} type="text" name="image" placeholder="image" className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label text-white">
                                        <span className="label-text text-white text-xl">tourists_spot_name</span>
                                    </label>
                                    <label className="input-group">
                                        <input defaultValue={touristsSpotName} type="text" name="touristsSpotName" placeholder="tourists_spot_name" className="input input-bordered w-full" />
                                    </label>
                                </div>
                            </div>
                            {/* form supplier row */}
                            <div className="grid md:grid-cols-2 gap-4 mb-8">
                                <div className="form-control">
                                    <label className="label text-white">
                                        <span className="label-text text-white text-xl">country_Name</span>
                                    </label>
                                    <label className="input-group">
                                        <input defaultValue={countryName} type="text" name="countryName" placeholder="country_Name" className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label text-white">
                                        <span className="label-text text-white text-xl">location</span>
                                    </label>
                                    <label className="input-group">
                                        <input defaultValue={location} type="text" name="location" placeholder="location" className="input input-bordered w-full" />
                                    </label>
                                </div>
                            </div>
                            {/* form category and details row */}
                            <div className="grid md:grid-cols-2 gap-4 mb-8">
                                <div className="form-control">
                                    <label className="label text-white">
                                        <span className="label-text text-white text-xl">average_cost</span>
                                    </label>
                                    <label className="input-group ">
                                        <input defaultValue={averageCost} type="text" name="averageCost" placeholder="average_cost" className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label text-white">
                                        <span className="label-text text-white text-xl"> seasonality</span>
                                    </label>
                                    <label className="input-group">
                                        <input defaultValue={seasonality} type="text" name="seasonality" placeholder=" seasonality" className="input input-bordered w-full" />
                                    </label>
                                </div>
                            </div>

                            {/* new stuff */}
                            <div className="grid md:grid-cols-2 gap-4 mb-8">
                                <div className="form-control">
                                    <label className="label text-white">
                                        <span className="label-text text-white text-xl">travel_time</span>
                                    </label>
                                    <label className="input-group ">
                                        <input defaultValue={travelTime} type="text" name="travelTime" placeholder="travel_time" className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label text-white">
                                        <span className="label-text text-white text-xl"> totalVisitorsPerYear</span>
                                    </label>
                                    <label className="input-group">
                                        <input defaultValue={totalVisitorsPerYear} type="text" name="totalVisitorsPerYear" placeholder=" totalVisitorsPerYear" className="input input-bordered w-full" />
                                    </label>
                                </div>
                            </div>


                            {/* form Photo url row */}
                            <textarea
                                className="border rounded-md p-2 focus:outline-none focus:border-blue-500 w-full"
                                name="textarea"
                                defaultValue={textarea}
                                id=""
                                cols="30"
                                rows="10"
                                placeholder="Enter your text here..."
                            ></textarea>
                            <input type="submit" value="Update Tourist Spot" className="btn btn-block " />
                        </form>


                    </div>
                </motion.div>
            )}


        </div>
    );
};

export default UpdateDataBase;
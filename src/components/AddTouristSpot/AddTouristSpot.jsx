
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import wave2 from '../../assets/img/Snow.svg';
import unlock2 from '../../assets/img/yo.svg';
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Typewriter } from 'react-simple-typewriter';
import Loader from "../Loader/Loader";
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
const AddTouristSpot = () => {
    const { infoHolder } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const { register, handleSubmit, formState: { errors } } = useForm();
    useEffect(() => {
        const delay = setTimeout(() => {
            setLoading(false);
        }, 1000)
        return () => clearTimeout(delay);
    }, [])


    

    return (
        // <div>
        //     {loading && <Loader></Loader>}
        //     {!loading &&

        //         <motion.div
        //             className='max-w-6xl'
        //             initial="initial"
        //             animate="in"
        //             exit="out"
        //             variants={pageVariants}
        //             transition={pageTransition}
        //         >
        //             <Marquee className="marquee w-full overflow-hidden" speed={200}>
        //                 <h1 className="text-2xl md:text-3xl font-bold text-[#00BFA6]">🐱‍👤Add Your Spot!🐱‍👤</h1>
        //             </Marquee>
        //             <img src={wave2} className="fixed hidden lg:block h-full" style={{ zIndex: -1 }} />
        //             <div className="w-screen h-screen flex flex-col justify-center items-center lg:grid lg:grid-cols-2">
        //                 <img src={unlock2} className="hidden lg:block w-[30%] hover:scale-150 transition-all duration-500 transform mx-auto" />
        //                 <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center w-1/2">
        //                     <img src={infoHolder.photoURL} className="w-32 rounded-lg" />
        //                     <h2 className="my-8 font-play-fare font-bold text-3xl text-white text-center">


        //                         <Typewriter
        //                             loop
        //                             cursor
        //                             cursorStyle='_'
        //                             typeSpeed={70}
        //                             deleteSpeed={50}
        //                             delaySpeed={2000}
        //                             words={['Add New Location to Joy Land']}
        //                         />

        //                     </h2>
        //                     <div className="flex flex-col md:flex-row gap-5">
        //                         <div>
        //                             <div className="relative flex items-center">
        //                                 <input type="text" placeholder="image " name="image "
        //                                     className="pl-8 border-b-2 font-play-fare focus:outline-none focus:border-[#00BFA6] transition-all duration-500 capitalize text-lg"
        //                                     {...register("image ", { required: true })} />
        //                                 {errors.image && <span className="text-red-500">This field is required</span>}
        //                             </div>
        //                             <div className="relative mt-8 flex items-center ">
        //                                 <input type="text" placeholder="tourists_spot_name" name="tourists_spot_name"
        //                                     className="pl-8 border-b-2 font-play-fare focus:outline-none focus:border-[#00BFA6] transition-all duration-500 capitalize text-lg"
        //                                     {...register("tourists_spot_name", { required: true })} />
        //                                 {errors.tourists_spot_name && <span className="text-red-500">This field is required</span>}
        //                             </div>
        //                             <div className="relative mt-8 flex items-center ">
        //                                 <input type='text' placeholder="country_Name" name="country_Name"
        //                                     className="pl-8 border-b-2 font-play-fare focus:outline-none focus:border-[#00BFA6] transition-all duration-500 capitalize text-lg"
        //                                     {...register("country_Name", { required: true })} />
        //                                 {errors.country_Name && <span className="text-red-500">This field is required</span>}

        //                             </div>
        //                             <div className="relative mt-8 flex items-center ">
        //                                 <input type="text" placeholder="location" name="location"
        //                                     className="pl-8 border-b-2 font-play-fare focus:outline-none focus:border-[#00BFA6] transition-all duration-500 capitalize text-lg"
        //                                     {...register("location")} />
        //                             </div>
        //                         </div>
        //                         <div className="space-y-4">
        //                             <div className="relative flex items-center">
        //                                 <input type="text" placeholder="average_cost " name="average_cost "
        //                                     className="pl-8 border-b-2 font-play-fare focus:outline-none focus:border-[#00BFA6] transition-all duration-500 capitalize text-lg"
        //                                     {...register("average_cost ", { required: true })} />
        //                                 {errors.average_cost && <span className="text-red-500">This field is required</span>}
        //                             </div>
        //                             <div className="relative flex items-center">
        //                                 <input type="text" placeholder="seasonality" name="seasonality "
        //                                     className="pl-8 border-b-2 font-play-fare focus:outline-none focus:border-[#00BFA6] transition-all duration-500 capitalize text-lg"
        //                                     {...register("seasonality ", { required: true })} />
        //                                 {errors.seasonality && <span className="text-red-500">This field is required</span>}
        //                             </div>
        //                             <div className="relative flex items-center">
        //                                 <input type="text" placeholder="average_cost " name="average_cost "
        //                                     className="pl-8 border-b-2 font-play-fare focus:outline-none focus:border-[#00BFA6] transition-all duration-500 capitalize text-lg"
        //                                     {...register("average_cost ", { required: true })} />
        //                                 {errors.average_cost && <span className="text-red-500">This field is required</span>}
        //                             </div>
        //                             <div className="relative flex items-center">
        //                                 <input type="text" placeholder="travel_time " name="travel_time  "
        //                                     className="pl-8 border-b-2 font-play-fare focus:outline-none focus:border-[#00BFA6] transition-all duration-500 capitalize text-lg"
        //                                     {...register("travel_time  ", { required: true })} />
        //                                 {errors.travel_time && <span className="text-red-500">This field is required</span>}
        //                             </div>
        //                             <div className="relative flex items-center">
        //                                 <input type="text" placeholder=" totalVisitorsPerYear  " name=" totalVisitorsPerYear   "
        //                                     className="pl-8 border-b-2 font-play-fare focus:outline-none focus:border-[#00BFA6] transition-all duration-500 capitalize text-lg"
        //                                     {...register(" totalVisitorsPerYear   ", { required: true })} />
        //                                 {errors.totalVisitorsPerYear && <span className="text-red-500">This field is required</span>}
        //                             </div>

        //                         </div>


        //                     </div>


        //                     <textarea
        //                         className="border rounded-md p-2 focus:outline-none focus:border-blue-500 mt-5 mb-9"
        //                         name=""
        //                         id=""
        //                         cols="30"
        //                         rows="10"
        //                         placeholder="Enter your text here..."
        //                     ></textarea>



        //                     <button type="submit" className="py-3 px-20 bg-[#f9a826] rounded-full text-white font-bold uppercase text-lg mt-4 transform hover:translate-y-1 transition-all duration-500">Add</button>
        //                 </form>

        //             </div>

        //         </motion.div>
        //     }

        //     <ToastContainer />
        // </div>
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
                        <h1 className="text-2xl md:text-3xl font-bold text-[#00BFA6]">🐱‍👤Add Your Spot!🐱‍👤</h1>
                    </Marquee>
                    <div className=" p-24" style={{ backgroundImage: `url(${wave2})` }}>
                        <h2 className="text-3xl font-extrabold text-white">Add Tourist Spots</h2>
                        <form className="md:w-full">
                            {/* form name and quantity row */}
                            <div className="grid md:grid-cols-2 gap-4 mb-8">
                                <div className="form-control">
                                    <label className="label text-white">
                                        <span className="label-text text-white text-xl">image</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="image" placeholder="image" className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label text-white">
                                        <span className="label-text text-white text-xl">tourists_spot_name</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="tourists_spot_name" placeholder="tourists_spot_name" className="input input-bordered w-full" />
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
                                        <input type="text" name="country_Name" placeholder="country_Name" className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label text-white">
                                        <span className="label-text text-white text-xl">location</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="location" placeholder="location" className="input input-bordered w-full" />
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
                                        <input type="text" name="average_cost" placeholder="average_cost" className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label text-white">
                                        <span className="label-text text-white text-xl"> seasonality</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name=" seasonality" placeholder=" seasonality" className="input input-bordered w-full" />
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
                                        <input type="text" name="travel_time" placeholder="travel_time" className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label text-white">
                                        <span className="label-text text-white text-xl"> totalVisitorsPerYear</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name=" totalVisitorsPerYear" placeholder=" totalVisitorsPerYear" className="input input-bordered w-full" />
                                    </label>
                                </div>
                            </div>


                            {/* form Photo url row */}
                            <textarea
                                className="border rounded-md p-2 focus:outline-none focus:border-blue-500 w-full"
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                                placeholder="Enter your text here..."
                            ></textarea>
                            <input type="submit" value="Add Coffee" className="btn btn-block " />
                        </form>


                    </div>
                </motion.div>
            )}

            <ToastContainer />
        </div>



    );
};

export default AddTouristSpot;
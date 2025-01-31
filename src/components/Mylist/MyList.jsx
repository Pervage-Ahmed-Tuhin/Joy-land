import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";
import Swal from "sweetalert2";
import wave2 from '../../assets/img/Snow.svg';
import { motion } from "framer-motion";

import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";


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


    const [userData, setData] = useState(null);

    useEffect(() => {
        if (user) {
            fetch(`https://tourism-management-server-one.vercel.app/tourists/email/${user.email}`)
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


    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(` https://tourism-management-server-one.vercel.app/tourists/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Tourist Spot has been deleted.',
                                'success'
                            )

                            setData(prevData => prevData.filter(item => item._id !== _id));
                        }
                    })

            }
        })
    }

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
                                {userData.map((item, index) => (
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
                                            <Link to={`/updateDataBase/${item._id}`}>

                                                <button className="btn  text-black btn-sm w-full outline-none bg-white">Update</button>
                                            </Link>


                                            <button

                                                onClick={() => handleDelete(item._id)}

                                                className="btn text-black btn-sm w-full outline-none bg-white">Delete</button>
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
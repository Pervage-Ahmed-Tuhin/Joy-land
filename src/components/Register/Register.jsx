
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import wave2 from '../../assets/img/Abstract Paper (2).svg';
import unlock2 from '../../assets/img/undraw_unlock_re_a558.svg';
import Marquee from "react-fast-marquee";
import avatar1 from '../../assets/img/avatar.svg';
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoIosEye } from "react-icons/io";
import { FaRegEyeSlash } from "react-icons/fa6";
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

const Register = () => {
    const [loading, setLoading] = useState(true);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, setInfoHolder, UpdateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        const delay = setTimeout(() => {
            setLoading(false);
        }, 1000)
        return () => clearTimeout(delay);
    }, [])


    const onSubmit = (data) => {
        setLoading(true);
        const { email, password, name, photoURL } = data;
        console.log(email, password, name, photoURL);
        const passwordCapital = /^(?=.*[A-Z]).+$/;
        const passwordSmall = /^(?=.*[a-z]).+$/;

        if (password.length < 6) {
            toast("The password Must be 6 characters or more");
            setLoading(false);
            return;
        }

        if (!passwordCapital.test(password)) {
            toast("You Need At least one Capital letter");
            setLoading(false);
            return;
        }
        if (!passwordSmall.test(password)) {
            toast("You Need At least one Small letter");
            setLoading(false);
            return;
        }
        console.log(data);


        createUser(email, password)
            .then(res => {
                setInfoHolder(data);
                console.log(res.user);
                toast(`Welcome! To Joy Land`, { autoClose: 4000 });
                setTimeout(() => {
                    UpdateUserProfile(name, photoURL)
                        .then(() => {
                            setLoading(false);
                            navigate('/')
                        })

                })
            })
            .catch(error => {
                console.log(error);
            })

    }
    const [Type, setType] = useState(false);
    useEffect(() => {
        document.title = "Joy Land|Register";
    }, [])

    return (
        <div>
            {loading && <Loader></Loader>}
            {!loading &&

                <motion.div
                    className='max-w-6xl'
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                >
                    <Marquee className="marquee w-full overflow-hidden" speed={200}>
                        <h1 className="text-2xl md:text-3xl font-bold text-[#00BFA6]">Register now!🐱‍👤</h1>
                    </Marquee>
                    <img src={wave2} className="fixed hidden lg:block h-full" style={{ zIndex: -1 }} />
                    <div className="w-screen h-screen flex flex-col justify-center items-center lg:grid lg:grid-cols-2">
                        <img src={unlock2} className="hidden lg:block w-[30%] hover:scale-150 transition-all duration-500 transform mx-auto" />
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center w-1/2">
                            <img src={avatar1} className="w-32" />
                            <h2 className="my-8 font-play-fare font-bold text-3xl text-gray-800 text-center">
                                Join the family of <br /> <span className='text-[#f9a826]'>Joy Land</span>
                            </h2>
                            <div className="relative flex items-center">
                                <input type="text" placeholder="Name" name="name"
                                    className="pl-8 border-b-2 font-play-fare focus:outline-none focus:border-[#00BFA6] transition-all duration-500 capitalize text-lg"
                                    {...register("name", { required: true })} />
                                {errors.name && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="relative mt-8 flex items-center ">
                                <input type="email" placeholder="Email" name="email"
                                    className="pl-8 border-b-2 font-play-fare focus:outline-none focus:border-[#00BFA6] transition-all duration-500 capitalize text-lg"
                                    {...register("email", { required: true })} />
                                {errors.email && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="relative mt-8 flex items-center ">
                                <input type={Type ? "text" : "password"} placeholder="Password" name="password"
                                    className="pl-8 border-b-2 font-play-fare focus:outline-none focus:border-[#00BFA6] transition-all duration-500 capitalize text-lg"
                                    {...register("password", { required: true })} />
                                {errors.password && <span className="text-red-500">This field is required</span>}
                                <span onClick={() => setType(!Type)}>

                                    {
                                        Type ? <IoIosEye className="text-2xl relative left-[88%] md:left-[92%] bottom-1" /> : <FaRegEyeSlash className="text-2xl relative left-[88%] md:left-[92%] bottom-1" />
                                    }

                                </span>
                            </div>
                            <div className="relative mt-8 flex items-center ">
                                <input type="text" placeholder="Photo URL" name="photoURL"
                                    className="pl-8 border-b-2 font-play-fare focus:outline-none focus:border-[#00BFA6] transition-all duration-500 capitalize text-lg"
                                    {...register("photoURL")} />
                            </div>
                            <a href="#" className="mt-4 text-gray-800 font-bold">Have an account? <Link to='/login'>Log In</Link></a>
                            <button type="submit" className="py-3 px-20 bg-[#f9a826] rounded-full text-white font-bold uppercase text-lg mt-4 transform hover:translate-y-1 transition-all duration-500">Register</button>
                        </form>
                        <ToastContainer></ToastContainer>
                    </div>

                </motion.div>
            }


        </div>

    );
};

export default Register;
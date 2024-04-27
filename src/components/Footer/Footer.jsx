import './footer.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from 'react-router-dom';
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

const Footer = () => {
    return (
        <motion.footer className="footer-distributed"

            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}


        >

            <div className="footer-left">
                <h3>Joy<span>Land</span></h3>

                <p className="footer-links">
                    <Link to="/">Home</Link>
                    |
                    <Link to="/login" >Login</Link>
                    |
                    <Link to="/register" >Register</Link>
                    |
                    <Link to="/updateProfile" >Update User</Link>
                </p>

                <p className="footer-company-name">Copyright © 2021 <strong>JoyLand</strong> All rights reserved</p>
            </div>

            <div className="footer-center">
                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>Dhaka</span>
                        Bangladesh</p>
                </div>

                <div>
                    <i className="fa fa-phone"></i>
                    <p>+880-1641281589</p>
                </div>
                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="mailto:clashroyaltuhin13@gmail.com">clashroyaltuhin13@gmail.com</a></p>
                </div>
            </div>
            <div className="footer-right">
                <p className="footer-company-about">
                    <span>About the company</span>
                    <strong>Joy Land</strong> is a multi national Tourism management company admired for our top of the line support and property list the Customers love!!

                </p>
                <div className="footer-icons">
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaSquareXTwitter /></a>
                    <a href="#"><FaLinkedinIn /></a>
                </div>
            </div>
        </motion.footer>

    );
};

export default Footer;
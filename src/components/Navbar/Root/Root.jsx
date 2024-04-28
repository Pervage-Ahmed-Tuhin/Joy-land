import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../../Footer/Footer";


const Root = () => {
    return (
        <div className="p-1">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
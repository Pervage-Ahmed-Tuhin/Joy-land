import { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../Authprovider/AuthProvider";


const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loader } = useContext(AuthContext);
    if (loader) {
        return <div className="flex justify-center items-center">
            <span className="mt-[50%] md:mt-[40%] loading loading-spinner loading-lg text-2xl"></span>
        </div>

    }
    // if (loader) {
    //     return <span className="mt-[50%] md:mt-[40%] loading loading-spinner loading-lg text-2xl"></span>
    // }
    if (!user) {

        return <Navigate state={location?.pathname || '/'} to="/login"></Navigate>

    }
    return children;
};

export default PrivateRoute;
import { Link } from "react-router-dom";


const TouristSpot = ({ data }) => {
    const { image, touristsSpotName, countryName, location, averageCost, seasonality, travelTime, totalVisitorsPerYear, textarea, _id } = data;
    return (
        <div
            className="card card-compact shadow-xl flex flex-col h-full p-4" >
            <div className="flex-grow flex flex-col justify-between">
                <figure className="p-4 rounded-lg"><img className="w-full" src={image} alt={touristsSpotName} /></figure>
                <div className="card-body flex flex-col justify-between p-4">
                    <div>
                        <h2 className="card-title font-work text-lg font-normal text-[#131313B3]">Tourist Spot Name: {touristsSpotName}</h2>
                        <p className="font-work text-lg font-normal text-[#131313B3]">Country : {countryName}</p>
                        <p className="font-work text-lg font-normal text-[#131313B3]"><span className="text-[#00BFA6]">location : {location}</span> <br /> <span>Average Cost : {averageCost}$</span></p>

                    </div>
                    <Link to={`/spotSectionDetails/${_id}`}>
                        <button className="btn bg-[#00BFA6] w-full text-white font-poppins font-medium mt-4">View details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TouristSpot;
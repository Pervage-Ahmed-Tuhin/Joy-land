import { Link } from "react-router-dom";


const TouristSpot = ({ data }) => {
    const { image, touristsSpotName, countryName, location, averageCost, _id, totalVisitorsPerYear, seasonality, travelTime } = data;
    return (
        <div
            className="card card-compact shadow-xl flex flex-col h-full p-4" >
            <div className="flex-grow flex flex-col justify-between">
                <figure className="p-4 rounded-lg"><img className="w-full" src={image} alt={touristsSpotName} /></figure>
                <div className="card-body flex flex-col justify-between p-4">
                    <div className="space-y-4">
                        <h2 className="card-title text-lg font-play-fare text-gray-500">Tourist Spot Name: {touristsSpotName}</h2>
                        <p className="text-lg font-play-fare text-gray-500">Country : {countryName}</p>
                        <p className="text-lg font-play-fare text-gray-500"><span className="text-[#00BFA6]">location : {location}</span></p>
                        <p className="text-lg font-play-fare text-gray-500"><span>Total Visitor Per Year : {totalVisitorsPerYear} </span></p>
                        <p className="text-lg font-play-fare text-gray-500"><span>Seasonality: {seasonality} </span></p>
                        <p className="text-lg font-play-fare text-gray-500"><span>Travel Time: {travelTime} Days</span></p>
                        <p className="text-lg font-play-fare text-gray-500"><span>Average Cost: {averageCost} $</span></p>

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
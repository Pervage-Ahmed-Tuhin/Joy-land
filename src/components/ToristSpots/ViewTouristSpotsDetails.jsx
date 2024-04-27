import { useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import wave2 from '../../assets/img/Moon.svg';
const ViewTouristSpotsDetails = () => {
    const data = useLoaderData();
    console.log(data);
    const { image, touristsSpotName, countryName, location, averageCost, seasonality, travelTime, totalVisitorsPerYear, textarea } = data;
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${wave2})` }}>
            <div className="hero-content flex-col lg:flex-row gap-8">
                <img src={image} className="max-w-xs lg:max-w-xl rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-2xl lg:text-5xl font-bold">Spot Name :

                        <Typewriter
                            loop
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={2000}
                            words={[touristsSpotName]}
                        />



                    </h1>
                    <div className="divider"></div>
                    <div className="space-y-6">
                        <h1 className="font-play-fare text-2xl font-bold ">Description: <br /></h1>
                        <p className="py-6 font-play-fare text-gray-500 text-xl ">{textarea}</p>

                        <h1 className="font-play-fare"><span className="text-xl lg:text-2xl font-bold">Country Name:</span> <span className="text-gray-500 text-xl lg:text-2xl ">{countryName}</span></h1>

                        <h1 className="font-play-fare"><span className="text-xl lg:text-2xl  font-bold">Location:</span> <span className="text-gray-500 text-xl lg:text-2xl ">{location}</span></h1>

                        <h1 className="font-play-fare"><span className="text-xl lg:text-2xl  font-bold">Average Coast:</span> <span className="text-gray-500 text-xl lg:text-2xl ">{averageCost}$</span></h1>

                        <h1 className="font-play-fare"><span className="text-xl lg:text-2xl  font-bold">Seasonality:</span> <span className="text-gray-500 text-xl lg:text-2xl ">{seasonality}✨</span></h1>

                        <h1 className="font-play-fare"><span className="text-xl lg:text-2xl  font-bold">Traveling Time:</span> <span className="text-gray-500 text-xl lg:text-2xl ">{travelTime} days ✈</span></h1>

                        <h1 className="font-play-fare"><span className="text-xl lg:text-2xl  font-bold">Total Visitors Per Year:</span> <span className="text-gray-500 text-xl lg:text-2xl ">{totalVisitorsPerYear}    👨🏿‍🤝‍👨🏿👨🏿‍🤝‍👨🏿</span></h1>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ViewTouristSpotsDetails;
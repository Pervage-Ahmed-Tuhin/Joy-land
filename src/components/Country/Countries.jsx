import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import SingleCountry from "./SingleCountry";
import { Link, useNavigate } from "react-router-dom";

const Countries = () => {

    const navigate = useNavigate();
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/countries')
            .then(res => res.json())
            .then(data => {

                setCountries(data);

            })
    }, [])



    const handleSendingCountryName = countryName => {
        console.log(countryName);
        navigate(`/soloCountry/${countryName}`);
    }

    console.log(countries);
    return (
        <div className="max-w-6xl mx-auto mt-7 mb-5">
            <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">


                <Typewriter
                    loop
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                    words={['Countries🍁']}
                />




            </h1>

            <p className="text-xl font-play-fare text-gray-400 text-center mt-4 mb-5">
                Embark on a journey of exploration and discovery with our Countries section, <br /> where we showcase the captivating allure of diverse destinations across the globe. <br /> From the lush landscapes of Bangladesh to the vibrant street life of Thailand, br  each country offers a unique tapestry of experiences waiting to be uncovered.</p>



            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    countries.map(country => <SingleCountry key={country._id} data={country}

                        handleSendingCountryName={handleSendingCountryName}

                    ></SingleCountry>)
                }
            </div>

        </div>
    );
};

export default Countries;
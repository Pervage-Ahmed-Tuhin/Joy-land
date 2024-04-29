
const SingleCountry = ({ data, handleSendingCountryName }) => {
    const { image, countryName, description } = data;
    return (
        <div

            onClick={() => handleSendingCountryName(countryName)}
            className="relative w-full h-96 overflow-hidden rounded-lg">
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-300 hover:opacity-100"
                style={{ backgroundImage: `url(${image})` }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                <div className="text-center text-white">
                    <h2 className="text-2xl font-bold">{countryName}</h2>
                    <p className="text-lg">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleCountry;
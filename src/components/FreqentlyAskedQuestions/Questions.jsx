import Faq from 'react-faq-component';

import { Typewriter } from 'react-simple-typewriter';



const data = {
    title: "Hope You can Find Your Answer here!",
    rows: [
        {
            title: "How do I create a new tourist spot on Joy Land?",
            content: "To create a new tourist spot on Joy Land, navigate to the 'Add Spot' section and fill out the required information such as image, spot name, country, location, average cost, seasonality, travel time, and total visitors per year. Then submit the form to add the spot."
        },
        {
            title: "Can I update an existing tourist spot?",
            content: "Yes, you can update an existing tourist spot on Joy Land. Navigate to the 'Update Spot' section, select the spot you want to update, make the necessary changes, and submit the form to update the spot."
        },
        {
            title: "How do I delete a tourist spot?",
            content: "To delete a tourist spot on Joy Land, go to the 'My List' section, select the spot you want to delete, and click on the 'Delete' button. Confirm the deletion when prompted, and the spot will be removed from your list."
        },
        {
            title: "What is the package version of Joy Land?",
            content: "The current version of Joy Land is v1.0.5."
        }]
}

const Questions = () => {
    return (
        <div className='max-w-6xl mx-auto mt-11 clear-start font-paly-fare'>

            <h1 className="text-3xl font-play-fare font-bold text-center mt-9">


                <Typewriter
                    loop
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                    words={['Frequently Asked Questions ⁉']}
                />

            </h1>
            <div className="divider"></div>
            <p className="text-xl font-play-fare text-gray-400 text-center mt-4 mb-5"> These are the most commonly Asked question </p>

            <div>
                <Faq data={data}
                    styles={{
                        bgColor: "white",
                        titleTextColor: "#48482a",
                        rowTitleColor: "#78789a",
                        rowTitleTextSize: 'large',
                        rowContentColor: "#48484a",
                        rowContentTextSize: '16px',
                        rowContentPaddingTop: '10px',
                        rowContentPaddingBottom: '10px',
                        rowContentPaddingLeft: '50px',
                        rowContentPaddingRight: '150px',
                        arrowColor: "black",
                    
                        
                    }} />
            </div>
        </div>
    );
};

export default Questions;
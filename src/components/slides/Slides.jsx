import { Typewriter } from 'react-simple-typewriter';
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

import Lottie from 'lottie-react';
import gif from '../../../public/Animation - 1714191419283.json'
import gif2 from '../../../public/second.json';
import gif3 from '../../../public/gif3.json';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);

    const [swiper, setSwiper] = useState(null);

    const onAutoplayTimeLeft = (s, time, progress) => {
        if (progressCircle.current && progressContent.current) {
            progressCircle.current.style.setProperty('--progress', 1 - progress);
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };

    return (
        <div className='max-w-7xl mx-auto rounded-lg'>

            <Swiper
                onSwiper={setSwiper}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="slide slider-1 flex flex-col  items-center relative bottom-14">
                        <h2 className="text-3xl lg:text-6xl font-semibold mb-2 text-[#00BFA6]">


                            <Typewriter
                                loop
                                cursor
                                cursorStyle='_'
                                typeSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={3000}
                                words={['Welcome to Bangladesh ']}

                            />

                        </h2>

                        <p className='text-base lg:text-xl text-center text-white w-[80%] lg:w-[60%]'>Bangladesh, nestled in South Asia, is a land of vibrant culture, rich history, and breathtaking landscapes. Known as the land of rivers, it boasts a network of waterways that crisscross the country, offering both livelihoods and stunning natural beauty. From the lush greenery of the Sundarbans, the largest mangrove forest in the world and a UNESCO World Heritage Site, to the bustling streets of its capital, Dhaka, Bangladesh is a tapestry of contrasts. </p>



                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slider-2 flex flex-col  items-center relative bottom-14">
                        <h2 className="text-3xl lg:text-6xl font-semibold mb-2 text-[#00BFA6]">


                            <Typewriter
                                loop
                                cursor
                                cursorStyle='_'
                                typeSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={3000}
                                words={['Welcome to Cambodia ']}

                            />

                        </h2>
                        <p className="text-base lg:text-xl text-center text-white w-[80%] lg:w-[60%]">
                            Cambodia, a gem in Southeast Asia, mesmerizes visitors with its rich tapestry of history, culture, and natural beauty. Home to the awe-inspiring Angkor Wat, the largest religious monument in the world and a UNESCO World Heritage Site, Cambodia's ancient temples stand as testaments to its glorious past as the seat of the Khmer Empire.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slider-3 flex flex-col  items-center relative bottom-14">
                        <h2 className="text-3xl lg:text-6xl font-semibold mb-2 text-[#00BFA6]">


                            <Typewriter
                                loop
                                cursor
                                cursorStyle='_'
                                typeSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={3000}
                                words={['Welcome to Indonesia ']}

                            />

                        </h2>
                        <p className="text-base lg:text-xl text-center text-white w-[80%] lg:w-[60%]">
                            Indonesia, the largest archipelago in the world, is a captivating blend of stunning natural beauty, diverse cultures, and rich history. With over 17,000 islands spread across the equator, Indonesia offers an unparalleled array of landscapes, from pristine beaches and tropical rainforests to towering volcanoes and terraced rice fields.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slider-4 flex flex-col  items-center relative bottom-14">
                        <h2 className="text-3xl lg:text-6xl font-semibold mb-2 text-[#00BFA6]">


                            <Typewriter
                                loop
                                cursor
                                cursorStyle='_'
                                typeSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={3000}
                                words={['Welcome to Malaysia ']}

                            />

                        </h2>
                        <p className="text-base lg:text-xl text-center text-white w-[80%] lg:w-[60%]">

                            Malaysia, a vibrant melting pot of cultures and landscapes, offers a tapestry of experiences for visitors to explore. From the modern skyscrapers of Kuala Lumpur to the idyllic beaches of Langkawi and the lush rainforests of Borneo, Malaysia boasts a diverse array of attractions.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slider-5 flex flex-col  items-center relative bottom-14">
                        <h2 className="text-3xl lg:text-6xl font-semibold mb-2 text-[#00BFA6]">


                            <Typewriter
                                loop
                                cursor
                                cursorStyle='_'
                                typeSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={3000}
                                words={['Welcome to Thailand ']}

                            />

                        </h2>
                        <p className="text-base lg:text-xl text-center text-white w-[80%] lg:w-[60%]">

                            Thailand, often referred to as the "Land of Smiles," beckons travelers with its vibrant culture, stunning landscapes, and warm hospitality. From the bustling streets of Bangkok, where modernity meets tradition amidst towering skyscrapers and ornate temples, to the tranquil shores of its tropical islands, Thailand offers a wealth of experiences for every visitor.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slider-6 flex flex-col  items-center relative bottom-14">
                        <h2 className="text-3xl lg:text-6xl font-semibold mb-2 text-[#00BFA6]">


                            <Typewriter
                                loop
                                cursor
                                cursorStyle='_'
                                typeSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={3000}
                                words={['Welcome to Vietnam ']}

                            />

                        </h2>
                        <p className="text-base lg:text-xl text-center text-white w-[80%] lg:w-[60%]">
                            Vietnam, a land of breathtaking landscapes, rich history, and vibrant culture, invites travelers to embark on a journey of discovery. From the bustling streets of Hanoi, with its ancient temples and colonial architecture, to the picturesque rice terraces of Sapa and the tranquil waters of Ha Long Bay, Vietnam offers a diverse array of experiences.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="autoplay-progress" slot="container-end">
                <span ref={progressContent}></span>
            </div>

            <div className='w-[90%] md:w-[85%] mx-auto flex justify-between items-center gap-3 md:gap-14'>

                <Lottie animationData={gif2}></Lottie>
                <Lottie animationData={gif}></Lottie>
                <Lottie animationData={gif3}></Lottie>
            </div>

        </div>
    );
}
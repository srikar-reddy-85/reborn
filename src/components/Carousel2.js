import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Carousel2.css';
// import bg from '../assets/1.jpg'

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';

export default function Carousel2() {
    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    style={{
                        'background-image':
                            'url(https://wallpapers.com/images/hd/texture-creased-black-paper-k5ydlknbccms2t4t.jpg)',
                    }}
                    data-swiper-parallax="-23.7%"
                ></div>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        Cognitive-Behavioral Therapy (CBT)
                    </div>
                    {/* <div className="subtitle" data-swiper-parallax="-200">
                        Rewiring Thought Patterns for Mental Wellness
                    </div> */}
                    <div className="text1" data-swiper-parallax="-100">
                        <p>
                            Cognitive-Behavioral Therapy (CBT) is a transformative treatment approach in psychology that centers around restructuring thought patterns for enhanced mental well-being. CBT techniques challenge and reshape negative beliefs and behaviors, fostering a healthier mindset. Clients learn to identify and alter destructive thought processes, ultimately promoting emotional resilience. Through this evidence-based practice, individuals gain essential skills to confront and conquer emotional challenges, ensuring a more positive and fulfilling life.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        Mindfulness-Based Stress Reduction (MBSR)
                    </div>
                    {/* <div className="subtitle" data-swiper-parallax="-200">
                        Cultivating Inner Peace and Resilience
                    </div> */}
                    <div className="text1" data-swiper-parallax="-100">
                        <p>
                            Mindfulness-Based Stress Reduction (MBSR) is a holistic therapeutic practice focusing on cultivating mindfulness for improved mental health. By attentively observing thoughts and emotions without judgment, individuals harness inner peace and resilience. MBSR equips participants with valuable tools to manage stress, enhance self-awareness, and reduce symptoms of anxiety and depression. This therapeutic approach encourages individuals to embrace the present moment, leading to a more balanced and tranquil state of mind.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        Psychodynamic Therapy
                    </div>
                    {/* <div className="subtitle" data-swiper-parallax="-200">
                        Unraveling the Depths of the Unconscious
                    </div> */}

                    <div className="text1" data-swiper-parallax="-100">
                        <p>
                            Psychodynamic Therapy delves into the intricate workings of the unconscious mind, unveiling the hidden forces that shape behavior and emotions. Through exploration and interpretation, individuals gain insight into past experiences and unresolved conflicts, empowering personal growth. This treatment method promotes self-discovery, helping clients develop a more profound understanding of their inner world and fostering lasting emotional healing and transformation.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

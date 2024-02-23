// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';

// import './Carousel.css';
// import Card from './Card';

// // import required modules
// import { EffectCoverflow, Pagination } from 'swiper/modules';

// export default function Carousel() {
//     return (
//         <>


//             <Swiper
//                 effect={'coverflow'}
//                 grabCursor={true}
//                 centeredSlides={true}
//                 slidesPerView={'auto'}
//                 coverflowEffect={{
//                     rotate: 50,
//                     stretch: 0,
//                     depth: 100,
//                     modifier: 1,
//                     slideShadows: true,
//                 }}
//                 pagination={true}
//                 modules={[EffectCoverflow, Pagination]}
//                 className="mySwiper"
//             >
//                 <h2>SOME STORIES:</h2>

//                 <SwiperSlide>
//                     {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
//                     <Card imageUrl="https://swiperjs.com/demos/images/nature-1.jpg" title="hello" description="cjdnkjnsdjfcn" />

//                 </SwiperSlide>
//                 <SwiperSlide>
//                     {/* <img src="https://swiperjs.com/demos/images/nature-2.jpg" /> */}
//                     <Card imageUrl="https://swiperjs.com/demos/images/nature-2.jpg" title="hello" description="cjdnkjnsdjfcn" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     {/* <img src="https://swiperjs.com/demos/images/nature-3.jpg" /> */}
//                     <Card imageUrl="https://swiperjs.com/demos/images/nature-3.jpg" title="hello" description="cjdnkjnsdjfcn" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     {/* <img src="https://swiperjs.com/demos/images/nature-4.jpg" /> */}
//                     <Card imageUrl="https://swiperjs.com/demos/images/nature-4.jpg" title="hello" description="cjdnkjnsdjfcn" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     {/* <img src="https://swiperjs.com/demos/images/nature-5.jpg" /> */}
//                     <Card imageUrl="https://swiperjs.com/demos/images/nature-5.jpg" title="hello" description="cjdnkjnsdjfcn" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     {/* <img src="https://swiperjs.com/demos/images/nature-6.jpg" /> */}
//                     <Card imageUrl="https://swiperjs.com/demos/images/nature-6.jpg" title="hello" description="cjdnkjnsdjfcn" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     {/* <img src="https://swiperjs.com/demos/images/nature-7.jpg" /> */}
//                     <Card imageUrl="https://swiperjs.com/demos/images/nature-7.jpg" title="hello" description="cjdnkjnsdjfcn" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     {/* <img src="https://swiperjs.com/demos/images/nature-8.jpg" /> */}
//                     <Card imageUrl="https://swiperjs.com/demos/images/nature-8.jpg" title="hello" description="cjdnkjnsdjfcn" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     {/* <img src="https://swiperjs.com/demos/images/nature-9.jpg" /> */}
//                     <Card imageUrl="https://swiperjs.com/demos/images/nature-9.jpg" title="hello" description="cjdnkjnsdjfcn" />
//                 </SwiperSlide>
//             </Swiper>
//         </>
//     );
// }


import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Carousel.css';
import Card from './Card';
import StoryDialog from './StoryDialog';

// Import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

const stories = [
    {
        imageUrl: 'https://media.npr.org/assets/img/2020/02/27/wide-use_hpromophoto_helenepambrun-72fdb64792139d94a06f18686d0bb3131a238a70-s1100-c50.jpg',
        title: 'Harry Styles',
        description: 'English singer',
        story: 'In a recent interview with Better Home & Gardens, Harry Styles revealed that therapy made him feel “more alive.”The “As It Was” singer said, “I wanted to be the one who could say I didn’t need it.I think that accepting living, being happy, hurting in the extremes, that is the most alive you can be.Losing it crying, losing it laughing—there’s no way, I don’t think, to feel more alive than that.”'
    },
    {
        imageUrl: 'https://ocdn.eu/images/pulscms/NGE7MDA_/43e7d711295a89ad39b7ef9da46b33d3.jpeg',
        title: 'Kristen Bell',
        description: 'American actress',
        story: 'Frequently candid about her experiences with both individual and couples’ counseling, Bell told Good Housekeeping in 2015: “You do better in the gym with a trainer; you don’t figure out how to cook without reading a recipe. Therapy is not something to be embarrassed about.”Further on in her interview, she also opened up about her experiences with antidepressants as a part of her therapy experience, saying, “I have no shame in[taking antidepressants] because my mum had said if you start to feel this way, talk to your doctor, talk to a psychologist and see how you want to help yourself.And if you decide to go on a prescription to help yourself, understand that the world wants to shame you for that, but in the medical community, you would never deny a diabetic his insulin.”'
    },
    {
        imageUrl: 'https://media.glamour.com/photos/5f4bc18e52b681f98c02adf6/master/w_2560%2Cc_limit/GettyImages-996288038.jpg',
        title: 'Prince Harry',
        description: 'British military officer',
        story: 'In addition to being an advocate for expanding mental health awareness and giving support to those who need treatment, Prince Harry has gotten candid about his own therapy for undisclosed mental health concerns in the past.“I’ve done[therapy] a couple of times, more than a couple of times, but it’s great,” he told The Telegraph in 2017. “The experience that I have is that once you start talking about it, you suddenly realize that actually you’re part of quite a big club, and everybody’s gagging to talk about it.”'
    },
    {
        imageUrl: 'https://media.post.rvohealth.io/wp-content/uploads/2022/11/michelle-obama-732x549-thumbnail-732x549.jpg',
        title: 'Michelle Obama',
        description: 'Former First Lady of the United States',
        story: 'In an  the former first lady opened up about going to couple’s counseling with her former-POTUS spouse and going to solo therapy while promoting her book best-selling Becoming “I was one of those wives who thought, ‘I’m taking you to marriage counseling so you can be fixed, Barack Obama.’ Because I was like, ‘I’m perfect.’ I was like, ‘Dr. X, please fix him,” she said with a smile. “And then, our counselor looked over at me.I was like, ‘What are you looking at? I’m perfect…But marriage counseling was a turning point for me, understanding that it wasn’t up to my husband to make me happy, that I had to learn how to fill myself up and how to put myself higher on my priority list.” '
    },
    {
        imageUrl: 'https://variety.com/wp-content/uploads/2023/05/brad-pitt.jpg',
        title: 'Brad Pitt',
        description: 'American actor and film producer',
        story: 'In a candid interview with GQ, Pitt opened up about how therapy has factored into his divorce from Angelina Jolie, saying “You know, I just started therapy. I love it, I love it. I went through two therapists to get to the right one,” with a source close to Pitt confirming in January 2018 that he was going to therapy once a week. '
    },
    {
        imageUrl: 'https://images.firstpost.com/wp-content/uploads/2017/11/ileana-dcruz.jpg?impolicy=website&width=1200&height=900',
        title: "Ileana D'Cruz",
        description: 'Indian-Portuguese actress',
        story: 'In an interview, the actress discussed her battle with Body Dysmorphic Disorder, anxiety, and depression, as well as how continual care and love from family and friends had helped her through those difficult times. She used to sit in the corner and cry for hours, she had once claimed. In previous interviews with the media, she spoke openly about her past and how she firmly believes that people should have themselves checked if they are not feeling alright and not be afraid to do so.Ileana has discussed mental health concerns on several occasions.In one of her previous interviews with a news outlet, she discussed the stigmas associated with mental health.According to reports, the actress went to see a therapist because she needed to.She says that is not forbidden to seek assistance.It is not improper to cry, to sob, or to simply lose it every now and again.Its all fine. Its natural, its human. Ileana went on to say that we need to mainstream talking about a variety of topics, not only mental health. She believes that if we opened up and simply listened to others, we would be far more sensitive and healthy.'
    },
    {
        imageUrl: 'https://static.toiimg.com/thumb/msid-52687632,width-1280,resizemode-4/52687632.jpg',
        title: 'Honey Singh',
        description: 'Indian rapper',
        story: 'Rapper Yo Yo Honey Singh said that he had suffered from bipolar disorder and struggled with alcoholism as well. It was a particularly awful phase. Many people were envious of him wondering how such a little guy could accomplish so much. He also told a news outlet that there were additional problems. He admitted to being an alcoholic and being unable to sleep. He, too, was overworked. And the situation gradually got worse. It took him four months to realise there was something wrong with him. He opened up about it after recovering and taking a break from his work for about eighteen months, and explained how it feels, thereby leading to better understanding and less of a stigma.Shama Sikandar, who also had a bipolar attack tells that it was as if she came back from death and felt like rebirth after she had conquered mental health.'
    },
    {
        imageUrl: 'https://static.toiimg.com/photo/msid-96818962/96818962.jpg',
        title: 'Karan Johar',
        description: 'Indian filmmaker',
        story: 'In an interview, popular filmmaker Karan Johar spoke honestly about his battle with depression. He publicly stated that he had a lot of unresolved issues that he needed to address so that others in similar circumstances could go on with their lives. He added that there was a time in his life when he was really depressed and felt he was going to die. He stated that he was experiencing anxiety and had seen a psychologist as a consequence, which led him to realise that he had some internal difficulties to deal with, which had accumulated to the point where it resulted in worry.He stated that his doctor informed him that even if he believes he has thick skin and that it doesnt matter, he is repressing those things inside that occasionally come out. Karan Johar claimed that following that, he began talking to others about it and felt better. Karan explained that he was feeling better since he had begun communicating with his close friends and family.'
    },
    {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSywNmkxRIMWCBFr39iEPTURuLYIbOqo1QiAA&usqp=CAU',
        title: 'Deepika Padukone',
        description: 'Indian actress',
        story: 'In a television interview, the stunning beauty not only revealed that she suffered from depression, but she also went on to build a mental health foundation- Live Love Laugh Foundation to assist others who are going through the same experience. She is one of those actresses who has been quite vocal about mental health and has always encouraged people to talk about it. When she was suffering, she had initially assumed it was stress, so she attempted to divert herself by focusing on work and surrounding herself with others, which worked for a time, but the nagging feeling persisted. Her breathing was shallow, she struggled with focus, and she frequently broke down.She claimed that she no longer wanted to live and that she does not want anybody else to go through what she has gone through.She had previously stated that her condition had taught her many things, including patience and, most importantly, that there is Hope.'
    },
    // Add more stories here
];

export default function Carousel() {
    const [showStoryDialog, setShowStoryDialog] = useState(false);
    const [selectedStory, setSelectedStory] = useState(null);

    const openStoryDialog = (story) => {
        setSelectedStory(story);
        setShowStoryDialog(true);
    };

    const closeStoryDialog = () => {
        setShowStoryDialog(false);
    };

    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                // pagination={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <h2>SOME STORIES:</h2>

                {stories.map((story, index) => (
                    <SwiperSlide key={index} onClick={() => openStoryDialog(story)}>
                        <Card
                            imageUrl={story.imageUrl}
                            title={story.title}
                            description={story.description}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {showStoryDialog && (
                <StoryDialog
                    imageUrl={selectedStory.imageUrl}
                    title={selectedStory.title}
                    description={selectedStory.description}
                    story={selectedStory.story}
                    onClose={closeStoryDialog}
                />
            )}
        </>
    );
}


// Instructor.js
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './InstructorsStyles.css';

const Instructor = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      if (swiper) {
        swiper.slideNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  let swiper;

  return (
    <div className="instructor" id="instructors">
      <h5 className='head'>Instructors</h5>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={false}
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSwiper={(s) => (swiper = s)}
      >
        <SwiperSlide>
          <div className="slide-content">
            <div className="grid-container">
              <div className="image-column">
                <img src="https://dgyugonj9a9mu.cloudfront.net/supreme_1_codehelp_5114b9ebd5.jpg" alt="Slide 1 Image" />
              </div>
              <div className="text-column">
                <h2>Rahul Kumar</h2>
                <h5>CS @Adobe, Instructor @Byte-Learn</h5>
                <p>Rahul Kumar is an ace software engineer working in the role of <strong>Computer Scientist</strong> at <strong>Adobe Systems</strong> and a popular computer science instructor on <strong>ByteLearn</strong> Youtube.He is working in the industry for the past <strong>4.5 years</strong>, working on different real-world problems. He is well-known among students for his amazingly simplified explanations with real-life examples, enabling students to understand complex topics very easily. Many of his ex-students are now working in top product companies like <strong>Microsoft, Amazon, De-Shaw</strong> etc.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <div className="grid-container">
              <div className="image-column">
                <img src="https://dgyugonj9a9mu.cloudfront.net/supreme_1_codehelp_5114b9ebd5.jpg" alt="Slide 2 Image" />
              </div>
              <div className="text-column">
                <h2>Sonali Singh</h2>
                <h5>Founder - ByteLearn, Ex-Amazon, Ex-Microsoft</h5>
                <p>Sonali Singh is a <strong>Software Engineer</strong> and a Youtuber, primarily known for his Coding and Software Engineering skills. He is quite a popular figure among students as well as working professionals on various social media platforms, his YouTube and LinkedIn profiles amassing almost <strong>1M subscribers</strong>. He's also mentored <strong>500k+ students</strong> so far. He has done his B.Tech (IT) from the Netaji Subhash Institute of Technology (NSIT), Delhi, and worked in <strong>Amazon</strong> and <strong>Microsoft</strong>.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Instructor;

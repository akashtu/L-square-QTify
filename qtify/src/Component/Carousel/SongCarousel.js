import React, { useRef } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import Card from "../Card/Card";
import "./Carousel.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SongCard from "../Card/SongCard";
// import SongCard from "../Card/SongCard";

const SongCarousel = ({ data1, swiperId }) => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="carousel-container">
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        slidesPerView={8}
        spaceBetween={30}
        navigation={{
          nextEl: `.arrow-right-${swiperId}`,
          prevEl: `.arrow-left-${swiperId}`,
        }}
        virtual
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {data1.map((value) => (
          <SwiperSlide key={value.id}>
            <SongCard
              title={value.title}
              likes={value.likes}
              image={value.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={`arrow-left arrow arrow-left-${swiperId}`}
        onClick={handlePrev}
      >
        <img src="left.png" alt="left" />
      </div>
      <div
        className={`arrow-right arrow arrow-right-${swiperId}`}
        onClick={handleNext}
      >
        <img src="right.png" alt="right" />
      </div>
    </div>
  );
};

export default SongCarousel;

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import data from "../../utils/slider.json";

const Residencies = () => {
  const [swiper, setSwiper] = useState(null);

  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container ">
        <div className="r-head flexColStart">
          <span className="orangeText">Recommended</span>
          <span className="primaryText">Popular</span>
          <SliderButtons swiper={swiper} />
        </div>
        <Swiper
          onSwiper={(swiper) => setSwiper(swiper)}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
            
          {data.map((card, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="r-card">
                  <img className='rr-card' src={card.image} alt={card.name} />
                  <br />
                  <span className="secondaryText r-price">
                    {card.price}
                    <br />
                  </span>
                  <span className="primaryText">
                    {card.name}
                    <br />
                  </span>
                  <span className="secondaryText">
                    {card.detail}
                    <br />
                  </span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        
      </div>
    </section>
  );
};

export default Residencies;

const SliderButtons = ({ swiper }) => {
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// // import { useSwiper } from "swiper/react";
// import { useSwiper } from 'swiper/react';
// import "swiper/css";
// import "./Residencies.css";
// import data from "../../utils/slider.json";

// const Residencies = () => {
//   return (
//     <section className="r-wrapper">
//       <div className="paddings innerWidth r-container">
//         <div className="r-head flexColStart">
//           <span className="orangeText">Recommended</span>
//           <span className="primaryText">Popular</span>
//         </div>
//         <Swiper

//           breakpoints={{
//             640: {
//               slidesPerView: 1,
//               spaceBetween: 20,
//             },
//             768: {
//               slidesPerView: 2,
//               spaceBetween: 40,
//             },
//             1024: {
//               slidesPerView: 4,
//               spaceBetween: 50,
//             },
//           }}
//         >
//           {data.map((card, index) => {
//             return (
//               <SwiperSlide key={index}>
//                 <div className="r-card">
//                   <img src={card.image} />
//                   <br />
//                   <span className="secondaryText r-price">
//                     {card.price}
//                     <br />
//                   </span>
//                   <span className="primaryText">
//                     {card.name}
//                     <br />
//                   </span>
//                   <span className="secondaryText">
//                     {card.detail}
//                     <br />
//                   </span>
//                 </div>
//               </SwiperSlide>
//             );
//           })}
//         </Swiper>
//         <SliderButtons/>
//       </div>
//     </section>
//   );
// };

// export default Residencies;

// const SliderButtons = () => {
//     const swiper = useSwiper();
//     return (
//       <div className="r-button">
//         <button onClick={() => swiper.slidePrev()}>&lt;</button>
//         <button onClick={() => swiper.slideNext()}>&gt;</button>
//       </div>
//     );
//   };
// swiper doesnot work like the example on top .


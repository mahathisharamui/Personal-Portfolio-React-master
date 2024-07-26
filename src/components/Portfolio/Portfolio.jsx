import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css"; // Import Swiper styles
import mobileapp from "../../img/mobileapp.png";
import Rcommerce from "../../img/Rcommerce.png";
import Luxurycar from "../../img/Luxurycar.png";
import Photography from "../../img/photo.png";
import { themeContext } from "../../Context";

// Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // Add your Figma design URLs here
  const figmaLinks = {
    mobileapp: "https://app.uizard.io/p/223d36f2/preview",
    Restaurantstore : "https://www.figma.com/proto/LUzor4i6nTQJGHIvJ2doEV/Untitled?t=Y0Q2hx0kMg8RqKnb-1",
    Luxurycar: "https://app.uizard.io/p/b20ea867",
    Photography: "https://app.uizard.io/p/9b6d302f"
  };

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href={figmaLinks.mobileapp} target="_blank" rel="noopener noreferrer">
            <img src={mobileapp} alt="Sidebar Design" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href={figmaLinks.Restaurantstore} target="_blank" rel="noopener noreferrer">
            <img src={Rcommerce} alt="Restaurant Equipment Store" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href={figmaLinks.Luxurycar} target="_blank" rel="noopener noreferrer">
            <img src={Luxurycar} alt="Luxury Rental Cars" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href={figmaLinks.Photography} target="_blank" rel="noopener noreferrer">
            <img src={Photography} alt="Photography" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;

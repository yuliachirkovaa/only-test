import { FC, useContext, useEffect, useState} from "react";
import PeriodContext from "../../context/period.context/context";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { MockData } from "../../constants/mock.data";
import Event from "../event";
import "./slider.scss";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Slider: FC = () => {

  const context = useContext(PeriodContext);

  if (!context) {
    throw new Error("PeriodDates must be used within a PeriodProvider");
  }

  const { period } = context;
  const events = MockData[period - 1].items;

  const [isMobile, setIsMobile] = useState<boolean>(false);
  const updateSlider = () => setIsMobile( window.innerWidth < 1025 );

	useEffect(() => {

		updateSlider();
		window.addEventListener('resize', updateSlider );

		return () => { window.removeEventListener('resize', updateSlider ); }

	}, []);

  return (

    <Swiper
      slidesPerView = { isMobile ? 1.5 : 3 }
      modules = {[ Navigation, Pagination ]}
      navigation = {{ prevEl: ".slider-btn--prev", nextEl: ".slider-btn--next" }}
      pagination = {{ clickable: true }}
    >

      {events.map((event, index) => (

        <SwiperSlide key = { index }>
          
          <Event year = { event.year } event = { event.event } />
          
        </SwiperSlide>

      ))}

      {isMobile && <SwiperSlide />}

    </Swiper>

  );

}

export default Slider;
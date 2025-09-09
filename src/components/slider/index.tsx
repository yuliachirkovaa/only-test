import { FC, useContext, useEffect, useRef, useState} from "react";
import PeriodContext from "../../context/period.context/context";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { MockData } from "../../constants/mock.data";
import Event from "../event";
import "./slider.scss";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Slider: FC = () => {

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const context = useContext(PeriodContext);

  if (!context) {
    throw new Error("PeriodDates must be used within a PeriodProvider");
  }

  const { period } = context;

  const [currentPeriod, setCurrentPeriod] = useState<number>(period);
  const [events, setEvents] = useState(MockData[period - 1].items);

  const [isMobile, setIsMobile] = useState<boolean>(false);
  const updateSlider = () => setIsMobile( window.innerWidth < 1025 );

	useEffect(() => {

		updateSlider();
		window.addEventListener('resize', updateSlider );

		return () => { window.removeEventListener('resize', updateSlider ); }

	}, []);

  useEffect(() => {

    if (period === currentPeriod) return;

    const timer = setTimeout(() => {}, 0); 

    const animateFade = async () => {

      let swiperWrapper: HTMLElement | null = null;
      if (wrapperRef.current) {
        swiperWrapper = wrapperRef.current.querySelector('.swiper-wrapper');
      }

      if (!swiperWrapper) return; 

      await gsap.to(swiperWrapper, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut'
      });

      await new Promise(resolve => setTimeout(resolve, 500));

      setEvents(MockData[period - 1].items);
      setCurrentPeriod(period);

      gsap.fromTo(swiperWrapper, { opacity: 0 }, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.inOut'
      });

    };

    setTimeout(() => animateFade(), 0);

    return () => clearTimeout(timer);

  }, [period, currentPeriod]);

  return (

    <div ref = { wrapperRef }>

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

    </div>

  );

}

export default Slider;
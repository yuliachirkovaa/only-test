import { FC } from "react";
import PeriodDates from "../period.dates";
import PeriodControls from "../period.controls";
import Slider from "../slider";
import "./history.scss";
import SliderBtnIcon from "../icons/slider.btn";

const HistoryBlock: FC = () => {

  return (

    <div className = "history__container">

      <div className = "history__wrapper">

        <h1 className = "history__title">Исторические даты</h1>
        <PeriodDates />
        <PeriodControls />
        <Slider />

      </div>

      <button className = "slider-btn slider-btn--prev">
        <SliderBtnIcon />
      </button>

      <button className = "slider-btn slider-btn--next">
        <SliderBtnIcon />
      </button>
      
    </div>

  );

}

export default HistoryBlock;
import { FC } from "react";
import PeriodDates from "../period.dates";
import PeriodControls from "../period.controls";
import Slider from "../slider";
import SliderButtons from "../slider.buttons";
import "./history.scss";
import Circle from "../circle";

const HistoryBlock: FC = () => {

  return (

    <div className = "history__container">

      <div className = "history__wrapper">

        <h1 className = "history__title">Исторические даты</h1>
        <PeriodDates className = "history__dates" />
        <PeriodControls />
        <Slider />

      </div>

      <SliderButtons />

      <div className = "history__line history__line--vertical history__line--left" />
      <div className = "history__line history__line--vertical history__line--central" />
      <div className = "history__line history__line--vertical history__line--right" />
      <div className = "history__line history__line--horizontal" />

      <Circle />
      
    </div>

  );

}

export default HistoryBlock;
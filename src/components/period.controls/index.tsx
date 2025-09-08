import { FC, useContext } from "react";
import PeriodContext from "../../context/period.context/context";
import { MockData } from "../../constants/mock.data";
import ArrowBtnDeskIcon from "../icons/arrow.btn.desk";
import ArrowBtnMobIcon from "../icons/arrow.btn.mob";
import "./period.controls.scss";

const PeriodControls: FC = () => {

  const context = useContext(PeriodContext);

  if (!context) {
    throw new Error("PeriodDates must be used within a PeriodProvider");
  }

  const { period, setPeriod } = context;
  const length = MockData.length;

  const handlePrevious = () => {
    if (period > 1) {
      setPeriod(period - 1);
    }
  };

  const handleNext = () => {
    if (period < length) {
      setPeriod(period + 1);
    }
  };

  return (

    <div className = "period-controls__container">

      <div className = "period-controls__current">
        
        {`0${period}/0${length}`}
        
      </div>

      <div className = "period-controls__btns">

        <button
          className = "period-controls__btn"
          onClick = { handlePrevious }
          disabled = { period <= 1 }
        >

          <ArrowBtnDeskIcon className = "period-controls__btn--prev period-controls__btn--desk" />
          <ArrowBtnMobIcon className = "period-controls__btn--prev period-controls__btn--mob" />

        </button>

        <button
          className = "period-controls__btn"
          onClick = { handleNext }
          disabled = { period >= length }
        >

          <ArrowBtnDeskIcon className = "period-controls__btn--next period-controls__btn--desk" />
          <ArrowBtnMobIcon className = "period-controls__btn--next period-controls__btn--mob" />

        </button>

      </div>

    </div>

  );

}

export default PeriodControls;
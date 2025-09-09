import { FC } from "react";
import SliderBtnIcon from "../icons/slider.btn";
import "./slider.buttons.scss";

const SliderButtons: FC = () => {

  return (

    <>

      <button className = "slider-btn slider-btn--prev">
        <SliderBtnIcon />
      </button>

      <button className = "slider-btn slider-btn--next">
        <SliderBtnIcon />
      </button>
      
    </>

  );

}

export default SliderButtons;
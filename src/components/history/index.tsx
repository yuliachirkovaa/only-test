import { FC, useEffect, useState } from "react";
import PeriodDates from "../period.dates";
import PeriodControls from "../period.controls";
import Slider from "../slider";
import SliderButtons from "../slider.buttons";
import Circle from "../circle";
import Modal, { ModalTitle } from "../modal";
import "./history.scss";

const HistoryBlock: FC = () => {

  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  useEffect(() => {

    const mql = window.matchMedia("(orientation: landscape)");

    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setIsModalOpened(true);
      } else {
        setIsModalOpened(false);
      }
    };

    mql.addEventListener("change", onChange);

    return () => {
      mql.removeEventListener("change", onChange);
    };

  }, []);

  return (

    <>

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

      {isModalOpened && 
        
        <Modal isOpen = { isModalOpened } onClose = { () => setIsModalOpened(false) }>

          <ModalTitle>Переверните экран для лучшего пользовательского опыта</ModalTitle>

        </Modal>

      }
    
    </>

  );

}

export default HistoryBlock;
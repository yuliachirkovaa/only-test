import { FC, useContext} from "react";
import PeriodContext from "../../context/period.context/context";
import { MockData } from "../../constants/mock.data";
import "./period.dates.scss";

interface PeriodDatesProps {

  className?: string;
  
}

const PeriodDates: FC<PeriodDatesProps> = ({ className }) => {

  const context = useContext(PeriodContext);

  if (!context) {
    throw new Error("PeriodDates must be used within a PeriodProvider");
  }

  const { period } = context;
  const start = MockData[period - 1].start;
  const end = MockData[period - 1].end;

  return (

    <div className = {` ${className} period-dates__container `}>

      <div className = "period-dates__dates">

        <div className = "period-dates__start">{ start }</div>
        <div className = "period-dates__end">{ end }</div>

      </div>

      <div className = "period-dates__line" />
      
    </div>

  );

}

export default PeriodDates;
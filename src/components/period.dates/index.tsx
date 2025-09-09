import { FC, useContext, useEffect, useState} from "react";
import gsap from "gsap";
import PeriodContext from "../../context/period.context/context";
import { MockData } from "../../constants/mock.data";
import "./period.dates.scss";

interface PeriodDatesProps { className?: string; }

const PeriodDates: FC<PeriodDatesProps> = ({ className }) => {

  const context = useContext(PeriodContext);

  if (!context) {
    throw new Error("PeriodDates must be used within a PeriodProvider");
  }

  const { period } = context;
  const start = MockData[period - 1].start;
  const end = MockData[period - 1].end;

  const [animatedStart, setAnimatedStart] = useState<number>(start);
  const [animatedEnd, setAnimatedEnd] = useState<number>(end);

  useEffect(() => {
    if (animatedStart !== start) {
      gsap.to({ val: animatedStart }, {
        val: start,
        duration: 1,
        ease: "power1.out",
        onUpdate: function() {
          setAnimatedStart(Math.round(this.targets()[0].val));
        }
      });
    } else {
      setAnimatedStart(start);
    }
  }, [start]);

  useEffect(() => {
    if (animatedEnd !== end) {
      gsap.to({ val: animatedEnd }, {
        val: end,
        duration: 1,
        ease: "power2.inOut",
        onUpdate: function() {
          setAnimatedEnd(Math.round(this.targets()[0].val));
        }
      });
    } else {
      setAnimatedEnd(end);
    }
  }, [end]);

  return (

    <div className = {` ${className} period-dates__container `}>

      <div className = "period-dates__dates">

        <div className = "period-dates__start">{ animatedStart }</div>
        <div className = "period-dates__end">{ animatedEnd }</div>

      </div>

      <div className = "period-dates__line" />
      
    </div>

  );

}

export default PeriodDates;
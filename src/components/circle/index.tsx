import { FC, useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import PeriodDates from "../period.dates";
import PeriodContext from "../../context/period.context/context";
import { MockData } from "../../constants/mock.data";
import "./circle.scss";

const Circle: FC = () => {

  const context = useContext(PeriodContext);

  if (!context) {
    throw new Error("PeriodDates must be used within a PeriodProvider");
  }

  const { period, setPeriod } = context;

  const numPoints = MockData.length;
  const basePointSize = 6; 
  const activePointSize = 56;

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showName, setShowName] = useState<boolean>(true);

  const pointsRef = useRef<HTMLDivElement>(null);

  function getTargetRotation(periodValue: number) {

    const activeIndex = periodValue - 1;
    const angleStep = 360 / numPoints;
    return -(activeIndex + 1) * angleStep;

  }

  useEffect(() => {

    setShowName(false);
    const targetRotation = getTargetRotation(period);

    gsap.to(pointsRef.current, {
      rotate: targetRotation,
      duration: 1,
      ease: "power2.inOut",
       onComplete: () => {
        setShowName(true); 
      },
    });

  }, [period, numPoints]);

  const points = Array.from({ length: numPoints }, (_, i) => {

    const angle = (2 * Math.PI * i) / numPoints;
    const size = (hoveredIndex === i || period === i + 1) ? activePointSize : basePointSize;
    const r = 270;
    const cx = r;
    const cy = r;
    const x = cx + r * Math.cos(angle) - size / 2;
    const y = cy + r * Math.sin(angle) - size / 2;
    const targetRotation = getTargetRotation(period);

    return (

      <div
        key = { i }
        style = {{
          position: "absolute",
          left: `${x * 0.052083}vw`,
          top: `${y * 0.052083}vw`,
          width: `${size * 0.052083}vw`,
          height: `${size * 0.052083}vw`,
          transform: `rotate(${-targetRotation}deg)`,
        }}
        className = {` circle__point ${ period === i + 1 && 'circle__point--active' } `}
        onMouseEnter = { () => setHoveredIndex(i) }
        onMouseLeave = { () => setHoveredIndex(null) }
        onClick = { () => setPeriod(i + 1) }
      >

        <div className = "circle__number">{ i + 1 }</div>
        <div className = "circle__name">{ showName && MockData[period - 1].name }</div>

      </div>

    );

  });

  return (

    <div className = "circle">

      <PeriodDates className = "circle__dates" />

      <div
        className = "circle__points"
        ref = { pointsRef }
        style = {{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          willChange: "transform",
          zIndex: "3",
        }}
      >

        {points}

      </div>

    </div>

  );

}

export default Circle;
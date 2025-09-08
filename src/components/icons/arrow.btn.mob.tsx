import { FC, SVGProps } from "react";

interface ArrowBtnMobIconProps extends SVGProps< SVGSVGElement > {};

const ArrowBtnMobIcon: FC< ArrowBtnMobIconProps > = ({ className }) => {

  return (

    <svg className={className} width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    
      <circle cx="12.5" cy="12.5" r="12" transform="matrix(-1 0 0 1 25 0.666718)" stroke="#42567A" stroke-opacity="0.5"/>
      <path d="M13.7489 10.0418L10.6239 13.1668L13.7489 16.2918" stroke="#42567A" stroke-width="2"/>
    
    </svg>

  );

};

export default ArrowBtnMobIcon;
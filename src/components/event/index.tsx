import { FC} from "react";
import "./event.scss";

interface EventProps {

  year: number;
  event: string;
  
}

const Event: FC<EventProps> = ({ year, event }) => {

  return (

    <div className = "event__container">

      <div className = "event__year">{ year }</div>
      <div className = "event__text">{ event }</div>
      
    </div>

  );

}

export default Event;
import { FC, PropsWithChildren, useState } from "react";
import PeriodContext from "./context";

const PeriodProvider: FC<PropsWithChildren> = ({ children }) => {

  const [ period, setPeriod ] = useState(1);

  return (

    <PeriodContext.Provider value = {{ period, setPeriod }}>

      { children }

    </PeriodContext.Provider>
    
  );

};

export default PeriodProvider;
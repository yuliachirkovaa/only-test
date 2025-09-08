import { createContext, Dispatch, SetStateAction } from "react";

interface PeriodContextType {

  period: number;
  setPeriod: Dispatch<SetStateAction<number>>; 
  
}

const PeriodContext = createContext<PeriodContextType | undefined>(undefined);

export default PeriodContext;
import { FC } from "react";
import HistoryBlock from "./components/history";
import PeriodProvider from "./context/period.context/provider";

const App: FC = () => {

  return (

    <PeriodProvider>

      <HistoryBlock />
      
    </PeriodProvider>

  );
  
}

export default App;

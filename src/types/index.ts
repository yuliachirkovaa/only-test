export interface Event {
  year: number;
  event: string;
}

export interface HistoricalPeriod {
  id: number;
  name: string;
  start: number;
  end: number;
  items: Event[];
}


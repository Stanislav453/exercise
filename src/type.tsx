export type orderTicketType = {
  from: string;
  to: string;
  price: string;
  departure: string;
  arrival: string;
  duration: string;
  seats: [];
};

export type flightDataType = {
  id: number;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  duration: string;
  price: number;
  seats: [];
} 

export type seatsType = {
  id: number;
  number: string;
  available: boolean;
};

export type CounterState = {
  orderTicket: orderTicketType[];
  seatsCount: number | null;
  selectedSeats: string[] | null;
  seatsPrice: number }

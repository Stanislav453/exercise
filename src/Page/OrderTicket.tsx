import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';

export const OrderTicket = () => {
  const order = useSelector((state) => state.orderTicketData.orderTicket);

  const { from, to, price, departure, arrival, duration, seats } = order;

  return (
    <React.Fragment>
      from: {from} to: {to} price:{price} departure: {departure} arrival:{' '}
      {arrival} duration{duration}
      { seats.map( (item) => item.id ) }
    </React.Fragment>
  );
};

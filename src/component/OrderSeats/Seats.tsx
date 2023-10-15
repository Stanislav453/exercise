import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { flightDataType, seatsType } from '../../type';
import { Stack, Button } from '@mui/material';
import {
  actualSeatsCount,
  actualSelectedSeats,
} from '../../Redux/slices/orderSlice';

export const Seats = () => {
  const [reservedSeat, setReservedSeat] = useState<number>(0);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const dispatch = useDispatch();
  const order = useSelector(
    (state: flightDataType) => state.orderTicketData.orderTicket
  );
  const { seats } = order;

  const isSeatReserved = (number: string) => {
    if (selectedIds.includes(number)) {
      setSelectedIds((prevSelectedIds) =>
        prevSelectedIds.filter((item) => item !== number)
      );
      setReservedSeat((prevReservedSeat) => prevReservedSeat - 1);
    } else {
      setSelectedIds((prevSelectedIds) => [...prevSelectedIds, number]);
      setReservedSeat((prevReservedSeat) => prevReservedSeat + 1);
    }
  };

  useEffect(() => {
    dispatch(actualSeatsCount(reservedSeat));
    dispatch(actualSelectedSeats(selectedIds));
  }, [selectedIds, selectedIds]);

  return (
    <Stack
      direction='row'
      justifyContent={'space-between'}
      spacing={1}
      sx={{ backgroundColor: 'info.main' }}
      useFlexGap
      flexWrap='wrap'
    >
      {seats.map((item: seatsType) => {
        const { id, number, available } = item;
        const isSelected = selectedIds.includes(number);

        return (
          <Button
            key={id}
            type='button'
            variant='contained'
            color={isSelected ? 'error' : 'success'}
            disabled={!available}
            onClick={() => isSeatReserved(number)}
            sx={{ width: '100%', maxWidth: '130px' }}
          >
            {number}
          </Button>
        );
      })}
    </Stack>
  );
};

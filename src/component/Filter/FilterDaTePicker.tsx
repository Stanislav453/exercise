import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useState } from 'react';

export const FilterDaTePicker = () => {

 const dates = ['2023-06-10', '2023-06-11', '2023-06-12'];

 const octalDates = dates.map((dateStr) => {
   const [year, month, day] = dateStr.split('-');
   const octalYear = '0o' + parseInt(year, 10).toString(8);
   const octalMonth = '0o' + parseInt(month, 10).toString(8);
   const octalDay = '0o' + parseInt(day, 10).toString(8);

   return `${octalYear}-${octalMonth}-${octalDay}`;
 });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        sx={{ flexDirection: 'row', alignItems: 'center', gap: 2, p: 0 }}
        components={['DateTimePicker', 'DateTimePicker']}
      >
        <DateTimePicker label='Controlled picker' />
        <DateTimePicker
          label='Controlled picker'
          sx={{ margin: '0 !important' }}
          value={octalDates}
          // onChange={(newValue) => setValue(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

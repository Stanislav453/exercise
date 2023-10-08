import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export const FilterDaTePicker = () => {
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
          // value={value}
          // onChange={(newValue) => setValue(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

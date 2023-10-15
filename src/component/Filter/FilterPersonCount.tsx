import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {  SEATS } from '../../stringVariables';

export const FilterPersonCount = ({ setInputData }) => {


  const handleChange = (e: SelectChangeEvent) => {
    setInputData((state) => {
      return { ...state, person: e.target.value };
    });
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel sx={{ textTransform:'capitalize' }} >{SEATS}</InputLabel>
        <Select

          label={ SEATS }
          onChange={handleChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

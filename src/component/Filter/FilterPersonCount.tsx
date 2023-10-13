import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { PERSON } from '../../stringVariables';
import { useSelector, useDispatch } from 'react-redux';

export const FilterPersonCount = ({ setInputData, inputData }: any) => {
  const { person } = inputData;

  const dispatch = useDispatch();

  const handleChange = (e: SelectChangeEvent) => {
    setInputData((state) => {
      return { ...state, person: e.target.value };
    });
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>{PERSON}</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={person}
          label={PERSON}
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

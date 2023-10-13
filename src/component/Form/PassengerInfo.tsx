import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Typography, Stack, Button } from '@mui/material';
import { PASSANGER, SEAT } from '../../stringVariables';
import { TextField } from '@mui/material';
import { FormStyle } from './style/FormStyle';

type formType = {
  name: string;
  secondName: string;
  date: string;
};

type PassengerInfotype = {
  item: string;
  key: number;
};

export const PassengerInfo = ({ item, index }: PassengerInfotype) => {
  const [modal, setModal] = useState(false);
  const passengerNumber = index + 1;
  const [name, setName] = useState([{}]);


  const maxStringLetter = 12;
  const maxNumber = 14;
  const NameError = `Name must be ${maxStringLetter} characters or less`;
  const nameAZ = 'Name can not be number';
  const nameRequired = 'Name is required';
  const SecondNameError = `Second name must be ${maxStringLetter} characters or less`;
  const SecondName = 'Second name can not be number';
  const secondNameRequired = 'Second name is required';
  const dateRequired = 'Date is required';

  const formik = useFormik<formType>({
    initialValues: {
      name: '',
      secondName: '',
      date: '',
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .matches(/^[a-z]+$/, nameAZ)
        .max(maxNumber, NameError)
        .required(nameRequired),
      secondName: Yup.string()
        .matches(/^[a-z]+$/, SecondName)
        .max(maxStringLetter, SecondNameError)
        .required(secondNameRequired),
      date: Yup.date().required(dateRequired),
    }),
    onSubmit: (values) => {
      console.log(values)
    },
  });

  //CLEAR_FORM_INPUT
  const formSubmit = () => {
    formik.values.name = '';
    formik.values.secondName = '';
    formik.values.date = '';
    setModal(false);
  };

  console.log( formik.value )

  return (
    <FormStyle onSubmit={formik.handleSubmit}>
      <Typography variant='body1' component='h5'>
        {`${SEAT}: ${item}`}
      </Typography>
      <Typography variant='h5' component='h5'>
        {`${PASSANGER}: ${passengerNumber}`}
      </Typography>
      <Stack mt={1} spacing={3}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '' }}>
          <Typography variant='body2' component='span' color='error'>
            {formik.touched.name && formik.errors.name
              ? formik.errors.name
              : ''}
          </Typography>
          <TextField
            name='name'
            type='text'
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Select your first name'
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='body2' component='span' color='error'>
            {' '}
            {formik.touched.secondName && formik.errors.secondName
              ? formik.errors.secondName
              : ''}
          </Typography>
          <TextField
            name='secondName'
            type='text'
            value={formik.values.secondName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Select your second name'
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='body2' component='span' color='error'>
            {' '}
            {formik.errors.date ? formik.errors.date : ''}
          </Typography>
          <TextField
            name='date'
            id='time'
            type='date'
            value={formik.values.date}
            onChange={formik.handleChange}
          />
        </Box>
        {/* <Button
          sx={{ alignSelf: 'center' }}
          type='submit'
          // onClick={() => setName((state) => {formik.values.name})}
          // onClick={formik.handleSubmit}
          variant='contained'
        >
          Slect data
        </Button> */}
      </Stack>
    </FormStyle>
  );
};

import { Stack, Typography, Box, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Formik, Form, Field, FieldArray } from 'formik';
import { Link } from 'react-router-dom';
import { addConfiData } from '../../Redux/slices/confirmationSlice';
import { BACK, ERROR, NEXT, PERSON_INFO, PERSON_TRAVEL, SEAT, SUBMIT } from '../../stringVariables';
import { useState } from 'react';
import { FormModal } from './FormModal';
import { FormModalSuccess } from './FormModalSuccess';

const schema = Yup.object().shape({
  info: Yup.array().of(
    Yup.object().shape({
      firstName: Yup.string()
        .matches(/^[a-zA-Z]+$/, 'The name is not a number')
        .min(3, 'too short')
        .required('required'),
      secondName: Yup.string().min(3, 'too short').required('required'),
      number: Yup.string()
        .matches(/^[0-9]+$/, 'Must be a number')
        .min(3, 'too short')
        .max(10, 'to long')
        .required('required'),
    })
  ),
});

export const PersonInfo = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [submit, setSubmit] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const dispatch = useDispatch();

  const seatsPosition = useSelector(
    (state) => state.orderTicketData.selectedSeats
  );

  const seatsLength: number = seatsPosition.length;

  const FIRST_NAME = 'first name';
  const SECOND_NAME = 'second name';
  const NUMBER = 'phone number';

  return (
    <Stack>
      <Typography
        variant='h4'
        sx={{
          textTransform: 'uppercase',
          fontWeight: 900,
          textAlign: 'center',
        }}
      >
        {PERSON_INFO}
      </Typography>
      <Typography
        variant='body1'
        sx={{
          textAlign: 'center',
        }}
      >
        {` ${PERSON_TRAVEL}: ${seatsLength}`}
      </Typography>
      <Formik
        initialValues={{
          info: [{ firstName: '', secondName: '', number: '' }],
        }}
        validationSchema={schema}
        onSubmit={(values): any => {
          dispatch(addConfiData(values));
          setSubmit(true);
          setSuccess(true);
        }}
        render={({ errors }) => (
          <Form>
            <FieldArray
              name='info'
              render={() => (
                <Box>
                  {seatsLength > 0 ? (
                    seatsPosition.map((item: string, key: number) => (
                      <Stack
                        spacing={2}
                        mt={2}
                        sx={{
                          '& > input': {
                            fontSize: '1rem',
                            padding: '1rem',
                            borderRadius: 2,
                          },
                          p: 2,
                          boxShadow: '0px 0px 3px #000',
                          borderRadius: 2,
                        }}
                      >
                        <Box>
                          <Typography variant='h4'>{` ${SEAT}: ${item} `}</Typography>
                        </Box>
                        <Typography
                          variant='body1'
                          component='span'
                          color='error'
                        >
                          {errors.info &&
                            errors.info[key] &&
                            errors.info[key].firstName}
                        </Typography>
                        <Field
                          name={`info.${key}.firstName`}
                          type='text'
                          placeholder={FIRST_NAME}
                        />
                        <Typography
                          variant='body1'
                          component='span'
                          color='error'
                        >
                          {errors.info &&
                            errors.info[key] &&
                            errors.info[key].secondName}
                        </Typography>
                        <Field
                          name={`info.${key}.secondName`}
                          type='text'
                          placeholder={SECOND_NAME}
                        />
                        <Typography
                          variant='body1'
                          component='span'
                          color='error'
                        >
                          {errors.info &&
                            errors.info[key] &&
                            errors.info[key].number}
                        </Typography>
                        <Field
                          name={`info.${key}.number`}
                          type='text'
                          placeholder={NUMBER}
                        />
                      </Stack>
                    ))
                  ) : (
                    <Typography variant='h4' component='h4' color='error'>
                      {ERROR}
                    </Typography>
                  )}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Button
                      type='button'
                      variant='contained'
                      color='error'
                      sx={{
                        my: 2,
                        a: { color: '#fff', textDecoration: 'none' },
                      }}
                    >
                      <Link to='/order-ticket'>{BACK}</Link>
                    </Button>
                    <Button
                      type='submit'
                      variant='contained'
                      color='primary'
                      sx={{
                        my: 2,
                        a: { color: '#fff', textDecoration: 'none' },
                      }}
                    >
                      {SUBMIT}
                    </Button>
                    {submit ? (
                      <Button
                        type='button'
                        variant='contained'
                        color='success'
                        sx={{
                          my: 2,
                          a: { color: '#fff', textDecoration: 'none' },
                        }}
                      >
                        <Link to='/confirmation'>{NEXT}</Link>
                      </Button>
                    ) : (
                      <Button
                        onClick={() => setModal((state) => !state)}
                        type='button'
                        variant='contained'
                        color='success'
                        sx={{
                          my: 2,
                          a: { color: '#fff', textDecoration: 'none' },
                        }}
                      >
                        {NEXT}
                      </Button>
                    )}
                  </Box>
                </Box>
              )}
            />
          </Form>
        )}
      />
      {modal && <FormModal setModal={setModal} modal={modal} />}
      {success && (
        <FormModalSuccess success={success} setSuccess={setSuccess} />
      )}
    </Stack>
  );
};

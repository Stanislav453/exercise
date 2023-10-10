import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { BOTTOM, DOOR, PILOT, WINDOW } from '../../stringVariables';
import { Seats } from './Seats';
import { ExplainSeats } from './ExplainSeats';

export const OrderSeats = () => {
  return (
    <React.Fragment>
      <ExplainSeats />
      <Grid container>
        <Grid item xs={12}>
          <Box
            sx={{
              height: '100%',
              borderRadius: '3rem 3rem 0 0',
              backgroundColor: 'info.main',
            }}
          >
            <Typography
              variant='h5'
              sx={{ p: 2, textAlign: 'center', textTransform: 'capitalize' }}
            >
              {PILOT}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              backgroundColor: 'info.main',
            }}
          >
            <Typography variant='body1' sx={{ textTransform: 'capitalize' }}>
              {WINDOW}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Seats />
        </Grid>
        <Grid item xs={3}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              height: '100%',
              backgroundColor: 'info.main',
            }}
          >
            <Typography variant='body1' sx={{ textTransform: 'capitalize' }}>
              {WINDOW}
            </Typography>
            <Typography variant='body1' sx={{ textTransform: 'capitalize' }}>
              {DOOR}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              height: '100%',
              borderRadius: '0 0 3rem 3rem',
              backgroundColor: 'info.main',
            }}
          >
            <Typography
              variant='body1'
              sx={{ p: 2, textAlign: 'center', textTransform: 'capitalize' }}
            >
              {BOTTOM}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

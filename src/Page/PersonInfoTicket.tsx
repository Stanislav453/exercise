import { Container } from '@mui/material'
import React from 'react'
import { OrderTicketHead } from '../component/OrderTicketHead'
import { PersonInfo } from '../component/Form/PersonInfo'


export const PersonInfoTicket = () => {
  return (
    <Container maxWidth='md'>
      <OrderTicketHead />
      <PersonInfo />
    </Container>
  )
}

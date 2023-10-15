import { Route, Routes } from 'react-router-dom';
import { Home } from './Page/Home';
import { OrderTicket } from './Page/OrderTicket';
import { PersonInfoTicket } from './Page/PersonInfoTicket';
import { Confirmation } from './Page/Confirmation';
import { Message } from './Page/Message';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/order-ticket' element={<OrderTicket />} />
        <Route path='/person-info-ticket' element={<PersonInfoTicket/>} />
        <Route path='/confirmation' element={<Confirmation/>} />
        <Route path='success' element={<Message/>} />

      </Routes>
    </>
  );
};

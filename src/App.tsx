import { Route, Routes } from 'react-router-dom';
import { Home } from './Page/Home';
import { OrderTicket } from './Page/OrderTicket';
import { PersonInfoTicket } from './Page/PersonInfoTicket';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/order-ticket' element={<OrderTicket />} />
        <Route path='/person-info-ticket' element={<PersonInfoTicket/>} />
      </Routes>
    </>
  );
};

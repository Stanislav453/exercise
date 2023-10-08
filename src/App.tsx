import { Route, Routes } from 'react-router-dom';
import { Home } from './Page/Home';
import { OrderTicket } from './Page/OrderTicket';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/order-ticket' element={<OrderTicket />} />
      </Routes>
    </>
  );
};

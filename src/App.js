import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Open from "./component/Open";
import CustomerLogin from './component/Customer/CustomerLogin';
import AdminLogin from './component/Admin/AdminLogin';
import Customerregister from './component/Customer/Customerregister';
import Adminregister from './component/Admin/Adminregister';
import Productdetail from './component/Admin/Productdetail';
import Customerview from './component/Admin/Customerview';
import Servicelist from './component/Customer/Servicelist';
import Booking from './component/Customer/Booking';
import Emailsend from './component/Customer/Emailsend';
import Confirmmail from './component/Admin/Confirmmail';
//import { UserProvider } from './UserContext';

function App() {
  return (

    <BrowserRouter>
      <div className='container bg-success p-2 text-dark bg-opacity-25 mt-5'>
        <Routes>
          <Route path="/" element={<Open />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/customerlogin" element={<CustomerLogin />} />
          <Route path="/customerregister" element={<Customerregister />} />
          <Route path="/adminregister" element={<Adminregister />} />
          <Route path="/productdetail" element={<Productdetail />} />
          <Route path="/customerview" element={<Customerview />} />
          <Route path="/servicelist" element={<Servicelist />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/email" element={< Emailsend />} />
          <Route path="/confirmmail" element={< Confirmmail />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;

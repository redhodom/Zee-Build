import Home from './Home.jsx';
import Home1 from './Home1.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home1context from './Home1context.jsx';
import Cart from './Cart.jsx';
import PaymentPage from './PaymentPage.jsx';
import About from './About.jsx';
import Support from './Support.jsx';
import Login from './Login.jsx';

const App = () => {
  return (
    <Router>
      {/* ✅ Wrap Routes inside your Context Provider */}
      <Home1context>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home1" element={<Home1 />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Payment" element={<PaymentPage />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Support" element={<Support />} />
          <Route path="/Login" element={<Login />}/>
        </Routes>
      </Home1context>
    </Router>
  );
};

export default App;

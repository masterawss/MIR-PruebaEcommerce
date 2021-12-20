import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductShow from './pages/Product/Show';
import AboutShow from './pages/About/Show';
import ProductIndex from './pages/Product/Index';

const App = function () {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />}>
            <Route path="" element={<ProductIndex />} />
            <Route path=":productId" element={<ProductShow />} />
          </Route>
          <Route path="about" element={<AboutShow />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;


import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Products from './Pages/Home/Products/Products';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Portfolio from './Pages/Portfolio/Portfolio';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import NotFound from './Pages/Shared/NotFound';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products" element={<Products />} />
        <Route path="product/:id" element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        } />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

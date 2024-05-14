
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Nav from './components/Nav';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Footer from './components/Footer';
import Vm from './components/Pages/Vm';
import Education from './components/Pages/Education';
import Health from './components/Pages/Health';
import Livlihood from './components/Pages/Livlihood';
import Gallery from './components/Pages/Gallery';
import Vaasta from './components/Pages/Vaasta';
import Yojna from './components/Pages/Yojna';
import Contact from './components/Pages/Contact';
import Work from './components/Pages/Work';
import Member from './components/Pages/Member';
import NotFound from './components/Pages/NotFound';

import Donate from './components/Donate';
import CheckOut from './components/CheckOut';


function App() {

  const initialOptions = {
    "client-id": "AbKr4QlHgxgo1VG80TJRT8HIwOs4oemBr56goGd9UJILDVn0Hcl4HOOqwjFoDn8qxZ61orhzxlew_1kZ",
    currency: "USD",
    intent: "capture",
  };


  return (

    <PayPalScriptProvider options={initialOptions} >
      <Nav />

      <Routes>
        <Route path={'/'} element={<Home />}></Route>
        <Route path={'/about'} element={<About />}></Route>
        <Route path={'/about/vision'} element={<Vm />}></Route>
        <Route path={'/work/education'} element={<Education />}></Route>
        <Route path={'/work/health'} element={<Health />}></Route>
        <Route path={'/work/livlihood'} element={<Livlihood />}></Route>
        <Route path={'/gallery'} element={<Gallery />}></Route>
        <Route path={'/vaasta'} element={<Vaasta />}></Route>
        <Route path={'/vaasta/yojna'} element={<Yojna />}></Route>
        <Route path={'/contact'} element={<Contact />}></Route>
        <Route path={'/about/work'} element={<Work />}></Route>
        <Route path={'/vaasta/member'} element={<Member />}></Route>
        <Route path={'/donate'} element={<Donate />}></Route>
        <Route path={'/checkout'} element={<CheckOut/>}></Route>

        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </PayPalScriptProvider>

  )
}

export default App;

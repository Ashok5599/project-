import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Main from './Main';
import About from './About';
import Services from './Services';
import Consultation from './Consultation';
import Footer from './Footer';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Home from './Home';
// import About from './About';
// import Services from './Services';
// import Contact from './Contact';


ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter>
    
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/services'element={<Services/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter> */}
    <App />
    <Main/>
    <About/>
    <Services/>
    <Consultation/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

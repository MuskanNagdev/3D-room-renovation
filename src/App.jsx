import React from 'react';
import {
  BrowserRouter as Router,Routes,
  Route,
  
} from 'react-router-dom';

import Contact from './Component/Contact';
import Portfolio from './Component/Portfolio';
import Home from './Component/Home';
import Pricing from './Component/Pricing';
import Tutorial from './Component/Tutorial';
import Navbarr from './Component/Navbarr';
import Register from './Component/Register';
import SignupForm from './Component/SignupForm';
import LoginSignupTabs from './Component/LoginSignupTabs';
import CustomDesign from './Component/CustomDesign';
import options_design from './Component/options_design';
import Footer from './Component/Footer';
import ForgotPassword from './Component/ForgotPassword';
import Parameter from './Component/Parameter';
import Feedback from './Component/Feedback';
import Payment from './Component/Payment';
import Thankyou from './Component/Thankyou';
import fetch from './Component/fetch';
import Faq from './Component/Faq';
// import Dashboard from './Component/Dashboard';
import Admin from './Component/Admin';
import settings from   './Component/settings';
import UsernameSettings from './Component/UsernameSettings';
import PasswordSettings from './Component/PasswordSettings';
import LanguageSettings from './Component/LanguageSettings';
import ColorSettings from './Component/ColorSettings';
import Designerpage from  './Component/Designerpage';
const App = () => {
  return (
   <Router>
    <Navbarr/>
   
    <main>
      <Routes>
        <Route path="/"  Component={Home}/>
          
        <Route path="/portfolio" exact Component={Portfolio}/>
        <Route path="/Faq" exact Component={Faq}/>
        <Route path="/pricing" exact Component={Pricing}/>
         
        <Route path="/tutorial" exact Component={Tutorial}/>
        <Route path="/Thankyou" exact Component={Thankyou}/>
        <Route path="/contact" exact Component={Contact}/>
        
        <Route path="/register" exact Component={Register}/>
        <Route path="/signupform" exact Component={SignupForm}/>
        <Route path="/loginsignuptabs" exact Component={LoginSignupTabs}/>

        <Route path="/CustomDesign" exact Component={CustomDesign}/>
        <Route path="/options_design" exact Component={options_design}/>
        <Route path="/footer" exact Component={Footer}/>
        <Route path="/forgotpassword" exact Component={ForgotPassword}/>
        <Route path="/parameter" exact Component={Parameter}/>
        <Route path="/feedback" exact Component={Feedback}/>
        <Route path="/payment" exact Component={Payment}/>
        <Route path="/fetch" exact Component={fetch}/>
        {/* <Route path="/dashboard" exact Component={Dashboard}/> */}
        <Route path="/admin" exact Component={Admin}/>
        <Route path="/settings" exact Component={settings}/>
        <Route path="/usernamesettings" exact Component={UsernameSettings}/>
        <Route path="/passwordsettings " exact Component={PasswordSettings}/>
        <Route path="/languagesettings" exact Component={LanguageSettings}/>
        <Route path="/colorsetting" exact Component={ColorSettings}/>
        <Route path="/designerpage" exact Component={Designerpage}/>


       
      </Routes>
    </main>
    <Footer/>
   </Router>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../Images/3droomlogo.png';
import profile_icon from '../Images/profile_icon.png';
import user from '../Images/user.png';
import edit from '../Images/edit.png';
import help from '../Images/help.png';
import setting from '../Images/setting.png';
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, signInWithGoogle } from "./firebase";
import logout from '../Images/logout.png';

import $ from 'jquery';
import './Listdesign.css';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const handleLogoClick = () => {
    setClicked(true);
    window.location.reload();
  };
  const handleDropdownToggle = () => {
    // Toggle dropdown only if the user is logged in
    if (isLoggedIn) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  const handleLogout = (event) => {
    event.preventDefault();

    signOut(auth)
      .then(() => {
        setIsLoggedIn(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };


  
  function handleSelectOption(option) {
    // Handle the selected option
    switch (option) {
      case 'user':
        // Handle selecting the "Profile" option
        navigate('/settings');
        break;
      case 'edit_profile':
        // Handle selecting the "Edit Profile" option
        navigate('/');
        break;
      case 'help':
        // Handle selecting the "Help" option
        break;
      case 'settings':
        // Handle selecting the "Settings" option
        navigate('/settings');
        break;
      case 'logout':
        // Handle selecting the "Logout" option
        handleLogout();
        break;
      default:
        break;
    }
    setIsDropdownOpen(false); // Close the dropdown
  }


  function animation() {
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top": itemPosNewAnimTop.top + "px",
      "left": itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top": itemPosNewAnimTop.top + "px",
        "left": itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }
  const [isHelpPopupOpen, setIsHelpPopupOpen] = useState(false);
  const [helpPopupPosition, setHelpPopupPosition] = useState({ top: 0, left: 0 });

  const handleHelpClick = (event) => {
    const helpButton = event.currentTarget;
    const helpButtonRect = helpButton.getBoundingClientRect();
    setIsHelpPopupOpen(!isHelpPopupOpen);
    setHelpPopupPosition({
      top: helpButtonRect.top + helpButtonRect.height,
      left: helpButtonRect.right,
    });
  };

  const handleHelpOptionClick = (option) => {
    // Handle the selected option from the help popup
    switch (option) {
      case 'hire_designer':
        navigate('/contact');

        // Handle selecting the "Hire Designer" option
        // Implement the functionality here
        break;
      case 'watch_tutorial':
        navigate('/tuotoria');

        // Handle selecting the "Watch Tutorial" option
        // Implement the functionality here
        break;
        case 'follow_instruction':
        navigate('/instruction');
                              
      default:
        break;
    }
    setIsHelpPopupOpen(false); // Close the help popup after option selection
  };

  useEffect(() => {
    animation();
    $(window).on('resize', function () {
      setTimeout(function () {
        animation();
      }, 500);
    });
  }, []);

  useEffect(() => {
    if (isHelpPopupOpen) {
      const helpButton = document.getElementById('helpButton');
      const helpButtonRect = helpButton.getBoundingClientRect();
      setHelpPopupPosition({
        top: helpButtonRect.top + helpButtonRect.height,
        left: helpButtonRect.right,
      });
    }
  }, [isHelpPopupOpen]);

  useEffect(() => {
    // Check if the user is logged in when the component mounts
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user); // Update the isLoggedIn state based on user's login status
    });

    return () => unsubscribe(); // Unsubscribe the auth state observer when component unmounts
  }, []); 

  return (
    <div className='main-section' style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
    <nav className="navbar navbar-expand-lg navbar-mainbg">

      <NavLink className="navbar-brand navbar-logo" to="/" exact onClick={handleLogoClick}>
        <img className={`logo ${clicked ? 'clicked' : ''}`} src={logo} alt='logo' />
      </NavLink>
    
      <button 
        className="navbar-toggler"
        onClick={ function(){
          setTimeout(function(){ animation(); });
        }}
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button>
 
      <div 
        className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
            
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            
            <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact>
                <i 
                className="fas fa-tachometer-alt">
                </i>Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" exact>
                <i 
                className="far fa-address-book">
                </i>Contact
              </NavLink> 
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/pricing" exact>
                <i 
                className="far fa-clone">
                </i>Pricing
              </NavLink>
            </li>


            <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio" exact>
                <i 
                className="far fa-chart-bar">
                </i> Portfolio
              </NavLink>
            </li>
          
            <li className="nav-item">
              <NavLink className="nav-link" to="/tutorial" exact>
                <i 
                className="far fa-copy">
                </i>Tutorial
              </NavLink>
            </li>


            <li className="nav-item">
              <NavLink className="nav-link" to="/register" exact>
                <i 
                className="far fa-copy">
                </i>Register
              </NavLink>
            </li>




     

        </ul>
        
      </div>



         {isLoggedIn ? ( // Show the profile icon with dropdown if the user is logged in
          <div>
            <img className="icon" src={profile_icon} alt='profile icon' onClick={handleDropdownToggle}/>
            <div className={isDropdownOpen ? "dropdown-menu show" : "dropdown-menu"}>
              <button className="dropdown-item" onClick={() => handleSelectOption('user')}>
                <img className="item-icon1" src={user} alt="profile icon" /> Profile
              </button>
              <button className="dropdown-item" onClick={() => handleSelectOption('edit_profile')}>
                <img className="item-icon1" src={edit} alt="edit icon" /> Edit Profile
              </button>
              <button id="helpButton" className="dropdown-item" onClick={handleHelpClick}>
                <img className="item-icon1" src={help} alt="help icon" /> Help
              </button>
              <button className="dropdown-item" onClick={() => handleSelectOption('settings')}>
                <img className="item-icon1" src={setting} alt="settings icon" /> Settings
              </button>
              <NavLink to="/register">
                <button className="dropdown-item" onClick={handleLogout}>
                  <img className="item-icon1" src={logout} alt="logout icon" />
                  Logout
                </button>
              </NavLink>
            </div>
          </div>
        ) : ( // Show a simple profile icon without dropdown if the user is not logged in
          <div>
            <img className="icon" src={profile_icon} alt='profile icon' />
          </div>
        )}

      </nav>

  {isHelpPopupOpen && (
        <div className="side-popup">
          <button className='helpbuttons' onClick={() => handleHelpOptionClick('hire_designer')}>Hire Designer</button>
          <button className='helpbuttons' onClick={() => handleHelpOptionClick('watch_tutorial')}>Watch Tutorial</button>
          <button className='helpbuttons' onClick={() => handleHelpOptionClick('follow_instruction')}>Follow Instruction</button>
        </div>
      )}

      <li className="nav-item1">
        <NavLink className="nav-link1" to="/footer" exact></NavLink>
      </li>
    </div>
  );
};

export default Navbar;
import React, { useState } from "react";
import "./Header.css";
import { MdOutlineMenu } from "react-icons/md";
import OutsideClickHandler from 'react-outside-click-handler';






const Header = () => {
  const[menuOpened,setMenuOpened]=useState(false);
  const menuHandler = () => {
    setMenuOpened((prev)=>{
      return(
        !prev
      )
    })
  }
  
  const hidingFunction = (menuOpened) => {
    if(document.documentElement.clientWidth <=700){
      return(
        {right:(!menuOpened && '-100%')}//{} because it is js object . automatically destructured.
      )
    }
  }
  
  
  return (
    // flex center creates flexbox in the index.css
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        {/* // we are inside the flexbox  h-container has 
        //css inside the index.css  */}
        <img width={100} src="../../../public/logo.png" alt="logo" />
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false)
          }}
        >
        <div className="flexCenter h-menu" style={hidingFunction(menuOpened)}>
        
          <a href="">Residencies</a>
          <a href="">Our values</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
          
        </div>
        </OutsideClickHandler>
      </div>
      
      <div className="menu-icon" onClick={menuHandler}>
       <MdOutlineMenu color="red" size='3rem' />
       
      </div>
    </section>
  );
};

export default Header;




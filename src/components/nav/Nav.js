import React from 'react';
import './nav.scss';
import logo from '../../assets/icons/logo.svg';
import cart from '../../assets/icons/icon-cart.svg';
import profile from '../../assets/img/image-avatar.png';
import menu from '../../assets/icons/icon-menu.svg';
import Burger from '../burgerMenu/Burger';
const Nav = () => {

    function showCart() {
        document.querySelector('.container').style.opacity = 1;
    } 

    function openMenu() {
        document.querySelector('.burger').style.visibility = 'visible'
        document.querySelector('.product').style.zIndex = -1
        document.querySelector('.App').style.backgroundColor = 'rgba(0,0,0,0.5)'
        document.querySelector('.nav__checkout-profile').style.zIndex = -1;
    }


  return (

    <div className="nav">


        <Burger></Burger>
        <div className="nav__list-items">
            
        <div className="nav__wrapper">
            
            <div className="nav__bar">
            <div className="nav__menu" onClick={openMenu}>
                <img src={menu} alt="menu" />    
            </div> 
            <div className="nav__logo">
                <img src={logo} alt="logo" />
 
            </div>
            
            <div className="nav__bar-list">
                <ul className='nav__list'>
                    <li><a href="#">Collections</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                
            </div>
            </div> 

            <div className="nav__checkout">
            
                <div className="nav__checkout-img" onClick={showCart}>
                <div className="item-count">1</div>
                    <img src={cart} alt="cart" />
                </div>
                <div className="nav__checkout-profile">
                    <img src={profile} alt="profile" />
            </div>
           
            </div>

          
        </div>
       
        </div>
      
    </div>
  )
}

export default Nav
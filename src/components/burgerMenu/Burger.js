import React from 'react'
import './burger.scss'
const Burger = () => {


    function onClose() {
        document.querySelector('.burger').style.visibility = 'hidden';
        document.querySelector('.product').style.zIndex = 1
        document.querySelector('.App').style.backgroundColor = 'white'
        document.querySelector('.nav__checkout-profile').style.zIndex = 1;
    }

  return (
    <div className='burger'>

<div className="burger__menu">
          
<div className="burger__menu-close" onClick={onClose}>
            X
          </div>
          <ul className='burger__list'>
                    <li><a href="#">Collections</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
          </div>
    </div>

  )
}

export default Burger
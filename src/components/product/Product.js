import React, {useState} from 'react'
import './product.scss'
import mainImg from '../../assets/img/image-product-1.jpg'
import imgThumb1 from '../../assets/img/image-product-1-thumbnail.jpg'
import imgThumb2 from '../../assets/img/image-product-2-thumbnail.jpg'
import imgThumb3 from '../../assets/img/image-product-3-thumbnail.jpg'
import imgThumb4 from '../../assets/img/image-product-4-thumbnail.jpg'
import cart from '../../assets/icons/icon-cart.svg'
import cart__white from '../../assets/icons/icon__cart-white.svg'
import iconDelete from '../../assets/icons/icon-delete.svg'
import Slider from '../slider/Slider'

import image2 from '../../assets/img/image-product-2.jpg'
import image3 from '../../assets/img/image-product-3.jpg'
import image4 from '../../assets/img/image-product-4.jpg'

const Product = () => {
  
    

    let [counter, setCounter] = useState(0);
    let [listView, setListView] = useState(
        <>
           <img src={mainImg} alt="mainImg" />
        </>
    )
    let [view, setView ] = useState(<> 
        <div className="container__wrapper">
        <div className="container__title">
        Cart
        </div>
        <button onClick={onClose} className="container__close">x</button>
        </div>
        <hr className='container__hr' />
    
        <div className="container__info">
        Your cart is empty.
        </div></>
    ) 


    function incCounter() {
        setCounter(counter + 1)
    }

    function decCounter() {
        if(counter > 0) {
            setCounter(counter - 1)
        }
    }

    function onClose() {
        document.querySelector('.container').style.opacity = 0;
    }

    function openModal() {
        document.querySelector('.modal').style.display = 'flex';
    }

   

    function change() {
       
        if(counter > 0) {
            document.querySelector('.item-count').style.opacity = 1;
                setView(view =
                <>
             <div className="container__wrapper">
        <div className="container__title">
        Cart
        </div>
        <button onClick={onClose} className="container__close">x</button>
        </div>
        <hr className='container__hr' />
    
        <div className="container__info">
            <div className="wrapper">
            <div className="container__info-img">
                <img src={imgThumb1} alt="imgThumb1" />
            </div>
           
            <div className="container__info-wrapper">
                <div className="container__info-title">
                Fall Limited Edition Sneakers
                </div>

                <div className="container__info-price">
                    <p>
                        $125.00 x {counter}  
                    </p>
                    <span>${counter * 125}.00</span>
                </div>

                <div onClick={onDelete} className="container__info-trashbox">
                    <img src={iconDelete} alt="iconDelete" />
                </div>
            </div>
           
           
            </div>
            <div className="container__button">
            Checkout
            </div>
        </div>
                </>)
            
        }
        
    }
   
    
    function onDelete() {
        document.querySelector('.item-count').style.opacity = 0;
        setView(view = 
            <> 
        <div className="container__wrapper">
        <div className="container__title">
        Cart
        </div>
        <button onClick={onClose} className="container__close">x</button>
        </div>
        <hr className='container__hr' />
    
        <div className="container__info">
        Your cart is empty.
        </div></>
            )
    }


  

    function imgToggle(e) {
        console.log(e.target.alt)
        if(e.target.alt === 'image1') {
       
            setListView(listView=
              <>
                <img src={mainImg} alt="image1" />
                </>
            )
           
           }
       if(e.target.alt === 'image2') {
       
        setListView(listView=
          <>
            <img src={image2} alt="image2" />
            </>
        )
       
       }
       if(e.target.alt === 'image3') {
       
        setListView(listView=
          <>
            <img src={image3} alt="image3" />
            </>
        )
       
       }
       if(e.target.alt === 'image4') {
       
        setListView(listView=
          <>
            <img src={image4} alt="image4" />
            </>
        )
       
       }
     

    }   
 
   
  return (
    
    <div className="product">
 <div className="slider">
            <Slider></Slider>
            </div>
 
       
        <div className="product__wrapper">
            
            <div className="product__img-wrapper">
                
                <div className="product__main-img" onClick={openModal}>
                   {listView}
                   
                </div>

                <ul className='product__list-img' >
                    <li>
                    <img src={imgThumb1} alt="image1" className='listImg' onClick={imgToggle} />
                    </li>
                    <li>
                    <img src={imgThumb2} className='listImg' alt="image2" onClick={imgToggle}/>
                    </li>
                    <li><img src={imgThumb3} className='listImg' alt="image3" onClick={imgToggle} /></li>
                    <li>
                    <img src={imgThumb4} className='listImg' alt="image4"onClick={imgToggle} />
                    </li>
                </ul>

            </div>
            
            <div className="product__info-wrapper">

         

            <div className="container">
            
           {view}
            </div>


            <div className="product__title">
            Sneaker Company
            </div>
            <h1 className="product__subtitle">
            Fall Limited Edition Sneakers
            </h1>
            <div className="product__descr">
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
            </div>

            <div className="price__wrapper">
            <div className="product__price-new">
                $125.00
                </div>
                <div className="product__price-discount">
                50%
                </div>
            </div>
                <div className="product__price-old">
            $250.00
            </div>

            
            <div className="product__btn">
                <div className="product__btn-counter">
                    <button onClick={decCounter} className='product__btn-dec'>-</button>
                    <p className='product__btn-output'>{counter}</p>
                    <button onClick={incCounter} className='product__btn-inc'><span>
                    +</span></button>
                </div>

                <button onClick={change} className='product__btn-add'>
                    <img src={cart__white} alt="cart" />
                    <span>Add to cart</span>
                </button>
            </div>
            </div>
            </div>
            

           
              
            </div>
          
     
   
  )
 


}


export default Product


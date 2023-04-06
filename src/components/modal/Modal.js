import React, {useState} from 'react'
import './modal.scss'
import mainImg from '../../assets/img/image-product-1.jpg'
import imgThumb1 from '../../assets/img/image-product-1-thumbnail.jpg'
import imgThumb2 from '../../assets/img/image-product-2-thumbnail.jpg'
import imgThumb3 from '../../assets/img/image-product-3-thumbnail.jpg'
import imgThumb4 from '../../assets/img/image-product-4-thumbnail.jpg'

import image2 from '../../assets/img/image-product-2.jpg'
import image3 from '../../assets/img/image-product-3.jpg'
import image4 from '../../assets/img/image-product-4.jpg'


const Modal = () => {

 
    let [listView, setListView] = useState(
        <>
           <img src={mainImg} alt="mainImg" />
        </>
    )


    function onClose() {
        document.querySelector('.modal').style.display = 'none';
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
    
    <div className="modal">
       
        <div className="product__img-wrapper modal__wrapper">
        <div className="modal__close" onClick={onClose}>X</div>
        <div className="product__main-img modal__main-img">
               {listView}
               </div>
               <ul className='product__list-img modal__list-img' >
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
        </div>
  )
}

export default Modal
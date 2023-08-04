import React, {useContext} from 'react'
import './cart-item-card.styles.css';
import { CartContext  } from '../../../App';


const CartItemCard = ( {bookData} ) => {
     
     const{ cartItems, setCartItems } = useContext(CartContext)

  const handleRemove = () => {
        console.log(bookData.id)
        setCartItems(cartItems.filter((item) => item.id!== bookData.id))
  }

  return (
      <sections className='cart-item'> 
           <div className='cart-item-img-container'>
               < img src={bookData.book_url} alt="cart-item-img" className='cart-item-img'/>
           </div>
           <div className='cart-item-content-container'>
            <h2>{ bookData.book_name}</h2>
            <br></br>
            <p>{bookData.author_name}</p>
            <h3 className='cart-item-price'><b>Rs </b>{bookData.price}</h3>

            <button onClick={handleRemove} className='delete-btn'>Remove From Cart</button>
           </div>
        </sections>
    
  )
}

export default CartItemCard

import React, {useContext} from 'react'
import './cart-items-container.styles.css';
import CartItemCard from '../../cards/cart-item-card/CartItemCard';
import { CartContext } from '../../../App';

const CartItemsContainer = () => {
  const { cartItems, totalAmount } = useContext(CartContext);



  return (
   <section className='cart-items-container'>
      <div className='container'>
        {totalAmount===0 ? (
          <h2>currently your cart is empty</h2>
        ):(
          <React.Fragment>
            <h2>Cart</h2>

            {cartItems.map((item)=> (
             <CartItemCard key={item.id} bookData={item}/>
             ))}

            <h2>Total Amount= Rs{totalAmount}</h2>
              <button className='proccedbtn'>Proceed to Checkout</button>
          </React.Fragment>

        )}
      </div>
   </section>
  )
}

export default CartItemsContainer

// Write your code here
import {Popup} from 'reactjs-popup'
import Payment from '../Payment'
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalAmount = cartList.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      )

      const totalItems = cartList.reduce((acc, item) => acc + item.quantity, 0)
      return (
        <div className="order-summary">
          <h1>Order Total: Rs {totalAmount}/-</h1>
          <p>{totalItems} items in cart</p>
          <Popup
            modal
            trigger={
              <button className="checkout-btn" type="button">
                Checkout
              </button>
            }
            position="top left"
          >
            {close => <Payment close={close} />}
          </Popup>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary

// Write your code here
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
          <button type="button" className="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary

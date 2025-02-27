import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, totalValue } = useContext(CartContext);
  const [orderStatus, setOrderStatus] = useState("shopping"); // shopping, confirming, paid

  const handleConfirmOrder = () => {
    if (cartItems.length === 0) return;
    setOrderStatus("confirming");
  };

  const handlePayment = () => {
    setOrderStatus("paid");
    setTimeout(() => {
      clearCart();
      setOrderStatus("shopping");
    }, 5000);
  };

  return (
    <div className="cart-container">
      <h2>Giỏ hàng</h2>
      
      {orderStatus === "paid" && (
        <div className="notification success">
          <p>🎉 Payment successful! Thank you for your order.</p>
          <p>Your delicious food will be prepared shortly.</p>
        </div>
      )}

      {cartItems.length === 0 && orderStatus === "shopping" ? (
        <p className="empty-cart-message">Giỏ hàng của bạn đang trống.</p>
      ) : orderStatus === "confirming" ? (
        <div className="order-confirmation">
          <h3>Confirm Your Order</h3>
          <div className="order-summary">
            {cartItems.map((item) => (
              <div key={item.id} className="confirmation-item">
                <span>{item.name}</span>
                <span>${item.price}</span>
              </div>
            ))}
            <div className="confirmation-total">
              <span>Total:</span>
              <span>${totalValue}</span>
            </div>
          </div>
          <div className="payment-actions">
            <button className="payment-btn" onClick={handlePayment}>
              Process Payment
            </button>
            <button className="cancel-btn" onClick={() => setOrderStatus("shopping")}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">${item.price}</div>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <div className="cart-total">
              <span>Tổng số món:</span>
              <span>{cartItems.length}</span>
            </div>
            <div className="cart-total">
              <span>Tổng giá trị:</span>
              <span className="cart-value">${totalValue}</span>
            </div>
            <button className="confirm-order-btn" onClick={handleConfirmOrder}>
              Confirm Order
            </button>
            <button className="clear-cart-btn" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
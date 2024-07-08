
import styled from 'styled-components'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import {
  clearCart,
  removeItem,
  increaseAmount,
  decreaseAmount,
  calculateTotals
} from '../featured/cartSlice';
import { RootState, AppDispatch } from './store';
import { CartItemType } from './features/cart/cartSlice'; 
import { useEffect } from 'react';

const Cart = () => {
  const dispatch: AppDispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const total = useSelector((state: RootState) => state.cart.total)

 // Calculate totals
  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems, dispatch])
  
const handleRefresh = () => {
    window.location.reload();
  };

  if (cartItems < 1) {
    return (
          <Wrapper> 
            <div className='cart-empty'>
                <header>
                    <h2>your bag</h2>
                    <h4 className='empty-cart'>
                        is current empty
                    </h4>
                      <button className='btn btn2' onClick={handleRefresh}>Refresh</button>
                </header>
            </div>
          </Wrapper>
        )
    }

  return (
  <Wrapper>
      <div className='cart-section'>
        <h2 className='main-title'>Your Bag</h2>
        <div className='cart-items'>
          {cartItems.map((item: CartItemType) => (
            <div className='item' key={item.id}>
              <div className='left'>
                <img src={item.img} className='img' alt={item.title} />
                <div className='product'>
                  <p className='name'>{item.title}</p>
                  <p className='price'>${item.price}</p>
                  <button
                    className='remove-btn'
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    remove
                  </button>
                </div>
              </div>
              <div className='right'>
                <IoIosArrowUp className='icon'
                onClick={() => dispatch(increaseAmount(item.id))}
                />
                <span className='amount'>{item.amount}</span>
                <IoIosArrowDown className='icon'
                onClick={() => dispatch(decreaseAmount(item.id))}
                />
              </div>
            </div>
          ))}
        </div>
        <div className='price-tab'>
          <div className='underline'></div>
          <div className='total'>
            <p>Total</p>
            <p>${total.toFixed(2)}</p>
          </div>
        </div>
        <button className='btn' onClick={() => dispatch(clearCart())}>Clear Cart</button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #282828;

  .cart-section {
    padding: 2rem;
  }

  .cart-items {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #3a3a3a;
    padding: 1rem;
    border-radius: 8px;
  }

  .left {
    display: flex;
    gap: 1rem;
  }

  .img {
    width: 100px;
    height: 100px;
    object-fit: center/contain;
    border-radius: 8px;
  }

  .product {
    color: #ffffff;
    text-transform: capitalize;
    font-weight: 400;
    letter-spacing: 1px;
  }

  .name {
    margin: 0;
  }

  .price {
    margin: 0.5rem 0;
  }

  .remove-btn {
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    color: #ff6a6a;
  }

  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .icon {
    font-size: 1.5rem;
    color: #ffffff;
    cursor: pointer;
  }

  .amount {
    font-size: 1.2rem;
    color: #ffffff;
    margin: 0.5rem 0;
  }

  .main-title {
    padding-top: 2rem;
    margin-bottom: 2rem;
    text-align: center;
    color: #ffffff;
    font-weight: bold;
  }

  .total {
    display: flex;
    justify-content: space-between;
    color: #ffffff;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  .underline {
    margin: 0 auto;
    height: 5px;
    width: 100%;
    background-color: #ffffff;
    margin-bottom: 1rem;
  }

  .btn {
    display: block;
    margin: 0 auto;
    padding: 10px 20px;
    background-color: #fc1f1f;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    color: white;
    text-transform: uppercase;
  }
  // IF CART
  .cart-empty{
    width: 100%;
    height: 100vh;
    color: #ffffff;
    background-color: #282828;
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .btn2{
    background-color: #001ec8;
  }
`;

export default Cart
import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState} from './store';
const Navbar = () => {
  const amount = useSelector((state: RootState) => state.cart.amount);

  return (
    <Wrapper>
      <div className='section'>
        <h2 className='main-title'>Redux typescript cart </h2>
        <div className='cart-container'>
          <FaShoppingCart className='cart-item' />
          <span className='amount'>{amount}</span>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 65px;
  color: #ffffff;
  background-color: #2b2b2b;
  border-bottom: 1px solid white;
  position: -webkit-sticky; /* For Safari */
  position: sticky;
  top: 0;
  z-index: 1000;

  .section{
   
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 60rem;
  }

  .main-title{
    text-transform: uppercase;
    font-size: 1.5rem;
    margin-top: 1rem;
  }

  .cart-container{
    position: relative;
    display: flex;
    align-items: center;
  }

  .cart-item{
    font-size: 2rem;
  }

  .amount{
    color: #ffffff;
    background-color: #ff5f03;
    border-radius: 50%;
    padding: 0.2rem 0.5rem;
    position: absolute;
    top: -10px;
    right: -10px;
    font-size: 0.75rem;
  }
`

export default Navbar
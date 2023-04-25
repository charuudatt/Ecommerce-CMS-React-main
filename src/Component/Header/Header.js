import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { CartContext } from "../context/CartProvider";
import "./Header.css"
import logo from "../../logo/logo.jpg"
function Header(){
const {cartData} = useContext(CartContext);
const navigate = useNavigate();
return(
    <>
        <nav className="navbar">
            <div className="logo">
            <img src={logo} className="logoimg"/>
             <h1 className='name'> ANIKET's Shopee</h1>
            </div>
            <div className='right'>
                 <input type="search" className='search' placeholder='search'/>
                 <section className='right-section' onClick={()=> {navigate('/cart')}}>
                      <span className='cartdatalength'>{cartData.length}</span>
                      <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                </section>
            </div>
        </nav>
        <div className='container'>
      <header>
       <div className='textHeader'>
        <h1>Welcome to Ap's ShoppingHouse ... !</h1>
        <p>Enjoy the online shopping</p>
       </div>
      </header>
      <hr/>
    </div>
    </>
  )
}

export default Header

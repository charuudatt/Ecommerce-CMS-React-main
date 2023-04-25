import React, { useCallback, useContext } from 'react'
import { CartContext } from "../context/CartProvider";
import useRazorpay from "react-razorpay";
import "./Cart.css"
import { useNavigate } from 'react-router-dom';

function Cart() {
let Tprice = 0;
const navigate = useNavigate();
const {cartData} = useContext(CartContext);
{cartData.map((item)=>Tprice+=item.price)}
const RazorPay = useRazorpay();
console.log(cartData)
  const razorPayDisplay = useCallback(async (total)=> {
    const options = {
      key: "rzp_test_nPJ2IfCvq5G0Zq",
      amount: total*100,
      currency: "INR",
      name: "AP's ShopHouse",
      description: "Gaming/Fangear Transaction",
      handler: (res)=> {
          console.log(res);
          if(res.razorpay_payment_id){
            window.location.href = '/';
          }
      },
      prefill: {
          name: "Aniket Patil",
          email: "aniketpatil6400@gmail.com",
          contact: "9874563210"
      
      },
      notes: {
          address: "work address"
      },
      theme: {
          color: "#3399cc",
      },
  }
  const rzp1 = new RazorPay(options);
  rzp1.open();
  
}, [RazorPay])

  return (
    <div className="cartContainer">
      <div className="cartDetails">
      
        {cartData.length > 0?(
          cartData.map((cartItem,id)=>(
            <div className="cart" key={id}>
              <span className="cart-img">
            <img src={`http://localhost:1337${cartItem?.image?.data?.attributes?.url}`} alt=""/>
              </span>
              <span className="cart-product-name">{cartItem.title}</span>
              <span className="cart-product-price">Rs{cartItem.price}</span>
            </div>
          ))
        )
        :(
          <div className='else'>
            <h2> To Make Yourself Happy...!</h2>
            <div  className=" btn add-to-cart" onClick={()=> {navigate('/')}}>Go to shopping</div>
          </div>
        )}
      </div>
      <div>
          <div className="Cart-Summary">
            <div className="summary">
              <h3>Billing Information</h3>
              <div className="total-items">
                <div className="items"> Total Items :</div>
                <div className="item-count">{cartData.length}</div>
              </div>

              <div className="total-price-section">
                <div className="just-title">Total Price: </div>
                <div className="item-price"> Rs.{Tprice}</div>
              </div>

              <div className="stripe-section">
              <div className="add-to-cart" onClick={()=>{razorPayDisplay(Tprice)}}>Make a Payment</div>
              <div  className="add-to-cart" onClick={()=> {navigate('/')}}>Add More itmes</div>
              </div>
            </div>
          </div>
        
      </div>
    </div>
  );
}

export default Cart



import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import "./Item.css";

const Item = ({ title, description, price, image }) => {
  const { addCartData } = useContext(CartContext);
  const data = { title, description, price, image }
  const handleClick = () => {
    addCartData(data);
  };
  return (
    <>
      <div className="container">
         <div className="products-container">
          <div className="product">
            <div className="Cover">
              <div className="product-image">
              <div className='new'>NEW</div>
                <img
                  src={`http://localhost:1337${image?.data?.attributes?.url}`}
                  alt="game"
                />
              </div>
              <div className="productDetails">
                <div className="product-name">
                  <h3>{title}</h3>
                  <h4>{description}</h4>
                </div>
                <div className="product-price">
                  <p>Rs.{price}.00</p>
                </div>
              </div>
              <div
              className="add-to-cart"
              onClick={() => {
                handleClick();
              }}
            >
              Add to Cart
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};
export default Item;

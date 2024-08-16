
 import Menu from "/images/icon-menu.svg"
 import Logo from "/images/logo.svg"
 import Close from "/images/icon-close.svg"
 import Cart from "/images/icon-cart.svg"
 import Avatar from "/images/image-avatar.png"
 import productthumbnail1 from "/images/image-product-1-thumbnail.jpg"
 import Delete from "/images/icon-delete.svg"
 import { Link } from "react-router-dom"
import { useState } from "react";

const Navigation = (props) => {
  const [toggleNav, setToggleNav] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);
  const [checkout, setCheckout] = useState(false);

  // SHOW/HIDE NAV ON MOBILE
  const toggleMenu = () => {
    setToggleNav((prevState) => !prevState);
  };

  // SHOW/HIDE CART
  const showCart = (e) => {
    e.preventDefault();
    setToggleCart((prevState) => !prevState);
  };

  // DELETE CART ITEMS
  const handleDeleteItems = () => {
    return props.setCartCount(0);
  };

  // CHECKOUT BUTTON IN BASKET
  const handleCheckout = () => {
    setCheckout((prevState) => !prevState);
    props.setCartCount(0);
  };

  return (
    <nav className={toggleNav ? "nav fade" : "nav"}>
      <div className="primary-nav">

        {/* MENU TOGGLE AND LOGO */}
        
        <div className={toggleNav ? "hide toggle" : "toggle"}>
          <button className="menu-toggle" onClick={toggleMenu}>
            <img src={Menu} alt="menu-toggle" />
          </button>

       <Link to="/Product">  <img className="logo" src={Logo} alt="logo" />    </Link>
        
        </div>

        {/* NAV LINKS */}
        <ul className={toggleNav ? "nav-links show-nav" : "nav-links"}>
          <li
            onClick={toggleMenu}
            className={toggleNav ? "nav-link" : "nav-link hide"}
          >
            <button className="close-btn">
              <img src={Close} alt="close navbar" />
            </button>
          </li>

         
          <li className="nav-link">
            <Link to="/collections">Collections</Link>
            
          </li>
          <li className="nav-link">
            <Link to= "/men">Men</Link>
           
          </li>
          <li className="nav-link">
            <Link to="/woman">Woman</Link>
           
          </li>
          <li className="nav-link">
            <Link to="/about"></Link>
           
          </li>
          <li className="nav-link" >
            <Link to="/contact">Contact</Link>
          
          
          </li>
        </ul>
      </div>

      {/* CART AND ACCOUNT LINKS */}
      <ul
        className={
          toggleNav
            ? "secondary-links secondary-links-align"
            : "secondary-links"
        }
      >
        <li className="cart" onClick={showCart}>
          <p className={props.cartCount ? "cart-count" : "hide"}>
            {props.cartCount}
          </p>
          <a href="/">
            <img src={Cart} alt="cart" />
          </a>
        </li>
        <li className="account">
          <a href="/">
            <img
              className="avatar"
              src={Avatar}
              alt="avatar"
            />
          </a>
        </li>
      </ul>
      <div className={toggleCart ? "cart-container" : "cart-container hide"}>
        <h2>Cart</h2>
        <div
          className={
            props.cartCount ? "cart-items basket-layout" : "cart-items"
          }
        >
          {props.cartCount ? (
            <div className="checkout-items">
              <div className="item">
                <img
                  src={ productthumbnail1}
                  alt="checkout product"
                />
                <div className="item-desc">
                  <p>Fall Limited Edition Sneakers</p>
                  <p>
                    $125 x {props.cartCount}{" "}
                    <span className="total">
                      {" "}
                      - Total: ${125 * props.cartCount}
                    </span>
                  </p>
                </div>
                <img
                  className="delete-btn"
                  src={Delete}
                  alt="delete"
                  onClick={handleDeleteItems}
                />
              </div>
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          ) : (
            <p>{checkout ? "Checkout successful!" : "Your cart is empty"}</p>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
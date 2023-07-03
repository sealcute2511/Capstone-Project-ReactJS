import { Link, Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <div>
      <div id="header">
        <div className="header-logo">
          <img src="/images/head_logo.png" alt="Head Logo" />
        </div>
        <div className="right-action">
          <div className="action action-cart">
            <span className="material-icons-outlined">shopping_cart</span>
          </div>
          <div className="action action-login">
            <a href="">Login</a>
          </div>
          <div className="action action-register">
            <a href="">Register</a>
          </div>
        </div>
      </div>

      <div id="menu-top">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Men</a>
          </li>
          <li>
            <a href="">Woman</a>
          </li>
          <li>
            <a href="">Kid</a>
          </li>
          <li>
            <a href="">Sport</a>
          </li>
        </ul>
      </div>

      <Outlet />

      <div className="menu-footer menu-footer-1">
        <div className="container">
          <div className="list-menu">
            <div className="menu menu-1">
              <h5 className="text-uppercase">Get Help</h5>
              <div className="menu-link">
                <a href="">Contact Us</a>
                <a href="">Shopping</a>
                <a href="">NIKEiD</a>
                <a href="">Nike+</a>
              </div>
            </div>
            <div className="menu menu-2">
              <h5 className="text-uppercase">Orders</h5>
              <div className="menu-link">
                <a href="">Payment Options</a>
                <a href="">Shipping and delivery</a>
                <a href="">Returns</a>
              </div>
            </div>
            <div className="menu menu-3">
              <h5 className="text-uppercase">Register</h5>
              <div className="menu-link">
                <p>Create one account to manage everything you do with Nike, form your shopping preferences to
                  you Nike+ activitiy</p>
                <a href="" className="highlight">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="menu-footer menu-footer-2">
        <div className="container">
          <div className="list-menu">
            <div className="menu menu-1">
              <h5 className="text-uppercase">Email Sign Up</h5>
              <div className="menu-link">
                <p>Be the first to know about new products an special offers</p>
                <a href="" className="highlight">Sign up now</a>
              </div>
            </div>
            <div className="menu menu-2">
              <h5 className="text-uppercase">Gift cards</h5>
              <div className="menu-link">
                <p>Give the gift that aways fits</p>
                <a href="" className="highlight">View cards</a>
              </div>
            </div>
            <div className="menu menu-3">
              <h5 className="text-uppercase">Stores near you</h5>
              <div className="menu-link">
                <p>Locate a Nike retail store of authorized retailer</p>
                <a href="" className="highlight">Search</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <span>© 2022 Cybersoft All Rights Reserved | Design Theme by Trương Tấn Khải.</span>
      </div>
    </div>
  );
}

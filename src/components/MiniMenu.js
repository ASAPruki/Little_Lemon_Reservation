import miniMenu from "../styles/miniMenu.css";
import salad from "../images/salad.avif";
import bruchetta from "../images/bruchetta.avif";
import lemonDessert from "../images/lemonDessert.avif";
import { Link } from "react-router-dom";

export default function MiniMenu() {
  return (
    <section id="menu-section">
      <div id="container">
        <div id="highlights">
          <h3>This weeks specials!</h3>
          <Link to="/menu">
            <button className="button2">Online Menu</button>
          </Link>
        </div>
        <div id="cards">
          <div className="card-item">
            <img src={salad} />
            <div className="item-wrapper">
              <div className="title-price">
                <h4 className="item-title">Greek Salad</h4>
                <h4 className="item-price">$12.99</h4>
              </div>
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and
                our chicago style feta cheese. Garnished with crunchy garlic.
              </p>
              <button className="button2">Order For Delivery</button>
            </div>
          </div>
          <div className="card-item">
            <img src={bruchetta} />
            <div className="item-wrapper">
              <div className="title-price">
                <h4 className="item-title">Bruchetta</h4>
                <h4 className="item-price">$5.99</h4>
              </div>
              <p>
                A Bruchetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil
              </p>
              <button className="button2">Order For Delivery</button>
            </div>
          </div>
          <div className="card-item">
            <img src={lemonDessert} />
            <div className="item-wrapper">
              <div className="title-price">
                <h4 className="item-title">Lemon Dessert</h4>
                <h4 className="item-price">$5.00</h4>
              </div>
              <p>
                This comes straight from grandma's recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined
              </p>
              <button className="button2">Order For Delivery</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

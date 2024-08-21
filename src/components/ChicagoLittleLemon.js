import chicagoLittleLemon from "../styles/chicagoLittleLemon.css";
import food from "../images/food.jpg";
import { Link } from "react-router-dom";

export default function ChicagoLittleLemon() {
  return (
    <section id="little-lemon">
      <div id="hero-container">
        <div id="hero-detail">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="./reservation">
            <button id="button1">Reserve a table</button>
          </Link>
        </div>
        <div id="hero-image">
          <img id="food" src={food} />
        </div>
      </div>
    </section>
  );
}

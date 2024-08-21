import testimonials from "../styles/testimonials.css";
import star from "../images/star.png";
import omar from "../images/omar.jpeg";
import georges from "../images/geo.png";
import karim from "../images/yaghi.png";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="headlines">
          <h2>Testimonials</h2>
          <h4>Read what others have to say about us!</h4>
        </div>
        <div className="reviews">
          <div className="review">
            <div className="wrapper">
              <img className="client" src={omar} />
              <div className="client-details">
                <h5>Omar</h5>
                <span className="stars">
                  5
                  <img src={star} />
                </span>
                <p>
                  <span className="quote">" </span>
                  This is the best Mediterranean food that I've ever had!
                  <span className="quote"> "</span>
                </p>
              </div>
            </div>
          </div>
          <div className="review">
            <div className="wrapper">
              <img className="client" src={karim} />
              <div className="client-details">
                <h5>Karim</h5>
                <span className="stars">
                  4.5
                  <img src={star} />
                </span>
                <p>
                  <span className="quote">" </span>I just landed from a 4 hour
                  flight and the first thing I did was come here to eat, the
                  food here is amazing.
                  <span className="quote"> "</span>
                </p>
              </div>
            </div>
          </div>
          <div className="review">
            <div className="wrapper">
              <img className="client" src={georges} />
              <div className="client-details">
                <h5>Georges</h5>
                <span className="stars">
                  5
                  <img src={star} />
                </span>
                <p>
                  <span className="quote">" </span>
                  The Greek salad really hits different here at Little Lemon. I
                  recommend eating here if you're a food enthusiast
                  <span className="quote"> "</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

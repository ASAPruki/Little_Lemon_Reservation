import aboutUs from "../styles/aboutUs.css";
import pic1 from "../images/MarioAdrian1.jpg";
import pic2 from "../images/MarioAdrian2.jpg";

export default function AboutUs() {
  return (
    <section id="about-us">
      <div className="about-us-container">
        <div className="about-us-details">
          <h2>Our Story</h2>
          <p>
            Little Lemon is owned by two Italian brothers, Mario and Adrian, who
            moved to the United States to pursue their shared dream of owning a
            restaurant.
            <br />
            <br />
            To craft the menu, Mario relies on family recipes and his experience
            as a chef in Italy. Adrian does all the marketing for the restaurant
            and led the effort to expand the menu beyond classic Italian to
            incorporate additional cuisines from the Mediterranean region.
          </p>
        </div>
        <div className="image">
          <img src={pic1} />
          <img src={pic2} />
        </div>
      </div>
    </section>
  );
}

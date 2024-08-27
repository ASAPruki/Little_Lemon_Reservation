import "../styles/reservation.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Reservation() {
  const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result);
      }, 1000);
    });
  };
  const submitAPI = function (formData) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  };

  const formInitialState = {
    date: "",
    time: "",
    numberOfCustomers: 1,
    specialInstruction: "",
    fullname: "",
    email: "",
    phone: "",
  };

  const [formData, setFormData] = useState(formInitialState);

  const [errors, setErrors] = useState({});
  const [availableTimes, setAvailableTimes] = useState([]);

  const [shouldShowAlert, setShouldShowAlert] = useState(false);

  const updateFormData = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));

    if (name === "date") {
      fetchAvailableTimes(new Date(value));
    }
  };

  const fetchAvailableTimes = (date) => {
    fetchAPI(date).then((response) => {
      setAvailableTimes(response);
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.fullname) errors.fullname = "Full Name is required";
    if (!formData.email) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.phone) errors.phone = "Phone Number is required";
    if (!formData.date) errors.date = "Date is required";
    if (!formData.time) errors.time = "Time is required";

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      submitAPI(formData).then((response) => {
        if (response) {
          setFormData(formInitialState);
          setShouldShowAlert(true);
        }
      });
    }
  };

  const incrementGuests = () => {
    setFormData((prevData) => ({
      ...prevData,
      numberOfCustomers:
        prevData.numberOfCustomers >= 10 ? 10 : prevData.numberOfCustomers + 1,
    }));
  };

  const decrementGuests = () => {
    setFormData((prevData) => ({
      ...prevData,
      numberOfCustomers:
        prevData.numberOfCustomers > 1 ? prevData.numberOfCustomers - 1 : 1,
    }));
  };

  return (
    <div>
      <Nav />

      {shouldShowAlert && (
        <div className="alert">
          <h1>Form Submitted Successfully!</h1>
        </div>
      )}

      <div className="reservation-form">
        <form onSubmit={handleSubmit}>
          <h2>Reserve Table</h2>

          <label htmlFor="date">
            Date
            <sup>*</sup>
          </label>
          <input
            type="date"
            name="date"
            id="date"
            min={new Date().toISOString().split("T")[0]}
            onChange={updateFormData}
            value={formData.date}
          />
          {errors.date && <p style={{ color: "red" }}>{errors.date}</p>}

          <br />

          <label htmlFor="time">
            Time
            <sup>*</sup>
          </label>
          <select
            name="time"
            id="time"
            value={formData.time}
            onChange={updateFormData}
          >
            <option value="">Select a time</option>
            {availableTimes.map((time, index) => (
              <option key={index}>{time}</option>
            ))}
          </select>
          {errors.time && <p style={{ color: "red" }}>{errors.time}</p>}

          <div className="number-of-guests">
            <label>Number of Guests</label>
            <div className="number">
              <span onClick={decrementGuests}>-</span>
              <h5>{formData.numberOfCustomers}</h5>
              <span onClick={incrementGuests}>+</span>
            </div>
          </div>

          <textarea
            cols={30}
            rows={10}
            placeholder="Special Instruction..."
            name="specialInstruction"
            value={formData.specialInstruction}
            onChange={updateFormData}
          ></textarea>

          <h2>Contact Info</h2>

          <label htmlFor="fullname">
            Full Name
            <sup>*</sup>
          </label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            value={formData.fullname}
            onChange={updateFormData}
          />
          {errors.fullname && <p style={{ color: "red" }}>{errors.fullname}</p>}

          <br />

          <label htmlFor="email">
            Email
            <sup>*</sup>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={updateFormData}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

          <br />

          <label htmlFor="phone">
            Phone Number
            <sup>*</sup>
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={updateFormData}
          />
          {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}

          <button type="submit" className="submitbtn">
            Confirm Booking
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

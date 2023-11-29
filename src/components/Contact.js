import React, { useState } from "react";
import axios from "axios";
import "./main.css";
import s3 from "../components/assets/images (13).jpeg";
import { Link, useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    time: "",
    about: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({ name: "", email: "", phone: "", time: "", about: "" });
    try {
      const responce = await axios.post(
        "http://localhost:3001/submit",
        formData
      );
      console.log(responce.data);
    } catch (element) {
      console.log(element.message);
    }
    alert("Successfully Added");
    navigate('/')
  };

  return (
    <div className="App container mx-auto text-center my-4">
      <div className="row" id="contact">
        <div className="col-md-7 ">
          <h3 className="mt-4 pt-3 text-white">Contact Us</h3>
          <form
            className="my-4 "
            onSubmit={handleSubmit}
            method="post"
            action="/submit"
          >
            <label className="text-white">
              Name :
              <input
                type="text"
                name="name"
                required
                className="ms-3 py-1"
                placeholder="Enter your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <br />

            <label className="mt-4 text-white">
              Email :
              <input
                type="email"
                name="email"
                className="ms-4 py-1"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <br />
            <label className="mt-4 text-white">
              Phone :
              <input
                type="tel"
                name="phone"
                required
                className="ms-3 py-1"
                placeholder="Enter your Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </label>
            <br />
            <label className="mt-4 me-4  text-white">
              Date&Time:
              <input
                type="datetime-local"
                name="time"
                required
                value={formData.time}
                className=" ms-2  py-1 text-muted"
                onChange={handleChange}
              />
            </label>
            <br />
            <label className="mt-4 text-white">
              Message :
              <textarea
                name="about"
                required
                className="ms-1 me-2 py-1"
                placeholder="Describe Here.."
                value={formData.about}
                onChange={handleChange}
              />
            </label>
            <br />
            <button
              type="submit"
              className="my-3 btn btn-success"
            >
              Submit Now...
            </button>
          </form>
        </div>
        <div className="col-md-4">
          <h2 className="text-white mb-4">Satisfied Customers...</h2>
          <img src={s3} width={350} alt="Customers" />
          <p className="mt-3 text-white">
            For More Details...
            <Link
              className=" text-info"
              to="https://www.linkedin.com/in/vignesh-g-a92a28244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            >
              Click
            </Link>
            <br />
            <p className="text-white">Phone:+919876543210</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

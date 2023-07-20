import React from "react";
import "../styles/Contact.css";
import BannerImage from "../assets/4.jpg";
const Contact = () => {
  return (
    <div className="contact">
      <div
        className="left-side"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="right-side">
        <h1>bizimle iletişime geçin</h1>
        <form action="">
          <label htmlFor="">ad soyad</label>
          <input
            type="email"
            name="name"
            placeholder="lütfen adınızı soyadınızı giribiz"
          />
          <label htmlFor="">email</label>
          <input
            type="text"
            name="email"
            placeholder="lütfen  emailinizi giribiz"
          />
          <label htmlFor="">mesajınız</label>
          <textarea
            type="text"
            name="name"
            placeholder="lütfen mesajınızı giribiz"
            rows="6"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;

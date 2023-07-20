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
        <h1>Bizimle İletişime Geçin</h1>
        <form action="">
          <label htmlFor="">Ad Soyad</label>
          <input
            type="email"
            name="name"
            placeholder="Lütfen Adınızı Soyadınızı Giribiz"
          />
          <label htmlFor="">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Lütfen  Emailinizi Giribiz"
          />
          <label htmlFor="">Mesajınız</label>
          <textarea
            type="text"
            name="name"
            placeholder="Lütfen Mesajınızı Giriniz"
            rows="6"
          />
          <button className="contact-button">Gönder</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

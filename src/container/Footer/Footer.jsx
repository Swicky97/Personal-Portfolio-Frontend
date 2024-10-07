import React, { useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import emailjs from 'emailjs-com';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    let errors = {};
    if (!name.trim()) errors.name = 'Name is required';
    if (!email.trim()) errors.email = 'Email is required';
    if (!message.trim()) errors.message = 'Message is required';

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return; 
    }

    setLoading(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAILJS_API_KEY
    )
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <>
      <h2 className="head-text">Let's Chat!</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:chaseswick@gmail.com" className="p-text">chaseswick@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (304) 591-2926" className="p-text">+1 (304) 591-2926</a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form">
          <div>
            <input
              className={`p-text ${errors.name ? 'error' : ''}`}
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
              required
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>
          <div>
            <input
              className={`p-text ${errors.email ? 'error' : ''}`}
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
              required
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>
          <div>
            <textarea
              className={`p-text ${errors.message ? 'error' : ''}`}
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}   
              required
            />
            {errors.message && <span className="error-text">{errors.message}</span>}
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thanks for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg',
);

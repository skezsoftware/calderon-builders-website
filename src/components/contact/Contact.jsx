import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import './contact.css'

const Contact = () => {
    return (
      <section className="contact">
        <h2>Get In Touch</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>youremail@example.com</h5>
              <a href="mailto:youremail@example.com" target="_blank" rel="noreferrer">Send a message</a>
            </article>
  
            <article className="contact__option">
              <RiMessengerLine className="contact__option-icon" />
              <h4>Messenger</h4>
              <h5>your.profile</h5>
              <a href="https://m.me/your.profile" target="_blank" rel="noreferrer">Send a message</a>
            </article>
  
            <article className="contact__option">
              <BsWhatsapp className="contact__option-icon" />
              <h4>WhatsApp</h4>
              <h5>+123456789</h5>
              <a href="https://api.whatsapp.com/send?phone=123456789" target="_blank" rel="noreferrer">Send a message</a>
            </article>
          </div>
  
          <form>
            <input type="text" name="name" placeholder="Your Full Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>
    )
  }

export default Contact;

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "../components/Modal";

export default function Contact() {
  const [isShown, setIsShown] = useState(false);

  const nameInput = React.useRef();
  const emailInput = React.useRef();
  const messageInput = React.useRef();
  const form = useRef();

  const resetForm = () => {
    nameInput.current.value = "";
    emailInput.current.value = "";
    messageInput.current.value = "";
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setIsShown((current) => !current);
    setTimeout(resetForm, 500);
  };

  return (
    <div className="Contact fade-in">
      {isShown && (
        <Modal
          name={nameInput.current.value}
          email={emailInput.current.value}
          message={messageInput.current.value}
        />
      )}
      <article className="contact-form">
        <h4>Get in touch</h4>
        <br />
        <p>
          Hey there! 👋 Whether you want to say hi, drop a comment, share how
          you stumbled upon my page, or ask a question – I'm all ears! Your
          feedback is greatly appreciated. Feel free to reach out; I'm excited
          to connect with you! 🌟💬
        </p>
        <br />
        <form ref={form} onSubmit={sendEmail}>
          {/* <p> Name:</p> */}
          <input
            type="text"
            name="user_name"
            ref={nameInput}
            placeholder="Name"
            required
          />
          {/* <p>Email:</p> */}
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            ref={emailInput}
            required
          />
          {/* <p>Message:</p> */}
          <textarea
            name="message"
            rows="3"
            placeholder="Message"
            ref={messageInput}
            required
          />
          <input type="submit" value="send" className="outline send-button" />
        </form>
      </article>
      <div>
        <article className="email-socials-article">
          <h4>Email and Socials</h4>
          <br />
          <p>
            Hey! 🌟 Thanks for stopping by! Want to stay connected? Feel free
            reach out on my social media links below. Let's connect and share
            ideas! 🚀💡
          </p>
          <div className="Contact-Options">
            <div>
              <a href="mailto:napoleon_soro@rocketmail.com">Email</a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/marksoro">LinkedIn</a>
            </div>
            <div>
              <a href="https://github.com/m-soro/">GitHub</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

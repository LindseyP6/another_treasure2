import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useHistory } from 'react-router-dom';

function EmailForm() {
    const form = useRef();
    const history = useHistory();


    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_4nwn4nh', 'template_cpw7c0u', form.current, '_5ChwLXwfEmFLcvA1')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        })
        .then(alert("Thank you for your email!"))
        history.push(0)
    };
  
    return (
      <form ref={form} onSubmit={sendEmail} className="emailForm">
        <h1>Send Us an Email!</h1>
            <label>Name</label>
            <br></br>
            <input type="text" name="user_name" />
            <br></br>
            <label>Email</label>
            <br></br>
            <input type="email" name="user_email" />
            <br></br>
            <label>Message</label>
            <br></br>
            <textarea name="message" />
            <br></br>
            <button 
                type="submit"
                name="submit"
                value="Send!"
                className="submit"> 
                <strong>Send!</strong>
            </button>
      </form>
    );
  }

export default EmailForm
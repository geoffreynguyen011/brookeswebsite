import React, {useState} from 'react';
import './App.css';

function Contact() {
  return (
      <main class='main-contact'>
        <h1 className='h1-contact'>Contact</h1>
          <form>
              <label>
                <h3>Name</h3>
                  <input type='text' class='name'></input>
                  <br />
                <h3>Email</h3>
                  <input type='text' class='email'></input>
                  <br />
                <h3>Subject</h3>
                  <input type='text' class='subject'></input>
                  <br />
                <h3>Message</h3>
                  <input type='text' class='message'></input>
                  <br />
              </label>
          </form>
      </main>
  );
}

export default Contact;

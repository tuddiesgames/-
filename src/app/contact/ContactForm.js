// ContactForm.js
'use client';

import React from 'react';
import emailjs from 'emailjs-com';
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from '../../../emailjs-config';

const ContactForm = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
    e.target.reset();
  };

  return (
    <div className="p-8 rounded-md shadow-md mt-8 w-full max-w-lg">
      <form onSubmit={sendEmail} className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input type="text" name="user_name" className="w-full px-4 py-2 border rounded-md" required />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input type="email" name="user_email" className="w-full px-4 py-2 border rounded-md" required />
        </div>
        <div>
          <label className="block text-gray-700">Contact Number</label>
          <input type="tel" name="user_phone" className="w-full px-4 py-2 border rounded-md" required />
        </div>
        <div>
          <label className="block text-gray-700">Message</label>
          <textarea name="message" className="w-full px-4 py-2 border rounded-md" rows="4" required></textarea>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Send</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

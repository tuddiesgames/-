// pages/contact.js

import dynamic from 'next/dynamic';
import NavBar from '../component/NavBar';

// Dynamically import the ContactForm component
const ContactForm = dynamic(() => import('./ContactForm'), { ssr: false });

const Contact = () => {
  return (
    <div className="bg-contact-bg bg-cover bg-center min-h-screen flex flex-col items-center">
      <NavBar />
      <h1 className="text-4xl font-bold text-white">Contact Us</h1>

      <div className="bg-transparent p-6 mt-6 w-full max-w-4xl flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-12">
        <div className="w-full md:w-1/2 p-6 bg-white bg-opacity-80 rounded-lg shadow-lg flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Address</h2>
          <address className="text-gray-700 text-center mb-6">
            1/1360E Deepa Nagar, <br />
            PalavangiPalayam Ring Road, <br />
            Chetipalayam, Tirupur-641608
          </address>
          <div className="flex space-x-6">
            <a href="https://www.youtube.com/@TuddiesGames" target="_blank" rel="noopener noreferrer">
              <img src="/youtube.png" alt="Youtube" className="w-8 h-8 hover:opacity-75 transition-opacity duration-200" />
            </a>
            <a href="https://x.com/TuddiesTech" target="_blank" rel="noopener noreferrer">
              <img src="/x.png" alt="Twitter" className="w-8 h-8 hover:opacity-75 transition-opacity duration-200" />
            </a>
            <a href="https://www.instagram.com/tuddies_games/" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.jpeg" alt="Instagram" className="w-8 h-8 hover:opacity-75 transition-opacity duration-200" />
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-6 bg-white bg-opacity-80 rounded-lg shadow-lg">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;

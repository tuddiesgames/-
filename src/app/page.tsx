'use client'
import Link from "next/link";
import NavBar from "./component/NavBar";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const typingElements = document.querySelectorAll(".animate-typing");
    typingElements.forEach((element, index) => {
      element.style.animationDelay = `${index * 4}s`;
    });
  }, []);

  return (
    <main className="min-h-screen flex flex-col bg-custom-bg bg-cover bg-center">
      <NavBar />
      <div className="text-right space-y-4 mr-8 mt-20">
        <p className="text-4xl font-bold text-white overflow-hidden whitespace-nowrap animate-typing">We Are Leading</p>
        <p className="text-4xl font-bold text-blue-500 overflow-hidden whitespace-nowrap animate-typing">Technology Solutions</p>
        <p className="text-4xl font-bold text-white overflow-hidden whitespace-nowrap animate-typing">Providing Company</p>
        <p className="text-lg text-white">
          We deliver cutting-edge technology solutions to help businesses thrive in a digital world
          <br />
          Our expertise and innovative approaches ensure optimal results and customer satisfaction.
        </p>
      </div>
      <div className="flex flex-row gap-5 md:flex-row justify-end items-center md:space-y-0 md:space-x-4 mt-8 mr-10 md:mr-20 lg:mr-40">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          <Link href="/services">Get Started</Link>
        </button>
        <button className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">
          <Link href="/contact">Contact Us</Link>
        </button>
      </div>
      <style jsx>{`
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }

        .animate-typing {
          border-right: 0; /* Removed blinking line */
          animation: typing 4s steps(40, end) forwards;
        }
      `}</style>
    </main>
  );
}

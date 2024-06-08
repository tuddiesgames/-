'use client'

import { SetStateAction, useState, useEffect } from 'react';
import Image from 'next/image';
import CommonTitle from '../component/CommonTitle';

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState(10);

  // Handle right arrow key press to navigate to the next section
  const handleKeyDown = (event: { key: string }) => {
    if (event.key === 'ArrowRight' && activeSection < sectionData.length - 1) {
      setActiveSection(activeSection + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeSection]);

  const handleSectionClick = (sectionIndex: number) => {
    setActiveSection(activeSection === sectionIndex ? 10 : sectionIndex);
  };

  const sectionData = [
    {
      title: 'Why Choose Us',
      image: '/whyUs.png',
      description:
        'At Tuddies, we are committed to providing top-notch solutions that empower businesses to achieve their goals. Our team of experts is dedicated to delivering innovative and cost-effective strategies tailored to your unique needs.',
    },
    {
      title: 'Why Choose Our Company',
      image: '/whyChoose.png',
      description:
        'We differentiate ourselves through our commitment to excellence, customer satisfaction, and continuous improvement. With a track record of success and a passion for innovation, we are your trusted partner for growth and success.',
    },
    {
      title: 'In Our Field',
      image: '/field.jpeg',
      description:
        'With years of experience and a deep understanding of industry trends, we provide innovative solutions that drive results. Our team is equipped with the skills and knowledge to tackle challenges and seize opportunities in our field.',
    },
    {
      title: 'Our Price',
      image: '/price.webp',
      description:
        'We believe in delivering exceptional value at competitive prices. Our transparent pricing model ensures that you get the most out of your investment, without any hidden fees or surprises.',
    },
    {
      title: 'Our Startup Description',
      image: '/startup.png',
      description:
        'Tuddies started with a vision to revolutionize the industry by offering innovative solutions that drive growth and success. Since our inception, we have remained true to our mission and are committed to making a positive impact on businesses worldwide.',
    },
  ];

  return (
    <div className="container mx-auto py-8 flex flex-col p-4">
      <div className="text-center mb-8 flex flex-col justify-center">
        <CommonTitle pageTitle="About Us" />
        <p className="text-lg text-gray-600">Empowering businesses for success</p>
      </div>
      {sectionData.map((section, index) => (
        <section key={index} className="mb-8">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => handleSectionClick(index)}
          >
            <div>
              <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
              <p className="text-gray-700">Click to expand/collapse</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${activeSection === index ? 'transform rotate-90' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
          {activeSection === index && (
            <div>
              <div className="flex justify-center">
                <Image src={section.image} alt={section.title} width={800} height={500} className="rounded-lg" />
              </div>
              <div className="mt-4 text-gray-800">
                <p>{section.description}</p>
              </div>
            </div>
          )}
        </section>
      ))}
    </div>
  );
};

export default AboutUs;

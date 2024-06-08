// pages/DigitalMarketingExplanation.tsx

import React from 'react';
import NavBar from '../component/NavBar';

const DigitalMarketingExplanation: React.FC = () => {
  return (
    <div className="bg-primary w-full h-full">
        <NavBar />
      <h1 className="text-3xl font-bold mb-4 p-4">Digital Marketing</h1>
      <img src="/digital.png" alt="" className="w-38 h-48 mb-4 p-4" />
      <p className="text-white mb-4 p-4">
        Comprehensive digital marketing strategies encompass a broad range of techniques and tactics aimed at enhancing a brand's online presence, increasing visibility, and driving desired actions from target audiences.
      </p>
      <div className="mb-4 p-4">
        <p className="text-white mb-2">
          <strong>Search Engine Optimization (SEO):</strong> SEO involves optimizing your website and content to rank higher in search engine results pages (SERPs). This includes keyword research, on-page optimization, technical optimization, and building high-quality backlinks.
        </p>
        <p className="text-white mb-2">
          <strong>Price:</strong> $800 - $5000
        </p>
      </div>
      <div className="mb-4 p-4">
        <p className="text-white mb-2">
          <strong>Content Marketing:</strong> Content marketing focuses on creating valuable, relevant, and engaging content to attract and retain a specific audience. This content can take various forms, including blog posts, articles, videos, infographics, eBooks, and podcasts.
        </p>
        <p className="text-white mb-2">
          <strong>Price:</strong> $1000 - $7000
        </p>
      </div>
      {/* Add more detailed explanations for each strategy */}
    </div>
  );
};

export default DigitalMarketingExplanation;

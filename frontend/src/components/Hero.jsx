import React, { useState, useEffect } from 'react';
import { ChevronDown, Download } from 'lucide-react';
import { personalInfo } from '../data/mock';


const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const titles = personalInfo.titles;
    const currentFullTitle = titles[titleIndex];

    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    if (!isDeleting && charIndex === currentFullTitle.length) {
      setTimeout(() => setIsDeleting(true), pauseTime);
      return;
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setCurrentTitle(
        currentFullTitle.substring(0, charIndex + (isDeleting ? -1 : 1))
      );
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    // Create a temporary link element
    const link = document.createElement('a');
     link.href = "/Abhipsa_Thakur_Resume.pdf";
    link.download = "Abhipsa_Thakur_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-8">
          <div className="animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
              Hi, I'm <span className="text-gray-300">{personalInfo.name}</span>
            </h1>
          </div>

          <div className="h-20 flex items-center justify-center animate-fade-in-delay">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-400">
              {currentTitle}
              <span className="animate-blink">|</span>
            </h2>
          </div>

          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto animate-fade-in-delay-2">
            {personalInfo.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-3">
            <button
              onClick={handleDownloadResume}
              className="inline-flex items-center space-x-2 px-8 py-3 bg-white hover:bg-gray-100 text-black font-medium rounded transition-all duration-300"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </button>
            <a
              href="#projects"
              className="px-8 py-3 border-2 border-gray-700 text-gray-300 hover:bg-gray-900 hover:border-gray-600 font-medium rounded transition-all duration-300"
            >
              View My Work
            </a>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-600 hover:text-gray-400 transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;

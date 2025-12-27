import React from 'react';
import { User, MapPin, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="text-gray-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gray-700 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gray-800 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300" />
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="relative rounded-2xl w-full max-w-md object-cover border border-gray-800"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">
              Full Stack Developer & Problem Solver
            </h3>
            <p className="text-gray-400 leading-relaxed">
              I'm a passionate full-stack developer with expertise in MERN stack, Java technologies, and modern web development. With a strong foundation in both frontend and backend technologies, I build scalable and efficient web applications.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Currently pursuing B.Tech in Computer Science with a CGPA of 8.99, I constantly strive to learn new technologies and improve my skills. My experience spans across various tech stacks including React, Node.js, Spring Boot, and multiple database systems.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <User className="text-gray-500" size={20} />
                <span>{personalInfo.name}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="text-gray-500" size={20} />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="text-gray-500" size={20} />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="text-gray-500" size={20} />
                <a href={`tel:${personalInfo.phone}`} className="hover:text-white transition-colors">
                  {personalInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

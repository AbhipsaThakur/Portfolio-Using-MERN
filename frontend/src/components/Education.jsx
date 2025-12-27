import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { education } from '../data/mock';

const EducationCard = ({ edu }) => {
  return (
    <div className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-all duration-300 border border-gray-800">
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-gray-800 rounded-lg flex-shrink-0 border border-gray-700">
          <GraduationCap className="text-white" size={28} />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
            <span className="px-3 py-1 bg-gray-800 text-gray-400 text-xs font-semibold rounded border border-gray-700">
              {edu.yearRange}
            </span>
          </div>
          <p className="text-gray-300 font-medium mb-1">{edu.institution}</p>
          <p className="text-gray-400 text-sm mb-3">{edu.location}</p>
          <p className="text-gray-500 text-sm mb-4 leading-relaxed">{edu.description}</p>
          <div className="flex items-center space-x-2 pt-3 border-t border-gray-800">
            <Award className="text-gray-500" size={18} />
            <span className="text-gray-400 font-semibold">{edu.grade}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="text-gray-400">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gray-700 mx-auto rounded-full" />
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            My academic background and achievements in computer science
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <EducationCard key={index} edu={edu} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

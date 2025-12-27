import React from 'react';
import { Award } from 'lucide-react';
import { certificates } from '../data/mock';

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Certificates & <span className="text-gray-400">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gray-700 mx-auto rounded-full" />
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Professional certifications and achievements
          </p>
        </div>

        {certificates.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-24 h-24 bg-gray-900 rounded-full flex items-center justify-center mb-6 border border-gray-800">
              <Award className="text-gray-600" size={48} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Certificates Coming Soon</h3>
            <p className="text-gray-500 text-center max-w-md">
              I'm constantly learning and will be adding my certifications and achievements here soon.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-all duration-300 border border-gray-800"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-800 rounded-lg flex-shrink-0 border border-gray-700">
                    <Award className="text-gray-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                    <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                    <p className="text-gray-500 text-sm">{cert.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;

import React from 'react';
import { skills } from '../data/mock';

const SkillCategory = ({ title, skillList }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-white mb-6 pb-2 border-b border-gray-800">
        {title}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skillList.map((skill, index) => (
          <div
            key={index}
            className="group relative bg-gray-900 rounded-lg p-4 border border-gray-800 hover:border-gray-700 transition-all duration-300"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                <span className="text-gray-500 text-xs font-semibold">{skill.level}%</span>
              </div>
              <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gray-600 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Technical <span className="text-gray-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gray-700 mx-auto rounded-full" />
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Technologies and tools I use to build robust applications
          </p>
        </div>

        <div className="space-y-12">
          <SkillCategory title="Frontend Development" skillList={skills.frontend} />
          <SkillCategory title="Backend Development" skillList={skills.backend} />
          <SkillCategory title="Database Management" skillList={skills.database} />
          <SkillCategory title="Development Tools" skillList={skills.tools} />
        </div>
      </div>
    </section>
  );
};

export default Skills;

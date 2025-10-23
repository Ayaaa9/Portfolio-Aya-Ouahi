import React from 'react';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';
import Section from './Section';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Full-Stack Developer & Data Analyst Intern",
      company: "RFC Digital",
      location: "Rabat, Morocco",
      period: "July 2025 – September 2025",
      description: [
        "Contributed to the design and development of a comprehensive project management and performance monitoring web platform.",
        "Implemented a secure JWT-based authentication system with multi-role access (Administrator, Manager, Developer, Client).",
        "Developed analytical dashboards for real-time performance tracking and reporting using Spring Boot and React.js."
      ],
      technologies: ["Spring Boot", "React.js", "PostgreSQL", "JWT", "Power BI"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Front-End Developer Intern",
      company: "DigiUP",
      location: "Rabat, Morocco",
      period: "July 2024 – September 2024",
      description: [
        "Developed a responsive internal web platform for project and application management.",
        "Collaborated with the backend team to integrate REST APIs and ensure seamless user experience.",
        "Enhanced UI design consistency and performance using React.js and modern CSS frameworks."
      ],
      technologies: ["React.js", "Express.js", "Node.js", "Tailwind CSS"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Full-Stack Developer Intern",
      company: "DigiUP",
      location: "Rabat, Morocco",
      period: "March 2023 – May 2023",
      description: [
        "Designed and developed a recruitment management web application from scratch.",
        "Implemented candidate tracking, application workflows, and automated data management using Laravel and MySQL."
      ],
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      color: "from-purple-500 to-pink-600"
    }
  ];

  const activities = [
    {
      title: "Member — SMILE Association",
      description:
        "Active participant in community initiatives promoting technology awareness, leadership, and teamwork among students.",
    },
    {
      title: "AIESEC International Volunteer",
      description:
        "Volunteered in Turkey with AIESEC, contributing to cross-cultural education and social impact projects.",
    },
  ];

  return (
    <Section
      id="experience"
      title="Professional Experience"
      subtitle="A journey through impactful projects, collaborations, and professional growth"
      className="bg-gradient-to-b from-slate-900 to-slate-800 light:from-slate-50 light:to-white"
    >
      {/* === Timeline === */}
      <div className="relative max-w-6xl mx-auto">
        {/* Central line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-blue-600 to-purple-600 light:from-cyan-600 light:via-blue-700 light:to-purple-700 hidden md:block transform -translate-x-1/2" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 items-center md:items-stretch ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline point */}
              <div className="absolute left-[calc(50%-0.75rem)] w-6 h-6 bg-slate-900 light:bg-white border-4 border-cyan-500 light:border-cyan-600 rounded-full hidden md:block z-10 animate-pulse" />

              {/* Experience Card */}
              <div className={`md:w-[48%] ${index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
                <div
                  className={`bg-slate-800/60 light:bg-white/80 backdrop-blur-md light:shadow-sm p-6 rounded-2xl border border-slate-700 light:border-slate-200 hover:border-cyan-500 light:hover:border-cyan-600 transition-all duration-500 hover:shadow-cyan-500/20 hover:shadow-2xl`}
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${exp.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <Briefcase className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white light:text-slate-900 mb-1">{exp.title}</h3>
                      <p className="text-cyan-400 light:text-cyan-600 font-semibold">{exp.company}</p>
                    </div>
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400 light:text-slate-500">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-300 light:text-slate-600 flex items-start gap-2 leading-relaxed">
                        <span className="text-cyan-400 light:text-cyan-600 mt-1">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700/50 light:bg-cyan-100 text-cyan-400 light:text-cyan-700 rounded-lg text-xs font-medium border border-slate-600 light:border-slate-300 hover:border-cyan-500 light:hover:border-cyan-600 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === Extracurricular === */}
      <div className="mt-20">
        <h3 className="text-3xl font-bold text-white mb-10 text-center">
          Extracurricular Activities
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-slate-800/50 light:bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-slate-700 light:border-slate-200 light:shadow-sm hover:border-cyan-500 light:hover:border-cyan-600 
                         transition-all duration-500 hover:shadow-cyan-500/20 hover:shadow-lg flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                <Award className="text-white" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white light:text-slate-900 mb-2">{activity.title}</h4>
                <p className="text-gray-400 light:text-slate-500 leading-relaxed">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === Closing Section === */}
      <div className="mt-20 text-center bg-gradient-to-r from-cyan-500/10 to-blue-600/10 light:from-cyan-100 light:to-blue-100 backdrop-blur-sm border border-cyan-500/30 light:border-cyan-300 p-10 rounded-2xl">
        <h4 className="text-2xl font-bold text-white light:text-slate-900 mb-3">Continuous Professional Growth</h4>
        <p className="text-gray-300 light:text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Each experience has allowed me to strengthen my technical expertise, enhance my problem-solving skills,
          and develop a strong sense of collaboration, creativity, and leadership — values I bring to every project I take on.
        </p>
      </div>
    </Section>
  );
};

export default Experience;

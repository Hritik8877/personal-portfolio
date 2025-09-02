import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'College Counseling Call Bot',
      description: 'A comprehensive platform helping students navigate the college admission process with personalized guidance and resources.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS','Twilio'],
      github: 'https://replit.com/@hritik84093/ctc',
      live: '',
      image: 'https://res.cloudinary.com/hritik8877/image/upload/v1756800292/fe121850-cfb0-476b-a475-3b903b5697c9_wdmotj.png',
    },
    {
      title: 'Social Networking API',
      description: 'RESTful API service supporting social networking features including user management, posts, comments, and real-time notifications.',
      technologies: ['Spring Boot', 'MySql', , 'JWT'],
      github: '#',
      live: '#',
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800',
    },
    {
  title: 'CleanCare - eLaundry Platform',
  description: 'A full-featured laundry management platform with customer and shop-owner roles, order tracking, service management, and real-time status updates.',
  technologies: ['React', 'Redux Toolkit', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
  github: '#',
  live: 'https://cleancare-crsv.onrender.com/',
  image: 'https://res.cloudinary.com/hritik8877/image/upload/v1756799941/8e7d6e7e-4aad-472b-bdbc-6f3ddd431640_n5ozl1.png',
}
,
    {
      title: 'Mcq extractor',
      description: 'An intelligent MCQ extraction tool that processes PDF files, extracts multiple-choice questions, and displays them in a structured format for easy learning and practice.',
      technologies: ['Html','Css', 'JavaScript', 'Express.js', 'MongoDB'],
      github: '#',
      live: '#',
      image: 'https://img.freepik.com/free-vector/realistic-test-paper-composition-with-pencil-stack-students-paperwork-with-marks-correct-answers_1284-54249.jpg?t=st=1738835315~exp=1738838915~hmac=4c9af4c6079aa455e62b276f9d8063cc9cc8026f068bbbbcab9c9a5e6217cf32&w=826',
    },
    {
      title: 'Password Generator',
      description: 'A secure password generator that creates strong, random passwords with customizable options for length, special characters, numbers, and uppercase letters.',
      technologies: ['React', 'JavaScript', 'Tailwind CSS'],
      github: 'https://github.com/Hritik8877/random-password-generator',
      live: '#',
      image: 'https://img.freepik.com/free-vector/phishing-account-concept-illustration_23-2148527056.jpg?t=st=1738835168~exp=1738838768~hmac=d49e7feca17f36e4cd923fa32d63205f4b04eca943e36acb8d50409fccc03a8b&w=826',
    },
    {
      title: 'Gaming Website',
      description: 'An immersive gaming website offering a collection of exciting games, leaderboards, and a seamless user experience for players to enjoy and compete in real-time.',
      technologies: ['Html', 'css', 'JavaScript'],
      github: 'https://github.com/Hritik8877/Gaming-Website-Frontend',
      live: '#',
      image: 'https://img.freepik.com/free-psd/video-game-landing-page_23-2149052221.jpg?t=st=1738835232~exp=1738838832~hmac=e5f162a3c2f5982e18d01bc4e30d5b9305a391c3462d5d6f6072e3545c6d0958&w=1480',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 inline-block text-transparent bg-clip-text">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development,
            API design, and modern web technologies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.title} 
              className="group bg-white rounded-2xl shadow-[0_0_50px_rgba(8,_112,_184,_0.07)] overflow-hidden transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-2">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 mr-1" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5 mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
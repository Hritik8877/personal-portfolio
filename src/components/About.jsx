import React from "react";

export function About() {
  return (
    <section id="about" className="pt-32 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 opacity-75 blur"></div>
              <div className="relative">
                <img
                  src="https://res.cloudinary.com/hritik8877/image/upload/v1738834633/qvpwksytxgnjyaoi7g1o.jpg"
                  alt="Hritik Kumar"
                  className="rounded-full w-64 h-64 object-cover shadow-2xl mx-auto border-4 border-white"
                />
              </div>
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="space-y-6">
              <div>
                <h2 className="text-5xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 inline-block text-transparent bg-clip-text">
                  About Me
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded"></div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                I am Hritik Kumar, a passionate Full Stack Developer with
                expertise in JavaScript, React, Spring Boot, and modern web
                technologies. My journey in software development has been driven
                by a deep curiosity for creating efficient, user-friendly
                solutions that make a real impact.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                With a strong foundation in both frontend and backend
                development, I specialize in building scalable web applications
                that combine beautiful interfaces with robust functionality. I
                am always eager to learn new technologies and contribute to
                meaningful projects that push the boundaries of what's possible
                on the web.
              </p>
              <div className="flex gap-4 pt-4">
                <button
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  onClick={() => {
                    window.open(
                      "https://drive.google.com/uc?export=download&id=114d7ba1ymB0rhlePNi6tPrxrgfIXc279",
                      "_blank"
                    );
                  }}
                >
                  Download CV
                </button>

                <button
                  className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200"
                  onClick={() =>
                    window.open("https://github.com/Hritik8877", "_blank")
                  }
                >
                  View Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

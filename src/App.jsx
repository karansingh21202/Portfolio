import React, { useState, useEffect } from 'react';

// --- Animated Text Component ---
const AnimatedText = ({ children, className = "" }) => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [randomStyles, setRandomStyles] = useState({});
  
  const fonts = [
    'font-serif',
    'font-mono', 
    'font-sans',
    'font-bold',
    'font-light',
    'font-medium',
    'font-semibold',
    'font-extrabold',
    'font-black'
  ];
  
  const colors = [
    'text-blue-600',
    'text-purple-600', 
    'text-green-600',
    'text-red-600',
    'text-yellow-600',
    'text-pink-600',
    'text-indigo-600',
    'text-teal-600',
    'text-orange-600',
    'text-cyan-600',
    'text-emerald-600',
    'text-violet-600'
  ];

  const rotations = [
    '-rotate-12',
    'rotate-12',
    '-rotate-6',
    'rotate-6',
    '-rotate-3',
    'rotate-3'
  ];

  const getRandomStyle = () => {
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomRotation = rotations[Math.floor(Math.random() * rotations.length)];
    return `${randomFont} ${randomColor} transform scale-125 ${randomRotation}`;
  };

  // Generate fresh random style every time for true randomness
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    // Always generate new random style for true randomness
    setRandomStyles(prev => ({
      ...prev,
      [index]: getRandomStyle()
    }));
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  const text = typeof children === 'string' ? children : children?.toString() || '';
  
  return (
    <span className={className}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`
            inline-block transition-all duration-200 ease-out cursor-pointer will-change-transform
            ${hoveredIndex === index ? 
              randomStyles[index] || getRandomStyle() : 
              'hover:scale-105 hover:text-slate-600'
            }
          `}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          style={{
            transformOrigin: 'center',
            display: char === ' ' ? 'inline' : 'inline-block'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

// --- SVG Icons for better visuals ---
const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-4 h-4 ml-1 opacity-70 group-hover:opacity-100 transition-opacity"
  >
    <path
      fillRule="evenodd"
      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
      clipRule="evenodd"
    />
  </svg>
);

const HeaderSocialIcons = () => (
    <div className="flex items-center gap-3">
    <a
      href="https://github.com/karansingh21202"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      className="text-slate-500 hover:text-slate-900 transition-transform duration-300 hover:scale-110"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
          clipRule="evenodd"
        />
      </svg>
    </a>
    <a
      href="https://www.linkedin.com/in/karan-singh-019ba3227"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="text-slate-500 hover:text-slate-800 transition-transform duration-300 hover:scale-110"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    </a>
  </div>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-slate-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
);


// --- Typing Effect Component logic ---
const TypingEffect = () => {
  const [typedText, setTypedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const textToType = "From Open Source to AI-Powered Platforms.";
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < textToType.length) {
        setTypedText(textToType.substring(0, i + 1));
        i++;
      } else {
        setIsComplete(true);
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
      <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight min-h-[120px] md:min-h-[144px]">
          {isComplete ? (
            <AnimatedText>{typedText}</AnimatedText>
          ) : (
            typedText
          )}
          <span className="animate-pulse">|</span>
      </h2>
  );
};


// --- Main Portfolio Component ---
export default function PortfolioPage() {
  const skills = [
    {
      category: 'Programming Languages',
      list: ['JavaScript', 'TypeScript', 'Java', 'C++', 'Python', 'C'],
    },
    {
      category: 'Web Technologies',
      list: ['React', 'Node.js', 'Spring Boot', 'MongoDB', 'MySQL', 'Bootstrap'],
    },
    {
      category: 'Tools',
      list: ['Visual Studio Code', 'Git & GitHub', 'Google Colab', 'Jupyter'],
    },
    {
      category: 'Backend & APIs',
      description: 'Experience in developing RESTful APIs, integrating third-party services, handling authentication, and managing API endpoints.',
    },
  ];

  const projects = [
    {
      category: 'Social Media',
      title: 'SHORTY',
      description: 'A dynamic social media platform using Node.js and React, enabling users to share updates, engage in conversations, and chat in real-time via Socket.io.',
      stack: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      link: 'https://shorty-c9t9.onrender.com/',
    },
    {
      category: 'Disaster Management',
      title: 'Disaster Response Platform',
      description: 'A real-time coordination platform for disaster reporting, using Gemini AI to extract geolocation from text and images for accurate incident mapping.',
      stack: ['React', 'Node.js', 'Supabase', 'Gemini AI'],
      link: 'https://disaster-response-platform-one.vercel.app/',
    },
    {
      category: 'EdTech & AI',
      title: 'AI-Powered Skilling & Career Acceleration',
      description: 'An AI-driven platform providing students with skilling, mock interviews, and job placements, featuring an AI code editor and resume matching.',
      stack: ['React', 'FastAPI', 'Gemini', 'Groq'],
      link: 'https://github.com/karansingh21202/Switch',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans transition-colors">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-10">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white font-bold text-lg">
            KS
          </div>
          <div className="flex items-center gap-4">
            <div>
                <AnimatedText className="font-semibold">Karan Singh</AnimatedText>
                <p className="text-xs text-slate-500">Software Engineer</p>
            </div>
            <div className="h-6 w-px bg-slate-200 hidden sm:block"></div>
            <div className="hidden sm:block">
                <HeaderSocialIcons />
            </div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#experience" className="hover:text-slate-900 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-slate-900 transition-colors">Skills</a>
          <a href="#contact" className="px-4 py-2 rounded-md bg-slate-800 text-white hover:bg-slate-700 transition-colors shadow-sm">Contact</a>
        </nav>
        <div className="md:hidden">
          <button aria-label="open menu" className="p-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6">
        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center py-20 md:py-32">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-slate-100 text-slate-800 rounded-full mb-3">
              Full-Stack & AI Developer
            </span>
            <TypingEffect />
            <p className="mt-5 text-slate-600 max-w-lg">
              As a dedicated open-source contributor and developer, I build impactful, scalable applications ranging from real-time social platforms to AI-driven disaster response systems.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#projects" className="inline-block px-5 py-3 rounded-lg bg-slate-800 text-white font-medium hover:bg-slate-700 transition-shadow shadow-lg hover:shadow-slate-200">View My Work</a>
              <a href="#contact" className="inline-block px-5 py-3 rounded-lg border border-slate-300 font-medium text-slate-700 hover:bg-slate-100 transition-colors">Get in Touch</a>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <div className="w-full max-w-sm bg-slate-50 rounded-xl shadow-lg border border-slate-200 p-4"><div className="flex justify-between items-center mb-2"><div className="flex gap-1.5"><span className="w-3 h-3 bg-red-400 rounded-full"></span><span className="w-3 h-3 bg-yellow-400 rounded-full"></span><span className="w-3 h-3 bg-green-400 rounded-full"></span></div><span className="text-xs text-slate-400">bash</span></div><div className="bg-slate-800 text-slate-300 rounded-md p-4 text-sm font-mono whitespace-pre-wrap"><span className="text-sky-400">$</span> npm run dev<br /><br /><span className="text-green-400">{'>'}</span> Portfolio ready at:<br /><span className="text-yellow-400 underline">http://localhost:3000</span></div></div>
          </div>
        </section>

        {/* Technical Experience Section */}
        <section id="experience" className="py-20">
          <AnimatedText className="text-3xl font-bold tracking-tight text-center block">Technical Experience</AnimatedText>
          <div className="mt-10 max-w-3xl mx-auto bg-slate-50 p-8 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="text-xl font-semibold"><AnimatedText>Open Source Contributor — </AnimatedText><a href="https://opencut.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-600">OpenCut</a></h4>
            <p className="text-sm text-slate-500 mt-1">Video Editing Platform</p>
            <ul className="mt-4 space-y-3 text-slate-600 list-disc list-inside">
              <li>Fixed timeline desynchronization by synchronizing ruler and track scrolls using Radix UI, significantly improving the editing experience for long videos.</li>
              <li>Implemented smooth, bounded text dragging and an auto-scrolling playhead for an enhanced and more intuitive timeline user experience.</li>
              <li>Optimized scroll event handling for better performance while ensuring backward compatibility with existing functionalities.</li>
            </ul>
            <div className="mt-5 pt-4 border-t border-slate-200">
                <p className="text-sm font-semibold text-slate-700">
                    GitHub Contributions: 
                    <a href="https://github.com/opencut-app/opencut/pull/138" target="_blank" rel="noopener noreferrer" className="ml-2 text-slate-600 hover:text-slate-900 underline font-medium">PR #138</a>, 
                    <a href="https://github.com/opencut-app/opencut/pull/425" target="_blank" rel="noopener noreferrer" className="ml-2 text-slate-600 hover:text-slate-900 underline font-medium">PR #425</a>
                </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <AnimatedText className="text-3xl font-bold tracking-tight text-center block">Featured Projects</AnimatedText>
          <p className="text-center mt-3 text-slate-500 max-w-2xl mx-auto">A selection of projects that showcase my skills in web development, AI, and building end-to-end platforms.</p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <a href={p.link} key={p.title} target="_blank" rel="noopener noreferrer" className="group block bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-slate-400 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="text-xs uppercase font-semibold text-slate-600 tracking-wider">{p.category}</div>
                  <ExternalLinkIcon />
                </div>
                <AnimatedText className="mt-4 text-xl font-semibold block">{p.title}</AnimatedText>
                <p className="mt-2 text-sm text-slate-600">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (<span key={s} className="px-2 py-0.5 text-xs bg-slate-200 text-slate-600 rounded-md">{s}</span>))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
            <AnimatedText className="text-3xl font-bold tracking-tight text-center block">Technical Toolkit</AnimatedText>
            <p className="text-center mt-3 text-slate-500 max-w-2xl mx-auto">A snapshot of the languages, frameworks, and tools I use to bring ideas to life.</p>
            <div className="mt-12 max-w-4xl mx-auto space-y-8">
                {skills.map((skillCategory) => (
                <div key={skillCategory.category}>
                    <AnimatedText className="font-semibold text-slate-900 text-lg mb-4 block">{skillCategory.category}</AnimatedText>
                    {skillCategory.list ? (
                    <div className="flex flex-wrap gap-3">
                        {skillCategory.list.map((item) => (
                        <span key={item} className="px-4 py-2 text-sm bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors cursor-default">
                            {item}
                        </span>
                        ))}
                    </div>
                    ) : (
                    <p className="text-slate-600 leading-relaxed">{skillCategory.description}</p>
                    )}
                </div>
                ))}
            </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-20">
           <AnimatedText className="text-3xl font-bold tracking-tight text-center block">Achievements & Recognition</AnimatedText>
           <div className="mt-10 max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
             <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
                <AnimatedText className="font-semibold text-slate-900 block">Competitive Programming</AnimatedText>
                <p className="mt-2 text-slate-600">Specialist at Codeforces (Max Rating: 1556). Solved over 800 problems on various platforms.</p>
             </div>
             <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
                <AnimatedText className="font-semibold text-slate-900 block">Hackathon Winner</AnimatedText>
                <p className="mt-2 text-slate-600">Secured 3rd place at Sitnovate Hackathon, conducted by SIT, Nagpur.</p>
             </div>
             <div className="md:col-span-2 p-6 bg-slate-50 rounded-lg border border-slate-200">
                <AnimatedText className="font-semibold text-slate-900 block">Leadership</AnimatedText>
                <p className="mt-2 text-slate-600">Served as Joint Secretary for the Public & Relations Cell (2022–23), where I organized flagship events like Alumni Meet 2022–23.</p>
             </div>
           </div>
        </section>


        {/* Contact Section */}
        <section id="contact" className="py-20">
            <div className="max-w-3xl mx-auto bg-slate-50 rounded-2xl p-8 sm:p-12 border border-slate-200 shadow-sm">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="hidden md:block">
                        <MailIcon />
                    </div>
                    <div className="text-center md:text-left">
                        <AnimatedText className="text-3xl font-bold tracking-tight block">Let's build something great.</AnimatedText>
                        <p className="mt-3 text-slate-600 max-w-xl">
                            I'm currently open to new opportunities. If you have a project in mind or just want to connect, feel free to reach out.
                        </p>
                        <div className="mt-8 flex justify-center md:justify-start gap-4">
                            <a href="mailto:karansingh5112002@gmail.com" className="inline-block px-6 py-3 rounded-lg bg-slate-800 text-white font-medium hover:bg-slate-700 transition-shadow shadow-lg hover:shadow-slate-200">
                                Email Me
                            </a>
                            <a href="https://www.linkedin.com/in/karan-singh-019ba3227" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-lg border border-slate-300 font-medium text-slate-700 hover:bg-slate-100 transition-colors">
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Karan Singh. All rights reserved. <br />
          Designed with ❤️ and coded with React & Tailwind CSS.
        </footer>
      </main>
    </div>
  );
}


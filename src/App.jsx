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
    <div className="flex items-center gap-2">
    <a
      href="https://github.com/karansingh21202"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      className="p-2 text-slate-400 hover:text-orange-500 transition-all duration-300 hover:scale-110 rounded-lg hover:bg-orange-50"
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
      className="p-2 text-slate-400 hover:text-orange-500 transition-all duration-300 hover:scale-110 rounded-lg hover:bg-orange-50"
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
  const textToType = "AI-Powered Platforms.";
  
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
      <span className="text-orange-500">
          {isComplete ? (
            <AnimatedText>{typedText}</AnimatedText>
          ) : (
            <>
              {typedText}
              <span className="animate-pulse text-orange-600 font-black text-6xl md:text-7xl lg:text-8xl">|</span>
            </>
          )}
      </span>
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
      {/* Header - Minimalist & Floating */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-slate-100/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-white font-black text-xl shadow-lg">
              KS
            </div>
            <div>
              <AnimatedText className="text-lg font-bold text-slate-900">Karan Singh</AnimatedText>
              <p className="text-sm text-slate-500 font-medium">Software Engineer</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#experience" className="relative text-sm font-medium text-slate-600 hover:text-slate-900 transition-all duration-300 group">
              Experience
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#projects" className="relative text-sm font-medium text-slate-600 hover:text-slate-900 transition-all duration-300 group">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#skills" className="relative text-sm font-medium text-slate-600 hover:text-slate-900 transition-all duration-300 group">
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            
            <div className="flex items-center gap-3 ml-4">
              <HeaderSocialIcons />
            </div>
            
            <button className="px-6 py-2.5 border-2 border-orange-500 text-orange-500 font-semibold rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95">
              Contact
            </button>
          </nav>
          
          <div className="md:hidden">
            <button aria-label="open menu" className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24">
        {/* Hero Section - Drastic Asymmetric Layout */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Side - Content */}
              <div className="lg:col-span-7 space-y-8">
                {/* Top Descriptor */}
                <div className="text-left">
                  <span className="text-lg font-medium text-teal-500 italic tracking-wide">
                    Full-Stack & AI Developer
                  </span>
                </div>
                
                {/* Massive Headline */}
                <div className="space-y-4">
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight">
                    <span className="text-slate-900">From Open Source to</span>
                    <br />
                    <TypingEffect />
                  </h1>
                </div>
                
                {/* Description */}
                <div className="max-w-xl ml-4">
                  <p className="text-lg text-slate-600 leading-relaxed">
                    As a dedicated open-source contributor and developer, I build impactful, scalable applications ranging from real-time social platforms to AI-driven disaster response systems.
                  </p>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex items-center gap-6 ml-4">
                  <a 
                    href="#projects" 
                    className="px-8 py-4 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-orange-200"
                  >
                    View My Work
                  </a>
                  <a 
                    href="#contact" 
                    className="px-8 py-4 border-2 border-orange-500 text-orange-500 font-bold rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:scale-105"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
              
              {/* Right Side - Dynamic Abstract Visual */}
              <div className="lg:col-span-5 relative">
                <div className="relative w-full h-96 lg:h-[500px]">
                  
                  {/* Layered Code Cards */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    
                    {/* Background Card */}
                    <div className="absolute top-8 right-4 w-80 h-64 bg-slate-50/60 backdrop-blur-sm rounded-2xl border border-slate-200/50 transform rotate-3 shadow-lg"></div>
                    
                    {/* Middle Card */}
                    <div className="absolute top-4 right-8 w-80 h-64 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 transform -rotate-2 shadow-xl">
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="space-y-2 text-xs text-slate-400 font-mono">
                          <div className="h-2 bg-slate-200 rounded w-3/4"></div>
                          <div className="h-2 bg-slate-200 rounded w-1/2"></div>
                          <div className="h-2 bg-slate-200 rounded w-5/6"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Front Card - Terminal */}
                    <div className="relative z-10 w-80 h-64 bg-slate-900 rounded-2xl shadow-2xl transform rotate-1 border border-slate-700">
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="font-mono text-sm space-y-2">
                          <div className="text-slate-400">
                            <span className="text-orange-400">$</span> npm run build
                          </div>
                          <div className="text-green-400">
                            ✓ Build successful
                          </div>
                          <div className="text-slate-400">
                            <span className="text-orange-400">$</span> Deployment successful! View at:
                          </div>
                          <div className="text-cyan-400 underline">
                            https://karan.dev/portfolio
                          </div>
                          <div className="flex items-center gap-1 mt-4">
                            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                            <span className="text-slate-400 text-xs">Ready for production</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-12 left-4 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl opacity-20 transform rotate-12 animate-pulse"></div>
                  <div className="absolute bottom-16 left-8 w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl opacity-30 transform -rotate-6"></div>
                  <div className="absolute top-1/3 left-0 w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg opacity-25 transform rotate-45"></div>
                  
                </div>
              </div>
              
            </div>
          </div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-100 to-teal-100 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-20 blur-3xl"></div>
          </div>
          
        </section>

        {/* Technical Experience Section - Redesigned with Hero Theme */}
        <section id="experience" className="relative py-32 overflow-hidden">
          
          {/* Background Pattern */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-gradient-to-br from-purple-100 to-teal-100 rounded-full opacity-25 blur-3xl"></div>
            <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full opacity-20 blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Section Header - Asymmetric Layout */}
            <div className="grid lg:grid-cols-12 gap-8 items-center mb-16">
              <div className="lg:col-span-8">
                <div className="space-y-6">
                  <span className="text-lg font-medium text-purple-500 italic tracking-wide">
                    Professional Journey
                  </span>
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tight">
                    <span className="text-slate-900">Technical</span>
                    <br />
                    <span className="text-orange-500">Experience</span>
                  </h2>
                  <div className="max-w-xl ml-4">
                    <p className="text-lg text-slate-600 leading-relaxed">
                      Contributing to <span className="text-orange-500 font-semibold">open-source projects</span> and building 
                      impactful solutions in the developer ecosystem.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating Code Elements */}
              <div className="lg:col-span-4 relative">
                <div className="relative w-full h-64">
                  <div className="absolute top-4 right-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl opacity-20 transform rotate-12 animate-pulse"></div>
                  <div className="absolute bottom-8 right-12 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl opacity-30 transform -rotate-6"></div>
                  <div className="absolute top-1/2 right-4 w-8 h-8 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg opacity-25 transform rotate-45"></div>
                </div>
              </div>
            </div>
            
            {/* Experience Card - Layered Design */}
            <div className="relative max-w-5xl mx-auto">
              
              {/* Background Shadow Card */}
              <div className="absolute inset-0 bg-slate-100/60 backdrop-blur-sm rounded-3xl transform rotate-1 translate-x-3 translate-y-3"></div>
              
              {/* Main Experience Card */}
              <div className="relative bg-white/90 backdrop-blur-sm p-10 lg:p-12 rounded-3xl border border-slate-200/50 shadow-2xl">
                
                {/* Company Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                  <div className="space-y-2">
                    <div className="flex items-center gap-4 flex-wrap">
                      <AnimatedText className="text-3xl font-black text-slate-900">
                        Open Source Contributor
                      </AnimatedText>
                      <span className="text-2xl text-slate-400">—</span>
                      <a 
                        href="https://opencut.app/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-2xl font-bold text-orange-500 hover:text-orange-600 transition-colors underline decoration-2 underline-offset-4"
                      >
                        OpenCut
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-4 py-2 bg-purple-100 text-purple-700 text-sm font-bold rounded-full">
                        Video Editing Platform
                      </span>
                      <span className="px-4 py-2 bg-teal-100 text-teal-700 text-sm font-bold rounded-full">
                        Open Source
                      </span>
                    </div>
                  </div>
                  
                  {/* GitHub Stats */}
                  <div className="mt-6 lg:mt-0 flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-black text-orange-500">2+</div>
                      <div className="text-xs text-slate-500 font-medium">PRs Merged</div>
                    </div>
                    <div className="w-px h-8 bg-slate-300"></div>
                    <div className="text-center">
                      <div className="text-2xl font-black text-teal-500">500+</div>
                      <div className="text-xs text-slate-500 font-medium">Lines Added</div>
                    </div>
                  </div>
                </div>
                
                {/* Key Achievements */}
                <div className="space-y-6 mb-8">
                  <h5 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Key Contributions
                  </h5>
                  
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl border border-orange-200/50">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div>
                            <h6 className="font-bold text-slate-900 mb-2">Timeline Synchronization</h6>
                            <p className="text-sm text-slate-600 leading-relaxed">
                              Fixed timeline desynchronization by synchronizing ruler and track scrolls using Radix UI, significantly improving the editing experience for long videos.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6 bg-gradient-to-br from-teal-50 to-teal-100/50 rounded-2xl border border-teal-200/50">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                            </svg>
                          </div>
                          <div>
                            <h6 className="font-bold text-slate-900 mb-2">Enhanced UX</h6>
                            <p className="text-sm text-slate-600 leading-relaxed">
                              Implemented smooth, bounded text dragging and an auto-scrolling playhead for an enhanced and more intuitive timeline user experience.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl border border-purple-200/50">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          </div>
                          <div>
                            <h6 className="font-bold text-slate-900 mb-2">Performance Optimization</h6>
                            <p className="text-sm text-slate-600 leading-relaxed">
                              Optimized scroll event handling for better performance while ensuring backward compatibility with existing functionalities.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* GitHub Links Card */}
                      <div className="p-6 bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-2xl border border-slate-200/50">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <h6 className="font-bold text-slate-900">GitHub Contributions</h6>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          <a 
                            href="https://github.com/opencut-app/opencut/pull/138" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="px-4 py-2 bg-white border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 hover:border-orange-300 hover:text-orange-600 transition-all duration-300 text-sm"
                          >
                            PR #138
                          </a>
                          <a 
                            href="https://github.com/opencut-app/opencut/pull/425" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="px-4 py-2 bg-white border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 hover:border-orange-300 hover:text-orange-600 transition-all duration-300 text-sm"
                          >
                            PR #425
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
              
              {/* Floating Accent Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl opacity-20 transform rotate-12"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl opacity-30 transform -rotate-12"></div>
              
            </div>
            
          </div>
        </section>

        {/* Projects Section - Redesigned with Hero Theme */}
        <section id="projects" className="relative py-32 overflow-hidden">
          
          {/* Background Pattern */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-teal-100 to-orange-100 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-15 blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Section Header - Asymmetric Layout */}
            <div className="grid lg:grid-cols-12 gap-8 items-center mb-20">
              <div className="lg:col-span-7">
                <div className="space-y-6">
                  <span className="text-lg font-medium text-teal-500 italic tracking-wide">
                    Portfolio Showcase
                  </span>
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tight">
                    <span className="text-slate-900">Featured</span>
                    <br />
                    <span className="text-orange-500">Projects</span>
                  </h2>
                  <div className="max-w-xl ml-4">
                    <p className="text-lg text-slate-600 leading-relaxed">
                      A selection of projects that showcase my skills in web development, AI, and building 
                      <span className="text-orange-500 font-semibold"> end-to-end platforms</span>.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="lg:col-span-5 relative">
                <div className="relative w-full h-64">
                  <div className="absolute top-8 right-12 w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl opacity-20 transform rotate-12 animate-pulse"></div>
                  <div className="absolute bottom-8 right-4 w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl opacity-30 transform -rotate-6"></div>
                  <div className="absolute top-1/2 right-20 w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl opacity-25 transform rotate-45"></div>
                </div>
              </div>
            </div>
            
            {/* Projects Grid - Layered Card Design */}
            <div className="relative">
              <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                
                {projects.map((project, index) => (
                  <div key={project.title} className="relative group">
                    
                    {/* Project Card with Layered Effect */}
                    <div className="relative">
                      
                      {/* Background Shadow Card */}
                      <div className={`absolute inset-0 bg-slate-100/60 backdrop-blur-sm rounded-3xl transform ${
                        index % 2 === 0 ? 'rotate-2 translate-x-2 translate-y-2' : '-rotate-1 -translate-x-1 translate-y-3'
                      } transition-transform duration-300 group-hover:rotate-0 group-hover:translate-x-0 group-hover:translate-y-0`}></div>
                      
                      {/* Main Project Card */}
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="relative block bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-slate-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
                      >
                        
                        {/* Category Badge */}
                        <div className="flex items-center justify-between mb-6">
                          <span className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full ${
                            index === 0 ? 'bg-teal-100 text-teal-700' :
                            index === 1 ? 'bg-orange-100 text-orange-700' :
                            'bg-purple-100 text-purple-700'
                          }`}>
                            {project.category}
                          </span>
                          <div className="p-2 rounded-full bg-slate-100 group-hover:bg-orange-100 transition-colors">
                            <ExternalLinkIcon />
                          </div>
                        </div>
                        
                        {/* Project Title */}
                        <AnimatedText className="text-2xl font-black text-slate-900 mb-4 leading-tight">
                          {project.title}
                        </AnimatedText>
                        
                        {/* Project Description */}
                        <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3">
                          {project.description}
                        </p>
                        
                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.stack.map((tech, techIndex) => (
                            <span 
                              key={tech} 
                              className={`px-3 py-1.5 text-xs font-medium rounded-lg ${
                                techIndex % 3 === 0 ? 'bg-orange-50 text-orange-600 border border-orange-200' :
                                techIndex % 3 === 1 ? 'bg-teal-50 text-teal-600 border border-teal-200' :
                                'bg-purple-50 text-purple-600 border border-purple-200'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        {/* View Project Button */}
                        <div className="flex items-center gap-2 text-orange-500 font-semibold group-hover:text-orange-600 transition-colors">
                          <span>View Project</span>
                          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                        
                      </a>
                    </div>
                    
                    {/* Floating Accent Elements */}
                    {index === 1 && (
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg opacity-30 transform rotate-12"></div>
                    )}
                    {index === 2 && (
                      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full opacity-40 transform -rotate-12"></div>
                    )}
                    
                  </div>
                ))}
                
              </div>
            </div>
            
          </div>
        </section>

        {/* Technical Toolkit Section - Redesigned with Hero Theme */}
        <section id="skills" className="relative py-32 overflow-hidden">
          
          {/* Background Pattern */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-teal-100 to-purple-100 rounded-full opacity-25 blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full opacity-20 blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Section Header - Asymmetric Layout */}
            <div className="grid lg:grid-cols-12 gap-8 items-center mb-20">
              <div className="lg:col-span-8">
                <div className="space-y-6">
                  <span className="text-lg font-medium text-teal-500 italic tracking-wide">
                    Skills & Expertise
                  </span>
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tight">
                    <span className="text-slate-900">Technical</span>
                    <br />
                    <span className="text-orange-500">Toolkit</span>
                  </h2>
                  <div className="max-w-xl ml-4">
                    <p className="text-lg text-slate-600 leading-relaxed">
                      A comprehensive arsenal of <span className="text-orange-500 font-semibold">languages, frameworks, and tools</span> I use to bring ideas to life.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating Tech Icons */}
              <div className="lg:col-span-4 relative">
                <div className="relative w-full h-64">
                  <div className="absolute top-8 right-12 w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl opacity-20 transform rotate-12 animate-pulse"></div>
                  <div className="absolute bottom-12 right-4 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl opacity-30 transform -rotate-6"></div>
                  <div className="absolute top-1/2 right-20 w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg opacity-25 transform rotate-45"></div>
                </div>
              </div>
            </div>
            
            {/* Skills Grid - Layered Card Design */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              
              {skills.map((skillCategory, categoryIndex) => (
                <div key={skillCategory.category} className="relative group">
                  
                  {/* Category Card with Layered Effect */}
                  <div className="relative">
                    
                    {/* Background Shadow Card */}
                    <div className={`absolute inset-0 bg-slate-100/60 backdrop-blur-sm rounded-3xl transform ${
                      categoryIndex % 2 === 0 ? 'rotate-1 translate-x-2 translate-y-2' : '-rotate-1 -translate-x-1 translate-y-3'
                    } transition-transform duration-300 group-hover:rotate-0 group-hover:translate-x-0 group-hover:translate-y-0`}></div>
                    
                    {/* Main Category Card */}
                    <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-slate-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                      
                      {/* Category Header */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                          categoryIndex === 0 ? 'bg-gradient-to-br from-orange-400 to-orange-600' :
                          categoryIndex === 1 ? 'bg-gradient-to-br from-teal-400 to-teal-600' :
                          categoryIndex === 2 ? 'bg-gradient-to-br from-purple-400 to-purple-600' :
                          'bg-gradient-to-br from-pink-400 to-pink-600'
                        }`}>
                          {categoryIndex === 0 && (
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                          )}
                          {categoryIndex === 1 && (
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                            </svg>
                          )}
                          {categoryIndex === 2 && (
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                          )}
                          {categoryIndex === 3 && (
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          )}
                        </div>
                        <AnimatedText className="text-2xl font-black text-slate-900">
                          {skillCategory.category}
                        </AnimatedText>
                      </div>
                      
                      {/* Skills Content */}
                      {skillCategory.list ? (
                        <div className="flex flex-wrap gap-3">
                          {skillCategory.list.map((skill, skillIndex) => (
                            <span 
                              key={skill} 
                              className={`px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default ${
                                skillIndex % 4 === 0 ? 'bg-orange-50 text-orange-700 border border-orange-200 hover:bg-orange-100' :
                                skillIndex % 4 === 1 ? 'bg-teal-50 text-teal-700 border border-teal-200 hover:bg-teal-100' :
                                skillIndex % 4 === 2 ? 'bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100' :
                                'bg-pink-50 text-pink-700 border border-pink-200 hover:bg-pink-100'
                              }`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <div className="p-6 bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-2xl border border-slate-200/50">
                          <p className="text-slate-600 leading-relaxed font-medium">
                            {skillCategory.description}
                          </p>
                        </div>
                      )}
                      
                    </div>
                    
                    {/* Floating Accent Elements */}
                    {categoryIndex === 0 && (
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg opacity-30 transform rotate-12"></div>
                    )}
                    {categoryIndex === 1 && (
                      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full opacity-40 transform -rotate-12"></div>
                    )}
                    {categoryIndex === 2 && (
                      <div className="absolute top-1/2 -right-3 w-5 h-5 bg-gradient-to-br from-purple-400 to-purple-600 rounded opacity-35 transform rotate-45"></div>
                    )}
                    
                  </div>
                </div>
              ))}
              
            </div>
            
            {/* Skills Stats */}
            <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-black text-orange-500 mb-2">6+</div>
                <div className="text-sm text-slate-600 font-medium">Programming Languages</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-teal-500 mb-2">10+</div>
                <div className="text-sm text-slate-600 font-medium">Frameworks & Libraries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-purple-500 mb-2">8+</div>
                <div className="text-sm text-slate-600 font-medium">Development Tools</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-pink-500 mb-2">3+</div>
                <div className="text-sm text-slate-600 font-medium">Years Experience</div>
              </div>
            </div>
            
          </div>
        </section>

        {/* Achievements & Recognition Section - Unique Trophy Theme */}
        <section id="achievements" className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50">
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 -z-10">
            {/* Floating Trophy Icons */}
            <div className="absolute top-20 left-10 text-yellow-300 opacity-20 animate-bounce" style={{animationDelay: '0s'}}>
              <i className="fas fa-star text-6xl"></i>
            </div>
            <div className="absolute top-40 right-20 text-orange-300 opacity-15 animate-bounce" style={{animationDelay: '1s'}}>
              <i className="fas fa-trophy text-5xl"></i>
            </div>
            <div className="absolute bottom-32 left-1/4 text-teal-300 opacity-25 animate-bounce" style={{animationDelay: '2s'}}>
              <i className="fas fa-medal text-4xl"></i>
            </div>
            
            {/* Gradient Orbs */}
            <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full opacity-25 blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Section Header - Centered with Trophy Theme */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <i className="fas fa-trophy text-white text-xl"></i>
                </div>
                <span className="text-lg font-medium text-yellow-600 italic tracking-wide">
                  Milestones & Recognition
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tight mb-6">
                <span className="text-slate-900">Achievements &</span>
                <br />
                <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent">Recognition</span>
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Celebrating key milestones in my journey as a <span className="text-orange-500 font-semibold">developer and leader</span>.
              </p>
            </div>
            
            {/* Achievements Grid - Trophy Card Design */}
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
              
              {/* Competitive Programming Achievement */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl transform rotate-2 group-hover:rotate-0 transition-transform duration-300"></div>
                <div className="relative bg-white p-8 rounded-3xl border border-yellow-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  
                  {/* Code Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      <i className="fas fa-code text-white text-3xl"></i>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <AnimatedText className="text-2xl font-black text-slate-900 mb-4">
                      Competitive Programming
                    </AnimatedText>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      Specialist at Codeforces (Max Rating: 1556). Solved over 800 problems on various platforms.
                    </p>
                    
                    {/* Stats */}
                    <div className="flex justify-center gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-black text-yellow-500">1556</div>
                        <div className="text-xs text-slate-500">Max Rating</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-black text-orange-500">800+</div>
                        <div className="text-xs text-slate-500">Problems Solved</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Hackathon Winner Achievement */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-blue-100 rounded-3xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>
                <div className="relative bg-white p-8 rounded-3xl border border-teal-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  
                  {/* Medal Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-blue-500 rounded-3xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      <i className="fas fa-medal text-white text-3xl"></i>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <AnimatedText className="text-2xl font-black text-slate-900 mb-4">
                      Hackathon Winner
                    </AnimatedText>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      Secured 3rd place at Sitnovate Hackathon, conducted by SIT, Nagpur.
                    </p>
                    
                    {/* Achievement Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-full">
                      <div className="w-3 h-3 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></div>
                      <span className="text-sm font-bold text-teal-700">3rd Place Winner</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Leadership Achievement */}
              <div className="group relative lg:col-span-1">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-gray-100 rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>
                <div className="relative bg-white p-8 rounded-3xl border border-slate-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  
                  {/* Leadership Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-slate-600 to-gray-700 rounded-3xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      <i className="fas fa-users text-white text-3xl"></i>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <AnimatedText className="text-2xl font-black text-slate-900 mb-4">
                      Leadership Excellence
                    </AnimatedText>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      Served as Joint Secretary for the Public & Relations Cell (2022–23), where I organized flagship events like Alumni Meet 2022–23.
                    </p>
                    
                    {/* Leadership Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-50 to-gray-50 border border-slate-200 rounded-full">
                      <div className="w-3 h-3 bg-gradient-to-r from-slate-600 to-gray-700 rounded-full"></div>
                      <span className="text-sm font-bold text-slate-700">Joint Secretary</span>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            
            {/* Achievement Summary Stats */}
            <div className="mt-20 text-center">
              <div className="inline-flex items-center gap-8 p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200/50 shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-black bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">3+</div>
                  <div className="text-sm text-slate-600 font-medium">Major Achievements</div>
                </div>
                <div className="w-px h-8 bg-slate-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-black bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">2+</div>
                  <div className="text-sm text-slate-600 font-medium">Years Leadership</div>
                </div>
                <div className="w-px h-8 bg-slate-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">1K+</div>
                  <div className="text-sm text-slate-600 font-medium">Community Impact</div>
                </div>
              </div>
            </div>
            
          </div>
        </section>


        {/* Contact Section - Subtle & Elegant */}
        <section id="contact" className="relative py-32 overflow-hidden">
          
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-br from-slate-100 to-slate-50 rounded-full opacity-40 blur-3xl"></div>
            <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-orange-50 to-teal-50 rounded-full opacity-30 blur-3xl"></div>
          </div>
          
          <div className="max-w-6xl mx-auto px-6">
            
            {/* Contact Content - Asymmetric but Subtle */}
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Side - Content */}
              <div className="lg:col-span-7 space-y-8">
                
                {/* Subtle Header */}
                <div className="space-y-4">
                  <span className="text-base font-medium text-slate-500 italic tracking-wide">
                    Let's Connect
                  </span>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight text-slate-900">
                    <AnimatedText>Ready to build</AnimatedText>
                    <br />
                    <span className="text-orange-500">something amazing together?</span>
                  </h2>
                </div>
                
                {/* Description */}
                <div className="max-w-lg">
                  <p className="text-lg text-slate-600 leading-relaxed">
                    I'm currently open to new opportunities and exciting collaborations. 
                    Whether you have a project in mind or just want to connect, I'd love to hear from you.
                  </p>
                </div>
                
                {/* Contact Methods */}
                <div className="space-y-4">
                  
                  {/* Email */}
                  <div className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200/50 hover:border-orange-200 transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300">
                      <i className="fas fa-envelope text-orange-600 text-lg"></i>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-slate-500">Email</div>
                      <a href="mailto:karansingh5112002@gmail.com" className="text-slate-900 font-semibold hover:text-orange-600 transition-colors">
                        karansingh5112002@gmail.com
                      </a>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <i className="fas fa-arrow-right text-orange-500"></i>
                    </div>
                  </div>
                  
                  {/* LinkedIn */}
                  <div className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200/50 hover:border-teal-200 transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl flex items-center justify-center group-hover:from-teal-200 group-hover:to-teal-300 transition-all duration-300">
                      <i className="fab fa-linkedin-in text-teal-600 text-lg"></i>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-slate-500">LinkedIn</div>
                      <a href="https://www.linkedin.com/in/karan-singh-019ba3227" target="_blank" rel="noopener noreferrer" className="text-slate-900 font-semibold hover:text-teal-600 transition-colors">
                        Connect with me
                      </a>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <i className="fas fa-external-link-alt text-teal-500"></i>
                    </div>
                  </div>
                  
                  {/* GitHub */}
                  <div className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200/50 hover:border-slate-300 transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center group-hover:from-slate-200 group-hover:to-slate-300 transition-all duration-300">
                      <i className="fab fa-github text-slate-600 text-lg"></i>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-slate-500">GitHub</div>
                      <a href="https://github.com/karansingh21202" target="_blank" rel="noopener noreferrer" className="text-slate-900 font-semibold hover:text-slate-700 transition-colors">
                        View my code
                      </a>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <i className="fas fa-external-link-alt text-slate-500"></i>
                    </div>
                  </div>
                  
                </div>
                
                {/* Primary CTA */}
                <div className="pt-4">
                  <a 
                    href="mailto:karansingh5112002@gmail.com" 
                    className="inline-flex items-center gap-3 px-8 py-4 bg-orange-500 text-white font-bold rounded-2xl hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-orange-200"
                  >
                    <i className="fas fa-paper-plane"></i>
                    <span>Send me a message</span>
                  </a>
                </div>
                
              </div>
              
              {/* Right Side - Subtle Visual Element */}
              <div className="lg:col-span-5 relative">
                <div className="relative w-full h-96">
                  
                  {/* Subtle Floating Cards */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    
                    {/* Background Card */}
                    <div className="absolute top-12 right-8 w-64 h-48 bg-slate-50/80 backdrop-blur-sm rounded-3xl border border-slate-200/30 transform rotate-3 shadow-sm"></div>
                    
                    {/* Middle Card */}
                    <div className="absolute top-8 right-12 w-64 h-48 bg-white/90 backdrop-blur-sm rounded-3xl border border-slate-200/50 transform -rotate-1 shadow-lg">
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center">
                            <i className="fas fa-user text-white text-sm"></i>
                          </div>
                          <div className="text-sm font-semibold text-slate-700">Available for work</div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-xs text-slate-500">Currently open to opportunities</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                            <span className="text-xs text-slate-500">Remote & on-site friendly</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                            <span className="text-xs text-slate-500">Quick response time</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  
                  {/* Subtle Floating Elements */}
                  <div className="absolute top-16 left-8 w-6 h-6 bg-gradient-to-br from-orange-200 to-orange-300 rounded-lg opacity-40 transform rotate-12"></div>
                  <div className="absolute bottom-20 left-12 w-4 h-4 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full opacity-50 transform -rotate-6"></div>
                  
                </div>
              </div>
              
            </div>
            
          </div>
        </section>

        {/* Footer - Enhanced but Subtle */}
        <footer className="relative border-t border-slate-200/50 bg-slate-50/30 py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              
              {/* Left Side */}
              <div className="text-center md:text-left">
                <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white font-bold text-sm">
                    KS
                  </div>
                  <span className="font-semibold text-slate-900">Karan Singh</span>
                </div>
                <p className="text-sm text-slate-500">
                  © {new Date().getFullYear()} All rights reserved.
                </p>
              </div>
              
              {/* Right Side */}
              <div className="flex items-center gap-6">
                <p className="text-sm text-slate-500">
                  Designed with <i className="fas fa-heart text-red-400 mx-1"></i> and coded with React & Tailwind CSS
                </p>
                <div className="flex items-center gap-3">
                  <a href="https://github.com/karansingh21202" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-slate-200 hover:bg-slate-300 rounded-lg flex items-center justify-center transition-colors">
                    <i className="fab fa-github text-slate-600 text-sm"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/karan-singh-019ba3227" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-slate-200 hover:bg-slate-300 rounded-lg flex items-center justify-center transition-colors">
                    <i className="fab fa-linkedin-in text-slate-600 text-sm"></i>
                  </a>
                </div>
              </div>
              
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}


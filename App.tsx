
import React, { useState, useEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import AIAssistant from './components/AIAssistant';
import { PUBLICATIONS, PROJECTS, EDUCATION, EXPERIENCE } from './data';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    research: useRef<HTMLElement>(null),
    publications: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    cv: useRef<HTMLElement>(null),
    'ai-assistant': useRef<HTMLElement>(null),
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = sectionRefs[sectionId as keyof typeof sectionRefs].current;
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section ref={sectionRefs.home} className="pt-24 pb-20 px-4 md:px-8 bg-white border-b border-slate-100">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 bg-slate-200 rounded-2xl overflow-hidden shadow-lg grayscale hover:grayscale-0 transition-all duration-500">
              <img src="https://picsum.photos/seed/researcher/400/400" alt="Researcher Portrait" className="w-full h-full object-cover" />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-2">Nguyen A. T.</h1>
              <p className="text-xl md:text-2xl text-blue-800 font-medium mb-4">PhD in Computer Science / Machine Learning</p>
              <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
                Specializing in <span className="text-slate-900 font-semibold underline decoration-blue-500">Robust Machine Perception</span> and 
                <span className="text-slate-900 font-semibold underline decoration-blue-500 ml-1">Low-Light Image Processing</span>. 
                Dedicated to bridging the gap between theoretical vision research and real-world deployment.
              </p>
              <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
                <a href="mailto:contact@research.edu" className="px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium">Email Me</a>
                <a href="#" className="px-6 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium">Google Scholar</a>
                <a href="#" className="px-6 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium">GitHub</a>
              </div>
            </div>
          </div>
        </section>

        {/* RESEARCH OVERVIEW */}
        <section ref={sectionRefs.research} className="py-20 px-4 md:px-8 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="serif text-3xl md:text-4xl mb-8 text-slate-900">Research Focus</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-slate-700 leading-relaxed italic border-l-4 border-blue-600 pl-6">
                  "My research focuses on robust machine perception under adverse visual conditions, 
                  aiming to ensure AI reliability where standard models fail."
                </p>
                <p className="text-slate-600 leading-relaxed">
                  As visual perception systems move from controlled environments to the wild (autonomous driving, robotics, surveillance), 
                  they encounter "adverse" factors: extreme low-light, fog, rain, and glare. Most current SOTA models suffer from significant 
                  performance drops in these scenarios.
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-slate-600 leading-relaxed">
                  I employ learning-based frameworks combined with physical illumination priors to build models that are not only accurate 
                  but also explainable. By leveraging frequency-domain analysis and self-supervised domain adaptation, we reduce 
                  dependence on expensive, manually-labeled adverse-environment data.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Computer Vision', 'Deep Learning', 'Image Restoration', 'Robustness', 'Edge AI'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs text-slate-600 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PUBLICATIONS */}
        <section ref={sectionRefs.publications} className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="serif text-3xl md:text-4xl mb-12 text-slate-900">Selected Publications</h2>
            <div className="space-y-8">
              {PUBLICATIONS.map((pub) => (
                <div key={pub.id} className={`group p-6 rounded-xl border transition-all duration-300 ${pub.highlight ? 'bg-blue-50/50 border-blue-100' : 'border-slate-100 hover:border-slate-300'}`}>
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {pub.highlight && <span className="bg-blue-700 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded">Highlight</span>}
                        <span className="text-slate-400 text-sm font-semibold">{pub.year}</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-blue-700 transition-colors">
                        {pub.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-2">
                        {pub.authors.map((author, idx) => (
                          <span key={idx} className={author.includes('Nguyen') ? 'font-bold text-slate-900 underline' : ''}>
                            {author}{idx < pub.authors.length - 1 ? ', ' : ''}
                          </span>
                        ))}
                      </p>
                      <p className="text-slate-500 italic text-sm font-medium">{pub.venue}</p>
                    </div>
                    <div className="flex gap-3 flex-shrink-0">
                      {pub.links.pdf && <a href={pub.links.pdf} className="text-xs font-bold border border-slate-300 px-3 py-1.5 rounded-lg hover:bg-slate-900 hover:text-white transition-all">PDF</a>}
                      {pub.links.code && <a href={pub.links.code} className="text-xs font-bold border border-slate-300 px-3 py-1.5 rounded-lg hover:bg-slate-900 hover:text-white transition-all">Code</a>}
                      {pub.links.project && <a href={pub.links.project} className="text-xs font-bold border border-slate-300 px-3 py-1.5 rounded-lg hover:bg-slate-900 hover:text-white transition-all">Web</a>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-slate-400 text-sm mb-4">Peer-reviewed research is the core of my academic identity.</p>
              <button className="text-blue-700 font-bold hover:underline text-sm">View full list on Google Scholar &rarr;</button>
            </div>
          </div>
        </section>

        {/* RESEARCH PROJECTS */}
        <section ref={sectionRefs.projects} className="py-20 px-4 md:px-8 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="serif text-3xl md:text-4xl mb-12 text-slate-900">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                  <img src={proj.imageUrl} alt={proj.title} className="w-full h-48 object-cover border-b border-slate-100" />
                  <div className="p-8">
                    <h3 className="serif text-xl font-bold mb-3">{proj.title}</h3>
                    <p className="text-slate-600 text-sm mb-6 line-clamp-2">{proj.description}</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Methodology</span>
                        <p className="text-xs text-slate-700 leading-relaxed italic">{proj.method}</p>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Key Contributions</span>
                        <ul className="text-xs text-slate-700 list-disc pl-4 space-y-1">
                          {proj.contributions.map((c, i) => <li key={i}>{c}</li>)}
                        </ul>
                      </div>
                    </div>

                    <a href={proj.githubUrl} className="inline-flex items-center text-blue-700 font-bold text-sm hover:translate-x-1 transition-transform">
                      Documentation & Code <span className="ml-2">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI SECTION */}
        <section ref={sectionRefs['ai-assistant']} className="py-20 px-4 md:px-8 bg-white border-b border-slate-100">
          <div className="max-w-3xl mx-auto">
            <AIAssistant />
          </div>
        </section>

        {/* CV / ACADEMIC PROFILE */}
        <section ref={sectionRefs.cv} className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-end mb-12 border-b border-slate-100 pb-8">
              <h2 className="serif text-3xl md:text-4xl text-slate-900">Academic CV</h2>
              <button className="bg-slate-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
                Download Full PDF
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-16">
              <div className="md:col-span-1">
                <h3 className="text-xs uppercase font-bold tracking-widest text-slate-400 mb-8">Education</h3>
                <div className="space-y-8">
                  {EDUCATION.map((edu, i) => (
                    <div key={i}>
                      <p className="font-bold text-slate-900">{edu.degree}</p>
                      <p className="text-sm text-slate-600 mb-1">{edu.institution}</p>
                      <p className="text-xs text-blue-700 font-semibold mb-2">{edu.year}</p>
                      <p className="text-xs text-slate-500 leading-relaxed">{edu.details}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <h3 className="text-xs uppercase font-bold tracking-widest text-slate-400 mb-8">Professional Experience</h3>
                <div className="space-y-10">
                  {EXPERIENCE.map((exp, i) => (
                    <div key={i} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-3 before:h-3 before:bg-blue-600 before:rounded-full">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <p className="font-bold text-slate-900 text-lg">{exp.role}</p>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{exp.period}</p>
                      </div>
                      <p className="text-blue-700 font-semibold mb-3">{exp.organization}</p>
                      <p className="text-sm text-slate-600 leading-relaxed">{exp.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-16 pt-16 border-t border-slate-100">
                  <h3 className="text-xs uppercase font-bold tracking-widest text-slate-400 mb-8">Academic Service</h3>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <p className="text-sm font-bold text-slate-900 mb-2">Reviewer</p>
                      <ul className="text-xs text-slate-600 space-y-1">
                        <li>CVPR (2022-2024)</li>
                        <li>ICCV (2023)</li>
                        <li>ECCV (2024)</li>
                        <li>IEEE TPAMI</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 mb-2">Awards</p>
                      <ul className="text-xs text-slate-600 space-y-1">
                        <li>Outstanding Reviewer, CVPR 2023</li>
                        <li>Best Paper Nominee, ECCV 2022</li>
                        <li>GCP Credit Grant for Research ($5,000)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="serif text-white text-2xl font-bold mb-2">Dr. Nguyen</h2>
            <p className="text-sm">Scientist. Researcher. Computer Vision Specialist.</p>
          </div>
          <div className="flex gap-6">
            {['LinkedIn', 'GitHub', 'Twitter', 'Google Scholar'].map(platform => (
              <a key={platform} href="#" className="text-sm hover:text-white transition-colors">{platform}</a>
            ))}
          </div>
          <div className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Dr. Nguyen. Built with React & Gemini.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

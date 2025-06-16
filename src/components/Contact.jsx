import { useEffect, useState } from "react";

export const Contact = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      const htmlElement = document.documentElement;
      const hasDarkClass = htmlElement.classList.contains('dark');
      setIsDarkMode(hasDarkClass);
    };
    
    checkTheme();
    
    // Create observer to watch for theme changes
    const observer = new MutationObserver(() => {
      checkTheme();
    });
    
    // Watch for class changes on document.documentElement (html element)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${
          isDarkMode ? 'text-foreground' : 'text-black bg-white/10'
        }`}>
          Let's <span className={
            isDarkMode 
              ? 'text-primary' 
              : 'bg-gradient-to-r from-black to-red-600 bg-clip-text text-transparent'
          }>Connect</span>
        </h2>
        
        {/* Contact Info */}
        <div className="mb-16">
          <h3 className={`text-2xl font-semibold mb-8 text-center ${
            isDarkMode ? 'text-foreground' : 'text-black bg-white/10'
          }`}>
            Get In Touch
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div className={`${
              isDarkMode ? 'gradient-border p-8 card-hover' : 'bg-white/10 backdrop-blur-sm p-8 card-hover'
            }`}>
              <h4 className={`text-xl font-semibold mb-6 ${
                isDarkMode ? 'text-primary' : 'text-red-600'
              }`}>
                📧 Contact Information
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className={`${
                    isDarkMode ? 'text-primary' : 'text-red-600'
                  } text-lg`}>📍</span>
                  <div>
                    <p className={`font-medium ${
                      isDarkMode ? 'text-foreground' : 'text-black'
                    }`}>Location</p>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-muted-foreground' : 'text-black'
                    }`}>Bangalore, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className={`${
                    isDarkMode ? 'text-primary' : 'text-red-600'
                  } text-lg`}>✉️</span>
                  <div>
                    <p className={`font-medium ${
                      isDarkMode ? 'text-foreground' : 'text-black'
                    }`}>Email</p>
                    <a href="mailto:tarunwarrier1@gmail.com" className={`text-sm transition-colors duration-300 ${
                      isDarkMode ? 'text-primary hover:text-primary/80' : 'text-red-600 hover:text-red-700'
                    }`}>
                      tarunwarrier1@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className={`${
                    isDarkMode ? 'text-primary' : 'text-red-600'
                  } text-lg`}>📱</span>
                  <div>
                    <p className={`font-medium ${
                      isDarkMode ? 'text-foreground' : 'text-black'
                    }`}>Phone</p>
                    <a href="tel:+917022736732" className={`text-sm transition-colors duration-300 ${
                      isDarkMode ? 'text-primary hover:text-primary/80' : 'text-red-600 hover:text-red-700'
                    }`}>
                      +91 7022736732
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className={`${
                    isDarkMode ? 'text-primary' : 'text-red-600'
                  } text-lg`}>💼</span>
                  <div>
                    <p className={`font-medium ${
                      isDarkMode ? 'text-foreground' : 'text-black'
                    }`}>LinkedIn</p>
                    <a href="https://www.linkedin.com/in/tarun-warrier/" target="_blank" rel="noopener noreferrer" className={`text-sm transition-colors duration-300 ${
                      isDarkMode ? 'text-primary hover:text-primary/80' : 'text-red-600 hover:text-red-700'
                    }`}>
                      linkedin.com/in/tarun-warrier
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Collaboration Areas */}
            <div className={`${
              isDarkMode ? 'gradient-border p-8 card-hover' : 'bg-white/10 backdrop-blur-sm p-8 card-hover'
            }`}>
              <h4 className={`text-xl font-semibold mb-6 ${
                isDarkMode ? 'text-primary' : 'text-red-600'
              }`}>
                🤝 Collaboration Areas
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className={`${
                    isDarkMode ? 'text-primary' : 'text-red-600'
                  } text-lg`}>🧠</span>
                  <div>
                    <p className={`font-medium ${
                      isDarkMode ? 'text-foreground' : 'text-black'
                    }`}>AI/ML Research</p>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-muted-foreground' : 'text-black'
                    }`}>Healthcare AI, Edge Computing, Computer Vision</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className={`${
                    isDarkMode ? 'text-primary' : 'text-red-600'
                  } text-lg`}>⚡</span>
                  <div>
                    <p className={`font-medium ${
                      isDarkMode ? 'text-foreground' : 'text-black'
                    }`}>Edge AI Solutions</p>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-muted-foreground' : 'text-black'
                    }`}>Embedded Systems, IoT, Real-time Processing</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className={`${
                    isDarkMode ? 'text-primary' : 'text-red-600'
                  } text-lg`}>🏥</span>
                  <div>
                    <p className={`font-medium ${
                      isDarkMode ? 'text-foreground' : 'text-black'
                    }`}>Medical Diagnostics</p>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-muted-foreground' : 'text-black'
                    }`}>Cardiovascular AI, Signal Processing, Medical Imaging</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className={`${
                    isDarkMode ? 'text-primary' : 'text-red-600'
                  } text-lg`}>🚀</span>
                  <div>
                    <p className={`font-medium ${
                      isDarkMode ? 'text-foreground' : 'text-black'
                    }`}>Open Source Projects</p>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-muted-foreground' : 'text-black'
                    }`}>Knowledge Graphs, RAG Systems, Reinforcement Learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Projects */}
        <div className="mb-16">
          <h3 className={`text-2xl font-semibold mb-8 text-center ${
            isDarkMode ? 'text-foreground' : 'text-black bg-white/10'
          }`}>
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="https://github.com/tarundevs/VHD" target="_blank" rel="noopener noreferrer" className={`${
              isDarkMode ? 'gradient-border p-6 card-hover' : 'bg-white/10 backdrop-blur-sm p-6 card-hover'
            } transition-all duration-300 hover:scale-105`}>
              <h4 className={`text-lg font-semibold mb-3 ${
                isDarkMode ? 'text-primary' : 'text-red-600'
              }`}>
                🫀 Valvular Heart Disease AI
              </h4>
              <p className={`text-sm ${
                isDarkMode ? 'text-muted-foreground' : 'text-black'
              }`}>
                Edge AI implementation for automated heart disease diagnosis with 95% accuracy
              </p>
            </a>
            
            <a href="https://github.com/tarundevs/gnn" target="_blank" rel="noopener noreferrer" className={`${
              isDarkMode ? 'gradient-border p-6 card-hover' : 'bg-white/10 backdrop-blur-sm p-6 card-hover'
            } transition-all duration-300 hover:scale-105`}>
              <h4 className={`text-lg font-semibold mb-3 ${
                isDarkMode ? 'text-primary' : 'text-red-600'
              }`}>
                🧠 Knowledge Graph Intelligence
              </h4>
              <p className={`text-sm ${
                isDarkMode ? 'text-muted-foreground' : 'text-black'
              }`}>
                RGCN with BERT embeddings for multimodal classification achieving 79% accuracy
              </p>
            </a>
            
            <a href="https://github.com/tarundevs/rag_based_ai_agent" target="_blank" rel="noopener noreferrer" className={`${
              isDarkMode ? 'gradient-border p-6 card-hover' : 'bg-white/10 backdrop-blur-sm p-6 card-hover'
            } transition-all duration-300 hover:scale-105`}>
              <h4 className={`text-lg font-semibold mb-3 ${
                isDarkMode ? 'text-primary' : 'text-red-600'
              }`}>
                🔍 RAG Research Assistant
              </h4>
              <p className={`text-sm ${
                isDarkMode ? 'text-muted-foreground' : 'text-black'
              }`}>
                Intelligent research automation with LangChain and vector databases
              </p>
            </a>
          </div>
        </div>
  
        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="mailto:tarunwarrier1@gmail.com" className={`px-6 py-3 rounded-full border transition-colors duration-300 ${
              isDarkMode 
                ? 'border-primary text-primary hover:bg-primary/10' 
                : 'border-red-600 text-red-600 hover:bg-red-600/10 bg-white/10 backdrop-blur-sm'
            }`}>
              Send Email
            </a>
            <a href="https://www.linkedin.com/in/tarun-warrier/" target="_blank" rel="noopener noreferrer" className={`px-6 py-3 rounded-full border transition-colors duration-300 ${
              isDarkMode 
                ? 'border-primary text-primary hover:bg-primary/10' 
                : 'border-red-600 text-red-600 hover:bg-red-600/10 bg-white/10 backdrop-blur-sm'
            }`}>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
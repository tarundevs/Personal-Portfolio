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
    <section id="contact" className="py-12 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className={`text-2xl md:text-3xl font-bold mb-8 text-center ${
          isDarkMode ? 'text-foreground' : 'text-black bg-white/10'
        }`}>
          Let's <span className={
            isDarkMode 
              ? 'text-primary' 
              : 'bg-gradient-to-r from-black to-red-600 bg-clip-text text-transparent'
          }>Connect</span>
        </h2>
        
        {/* Contact Info */}
        <div className="mb-10">
          <h3 className={`text-xl font-semibold mb-6 text-center ${
            isDarkMode ? 'text-foreground' : 'text-black bg-white/10'
          }`}>
            Get In Touch
          </h3>
          
          {/* Compact Contact Details */}
          <div className={`${
            isDarkMode ? 'gradient-border p-6 card-hover' : 'bg-white/10 backdrop-blur-sm p-6 card-hover'
          } max-w-2xl mx-auto`}>
            <h4 className={`text-lg font-semibold mb-4 text-center ${
              isDarkMode ? 'text-primary' : 'text-red-600'
            }`}>
              📧 Contact Information
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center gap-2">
                <span className={`${
                  isDarkMode ? 'text-primary' : 'text-red-600'
                } text-lg`}>✉️</span>
                <div>
                  <p className={`font-medium text-sm ${
                    isDarkMode ? 'text-foreground' : 'text-black'
                  }`}>Email</p>
                  <a href="mailto:tarunwarrier1@gmail.com" className={`text-xs transition-colors duration-300 ${
                    isDarkMode ? 'text-primary hover:text-primary/80' : 'text-red-600 hover:text-red-700'
                  }`}>
                    tarunwarrier1@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-2">
                <span className={`${
                  isDarkMode ? 'text-primary' : 'text-red-600'
                } text-lg`}>📱</span>
                <div>
                  <p className={`font-medium text-sm ${
                    isDarkMode ? 'text-foreground' : 'text-black'
                  }`}>Phone</p>
                  <a href="tel:+917022736732" className={`text-xs transition-colors duration-300 ${
                    isDarkMode ? 'text-primary hover:text-primary/80' : 'text-red-600 hover:text-red-700'
                  }`}>
                    +91 7022736732
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-2">
                <span className={`${
                  isDarkMode ? 'text-primary' : 'text-red-600'
                } text-lg`}>💼</span>
                <div>
                  <p className={`font-medium text-sm ${
                    isDarkMode ? 'text-foreground' : 'text-black'
                  }`}>LinkedIn</p>
                  <a href="https://www.linkedin.com/in/tarun-warrier/" target="_blank" rel="noopener noreferrer" className={`text-xs transition-colors duration-300 ${
                    isDarkMode ? 'text-primary hover:text-primary/80' : 'text-red-600 hover:text-red-700'
                  }`}>
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        
  
        {/* Compact Call to Action */}
        <div className="text-center">
          <div className="flex justify-center gap-3 flex-wrap">
            <a href="https://github.com/tarundevs" className={`px-4 py-2 text-sm rounded-full border transition-colors duration-300 ${
              isDarkMode 
                ? 'border-primary text-primary hover:bg-primary/10' 
                : 'border-red-600 text-red-600 hover:bg-red-600/10 bg-white/10 backdrop-blur-sm'
            }`}>
              Check GitHub
            </a>
            <a href="https://www.linkedin.com/in/tarun-warrier/" target="_blank" rel="noopener noreferrer" className={`px-4 py-2 text-sm rounded-full border transition-colors duration-300 ${
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
import { useEffect, useState } from "react";

export const AboutUs = () => {
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
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${
          isDarkMode ? 'text-foreground' : 'text-black bg-white/10'
        }`}>
          About <span className={
            isDarkMode 
              ? 'text-primary' 
              : 'bg-gradient-to-r from-black to-red-600 bg-clip-text text-transparent'
          }>Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 backdrop-blur-sm card-hover">
            <h3 className={`text-2xl font-semibold ${
              isDarkMode ? 'text-foreground' : 'text-black bg-white/10'
            }`}>
              AI/ML Engineer & Healthcare Technology Innovator
            </h3>
            <p className={`${
              isDarkMode ? 'text-muted-foreground' : 'text-black bg-white/10'
            }`}>
              I'm Tarun Warrier, a passionate AI/ML engineer currently pursuing B.E. (Hons.) in 
              Electronics and Communication Engineering at BITS Pilani, Goa. I am enthusiastic in
              developing AI and edge AI solutions for healthcare and other domains.
            </p>
            <p className={`${
              isDarkMode ? 'text-muted-foreground' : 'text-black bg-white/10'
            }`}>
              Currently working on the NeuroValve Project under a sponsorship of Molbio Diagnostics, where 
              I'm developing an Edge AI implementations for automated valvular heart disease diagnosis using multimodal 
              data including PCG audio signals, ECG recordings, and medical imaging.
            </p>
            <p className={`${
              isDarkMode ? 'text-muted-foreground' : 'text-black bg-white/10'
            }`}>
              My expertise spans deep learning architectures, computer vision, NLP, and edge AI 
              deployment. I'm passionate about creating AI solutions that make healthcare more 
              accessible and efficient.
            </p>
          </div>

          <div className="space-y-6">
            <div className={`p-6 rounded-lg border backdrop-blur-sm card-hover ${
              isDarkMode 
                ? 'border-border bg-card/50' 
                : 'border-gray-200 bg-white/10'
            }`}>
              <h4 className={`text-lg font-semibold mb-4 ${
                isDarkMode ? 'text-foreground' : 'text-black'
              }`}>
                Core Expertise
              </h4>
              <div className="space-y-2">
                <div className={`text-sm ${
                  isDarkMode ? 'text-muted-foreground' : 'text-gray-700'
                }`}>
                  <strong>AI/ML:</strong> PyTorch, TensorFlow, CNNs, RNNs, Transformers
                </div>
                <div className={`text-sm ${
                  isDarkMode ? 'text-muted-foreground' : 'text-gray-700'
                }`}>
                  <strong>Edge AI:</strong> NVIDIA Jetson, Embedded Systems
                </div>
                <div className={`text-sm ${
                  isDarkMode ? 'text-muted-foreground' : 'text-gray-700'
                }`}>
                  <strong>Healthcare AI:</strong> Medical Signal Processing, PCG, ECG
                </div>
                <div className={`text-sm ${
                  isDarkMode ? 'text-muted-foreground' : 'text-gray-700'
                }`}>
                  <strong>Languages:</strong> Python, Java, C/C++, MATLAB
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center flex flex-wrap justify-center gap-4">
          <a 
            href="https://github.com/tarundevs" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`px-6 py-2 rounded-full border transition-colors duration-300 card-hover ${
              isDarkMode 
                ? 'border-primary text-primary hover:bg-primary/10' 
                : 'border-red-600 text-red-600 hover:bg-red-600/10 bg-white/10 backdrop-blur-sm'
            }`}
          >
            View GitHub Projects
          </a>

          <a 
            href="https://www.linkedin.com/in/tarun-warrier/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`px-6 py-2 rounded-full border transition-colors duration-300 card-hover ${
              isDarkMode 
                ? 'border-primary text-primary hover:bg-primary/10' 
                : 'border-red-600 text-red-600 hover:bg-red-600/10 bg-white/10 backdrop-blur-sm'
            }`}
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
};
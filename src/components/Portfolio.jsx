import { useState, useEffect } from 'react';
import { Github, ExternalLink, Award, Brain, Heart, Zap, Code, Database, Cpu } from 'lucide-react';

export const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Theme detection effect
  useEffect(() => {
    const checkTheme = () => {
      const htmlElement = document.documentElement;
      const hasDarkClass = htmlElement.classList.contains('dark');
      setIsDarkMode(hasDarkClass);
    };
    
    checkTheme();
    
    const observer = new MutationObserver(() => {
      checkTheme();
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "NeuroValve Project",
      category: "healthcare",
      description: "EdgeAI implementation for automated valvular heart disease diagnosis using multimodal data including PCG audio signals, ECG recordings, and medical imaging.",
      technologies: ["Python", "NVIDIA Jetson", "Deep Learning", "Medical AI", "Edge Computing"],
      status: "ongoing",
      achievement: "Molbio Student Innovation Award",
      icon: <Heart className="w-6 h-6" />,
      metrics: {
        accuracy: "95%",
        performance: "Real-time",
        deployment: "Edge"
      },
      details: "Collaborating with hospital partners to benchmark performance and develop portable AI-powered health diagnostics solutions."
    },
    {
      id: 2,
      title: "Valvular Heart Disease Detection",
      category: "healthcare",
      description: "AI-based VHD diagnosis utilizing PCG data on microcontroller with lightweight CNN achieving 95% accuracy.",
      technologies: ["Python", "TensorFlow", "MFCC", "ADI MAX78000FTHR", "Embedded Systems"],
      status: "completed",
      github: "https://github.com/tarundevs/VHD",
      icon: <Heart className="w-6 h-6" />,
      metrics: {
        accuracy: "95%",
        platform: "Microcontroller",
        signals: "PCG Audio"
      },
      details: "Implemented lightweight CNN solution with MFCC signal processing for resource-constrained embedded systems.",
      pdf: "C:\Users\LENOVO\Downloads\CERTIFICATE of Awards 2024 anveshan - Participants - Tarun Warrier.pdf"
    },
    {
      id: 3,
      title: "Power Grid Analysis System",
      category: "ai-ml",
      description: "AI-based power grid analysis using hybrid CNN-LSTM neural networks achieving 94% classification accuracy.",
      technologies: ["Python", "CNN-LSTM", "Dynamic Time Warping", "Pattern Recognition"],
      status: "completed",
      icon: <Zap className="w-6 h-6" />,
      metrics: {
        accuracy: "94%",
        model: "CNN-LSTM",
        application: "Grid Analysis"
      },
      details: "Created unsupervised machine learning clustering algorithm for intelligent voltage pattern recognition.",
      image: "https://github.com/tarundevs/Power-Grid-Analysis/blob/main/images/PowerGrid.png?raw=true"
    },
    {
      id: 4,
      title: "AI Knowledge Graph Intelligence",
      category: "ai-ml",
      description: "Intelligent knowledge graph system using RGCN with BERT and CLIP embeddings for multimodal classification.",
      technologies: ["Python", "RGCN", "BERT", "CLIP", "Graph Neural Networks"],
      status: "completed",
      github: "https://github.com/tarundevs/gnn",
      icon: <Brain className="w-6 h-6" />,
      metrics: {
        accuracy: "79%",
        type: "Multimodal",
        optimization: "Cached"
      },
      details: "Built system with optimized caching for computational efficiency and multimodal data processing."
    },
    {
      id: 5,
      title: "AI Research Assistant with RAG",
      category: "ai-ml",
      description: "Intelligent research automation system using RAG, LangChain AI framework, and vector databases.",
      technologies: ["Python", "RAG", "LangChain", "Vector Databases", "NLP"],
      status: "completed",
      github: "https://github.com/tarundevs/rag_based_ai_agent",
      icon: <Database className="w-6 h-6" />,
      metrics: {
        automation: "Full",
        citations: "Supported",
        search: "Intelligent"
      },
      details: "Automates query generation, web searches, and insight extraction with citation-supported AI responses."
    },
    {
      id: 6,
      title: "Reinforcement Learning Game AI",
      category: "ai-ml",
      description: "Advanced RL agent using Double Q-Learning for strategic decision-making with 88% win rate.",
      technologies: ["Python", "Reinforcement Learning", "Double Q-Learning", "Game AI"],
      status: "completed",
      github: "https://github.com/tarundevs/Deep-Reinforcement-Learning",
      icon: <Cpu className="w-6 h-6" />,
      metrics: {
        winRate: "88%",
        learning: "Autonomous",
        optimization: "Policy"
      },
      details: "AI agent achieved high performance through autonomous learning and policy optimization techniques."
    },
    {
      id: 7,
      title: "Quantum Computing Simulator",
      category: "quantum",
      description: "Quantum computing simulator built with Python and NumPy, winning QBITS Hackathon.",
      technologies: ["Python", "NumPy", "MATLAB", "Quantum Computing", "Simulation"],
      status: "completed",
      achievement: "QBITS Hackathon Winner",
      icon: <Code className="w-6 h-6" />,
      metrics: {
        achievement: "Hackathon Win",
        platform: "Quantum Sim",
        tools: "Python/NumPy"
      },
      details: "Developed comprehensive quantum computing simulation environment with advanced mathematical modeling."
    },
    {
      id: 8,
      title: "Gravitational Dynamics Modeling",
      category: "physics",
      description: "Computational physics model for identifying stable trajectories in binary star systems.",
      technologies: ["MATLAB", "Computational Physics", "Gravitational Modeling", "Trajectory Analysis"],
      status: "completed",
      achievement: "VIT Hackathon Winner",
      icon: <Zap className="w-6 h-6" />,
      metrics: {
        achievement: "Hackathon Win",
        modeling: "Binary Stars",
        physics: "Computational"
      },
      details: "Advanced gravitational dynamics simulation for predicting stable orbital trajectories in complex star systems."
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'healthcare', name: 'Healthcare AI', count: projects.filter(p => p.category === 'healthcare').length },
    { id: 'ai-ml', name: 'AI/ML', count: projects.filter(p => p.category === 'ai-ml').length },
    { id: 'quantum', name: 'Quantum Computing', count: projects.filter(p => p.category === 'quantum').length },
    { id: 'physics', name: 'Physics', count: projects.filter(p => p.category === 'physics').length }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status) => {
    switch (status) {
      case 'ongoing': return isDarkMode ? 'text-blue-400' : 'text-blue-600';
      case 'completed': return isDarkMode ? 'text-green-400' : 'text-green-600';
      default: return isDarkMode ? 'text-gray-400' : 'text-gray-600';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'ongoing': return isDarkMode ? 'bg-blue-400/10' : 'bg-blue-100';
      case 'completed': return isDarkMode ? 'bg-green-400/10' : 'bg-green-100';
      default: return isDarkMode ? 'bg-gray-400/10' : 'bg-gray-100';
    }
  };

  return (
    <section id="portfolio" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${
          isDarkMode ? 'text-foreground' : 'text-black bg-white/10'
        }`}>
          My <span className={
            isDarkMode 
              ? 'text-primary' 
              : 'bg-gradient-to-r from-black to-red-600 bg-clip-text text-transparent'
          }>Portfolio</span>
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 card-hover ${
                selectedCategory === category.id
                  ? isDarkMode 
                    ? 'border-primary bg-primary/10 text-primary' 
                    : 'border-red-600 bg-red-600/10 text-red-600'
                  : isDarkMode
                    ? 'border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
                    : 'border-gray-300 text-gray-600 hover:border-red-600/50 hover:text-black bg-white/10 backdrop-blur-sm'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className={`${
                isDarkMode ? 'gradient-border p-6 card-hover' : 'bg-white/10 backdrop-blur-sm p-6 card-hover border border-gray-200'
              } group cursor-pointer transition-all duration-300 hover:scale-105`}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${
                  isDarkMode ? 'bg-primary/10 text-primary' : 'bg-red-100 text-red-600'
                }`}>
                  {project.icon}
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusBg(project.status)} ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  {project.achievement && (
                    <Award className={`w-4 h-4 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
                  )}
                </div>
              </div>

              {/* Project Title */}
              <h3 className={`text-xl font-semibold mb-3 ${
                isDarkMode ? 'text-foreground' : 'text-black'
              }`}>
                {project.title}
              </h3>

              {/* Project Description */}
              <p className={`text-sm mb-4 line-clamp-3 ${
                isDarkMode ? 'text-muted-foreground' : 'text-gray-700'
              }`}>
                {project.description}
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className={`text-xs ${
                    isDarkMode ? 'text-muted-foreground' : 'text-gray-600'
                  }`}>
                    <span className="capitalize font-medium">{key}:</span> {value}
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies.slice(0, 3).map(tech => (
                  <span
                    key={tech}
                    className={`px-2 py-1 text-xs rounded ${
                      isDarkMode 
                        ? 'bg-secondary/50 text-secondary-foreground' 
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className={`px-2 py-1 text-xs rounded ${
                    isDarkMode ? 'bg-secondary/50 text-secondary-foreground' : 'bg-gray-100 text-gray-700'
                  }`}>
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>

              {/* Achievement Badge */}
              {project.achievement && (
                <div className={`text-xs font-medium mb-4 ${
                  isDarkMode ? 'text-yellow-400' : 'text-yellow-600'
                }`}>
                  🏆 {project.achievement}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`flex items-center gap-1 px-3 py-1 text-xs rounded border transition-colors ${
                      isDarkMode 
                        ? 'border-border text-muted-foreground hover:text-foreground hover:border-primary' 
                        : 'border-gray-300 text-gray-600 hover:text-black hover:border-red-600'
                    }`}
                  >
                    <Github className="w-3 h-3" />
                    Code
                  </a>
                )}
                <button
                  className={`flex items-center gap-1 px-3 py-1 text-xs rounded border transition-colors ${
                    isDarkMode 
                      ? 'border-primary text-primary hover:bg-primary/10' 
                      : 'border-red-600 text-red-600 hover:bg-red-600/10'
                  }`}
                >
                  <ExternalLink className="w-3 h-3" />
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedProject(null)}>
            <div 
              className={`max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-lg p-6 ${
                isDarkMode ? 'bg-background border border-border' : 'bg-white'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className={`text-2xl font-bold mb-2 ${
                    isDarkMode ? 'text-foreground' : 'text-black'
                  }`}>
                    {selectedProject.title}
                  </h3>
                  {selectedProject.achievement && (
                    <div className={`text-sm font-medium ${
                      isDarkMode ? 'text-yellow-400' : 'text-yellow-600'
                    }`}>
                      🏆 {selectedProject.achievement}
                    </div>
                  )}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className={`text-2xl ${
                    isDarkMode ? 'text-muted-foreground hover:text-foreground' : 'text-gray-500 hover:text-black'
                  }`}
                >
                  ×
                </button>
              </div>

              <p className={`mb-6 ${
                isDarkMode ? 'text-muted-foreground' : 'text-gray-700'
              }`}>
                {selectedProject.description}
              </p>

              <p className={`mb-6 ${
                isDarkMode ? 'text-foreground' : 'text-black'
              }`}>
                {selectedProject.details}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {Object.entries(selectedProject.metrics).map(([key, value]) => (
                  <div key={key} className={`p-3 rounded-lg ${
                    isDarkMode ? 'bg-secondary/50' : 'bg-gray-100'
                  }`}>
                    <div className={`text-xs ${
                      isDarkMode ? 'text-muted-foreground' : 'text-gray-600'
                    }`}>
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </div>
                    <div className={`font-semibold ${
                      isDarkMode ? 'text-foreground' : 'text-black'
                    }`}>
                      {value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <h4 className={`font-semibold mb-3 ${
                  isDarkMode ? 'text-foreground' : 'text-black'
                }`}>
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map(tech => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-sm rounded ${
                        isDarkMode 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.github && (
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-6 py-2 rounded-lg border transition-colors ${
                      isDarkMode 
                        ? 'border-primary text-primary hover:bg-primary/10' 
                        : 'border-red-600 text-red-600 hover:bg-red-600/10'
                    }`}
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
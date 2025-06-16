import { useState, useEffect } from 'react';
import { Github, ExternalLink, Award, Brain, Heart, Zap, Code, Database, Cpu, Briefcase, GraduationCap } from 'lucide-react';

export const Portfolio = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Theme detection effect
  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(true);
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
    // Research Projects
    {
      id: 1,
      title: "NeuroValve Project",
      type: "research",
      description: "EdgeAI implementation for automated valvular heart disease diagnosis using multimodal data including PCG audio signals, ECG recordings, and medical imaging.",
      technologies: ["Python", "NVIDIA Jetson", "Deep Learning", "Medical AI", "Edge Computing"],
      status: "ongoing",
      achievement: "Molbio Student Innovation Award",
      icon: <Code className="w-6 h-6" />,
      metrics: {
        accuracy: "N/A",
        performance: "Real-time",
        deployment: "Edge"
      },
      details: "Collaborating with hospital partners to benchmark performance and develop portable AI-powered health diagnostics solutions. This project is supported by the Molbio Student Innovation Award fellowship.",
      projectType: "Research Project"
    },
    
    // Fellowship/Sponsorship Projects
    {
      id: 2,
      title: "Valvular Heart Disease Detection",
      type: "fellowship",
      description: "AI-based VHD diagnosis utilizing PCG data on microcontroller with lightweight CNN achieving 95% accuracy.",
      technologies: ["Python", "TensorFlow", "MFCC", "ADI MAX78000FTHR", "Embedded Systems"],
      status: "completed",
      github: "https://github.com/tarundevs/VHD",
      icon: <Code className="w-6 h-6" />,
      metrics: {
        accuracy: "95%",
        platform: "Microcontroller",
        signals: "PCG Audio"
      },
      details: "Implemented lightweight CNN solution with MFCC signal processing for resource-constrained embedded systems. Funded through fellowship program.",
      projectType: "Fellowship Project"
    },
    
    // Internship Projects
    {
      id: 3,
      title: "Power Grid Analysis System",
      type: "internship",
      description: "AI-based power grid analysis using hybrid CNN-LSTM neural networks achieving 94% classification accuracy.",
      technologies: ["Python", "CNN-LSTM", "Dynamic Time Warping", "Pattern Recognition"],
      status: "completed",
      icon: <Code className="w-6 h-6" />,
      metrics: {
        accuracy: "94%",
        model: "CNN-LSTM",
        application: "Grid Analysis"
      },
      details: "Created unsupervised machine learning clustering algorithm for intelligent voltage pattern recognition during industry internship.",
      projectType: "Internship Project"
    },
    
    // Personal Projects
    {
      id: 4,
      title: "AI Knowledge Graph Intelligence",
      type: "personal",
      description: "Intelligent knowledge graph system using RGCN with BERT and CLIP embeddings for multimodal classification.",
      technologies: ["Python", "RGCN", "BERT", "CLIP", "Graph Neural Networks"],
      status: "completed",
      github: "https://github.com/tarundevs/gnn",
      icon: <Code className="w-6 h-6" />,
      metrics: {
        accuracy: "79%",
        type: "Multimodal",
        optimization: "Cached"
      },
      details: "Built system with optimized caching for computational efficiency and multimodal data processing.",
      projectType: "Personal Project"
    },
    {
      id: 5,
      title: "AI Research Assistant with RAG",
      type: "personal",
      description: "Intelligent research automation system using RAG, LangChain AI framework, and vector databases.",
      technologies: ["Python", "RAG", "LangChain", "Vector Databases", "NLP"],
      status: "completed",
      github: "https://github.com/tarundevs/rag_based_ai_agent",
      icon: <Code className="w-6 h-6" />,
      metrics: {
        automation: "Full",
        citations: "Supported",
        search: "Intelligent"
      },
      details: "Automates query generation, web searches, and insight extraction with citation-supported AI responses.",
      projectType: "Personal Project"
    },
    {
      id: 6,
      title: "Reinforcement Learning Game AI",
      type: "personal",
      description: "Advanced RL agent using Double Q-Learning for strategic decision-making with 88% win rate.",
      technologies: ["Python", "Reinforcement Learning", "Double Q-Learning", "Game AI"],
      status: "completed",
      github: "https://github.com/tarundevs/Deep-Reinforcement-Learning",
      icon: <Code className="w-6 h-6" />,
      metrics: {
        winRate: "88%",
        learning: "Autonomous",
        optimization: "Policy"
      },
      details: "AI agent achieved high performance through autonomous learning and policy optimization techniques.",
      projectType: "Personal Project"
    }
  ];

  const projectTypes = [
    { 
      id: 'all', 
      name: 'All Projects', 
      count: projects.length, 
      icon: <Code className="w-4 h-4" />,
      description: 'All projects across categories'
    },
    { 
      id: 'research', 
      name: 'Research', 
      count: projects.filter(p => p.type === 'research').length,
      icon: <Brain className="w-4 h-4" />,
      description: 'Research and academic projects'
    },
    { 
      id: 'fellowship', 
      name: 'Fellowship', 
      count: projects.filter(p => p.type === 'fellowship').length,
      icon: <Award className="w-4 h-4" />,
      description: 'Fellowship and sponsored projects'
    },
    { 
      id: 'internship', 
      name: 'Internship', 
      count: projects.filter(p => p.type === 'internship').length,
      icon: <Briefcase className="w-4 h-4" />,
      description: 'Industry internship projects'
    },
    { 
      id: 'personal', 
      name: 'Personal', 
      count: projects.filter(p => p.type === 'personal').length,
      icon: <Code className="w-4 h-4" />,
      description: 'Personal development projects'
    }
  ];

  const filteredProjects = projects.filter(project => {
    return selectedType === 'all' || project.type === selectedType;
  });

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

  const getProjectTypeBadge = (type) => {
    const baseClasses = "px-2 py-1 text-xs rounded-full font-medium";
    switch (type) {
      case 'research':
        return `${baseClasses} ${isDarkMode ? 'bg-purple-400/10 text-purple-400' : 'bg-purple-100 text-purple-700'}`;
      case 'fellowship':
        return `${baseClasses} ${isDarkMode ? 'bg-yellow-400/10 text-yellow-400' : 'bg-yellow-100 text-yellow-700'}`;
      case 'internship':
        return `${baseClasses} ${isDarkMode ? 'bg-green-400/10 text-green-400' : 'bg-green-100 text-green-700'}`;
      case 'personal':
        return `${baseClasses} ${isDarkMode ? 'bg-blue-400/10 text-blue-400' : 'bg-blue-100 text-blue-700'}`;
      default:
        return `${baseClasses} ${isDarkMode ? 'bg-gray-400/10 text-gray-400' : 'bg-gray-100 text-gray-700'}`;
    }
  };

  const getTypeButtonColor = (type) => {
    switch (type) {
      case 'research':
        return selectedType === type
          ? (isDarkMode ? 'border-purple-400 bg-purple-400/10 text-purple-400' : 'border-purple-600 bg-purple-600/10 text-purple-600')
          : (isDarkMode ? 'border-border text-muted-foreground hover:border-purple-400/50 hover:text-foreground' : 'border-gray-300 text-gray-600 hover:border-purple-600/50 hover:text-black bg-white/10 backdrop-blur-sm');
      case 'fellowship':
        return selectedType === type
          ? (isDarkMode ? 'border-yellow-400 bg-yellow-400/10 text-yellow-400' : 'border-yellow-600 bg-yellow-600/10 text-yellow-600')
          : (isDarkMode ? 'border-border text-muted-foreground hover:border-yellow-400/50 hover:text-foreground' : 'border-gray-300 text-gray-600 hover:border-yellow-600/50 hover:text-black bg-white/10 backdrop-blur-sm');
      case 'internship':
        return selectedType === type
          ? (isDarkMode ? 'border-green-400 bg-green-400/10 text-green-400' : 'border-green-600 bg-green-600/10 text-green-600')
          : (isDarkMode ? 'border-border text-muted-foreground hover:border-green-400/50 hover:text-foreground' : 'border-gray-300 text-gray-600 hover:border-green-600/50 hover:text-black bg-white/10 backdrop-blur-sm');
      case 'personal':
        return selectedType === type
          ? (isDarkMode ? 'border-blue-400 bg-blue-400/10 text-blue-400' : 'border-blue-600 bg-blue-600/10 text-blue-600')
          : (isDarkMode ? 'border-border text-muted-foreground hover:border-blue-400/50 hover:text-foreground' : 'border-gray-300 text-gray-600 hover:border-blue-600/50 hover:text-black bg-white/10 backdrop-blur-sm');
      default:
        return selectedType === type
          ? (isDarkMode ? 'border-primary bg-primary/10 text-primary' : 'border-red-600 bg-red-600/10 text-red-600')
          : (isDarkMode ? 'border-border text-muted-foreground hover:border-primary/50 hover:text-foreground' : 'border-gray-300 text-gray-600 hover:border-red-600/50 hover:text-black bg-white/10 backdrop-blur-sm');
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

        {/* Project Type Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {projectTypes.map(type => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 card-hover ${
                getTypeButtonColor(type.id)
              }`}
              title={type.description}
            >
              {type.icon}
              {type.name} ({type.count})
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
                  project.type === 'research' ? (isDarkMode ? 'bg-purple-400/10 text-purple-400' : 'bg-purple-100 text-purple-600') :
                  project.type === 'fellowship' ? (isDarkMode ? 'bg-yellow-400/10 text-yellow-400' : 'bg-yellow-100 text-yellow-600') :
                  project.type === 'internship' ? (isDarkMode ? 'bg-green-400/10 text-green-400' : 'bg-green-100 text-green-600') :
                  project.type === 'personal' ? (isDarkMode ? 'bg-blue-400/10 text-blue-400' : 'bg-blue-100 text-blue-600') :
                  (isDarkMode ? 'bg-primary/10 text-primary' : 'bg-red-100 text-red-600')
                }`}>
                  {project.icon}
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusBg(project.status)} ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  {project.achievement && (
                    <Award className={`w-4 h-4 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
                  )}
                </div>
              </div>

              {/* Project Type Badge */}
              <div className="mb-3">
                <span className={getProjectTypeBadge(project.type)}>
                  {project.projectType}
                </span>
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
                    project.type === 'research' ? 
                      (isDarkMode ? 'border-purple-400 text-purple-400 hover:bg-purple-400/10' : 'border-purple-600 text-purple-600 hover:bg-purple-600/10') :
                    project.type === 'fellowship' ? 
                      (isDarkMode ? 'border-yellow-400 text-yellow-400 hover:bg-yellow-400/10' : 'border-yellow-600 text-yellow-600 hover:bg-yellow-600/10') :
                    project.type === 'internship' ? 
                      (isDarkMode ? 'border-green-400 text-green-400 hover:bg-green-400/10' : 'border-green-600 text-green-600 hover:bg-green-600/10') :
                    project.type === 'personal' ? 
                      (isDarkMode ? 'border-blue-400 text-blue-400 hover:bg-blue-400/10' : 'border-blue-600 text-blue-600 hover:bg-blue-600/10') :
                      (isDarkMode ? 'border-primary text-primary hover:bg-primary/10' : 'border-red-600 text-red-600 hover:bg-red-600/10')
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
                  <div className="mb-2">
                    <span className={getProjectTypeBadge(selectedProject.type)}>
                      {selectedProject.projectType}
                    </span>
                  </div>
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
                        selectedProject.type === 'research' ? 
                          (isDarkMode ? 'bg-purple-400/10 text-purple-400' : 'bg-purple-100 text-purple-700') :
                        selectedProject.type === 'fellowship' ? 
                          (isDarkMode ? 'bg-yellow-400/10 text-yellow-400' : 'bg-yellow-100 text-yellow-700') :
                        selectedProject.type === 'internship' ? 
                          (isDarkMode ? 'bg-green-400/10 text-green-400' : 'bg-green-100 text-green-700') :
                        selectedProject.type === 'personal' ? 
                          (isDarkMode ? 'bg-blue-400/10 text-blue-400' : 'bg-blue-100 text-blue-700') :
                          (isDarkMode ? 'bg-primary/10 text-primary' : 'bg-red-100 text-red-700')
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
                      selectedProject.type === 'research' ? 
                        (isDarkMode ? 'border-purple-400 text-purple-400 hover:bg-purple-400/10' : 'border-purple-600 text-purple-600 hover:bg-purple-600/10') :
                      selectedProject.type === 'fellowship' ? 
                        (isDarkMode ? 'border-yellow-400 text-yellow-400 hover:bg-yellow-400/10' : 'border-yellow-600 text-yellow-600 hover:bg-yellow-600/10') :
                      selectedProject.type === 'internship' ? 
                        (isDarkMode ? 'border-green-400 text-green-400 hover:bg-green-400/10' : 'border-green-600 text-green-600 hover:bg-green-600/10') :
                      selectedProject.type === 'personal' ? 
                        (isDarkMode ? 'border-blue-400 text-blue-400 hover:bg-blue-400/10' : 'border-blue-600 text-blue-600 hover:bg-blue-600/10') :
                        (isDarkMode ? 'border-primary text-primary hover:bg-primary/10' : 'border-red-600 text-red-600 hover:bg-red-600/10')
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
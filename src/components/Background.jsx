import { useEffect, useState } from "react";

export const Background = () => {
    const [particles, setParticles] = useState([]);
    const [energyWaves, setEnergyWaves] = useState([]);

    useEffect(() => {
        generateParticles();
        generateEnergyWaves();

        const handleResize = () => {
            generateParticles();
            generateEnergyWaves();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const generateParticles = () => {
        const numberOfParticles = Math.floor(window.innerWidth * window.innerHeight) / 15000;
        const newParticles = [];
        const shapes = ['circle', 'triangle', 'square', 'diamond'];
        const colors = ['rgba(255, 140, 0, 0.5)', 'rgba(255, 69, 0, 0.4)', 'rgba(255, 215, 0, 0.6)', 'rgba(255, 165, 0, 0.5)', 'rgba(220, 20, 60, 0.4)'];

        for (let i = 0; i < numberOfParticles; i++) {
            newParticles.push({
                id: i,
                size: Math.random() * 10 + 4,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.6 + 0.3,
                animationDuration: Math.random() * 8 + 6,
                shape: shapes[Math.floor(Math.random() * shapes.length)],
                color: colors[Math.floor(Math.random() * colors.length)],
                rotationSpeed: Math.random() * 15 + 10,
                floatDirection: Math.random() > 0.5 ? 1 : -1,
                delay: Math.random() * 5,
            });
        }

        setParticles(newParticles);
    };

    const generateEnergyWaves = () => {
        const numberOfWaves = 12;
        const newWaves = [];

        for (let i = 0; i < numberOfWaves; i++) {
            newWaves.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                delay: Math.random() * 6,
                animationDuration: Math.random() * 10 + 8,
                scale: Math.random() * 0.8 + 0.4,
                opacity: Math.random() * 0.4 + 0.1,
                hue: Math.random() * 40 + 20, // Orange to red range
                size: Math.random() * 100 + 100,
            });
        }

        setEnergyWaves(newWaves);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Geometric Particles */}
            {particles.map((particle) => (
                <div 
                    key={particle.id} 
                    className="absolute"
                    style={{
                        width: particle.shape === 'triangle' ? '0' : particle.size + "px",
                        height: particle.shape === 'triangle' ? '0' : particle.size + "px",
                        left: particle.x + "%",
                        top: particle.y + "%",
                        backgroundColor: particle.shape === 'triangle' ? 'transparent' : particle.color,
                        opacity: particle.opacity,
                        borderRadius: particle.shape === 'circle' ? '50%' : particle.shape === 'diamond' ? '0' : '2px',
                        transform: particle.shape === 'diamond' ? 'rotate(45deg)' : 'none',
                        borderLeft: particle.shape === 'triangle' ? `${particle.size/2}px solid transparent` : 'none',
                        borderRight: particle.shape === 'triangle' ? `${particle.size/2}px solid transparent` : 'none',
                        borderBottom: particle.shape === 'triangle' ? `${particle.size}px solid ${particle.color}` : 'none',
                        animation: `floatRotate ${particle.animationDuration}s ease-in-out infinite`,
                        animationDelay: particle.delay + "s",
                    }}
                />
            ))}

            {/* Energy Waves */}
            {energyWaves.map((wave) => (
                <div 
                    key={wave.id} 
                    className="absolute rounded-full"
                    style={{
                        width: wave.size + "px",
                        height: wave.size + "px",
                        left: wave.x + "%",
                        top: wave.y + "%",
                        background: `radial-gradient(circle, hsla(${wave.hue}, 70%, 60%, ${wave.opacity}) 0%, transparent 70%)`,
                        animation: `pulseWave ${wave.animationDuration}s ease-in-out infinite`,
                        animationDelay: wave.delay + "s",
                        transformOrigin: 'center',
                    }}
                />
            ))}

            <style jsx>{`
                @keyframes floatRotate {
                    0%, 100% { 
                        transform: translateY(0) rotate(0deg) scale(1);
                        opacity: 0.3;
                    }
                    25% { 
                        transform: translateY(-30px) rotate(90deg) scale(1.1);
                        opacity: 0.8;
                    }
                    50% { 
                        transform: translateY(-15px) rotate(180deg) scale(0.9);
                        opacity: 0.6;
                    }
                    75% { 
                        transform: translateY(-45px) rotate(270deg) scale(1.2);
                        opacity: 0.9;
                    }
                }
                
                @keyframes pulseWave {
                    0%, 100% { 
                        transform: scale(0.3) rotate(0deg);
                        opacity: 0;
                    }
                    25% { 
                        transform: scale(0.8) rotate(90deg);
                        opacity: 0.4;
                    }
                    50% { 
                        transform: scale(1.2) rotate(180deg);
                        opacity: 0.8;
                    }
                    75% { 
                        transform: scale(1.5) rotate(270deg);
                        opacity: 0.6;
                    }
                }
            `}</style>
        </div>
    );
};
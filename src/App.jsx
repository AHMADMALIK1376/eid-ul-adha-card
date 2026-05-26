import React, { useState, useEffect } from 'react';
import Book from './components/Book';
import './App.css';

function App() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 600);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <>
      {/* BACKGROUND LAYER */}
      <div style={{
        position: 'fixed', top: 0, left: 0,
        width: '100vw', height: '100vh',
        background: '#0D1B2A', zIndex: 0, overflow: 'hidden'
      }}>
        
        {/* Stars */}
        {[...Array(isMobile ? 30 : 50)].map((_, i) => (
          <svg key={i} width={3 + Math.random() * 6} height={3 + Math.random() * 6} 
               viewBox="0 0 12 12" style={{
            position: 'absolute',
            top: `${Math.random() * 50}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.4 + Math.random() * 0.6,
            animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 4}s`
          }}>
            <polygon points="6,0 7.5,4.5 12,6 7.5,7.5 6,12 4.5,7.5 0,6 4.5,4.5" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="0.3"/>
          </svg>
        ))}
        
        {/* Crescent Moon */}
        <svg width={isMobile ? "35" : "55"} height={isMobile ? "35" : "55"} viewBox="0 0 80 80" style={{
          position: 'absolute', top: isMobile ? '3%' : '8%', right: isMobile ? '5%' : '8%', opacity: 0.9, zIndex: 3
        }}>
          <circle cx="40" cy="40" r="34" fill="#FFF8DC" stroke="#E8D5A0" strokeWidth="2.5"/>
          <circle cx="50" cy="34" r="28" fill="#0D1B2A"/>
        </svg>

        {/* Lanterns */}
        <div style={{ position: 'absolute', top: isMobile ? '6%' : '10%', left: '3%', fontSize: isMobile ? '16px' : '26px', filter: 'drop-shadow(0 0 4px rgba(255,180,50,0.7))', zIndex: 3 }}>🏮</div>
        <div style={{ position: 'absolute', top: isMobile ? '5%' : '8%', left: isMobile ? '22%' : '20%', fontSize: isMobile ? '20px' : '30px', filter: 'drop-shadow(0 0 4px rgba(255,180,50,0.7))', zIndex: 3 }}>🏮</div>
        {!isMobile && <div style={{ position: 'absolute', top: '10%', left: '40%', fontSize: '24px', filter: 'drop-shadow(0 0 4px rgba(255,180,50,0.7))', zIndex: 3 }}>🏮</div>}
        <div style={{ position: 'absolute', top: isMobile ? '5%' : '8%', left: isMobile ? '58%' : '60%', fontSize: isMobile ? '20px' : '30px', filter: 'drop-shadow(0 0 4px rgba(255,180,50,0.7))', zIndex: 3 }}>🏮</div>
        <div style={{ position: 'absolute', top: isMobile ? '6%' : '10%', left: isMobile ? '80%' : '80%', fontSize: isMobile ? '16px' : '26px', filter: 'drop-shadow(0 0 4px rgba(255,180,50,0.7))', zIndex: 3 }}>🏮</div>
        {!isMobile && (
          <>
            <div style={{ position: 'absolute', top: '18%', left: '10%', fontSize: '22px', filter: 'drop-shadow(0 0 3px rgba(255,180,50,0.6))', zIndex: 3 }}>🏮</div>
            <div style={{ position: 'absolute', top: '16%', left: '35%', fontSize: '28px', filter: 'drop-shadow(0 0 3px rgba(255,180,50,0.6))', zIndex: 3 }}>🏮</div>
            <div style={{ position: 'absolute', top: '18%', left: '65%', fontSize: '22px', filter: 'drop-shadow(0 0 3px rgba(255,180,50,0.6))', zIndex: 3 }}>🏮</div>
            <div style={{ position: 'absolute', top: '16%', left: '88%', fontSize: '28px', filter: 'drop-shadow(0 0 3px rgba(255,180,50,0.6))', zIndex: 3 }}>🏮</div>
          </>
        )}

        {/* ============ CHILD WITH SHEEP - LEFT ============ */}
        <img 
          src="/child-with-sheep.png" 
          alt=""
          style={{
            position: 'absolute', bottom: '0', left: isMobile ? '1%' : '5%',
            width: isMobile ? '28%' : '30%', maxWidth: isMobile ? '160px' : '360px',
            height: 'auto', maxHeight: isMobile ? '45vh' : '65vh',
            objectFit: 'contain', objectPosition: 'left bottom',
            opacity: 0.95, zIndex: 2
          }}
        />

        {/* ============ CHILD WITH COW - RIGHT ============ */}
        <img 
          src="/child-with-cow.png" 
          alt=""
          style={{
            position: 'absolute', bottom: '0', right: isMobile ? '1%' : '5%',
            width: isMobile ? '28%' : '30%', maxWidth: isMobile ? '160px' : '360px',
            height: 'auto', maxHeight: isMobile ? '45vh' : '65vh',
            objectFit: 'contain', objectPosition: 'right bottom',
            opacity: 0.95, zIndex: 2
          }}
        />

        {/* ============ MOSQUE ============ */}
        <img 
          src="/mosque.png" 
          alt=""
          style={{
            position: 'absolute', bottom: '0', left: '50%',
            transform: 'translateX(-50%)',
            width: isMobile ? '100%' : '110%', maxWidth: isMobile ? '380px' : '650px',
            height: 'auto', maxHeight: isMobile ? '40vh' : '55vh',
            objectFit: 'contain', objectPosition: 'bottom',
            opacity: 0.85, zIndex: 0
          }}
        />
        
        <style>{`
          @keyframes twinkle {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.4); }
          }
        `}</style>
        
      </div>
      
      {/* BOOK LAYER */}
      <div style={{
        position: 'fixed', top: 0, left: 0,
        width: '100vw', height: '100vh',
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        zIndex: 1, pointerEvents: 'auto', padding: '8px'
      }}>
        <Book />
      </div>
    </>
  );
}

export default App;
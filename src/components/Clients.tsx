import React, { useState, useEffect } from 'react';

export default function ScrollingClients() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const clients = [
    { 
      id: 1, 
      name: 'Bangalore Mysore Infrastructure Corridor', 
      industry: 'Infrastructure',
      logo: './images/clients/BMIC.png'
    },
    { 
      id: 2, 
      name: 'Gram Tarang', 
      industry: 'Research',
      logo: './images/clients/GramTarang.png'
    },
    { 
      id: 3, 
      name: 'KIADB', 
      industry: 'Infrastructure',
      logo: './images/clients/KIADB.png'
    },
    { 
      id: 4, 
      name: 'KSTEPS', 
      industry: 'Educational Institute',
      logo: './images/clients/KSTEPS.png'
    },
    { 
      id: 5, 
      name: 'NewTrace', 
      industry: 'IT',
      logo: './images/clients/NewTrace.png'
    },
    { 
      id: 6, 
      name: 'Reva', 
      industry: 'EV Cars',
      logo: './images/clients/Reva.png'
    },
    { 
      id: 7, 
      name: 'Shahi', 
      industry: 'Creative',
      logo: './images/clients/Shahi.png'
    },
    { 
      id: 8, 
      name: 'Tesco', 
      industry: 'Development',
      logo: '/images/clients/Tesco.png'
    },
  ];

  const itemsPerView = 4;
  const displayDuration = 3000;

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentIndex((prev) => {
          const next = prev + itemsPerView;
          return next >= clients.length ? 0 : next;
        });
        setIsTransitioning(false);
      }, 500);
    }, displayDuration);

    return () => clearInterval(timer);
  }, [clients.length]);

  const visibleClients = [];
  for (let i = 0; i < itemsPerView; i++) {
    const index = (currentIndex + i) % clients.length;
    visibleClients.push(clients[index]);
  }

  return (
    <div 
      style={{
        width: '100%',
        height: '20vh',
        minHeight: '200px',
        background: 'linear-gradient(to bottom right, #f8fafc, #ffffff, #f1f5f9)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderTop: '1px solid #e5e7eb',
        borderBottom: '1px solid #e5e7eb',
        padding: '20px 0'
      }}
    >
      <div style={{ width: '100%', maxWidth: '1600px', padding: '0 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', margin: '0 0 4px 0' }}>
            Trusted by Industry Leaders
          </h2>
        </div>
        
        {/* Horizontal grid for client cards */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            width: '100%',
            padding: '0 20px'
          }}
        >
          {visibleClients.map((client, idx) => (
            <div
              key={`${client.id}-${currentIndex}-${idx}`}
              style={{
                width: '100%',
                height: '90px',
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                border: '1px solid #e5e7eb',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px',
                gap: '8px',
                transition: 'all 0.5s ease-in-out',
                opacity: isTransitioning ? 0 : 1,
                transform: isTransitioning ? 'scale(0.95)' : 'scale(1)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.15)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <img 
                src={client.logo} 
                alt={`${client.name} logo`}
                style={{
                  height: '40px',
                  maxWidth: '100%',
                  objectFit: 'contain'
                }}
              />
              <p style={{ fontSize: '11px', color: '#6b7280', textAlign: 'center', margin: 0 }}>
                {client.industry}
              </p>
            </div>
          ))}
        </div>

        {/* Progress indicators */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '20px' }}>
          {Array.from({ length: Math.ceil(clients.length / itemsPerView) }).map((_, idx) => (
            <div
              key={idx}
              style={{
                height: '6px',
                width: Math.floor(currentIndex / itemsPerView) === idx ? '32px' : '6px',
                borderRadius: '3px',
                backgroundColor: Math.floor(currentIndex / itemsPerView) === idx ? '#4f46e5' : '#d1d5db',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
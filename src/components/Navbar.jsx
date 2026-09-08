import React, { useState } from 'react';
import { 
  Sparkles, 
  Menu, 
  X, 
  BookOpen, 
  Code2, 
  Cpu, 
  LogOut, 
  User, 
  ShieldCheck, 
  Award, 
  Wrench, 
  ExternalLink 
} from 'lucide-react';
import { DEMO_CREDENTIALS } from '../data/visaiData';

export default function Navbar({ activeTab, setActiveTab, currentRole, onLogout, onOpenAuthModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentCred = DEMO_CREDENTIALS.find(c => c.role === currentRole);

  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'tracks', label: 'Tracks (SW & HW)' },
    { id: 'problems', label: 'Problem Statements' },
    { id: 'sdgs', label: 'SDG Matrix' },
    { id: 'timeline', label: 'Hackathon Model' },
    { id: 'souvenir', label: 'Innovation Souvenir' },
    { id: 'stalls', label: 'Expo & Stalls' }
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(7, 9, 14, 0.88)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.9rem 1.5rem' }}>
        
        {/* Brand & Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }} onClick={() => setActiveTab('overview')}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #0284c7 0%, #6366f1 100%)',
            color: '#fff',
            fontWeight: 800,
            fontSize: '1.25rem',
            boxShadow: '0 0 15px rgba(56, 189, 248, 0.4)'
          }}>
            V
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff' }}>
                VISAI <span style={{ color: '#38bdf8' }}>2027</span>
              </span>
              <span style={{
                fontSize: '0.65rem',
                padding: '0.15rem 0.45rem',
                borderRadius: '4px',
                background: 'rgba(56, 189, 248, 0.15)',
                color: '#38bdf8',
                fontWeight: 700,
                border: '1px solid rgba(56, 189, 248, 0.3)'
              }}>
                17th Edition
              </span>
            </div>
            <div style={{ fontSize: '0.725rem', color: '#94a3b8', letterSpacing: '0.01em' }}>
              Vel Tech R&D Institute • 36/48-Hour SDG Hackathon
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '1.25rem' }} className="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                background: 'none',
                border: 'none',
                color: activeTab === item.id ? '#38bdf8' : '#94a3b8',
                fontWeight: activeTab === item.id ? 700 : 500,
                fontSize: '0.875rem',
                cursor: 'pointer',
                position: 'relative',
                padding: '0.4rem 0.2rem',
                transition: 'color 0.2s'
              }}
            >
              {item.label}
              {activeTab === item.id && (
                <span style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: '10%',
                  right: '10%',
                  height: '2px',
                  background: '#38bdf8',
                  borderRadius: '2px'
                }} />
              )}
            </button>
          ))}
        </nav>

        {/* Role & Auth Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {currentRole ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <button
                onClick={() => setActiveTab('portal')}
                className="btn btn-sm"
                style={{
                  background: currentCred?.color || '#2563eb',
                  color: '#fff',
                  boxShadow: `0 0 15px ${currentCred?.color || '#2563eb'}66`,
                  border: 'none'
                }}
              >
                <User size={14} />
                <span>{currentCred?.badge || 'My Portal'}</span>
              </button>

              <button
                onClick={onLogout}
                className="btn btn-sm btn-secondary"
                title="Log out back to public view"
                style={{ padding: '0.45rem' }}
              >
                <LogOut size={14} />
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <button
                onClick={onOpenAuthModal}
                className="btn btn-sm btn-primary"
              >
                <span>Portal Login</span>
              </button>
            </div>
          )}

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              padding: '0.3rem'
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: '#090d16',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '1.25rem'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  color: activeTab === item.id ? '#38bdf8' : '#94a3b8',
                  padding: '0.5rem 0',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {item.label}
              </button>
            ))}

            <div style={{ paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <button
                onClick={() => {
                  onOpenAuthModal();
                  setMobileMenuOpen(false);
                }}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                Sign In / Role Switcher
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 960px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}

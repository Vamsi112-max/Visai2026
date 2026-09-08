import React, { useState } from 'react';
import { DEMO_CREDENTIALS } from '../data/visaiData';
import { 
  X, 
  Key, 
  ShieldCheck, 
  UserCheck, 
  Award, 
  Wrench, 
  Lock, 
  Mail, 
  Check, 
  ArrowRight 
} from 'lucide-react';

const roleIcons = {
  admin: ShieldCheck,
  participant: UserCheck,
  jury: Award,
  coordinator: Wrench
};

export default function AuthModal({ isOpen, onClose, onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('participant');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handlePreFill = (cred) => {
    setEmail(cred.email);
    setPassword(cred.password);
    setSelectedRole(cred.role);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const matched = DEMO_CREDENTIALS.find(
      c => c.email.toLowerCase() === email.toLowerCase() && c.password === password
    );

    if (matched) {
      onLoginSuccess(matched.role);
      onClose();
    } else {
      const byRole = DEMO_CREDENTIALS.find(c => c.role === selectedRole);
      if (byRole && (email === '' || email === byRole.email)) {
        onLoginSuccess(byRole.role);
        onClose();
      } else {
        setError('Invalid credentials. Please click any demo account below to auto-fill!');
      }
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px' }}>
        
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff'
            }}>
              <Key size={20} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a' }}>
                VISAI 2027 Portal Login
              </h2>
              <p style={{ fontSize: '0.8rem', color: '#64748b' }}>
                Access Admin, Participant, Grand Jury, or Coordinator Dashboards
              </p>
            </div>
          </div>

          <button className="modal-close" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Demo Credentials Quick Switcher Banner */}
        <div style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '14px',
          padding: '1.25rem',
          marginBottom: '1.5rem'
        }}>
          <div style={{
            fontSize: '0.8rem',
            fontWeight: 700,
            color: '#2563eb',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            marginBottom: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem'
          }}>
            <Key size={14} /> One-Click Demo Role Accounts:
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '0.75rem'
          }}>
            {DEMO_CREDENTIALS.map((cred) => {
              const Icon = roleIcons[cred.role];
              const isSelected = selectedRole === cred.role;

              return (
                <div
                  key={cred.role}
                  onClick={() => handlePreFill(cred)}
                  style={{
                    background: isSelected ? '#eff6ff' : '#ffffff',
                    border: `1px solid ${isSelected ? '#2563eb' : '#cbd5e1'}`,
                    borderRadius: '10px',
                    padding: '0.75rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    position: 'relative',
                    boxShadow: isSelected ? '0 0 0 2px rgba(37, 99, 235, 0.15)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '6px',
                      background: cred.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff'
                    }}>
                      <Icon size={14} />
                    </div>
                    <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#0f172a' }}>
                      {cred.badge}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.725rem', color: '#64748b', lineHeight: 1.35, marginBottom: '0.35rem' }}>
                    {cred.description}
                  </div>

                  <div style={{
                    fontSize: '0.7rem',
                    fontFamily: 'var(--font-mono)',
                    color: '#1d4ed8',
                    background: '#f1f5f9',
                    padding: '0.2rem 0.4rem',
                    borderRadius: '4px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    border: '1px solid #e2e8f0'
                  }}>
                    <span>{cred.email}</span>
                    <span style={{ color: '#b45309', fontWeight: 700 }}>pw: {cred.password}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Standard Login Form */}
        <form onSubmit={handleSubmit}>
          {error && (
            <div style={{
              background: '#fef2f2',
              border: '1px solid #fecaca',
              color: '#dc2626',
              padding: '0.75rem',
              borderRadius: '8px',
              fontSize: '0.85rem',
              marginBottom: '1rem'
            }}>
              {error}
            </div>
          )}

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div style={{ position: 'relative' }}>
              <Mail size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. admin@visai.veltech.edu.in"
                className="form-input"
                style={{ paddingLeft: '2.5rem' }}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input
                type="text"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password (or click role above)"
                className="form-input"
                style={{ paddingLeft: '2.5rem' }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.5rem' }}>
            <button
              type="button"
              onClick={() => {
                const cred = DEMO_CREDENTIALS.find(c => c.role === selectedRole) || DEMO_CREDENTIALS[0];
                onLoginSuccess(cred.role);
                onClose();
              }}
              className="btn btn-secondary"
            >
              1-Click Fast Login
            </button>

            <button type="submit" className="btn btn-primary">
              <span>Enter {selectedRole.toUpperCase()} Portal</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}

import React from 'react';
import { DEMO_CREDENTIALS } from '../data/visaiData';
import { ShieldCheck, UserCheck, Award, Wrench, Key, Globe } from 'lucide-react';

const roleIcons = {
  admin: ShieldCheck,
  participant: UserCheck,
  jury: Award,
  coordinator: Wrench
};

export default function CredentialsBanner({ currentRole, onSelectRole, onOpenAuthModal, onResetToPublic }) {
  return (
    <div className="credentials-bar">
      <div className="container inner">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontWeight: 700, color: '#38bdf8' }}>
            <Key size={14} /> DEMO LOGIN CREDENTIALS:
          </span>
          <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
            Click any role to test dashboard directly:
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          {DEMO_CREDENTIALS.map((cred) => {
            const Icon = roleIcons[cred.role] || UserCheck;
            const isActive = currentRole === cred.role;

            return (
              <button
                key={cred.role}
                onClick={() => onSelectRole(cred.role)}
                className="role-pill"
                style={{
                  background: isActive ? cred.color : 'rgba(255, 255, 255, 0.07)',
                  borderColor: isActive ? '#fff' : 'rgba(255, 255, 255, 0.15)',
                  color: isActive ? '#fff' : '#e2e8f0',
                  boxShadow: isActive ? `0 0 12px ${cred.color}88` : 'none'
                }}
                title={`Email: ${cred.email} | Pass: ${cred.password}`}
              >
                <Icon size={13} />
                <span>{cred.badge}</span>
                <span style={{ opacity: 0.75, fontSize: '0.7rem', color: '#fbbf24' }}>({cred.password})</span>
              </button>
            );
          })}

          {currentRole && (
            <button
              onClick={onResetToPublic}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#34d399',
                borderRadius: '9999px',
                padding: '0.25rem 0.65rem',
                fontSize: '0.75rem',
                cursor: 'pointer',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}
            >
              <Globe size={12} />
              <span>Public View</span>
            </button>
          )}

          <button
            onClick={() => onOpenAuthModal()}
            style={{
              background: 'transparent',
              border: '1px dashed rgba(56, 189, 248, 0.6)',
              color: '#38bdf8',
              borderRadius: '9999px',
              padding: '0.25rem 0.65rem',
              fontSize: '0.75rem',
              cursor: 'pointer',
              fontWeight: 600,
              marginLeft: '0.25rem'
            }}
          >
            Auth Modal & Details
          </button>
        </div>
      </div>
    </div>
  );
}

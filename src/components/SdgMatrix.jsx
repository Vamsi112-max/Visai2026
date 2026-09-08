import React, { useState } from 'react';
import { SDG_LIST, INITIAL_PROBLEM_STATEMENTS } from '../data/visaiData';
import { Globe, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function SdgMatrix({ onFilterBySdg }) {
  const [activeSdg, setActiveSdg] = useState(null);

  return (
    <section id="sdgs" className="section" style={{ background: '#f1f5f9' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="badge-tag">
            <Globe size={14} />
            <span>United Nations Agenda 2030</span>
          </div>
          <h2 className="section-title">
            17 Sustainable Development Goals <span className="gradient-text-emerald">(SDGs)</span>
          </h2>
          <p className="section-subtitle">
            VISAI shifted from conventional department streams into UN SDG-driven innovation. Every project tackles real-world engineering challenges mapped directly to SDG targets.
          </p>
        </div>

        {/* SDG Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
          gap: '1rem',
          marginBottom: '3rem'
        }}>
          {SDG_LIST.map((sdg) => {
            const problemCount = INITIAL_PROBLEM_STATEMENTS.filter(p => p.sdgId === sdg.id).length;
            const isHovered = activeSdg?.id === sdg.id;

            return (
              <div
                key={sdg.id}
                onMouseEnter={() => setActiveSdg(sdg)}
                onClick={() => {
                  if (onFilterBySdg) onFilterBySdg(sdg.id.toString());
                }}
                className="glass-card"
                style={{
                  padding: '1.25rem',
                  borderLeft: `5px solid ${sdg.color}`,
                  cursor: 'pointer',
                  background: isHovered ? '#eff6ff' : '#ffffff',
                  transform: isHovered ? 'translateY(-4px)' : 'none',
                  transition: 'all 0.25s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    color: sdg.color
                  }}>
                    {sdg.code}
                  </span>
                  {problemCount > 0 && (
                    <span style={{
                      fontSize: '0.7rem',
                      padding: '0.15rem 0.45rem',
                      borderRadius: '9999px',
                      background: `${sdg.color}18`,
                      color: sdg.color,
                      border: `1px solid ${sdg.color}44`,
                      fontWeight: 700
                    }}>
                      {problemCount} Challenges
                    </span>
                  )}
                </div>

                <h4 style={{
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  lineHeight: 1.35,
                  color: '#0f172a',
                  marginBottom: '0.5rem',
                  minHeight: '2.7rem'
                }}>
                  {sdg.name}
                </h4>

                <div style={{
                  fontSize: '0.75rem',
                  color: '#2563eb',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  fontWeight: 700
                }}>
                  <span>Explore Problems</span>
                  <ArrowUpRight size={12} />
                </div>
              </div>
            );
          })}
        </div>

        {/* SDG Focus Banner */}
        <div className="glass-card" style={{
          padding: '2.25rem 2.5rem',
          background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfeff 100%)',
          border: '1px solid #a7f3d0',
          borderRadius: '16px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#047857', fontWeight: 700, marginBottom: '0.5rem' }}>
                <Sparkles size={18} />
                <span>Why SDG Mapping Matters for Students</span>
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>
                Accreditation & Global Innovation Recognition
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.65 }}>
                Participation in VISAI earns students and participating universities prestigious credentials with accreditation bodies such as <strong>NAAC</strong> and <strong>NBA</strong>. Furthermore, top teams gain international visibility and patent acceleration via Vel Tech R&D Institute.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: '#1e293b', fontWeight: 600 }}>
                <CheckCircle2 size={18} color="#059669" />
                <span>Direct mentorship from MNC R&D Directors</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: '#1e293b', fontWeight: 600 }}>
                <CheckCircle2 size={18} color="#059669" />
                <span>Vel Tech Sponsored International Trip to Malaysia for top teams</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: '#1e293b', fontWeight: 600 }}>
                <CheckCircle2 size={18} color="#059669" />
                <span>Publication in the Official VISAI 2027 Innovation Souvenir</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

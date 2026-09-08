import React, { useState } from 'react';
import { HACKATHON_ROUNDS } from '../data/visaiData';
import { 
  GitCommit, 
  CheckCircle2, 
  Clock, 
  Award, 
  ArrowRight, 
  Calendar, 
  Users, 
  FileText, 
  Trophy 
} from 'lucide-react';

export default function HackathonTimeline() {
  const [activeTab, setActiveTab] = useState('rounds'); // 'rounds' or 'lifecycle'

  const lifecycleSteps = [
    {
      step: '01',
      title: 'Open Registration & Screening',
      timeline: '30–45 Days Prior',
      desc: 'Registrations open via Unstop & portal. Teams access dummy/sample SDG challenges and submit an Initial Abstract or PPT explaining problem understanding, tech approach, and impact.',
      icon: Users
    },
    {
      step: '02',
      title: 'Shortlisting & Track Assignment',
      timeline: '20 Days Prior',
      desc: 'Rigorous peer screening separates accepted teams into 💻 Software Track or 🔧 Hardware Track to guarantee high competitive standards.',
      icon: CheckCircle2
    },
    {
      step: '03',
      title: 'Dual Release Strategy',
      timeline: '7-10 Days Prior & On-Spot',
      desc: 'Hardware problem statements released 7–10 days early for component sourcing. Software problem statements released strictly on-spot at the hackathon venue.',
      icon: Clock
    },
    {
      step: '04',
      title: '36 / 48-Hour Main Hackathon',
      timeline: 'Event Weekend',
      desc: 'Non-stop hacking with four structured evaluation milestones (Validation, Tech Review, MVP Prototype, Grand Jury Finale). Food, rest areas, and tech support provided 24/7.',
      icon: Trophy
    },
    {
      step: '05',
      title: 'Final Abstract & Souvenir Publication',
      timeline: 'Finale & Post-Event',
      desc: 'Selected projects submit structured final abstracts that are compiled automatically into the official VISAI 2027 Innovation Book, connecting finalists to patents and incubation.',
      icon: FileText
    }
  ];

  return (
    <section id="timeline" className="section">
      <div className="container">
        
        <div className="section-header">
          <div className="badge-tag">
            <Calendar size={14} />
            <span>End-to-End Innovation Process</span>
          </div>
          <h2 className="section-title">
            The VISAI 2027 <span className="gradient-text-cyan">Hackathon Model</span>
          </h2>
          <p className="section-subtitle">
            Moving beyond conventional science exhibitions to a time-pressured, industry-mentored, multi-stage innovation lifecycle.
          </p>
        </div>

        {/* View Toggle */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '3rem' }}>
          <button
            onClick={() => setActiveTab('rounds')}
            className={`btn ${activeTab === 'rounds' ? 'btn-primary' : 'btn-secondary'}`}
          >
            4 Internal Evaluation Rounds
          </button>
          <button
            onClick={() => setActiveTab('lifecycle')}
            className={`btn ${activeTab === 'lifecycle' ? 'btn-primary' : 'btn-secondary'}`}
          >
            5-Stage Complete Lifecycle
          </button>
        </div>

        {/* 4 INTERNAL EVALUATION ROUNDS VIEW */}
        {activeTab === 'rounds' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {HACKATHON_ROUNDS.map((round, idx) => (
              <div
                key={round.round}
                className="glass-card"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: idx === 3 ? '4px solid #a855f7' : '4px solid #38bdf8',
                  position: 'relative'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <span style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 800,
                      color: idx === 3 ? '#c084fc' : '#38bdf8',
                      background: 'rgba(255, 255, 255, 0.05)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '6px'
                    }}>
                      {round.round}
                    </span>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#fbbf24',
                      background: 'rgba(245, 158, 11, 0.1)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '9999px',
                      border: '1px solid rgba(245, 158, 11, 0.25)'
                    }}>
                      Weightage: {round.weightage}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>
                    {round.title}
                  </h3>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.8rem',
                    color: '#38bdf8',
                    marginBottom: '1rem',
                    fontWeight: 600
                  }}>
                    <Clock size={14} />
                    <span>{round.hours}</span>
                  </div>

                  <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {round.focus}
                  </p>
                </div>

                <div style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-subtle)',
                  fontSize: '0.78rem',
                  color: '#94a3b8'
                }}>
                  <strong style={{ color: '#e2e8f0' }}>Evaluator:</strong> {round.evaluator}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 5-STAGE LIFECYCLE VIEW */}
        {activeTab === 'lifecycle' && (
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {lifecycleSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.step}
                    className="glass-card"
                    style={{
                      padding: '1.75rem 2rem',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1.5rem'
                    }}
                  >
                    <div style={{
                      minWidth: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.2) 0%, rgba(99, 102, 241, 0.2) 100%)',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      color: '#38bdf8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '1.1rem',
                      fontFamily: 'var(--font-mono)'
                    }}>
                      {step.step}
                    </div>

                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>
                          {step.title}
                        </h3>
                        <span style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          color: '#38bdf8',
                          background: 'rgba(56, 189, 248, 0.1)',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '9999px',
                          border: '1px solid rgba(56, 189, 248, 0.25)'
                        }}>
                          {step.timeline}
                        </span>
                      </div>
                      <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

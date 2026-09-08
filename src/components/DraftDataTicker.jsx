import React, { useState, useEffect } from 'react';
import { DRAFT_TICKER_DATA, INITIAL_PROBLEM_STATEMENTS } from '../data/visaiData';
import { Sparkles, FileText, ChevronRight, Eye, X, CheckCircle2, Clock, Tag } from 'lucide-react';

export default function DraftDataTicker({ onSelectProblem, onSelectRole }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % DRAFT_TICKER_DATA.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const activeDraft = DRAFT_TICKER_DATA[currentIndex];

  return (
    <>
      {/* Top Draft Data Ticker Strip */}
      <div style={{
        background: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
        padding: '0.35rem 1rem',
        fontSize: '0.78rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.5rem',
        boxShadow: '0 1px 2px rgba(0,0,0,0.02)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', overflow: 'hidden' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.3rem',
            background: '#fef3c7',
            color: '#b45309',
            padding: '0.15rem 0.5rem',
            borderRadius: '9999px',
            fontWeight: 800,
            fontSize: '0.7rem',
            letterSpacing: '0.04em',
            border: '1px solid #fde68a'
          }}>
            <Sparkles size={12} /> DRAFT DATA FEED
          </span>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#334155' }}>
            <span style={{ fontWeight: 700, color: '#0f172a', fontFamily: 'var(--font-mono)' }}>
              {activeDraft.type}:
            </span>
            <span style={{ color: '#2563eb', fontWeight: 600 }}>{activeDraft.code}</span>
            <span style={{ color: '#64748b' }}>—</span>
            <span style={{ color: '#0f172a', fontWeight: 500 }}>{activeDraft.title}</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <button
            onClick={() => setModalOpen(true)}
            style={{
              background: 'none',
              border: 'none',
              color: '#2563eb',
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.2rem'
            }}
          >
            <Eye size={13} />
            <span>Inspect All Draft Data</span>
          </button>
        </div>
      </div>

      {/* Draft Data Inspector Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '750px' }}>
            <div className="modal-header">
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a' }}>
                  VISAI 2027 Live Draft Data & Problem Catalog
                </h3>
                <p style={{ fontSize: '0.825rem', color: '#64748b' }}>
                  Pre-configured draft statements, dummy submissions, and evaluation rubrics ready for review.
                </p>
              </div>
              <button className="modal-close" onClick={() => setModalOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '60vh', overflowY: 'auto' }}>
              {INITIAL_PROBLEM_STATEMENTS.map((ps) => (
                <div
                  key={ps.id}
                  style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '10px',
                    padding: '1rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.75rem'
                  }}
                >
                  <div style={{ flex: 1, minWidth: '240px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        color: ps.sdgColor,
                        background: '#ffffff',
                        padding: '0.15rem 0.45rem',
                        borderRadius: '4px',
                        border: '1px solid #e2e8f0'
                      }}>
                        {ps.code}
                      </span>
                      <span style={{ fontSize: '0.725rem', color: '#64748b' }}>• {ps.track} Track</span>
                    </div>
                    <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.925rem' }}>{ps.title}</div>
                    <div style={{ fontSize: '0.78rem', color: '#475569' }}>Partner: {ps.industryPartner}</div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                      onClick={() => {
                        if (onSelectRole) onSelectRole('participant');
                        setModalOpen(false);
                      }}
                      className="btn btn-sm btn-primary"
                    >
                      <span>Load in Participant Portal</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'flex-end' }}>
              <button onClick={() => setModalOpen(false)} className="btn btn-secondary">
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

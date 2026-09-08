import React, { useState } from 'react';
import { SOUVENIR_ARTICLES, SDG_LIST } from '../data/visaiData';
import { 
  BookOpen, 
  ChevronLeft, 
  ChevronRight, 
  Printer, 
  Share2, 
  Award, 
  Sparkles, 
  Building, 
  Globe, 
  Download, 
  CheckCircle, 
  FileCheck, 
  Search,
  Layers,
  Maximize2
} from 'lucide-react';

export default function SouvenirBook({ additionalArticles = [] }) {
  const allArticles = [...SOUVENIR_ARTICLES, ...additionalArticles];
  const [currentPage, setCurrentPage] = useState(0); // 0 = Cover & Foreword, 1... = Project Abstracts
  const [searchFilter, setSearchFilter] = useState('');
  const [selectedTrackFilter, setSelectedTrackFilter] = useState('all');

  const filteredArticles = allArticles.filter(art => {
    const matchesTrack = selectedTrackFilter === 'all' || art.track.toLowerCase().includes(selectedTrackFilter.toLowerCase());
    const matchesSearch = 
      art.projectTitle.toLowerCase().includes(searchFilter.toLowerCase()) ||
      art.problemCode.toLowerCase().includes(searchFilter.toLowerCase()) ||
      art.teamName.toLowerCase().includes(searchFilter.toLowerCase()) ||
      art.industryPartner.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesTrack && matchesSearch;
  });

  const totalPages = filteredArticles.length + 1; // Page 0 is Front Cover / Editorial

  const handlePrint = () => {
    window.print();
  };

  const currentArticle = currentPage > 0 ? filteredArticles[currentPage - 1] : null;

  return (
    <section id="souvenir" className="section" style={{ background: '#f8fafc' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag" style={{ background: '#fef3c7', color: '#b45309', borderColor: '#fde68a' }}>
            <BookOpen size={14} />
            <span>Digital Publication System ({allArticles.length} Project Slides)</span>
          </div>
          <h2 className="section-title">
            VISAI 2027 <span className="gradient-text-amber">Innovation Souvenir</span> & Project Book
          </h2>
          <p className="section-subtitle">
            An automated digital compendium documenting all selected innovations, final abstracts, patents, and industry collaborations from VISAI 2027.
          </p>
        </div>

        {/* Controls Toolbar */}
        <div className="glass-card" style={{
          padding: '1.25rem 2rem',
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          background: '#ffffff'
        }}>
          {/* Page Navigator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
              disabled={currentPage === 0}
              className="btn btn-sm btn-secondary"
              style={{ opacity: currentPage === 0 ? 0.4 : 1 }}
            >
              <ChevronLeft size={16} />
              <span>Previous Slide</span>
            </button>

            <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0f172a', fontFamily: 'var(--font-mono)' }}>
              Slide {currentPage === 0 ? 'Cover' : `${currentPage} of ${totalPages - 1}`}
            </span>

            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
              disabled={currentPage >= totalPages - 1}
              className="btn btn-sm btn-secondary"
              style={{ opacity: currentPage >= totalPages - 1 ? 0.4 : 1 }}
            >
              <span>Next Slide</span>
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Quick Jump & Filter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ position: 'relative', width: '220px' }}>
              <Search size={14} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchFilter}
                onChange={(e) => {
                  setSearchFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="form-input"
                style={{ padding: '0.4rem 0.5rem 0.4rem 2rem', fontSize: '0.8rem' }}
              />
            </div>

            <button onClick={handlePrint} className="btn btn-sm btn-amber">
              <Printer size={15} />
              <span>Print / Export PDF</span>
            </button>
          </div>
        </div>

        {/* Multi-Slide Navigation Ribbon */}
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          overflowX: 'auto',
          paddingBottom: '0.75rem',
          marginBottom: '1.25rem'
        }}>
          <button
            onClick={() => setCurrentPage(0)}
            style={{
              padding: '0.4rem 0.8rem',
              borderRadius: '8px',
              border: `1px solid ${currentPage === 0 ? '#d97706' : '#e2e8f0'}`,
              background: currentPage === 0 ? '#fef3c7' : '#ffffff',
              color: currentPage === 0 ? '#b45309' : '#475569',
              fontWeight: 700,
              fontSize: '0.78rem',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            📖 Cover & Editorial
          </button>

          {filteredArticles.map((art, idx) => (
            <button
              key={art.id}
              onClick={() => setCurrentPage(idx + 1)}
              style={{
                padding: '0.4rem 0.8rem',
                borderRadius: '8px',
                border: `1px solid ${currentPage === idx + 1 ? '#2563eb' : '#e2e8f0'}`,
                background: currentPage === idx + 1 ? '#eff6ff' : '#ffffff',
                color: currentPage === idx + 1 ? '#1d4ed8' : '#475569',
                fontWeight: 600,
                fontSize: '0.78rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              Slide {idx + 1}: {art.teamName}
            </button>
          ))}
        </div>

        {/* SOUVENIR VIEWER BOOK */}
        <div className="souvenir-book-container" style={{ minHeight: '680px', padding: '2rem' }}>
          
          {/* PAGE 0: COVER & PREFACE */}
          {currentPage === 0 && (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              padding: '3rem 1.5rem',
              minHeight: '600px'
            }}>
              <div style={{
                width: '72px',
                height: '72px',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #d97706 0%, #ea580c 100%)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                boxShadow: '0 8px 24px rgba(217, 119, 6, 0.3)'
              }}>
                <BookOpen size={36} />
              </div>

              <span style={{
                fontSize: '0.85rem',
                fontWeight: 800,
                color: '#b45309',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '0.5rem'
              }}>
                Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology
              </span>

              <h1 style={{
                fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
                fontWeight: 900,
                color: '#0f172a',
                lineHeight: 1.15,
                maxWidth: '850px',
                marginBottom: '1.25rem'
              }}>
                VISAI 2027 <span className="gradient-text-amber">INNOVATION SOUVENIR</span>
              </h1>

              <div style={{
                fontStyle: 'italic',
                fontSize: '1.25rem',
                color: '#2563eb',
                fontWeight: 600,
                marginBottom: '2rem'
              }}>
                "Real Problems. Real Innovation. Real Impact."
              </div>

              {/* Preface Card */}
              <div style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '2rem',
                maxWidth: '780px',
                textAlign: 'left',
                marginBottom: '2.5rem'
              }}>
                <h4 style={{ color: '#0f172a', fontSize: '1.1rem', marginBottom: '0.75rem', fontWeight: 700 }}>
                  Convener's Note & Vision
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.7, marginBottom: '1rem' }}>
                  This official publication serves as a permanent, peer-reviewed innovation record of the solutions formulated during VISAI 2027. Moving beyond the conventional science fair format, student teams solved high-stakes problems provided by industry leaders such as Renault Nissan, Ashok Leyland, and L&T Valves, all systematically mapped to the United Nations Sustainable Development Goals.
                </p>
                <div style={{ fontSize: '0.825rem', color: '#64748b' }}>
                  Compiled automatically through the <strong>VISAI 2027 Digital Innovation Lifecycle Engine</strong>. Includes {allArticles.length} curated innovation slides.
                </div>
              </div>

              <button
                onClick={() => setCurrentPage(1)}
                className="btn btn-lg btn-amber"
              >
                <span>Open Project Compendium (Slide 1)</span>
                <ChevronRight size={18} />
              </button>
            </div>
          )}

          {/* PAGE 1+: INDIVIDUAL PROJECT ABSTRACT SLIDE */}
          {currentPage > 0 && currentArticle && (
            <div className="book-page-sheet" style={{ animation: 'fadeIn 0.3s ease-out' }}>
              
              {/* Header Bar */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                borderBottom: '1px solid #e2e8f0',
                paddingBottom: '1.25rem',
                marginBottom: '1.5rem'
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      color: '#1d4ed8',
                      background: '#eff6ff',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '6px',
                      border: '1px solid #bfdbfe'
                    }}>
                      Code: {currentArticle.problemCode}
                    </span>

                    <span className={currentArticle.track.includes('Software') ? 'track-software' : 'track-hardware'} style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '0.2rem 0.6rem',
                      borderRadius: '9999px'
                    }}>
                      {currentArticle.track}
                    </span>

                    {currentArticle.award && (
                      <span style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '0.2rem 0.6rem',
                        borderRadius: '9999px',
                        background: '#fef3c7',
                        color: '#b45309',
                        border: '1px solid #fde68a',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem'
                      }}>
                        <Award size={12} /> {currentArticle.award}
                      </span>
                    )}
                  </div>

                  <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.3 }}>
                    {currentArticle.projectTitle}
                  </h2>
                </div>

                <div style={{ textAlign: 'right', fontSize: '0.825rem', color: '#64748b' }}>
                  <div style={{ fontWeight: 700, color: '#0f172a' }}>{currentArticle.teamName}</div>
                  <div>{currentArticle.institution}</div>
                </div>
              </div>

              {/* 3-Column Meta Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1rem',
                background: '#f8fafc',
                padding: '1.15rem 1.25rem',
                borderRadius: '12px',
                marginBottom: '1.75rem',
                border: '1px solid #e2e8f0'
              }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>SDG Target Mapping</div>
                  <div style={{ fontWeight: 700, color: '#1d4ed8' }}>{currentArticle.sdgGoal}</div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>Industry Partner</div>
                  <div style={{ fontWeight: 700, color: '#b45309' }}>{currentArticle.industryPartner}</div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>Team & Mentorship</div>
                  <div style={{ fontSize: '0.85rem', color: '#1e293b', fontWeight: 600 }}>{currentArticle.teamMembers}</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Mentor: {currentArticle.mentor}</div>
                </div>
              </div>

              {/* Structured Abstract Fields */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem', marginBottom: '1.75rem' }}>
                
                {/* Problem Description */}
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.35rem' }}>
                    1. Problem Description
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.6 }}>
                    {currentArticle.problemDescription}
                  </p>
                </div>

                {/* Proposed Solution */}
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.35rem' }}>
                    2. Proposed Solution Architecture
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.6 }}>
                    {currentArticle.proposedSolution}
                  </p>
                </div>

                {/* Technology Used */}
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.35rem' }}>
                    3. Technology & Frameworks Used
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: '#1d4ed8', fontFamily: 'var(--font-mono)', lineHeight: 1.5, fontWeight: 600 }}>
                    {currentArticle.technologyUsed}
                  </p>
                </div>

                {/* Innovation */}
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.35rem' }}>
                    4. Novelty & Innovation Factor
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: '#334155', lineHeight: 1.6 }}>
                    {currentArticle.innovation}
                  </p>
                </div>

                {/* Expected Impact */}
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.35rem' }}>
                    5. Expected SDG & Societal Impact
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: '#047857', lineHeight: 1.6, fontWeight: 600 }}>
                    {currentArticle.expectedImpact}
                  </p>
                </div>

                {/* Industry Relevance & Future Scope */}
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.35rem' }}>
                    6. Industry Relevance & Future Scope
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: '#334155', lineHeight: 1.6 }}>
                    <strong>Relevance:</strong> {currentArticle.industryRelevance}<br />
                    <strong>Future Scope:</strong> {currentArticle.futureScope}
                  </p>
                </div>

              </div>

              {/* Bottom Verification Seal */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '1rem',
                borderTop: '1px solid #e2e8f0',
                fontSize: '0.8rem',
                color: '#64748b'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <FileCheck size={16} color="#059669" />
                  <span style={{ fontWeight: 600, color: '#059669' }}>Verified by Grand Jury & Vel Tech R&D Publication Directorate</span>
                </div>
                <div>
                  VISAI 2027 Official Souvenir ID: <code>PUB-{currentArticle.problemCode}</code>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}

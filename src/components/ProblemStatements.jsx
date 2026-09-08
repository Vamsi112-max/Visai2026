import React, { useState } from 'react';
import { 
  INITIAL_PROBLEM_STATEMENTS, 
  SDG_LIST 
} from '../data/visaiData';
import { 
  Search, 
  Filter, 
  Download, 
  ExternalLink, 
  Clock, 
  Building, 
  Sparkles, 
  X, 
  Code2, 
  Cpu, 
  CheckCircle,
  Tag
} from 'lucide-react';

export default function ProblemStatements({ onSelectProblem }) {
  const [selectedTrack, setSelectedTrack] = useState('all');
  const [selectedSdg, setSelectedSdg] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProblem, setActiveModalProblem] = useState(null);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const filteredProblems = INITIAL_PROBLEM_STATEMENTS.filter(p => {
    const matchesTrack = selectedTrack === 'all' || p.track.toLowerCase() === selectedTrack.toLowerCase();
    const matchesSdg = selectedSdg === 'all' || p.sdgId.toString() === selectedSdg;
    const matchesSearch = 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.industryPartner.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTrack && matchesSdg && matchesSearch;
  });

  const handleDownloadSample = (problem) => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section id="problems" className="section">
      <div className="container">
        
        <div className="section-header">
          <div className="badge-tag">
            <Tag size={14} />
            <span>SDG & Industry Challenge Matrix</span>
          </div>
          <h2 className="section-title">
            Industry Challenges & <span className="gradient-text-cyan">Unique Code System</span>
          </h2>
          <p className="section-subtitle">
            Every problem statement is sourced directly from corporate and research partners and mapped to an official UN SDG goal with a unique identifier like <code>VISAI-SDG06-IND01</code>.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="glass-card" style={{ padding: '1.25rem 1.75rem', marginBottom: '2.5rem' }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            {/* Search Input */}
            <div style={{ position: 'relative', minWidth: '260px', flex: 1 }}>
              <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input
                type="text"
                placeholder="Search by code (e.g. VISAI-SDG06-IND01), title, or company..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-input"
                style={{ paddingLeft: '2.5rem' }}
              />
            </div>

            {/* Track Filter Buttons */}
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <span style={{ fontSize: '0.825rem', color: '#475569', fontWeight: 600 }}>Track:</span>
              <button
                onClick={() => setSelectedTrack('all')}
                className={`btn btn-sm ${selectedTrack === 'all' ? 'btn-primary' : 'btn-secondary'}`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedTrack('software')}
                className={`btn btn-sm ${selectedTrack === 'software' ? 'btn-primary' : 'btn-secondary'}`}
              >
                💻 Software
              </button>
              <button
                onClick={() => setSelectedTrack('hardware')}
                className={`btn btn-sm ${selectedTrack === 'hardware' ? 'btn-primary' : 'btn-secondary'}`}
              >
                🔧 Hardware
              </button>
            </div>

            {/* SDG Dropdown */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.825rem', color: '#475569', fontWeight: 600 }}>SDG:</span>
              <select
                value={selectedSdg}
                onChange={(e) => setSelectedSdg(e.target.value)}
                className="form-select"
                style={{ minWidth: '180px', padding: '0.5rem 0.8rem' }}
              >
                <option value="all">All SDGs (1 - 17)</option>
                {SDG_LIST.map(sdg => (
                  <option key={sdg.id} value={sdg.id}>
                    {sdg.code}: {sdg.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Problem Statements Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
          gap: '1.5rem'
        }}>
          {filteredProblems.map((problem) => {
            const isSoftware = problem.track.toLowerCase() === 'software';

            return (
              <div 
                key={problem.id}
                className="glass-card"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  borderTop: `4px solid ${problem.sdgColor || '#2563eb'}`
                }}
                onClick={() => setActiveModalProblem(problem)}
              >
                <div>
                  {/* Code and Track Header */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: problem.sdgColor || '#2563eb',
                      background: '#f8fafc',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '6px',
                      border: '1px solid #e2e8f0'
                    }}>
                      {problem.code}
                    </span>

                    <span className={isSoftware ? 'track-software' : 'track-hardware'} style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '0.2rem 0.6rem',
                      borderRadius: '9999px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem'
                    }}>
                      {isSoftware ? <Code2 size={13} /> : <Cpu size={13} />}
                      {problem.track} Track
                    </span>
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    lineHeight: 1.4,
                    marginBottom: '0.75rem',
                    color: '#0f172a'
                  }}>
                    {problem.title}
                  </h3>

                  {/* Partner & SDG info */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.825rem', color: '#64748b', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Building size={14} color="#2563eb" />
                      <span style={{ color: '#1e293b', fontWeight: 600 }}>{problem.industryPartner}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span style={{
                        display: 'inline-block',
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: problem.sdgColor
                      }} />
                      <span>{problem.sdgCode} – {problem.sdgName}</span>
                    </div>
                  </div>

                  {/* Description Preview */}
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#475569',
                    lineHeight: 1.55,
                    marginBottom: '1.25rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {problem.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '1rem',
                    borderTop: '1px solid #f1f5f9',
                    fontSize: '0.8rem'
                  }}>
                    <span style={{
                      color: isSoftware ? '#0284c7' : '#059669',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontWeight: 600
                    }}>
                      <Clock size={13} /> {problem.releaseType}
                    </span>

                    <button 
                      className="btn btn-sm btn-secondary"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveModalProblem(problem);
                      }}
                    >
                      View Details & PPT
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Problem Detail Modal */}
        {activeModalProblem && (
          <div className="modal-overlay" onClick={() => setActiveModalProblem(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '720px' }}>
              
              <div className="modal-header">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.9rem',
                      fontWeight: 800,
                      color: activeModalProblem.sdgColor || '#2563eb',
                      background: '#f1f5f9',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '6px',
                      border: '1px solid #cbd5e1'
                    }}>
                      {activeModalProblem.code}
                    </span>
                    <span className={activeModalProblem.track.toLowerCase() === 'software' ? 'track-software' : 'track-hardware'} style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '0.2rem 0.6rem',
                      borderRadius: '9999px'
                    }}>
                      {activeModalProblem.track} Track
                    </span>
                  </div>
                  <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0f172a' }}>
                    {activeModalProblem.title}
                  </h2>
                </div>

                <button className="modal-close" onClick={() => setActiveModalProblem(null)}>
                  <X size={18} />
                </button>
              </div>

              {/* Modal Body */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                
                {/* Meta Bar */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1rem',
                  background: '#f8fafc',
                  padding: '1.15rem',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0'
                }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Industry Partner</div>
                    <div style={{ fontWeight: 700, color: '#1d4ed8' }}>{activeModalProblem.industryPartner}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>SDG Mapping</div>
                    <div style={{ fontWeight: 700, color: activeModalProblem.sdgColor }}>
                      {activeModalProblem.sdgCode} – {activeModalProblem.sdgName}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Mentor / Evaluator</div>
                    <div style={{ fontWeight: 600, color: '#1e293b' }}>{activeModalProblem.mentor}</div>
                  </div>
                </div>

                {/* Problem Description */}
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                    Full Challenge Description
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.65 }}>
                    {activeModalProblem.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                    Recommended Technologies & Tooling
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {activeModalProblem.techStack.map(t => (
                      <span key={t} style={{
                        padding: '0.3rem 0.7rem',
                        borderRadius: '6px',
                        background: '#eff6ff',
                        border: '1px solid #bfdbfe',
                        color: '#1d4ed8',
                        fontSize: '0.8rem',
                        fontWeight: 600
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact & Industry Opportunity */}
                <div style={{
                  background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
                  border: '1px solid #fde68a',
                  padding: '1.25rem',
                  borderRadius: '12px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#b45309', fontWeight: 700, marginBottom: '0.4rem' }}>
                    <Sparkles size={16} /> Industry Sponsor Offer & Patent Opportunity
                  </div>
                  <p style={{ fontSize: '0.875rem', color: '#78350f', marginBottom: '0.4rem' }}>
                    <strong>Offer:</strong> {activeModalProblem.industryOffer}
                  </p>
                  <p style={{ fontSize: '0.875rem', color: '#78350f' }}>
                    <strong>Expected Impact:</strong> {activeModalProblem.impact}
                  </p>
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
                  <button
                    onClick={() => handleDownloadSample(activeModalProblem)}
                    className="btn btn-secondary"
                  >
                    <Download size={16} />
                    <span>Download Dummy / Sample PPT</span>
                  </button>

                  <button
                    onClick={() => {
                      if (onSelectProblem) onSelectProblem(activeModalProblem);
                      setActiveModalProblem(null);
                    }}
                    className="btn btn-primary"
                  >
                    <span>Assign to My Team Submission</span>
                  </button>
                </div>

                {downloadSuccess && (
                  <div style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    background: '#ecfdf5',
                    border: '1px solid #a7f3d0',
                    color: '#065f46',
                    fontSize: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <CheckCircle size={16} />
                    <span>Downloaded: VISAI_2027_Sample_PPT_{activeModalProblem.code}.pptx generated successfully!</span>
                  </div>
                )}

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}

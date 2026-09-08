import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  UserCheck, 
  CheckCircle2, 
  Clock, 
  UploadCloud, 
  BookOpen, 
  FileText, 
  Sparkles, 
  Cpu, 
  Code2, 
  Wifi, 
  Download, 
  Send,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Presentation,
  Check
} from 'lucide-react';
import { TEAM_PITCH_SLIDES } from '../data/visaiData';

export default function ParticipantDashboard({ onPublishAbstractToSouvenir }) {
  const [activeTab, setActiveTab] = useState('abstract');
  const [submitted, setSubmitted] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const [formData, setFormData] = useState({
    projectTitle: 'AcoustiCheck: Ultrasonic Valve Cavitation Diagnostics & Remaining Life Prediction',
    problemCode: 'VISAI-SDG09-IND03',
    sdgGoal: 'SDG 09 – Industry, Innovation & Infrastructure',
    teamName: 'Team ByteCraft',
    teamMembers: 'Arjun Ramanathan (Lead), Priya Dharshini (ML), Gokul Nath (Fullstack)',
    mentor: 'Er. Ramesh Babu (Principal Specialist, L&T Valves)',
    institution: 'Vel Tech R&D Institute of Science and Technology',
    track: 'Software Track',
    industryPartner: 'Larsen & Toubro (L&T) Valves',
    problemDescription: 'High-pressure industrial valves in power and petrochemical pipelines suffer from cavitation erosion that remains invisible until catastrophic line failure occurs, costing millions in downtime.',
    proposedSolution: 'AcoustiCheck captures ultra-high frequency acoustic emissions (20kHz - 100kHz) from non-invasive clamp sensors, computes continuous spectrogram tensors, and utilizes a lightweight 1D-ResNet model running via WebAssembly in browser dashboards.',
    technologyUsed: 'Python, PyTorch, Librosa, WebAssembly (WASM), Next.js / React 19, FastAPI, TimescaleDB, Docker',
    innovation: 'Zero-latency real-time spectrogram classification directly in browser web workers without needing cloud uplink.',
    expectedImpact: 'Reduces unscheduled plant shut-downs by 35% and doubles valve operating lifespan via dynamic flow adjustment.',
    industryRelevance: 'Directly solves L&T Valves challenge IND03; offer extended for student team patent filing through Vel Tech TBI.',
    futureScope: 'Edge firmware port to ARM Cortex-M55 microcontrollers for direct embedding inside valve actuator heads.'
  });

  const handleChange = (field, val) => {
    setFormData(prev => ({ ...prev, [field]: val }));
  };

  const handleSubmitAbstract = (e) => {
    e.preventDefault();
    setSubmitted(true);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    if (onPublishAbstractToSouvenir) {
      onPublishAbstractToSouvenir({
        id: `souvenir-${Date.now()}`,
        ...formData,
        award: 'Selected for Souvenir Publication'
      });
    }
  };

  const currentSlide = TEAM_PITCH_SLIDES[currentSlideIndex];

  return (
    <div className="container" style={{ padding: '2.5rem 1.5rem' }}>
      
      {/* Participant Top Banner */}
      <div className="glass-card" style={{
        padding: '2rem 2.5rem',
        marginBottom: '2rem',
        background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 100%)',
        borderColor: '#bfdbfe'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '1.5rem',
              fontWeight: 800
            }}>
              <UserCheck size={28} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem' }}>
                <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a' }}>Team ByteCraft</h1>
                <span className="track-software" style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '9999px' }}>
                  💻 Software Track
                </span>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '0.2rem 0.6rem',
                  borderRadius: '9999px',
                  background: '#d1fae5',
                  color: '#065f46',
                  border: '1px solid #a7f3d0'
                }}>
                  Status: Shortlisted & Active
                </span>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#475569' }}>
                Vel Tech R&D Institute of Science and Technology • Lead: Arjun Ramanathan • Allocated Challenge: <strong style={{ color: '#1d4ed8' }}>VISAI-SDG09-IND03 (L&T Valves)</strong>
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              padding: '0.6rem 1rem',
              borderRadius: '10px',
              fontSize: '0.8rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#0f172a'
            }}>
              <Wifi size={14} color="#2563eb" />
              <span>Campus Wi-Fi: <code>VelTech_VISAI_5G</code></span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <button
          onClick={() => setActiveTab('abstract')}
          className={`btn ${activeTab === 'abstract' ? 'btn-primary' : 'btn-secondary'}`}
        >
          <FileText size={16} />
          <span>Final Abstract Form</span>
        </button>

        <button
          onClick={() => setActiveTab('pitchdeck')}
          className={`btn ${activeTab === 'pitchdeck' ? 'btn-primary' : 'btn-secondary'}`}
        >
          <Presentation size={16} />
          <span>Project Pitch Deck (6 Slides)</span>
        </button>

        <button
          onClick={() => setActiveTab('milestones')}
          className={`btn ${activeTab === 'milestones' ? 'btn-primary' : 'btn-secondary'}`}
        >
          <Clock size={16} />
          <span>4-Round Evaluation</span>
        </button>

        <button
          onClick={() => setActiveTab('preview')}
          className={`btn ${activeTab === 'preview' ? 'btn-primary' : 'btn-secondary'}`}
        >
          <BookOpen size={16} />
          <span>Souvenir Page Preview</span>
        </button>
      </div>

      {/* TAB: PROJECT PITCH DECK SLIDES (6 Rich Slides) */}
      {activeTab === 'pitchdeck' && (
        <div className="glass-card" style={{ padding: '2.5rem', background: '#ffffff', marginBottom: '2rem' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1.25rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#2563eb', fontWeight: 700, fontSize: '0.825rem', marginBottom: '0.25rem' }}>
                <Presentation size={16} />
                <span>INTERACTIVE PITCH DECK • GRAND JURY PRESENTATION</span>
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a' }}>
                {currentSlide.title}
              </h2>
              <span style={{ fontSize: '0.9rem', color: '#64748b' }}>{currentSlide.subtitle}</span>
            </div>

            {/* Slide Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <button
                onClick={() => setCurrentSlideIndex(prev => Math.max(0, prev - 1))}
                disabled={currentSlideIndex === 0}
                className="btn btn-sm btn-secondary"
                style={{ opacity: currentSlideIndex === 0 ? 0.4 : 1 }}
              >
                <ChevronLeft size={16} />
                <span>Prev Slide</span>
              </button>

              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '0.85rem', color: '#0f172a', padding: '0 0.5rem' }}>
                Slide {currentSlide.slideNumber} / {TEAM_PITCH_SLIDES.length}
              </span>

              <button
                onClick={() => setCurrentSlideIndex(prev => Math.min(TEAM_PITCH_SLIDES.length - 1, prev + 1))}
                disabled={currentSlideIndex >= TEAM_PITCH_SLIDES.length - 1}
                className="btn btn-sm btn-secondary"
                style={{ opacity: currentSlideIndex >= TEAM_PITCH_SLIDES.length - 1 ? 0.4 : 1 }}
              >
                <span>Next Slide</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Active Slide Screen Canvas */}
          <div style={{
            background: 'linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%)',
            border: '2px solid #bfdbfe',
            borderRadius: '16px',
            padding: '2.5rem',
            minHeight: '380px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            boxShadow: '0 10px 30px -5px rgba(37, 99, 235, 0.08)'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: '#1d4ed8',
                  background: '#ffffff',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  border: '1px solid #bfdbfe'
                }}>
                  {currentSlide.badge}
                </span>

                <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>
                  Challenge: <code>{formData.problemCode}</code>
                </span>
              </div>

              <div style={{
                fontSize: '1.2rem',
                fontWeight: 700,
                color: '#1e293b',
                lineHeight: 1.4,
                marginBottom: '1.5rem'
              }}>
                "{currentSlide.content.tagline}"
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {currentSlide.content.bullets.map((bullet, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: '#2563eb',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}>
                      <Check size={12} />
                    </div>
                    <span style={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.55 }}>
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide Footer */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '1.5rem',
              borderTop: '1px solid #cbd5e1',
              marginTop: '1.5rem',
              fontSize: '0.8rem',
              color: '#64748b'
            }}>
              <span>Team ByteCraft • Vel Tech R&D Institute of Science and Technology</span>
              <span>VISAI 2027 Grand Jury Evaluation Deck</span>
            </div>
          </div>

          {/* Slide Thumbnail Navigation Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginTop: '1.5rem' }}>
            {TEAM_PITCH_SLIDES.map((slide, i) => (
              <button
                key={slide.slideNumber}
                onClick={() => setCurrentSlideIndex(i)}
                style={{
                  padding: '0.35rem 0.85rem',
                  borderRadius: '6px',
                  border: `1px solid ${currentSlideIndex === i ? '#2563eb' : '#cbd5e1'}`,
                  background: currentSlideIndex === i ? '#eff6ff' : '#ffffff',
                  color: currentSlideIndex === i ? '#1d4ed8' : '#64748b',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                Slide {slide.slideNumber}
              </button>
            ))}
          </div>

        </div>
      )}

      {/* TAB 1: FINAL ABSTRACT SUBMISSION FORM */}
      {activeTab === 'abstract' && (
        <div className="glass-card" style={{ padding: '2.5rem', background: '#ffffff' }}>
          
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#2563eb', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.35rem' }}>
              <Sparkles size={16} />
              <span>DOCUMENT SECTION 2 • FINAL ABSTRACT PUBLICATION PORTAL</span>
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a' }}>
              Submit Official Final Abstract for VISAI 2027 Innovation Souvenir
            </h2>
            <p style={{ fontSize: '0.9rem', color: '#64748b' }}>
              Once approved by the Grand Jury, your submission will be compiled into the published project book and considered for patent identification and startup grants.
            </p>
          </div>

          {submitted && (
            <div style={{
              background: '#ecfdf5',
              border: '1px solid #a7f3d0',
              padding: '1.25rem',
              borderRadius: '12px',
              marginBottom: '2rem',
              color: '#065f46',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <CheckCircle2 size={24} />
              <div>
                <strong style={{ display: 'block', fontSize: '1rem' }}>Final Abstract Submitted Successfully!</strong>
                <span style={{ fontSize: '0.85rem' }}>
                  Your abstract has been compiled into the VISAI 2027 Innovation Souvenir. You can review it on the 'Innovation Souvenir' page.
                </span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmitAbstract}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
              
              <div className="form-group">
                <label className="form-label">Project Title</label>
                <input
                  type="text"
                  required
                  value={formData.projectTitle}
                  onChange={(e) => handleChange('projectTitle', e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Problem Statement Code</label>
                <input
                  type="text"
                  required
                  value={formData.problemCode}
                  onChange={(e) => handleChange('problemCode', e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">SDG Mapping</label>
                <input
                  type="text"
                  required
                  value={formData.sdgGoal}
                  onChange={(e) => handleChange('sdgGoal', e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Industry Partner</label>
                <input
                  type="text"
                  required
                  value={formData.industryPartner}
                  onChange={(e) => handleChange('industryPartner', e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">Team Members (Names & Roles)</label>
                <input
                  type="text"
                  required
                  value={formData.teamMembers}
                  onChange={(e) => handleChange('teamMembers', e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">1. Problem Description</label>
                <textarea
                  required
                  rows={3}
                  value={formData.problemDescription}
                  onChange={(e) => handleChange('problemDescription', e.target.value)}
                  className="form-textarea"
                />
              </div>

              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">2. Proposed Solution</label>
                <textarea
                  required
                  rows={3}
                  value={formData.proposedSolution}
                  onChange={(e) => handleChange('proposedSolution', e.target.value)}
                  className="form-textarea"
                />
              </div>

              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">3. Technology Used</label>
                <input
                  type="text"
                  required
                  value={formData.technologyUsed}
                  onChange={(e) => handleChange('technologyUsed', e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">4. Innovation Factor</label>
                <input
                  type="text"
                  required
                  value={formData.innovation}
                  onChange={(e) => handleChange('innovation', e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">5. Expected Impact</label>
                <input
                  type="text"
                  required
                  value={formData.expectedImpact}
                  onChange={(e) => handleChange('expectedImpact', e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">6. Industry Relevance</label>
                <input
                  type="text"
                  required
                  value={formData.industryRelevance}
                  onChange={(e) => handleChange('industryRelevance', e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">7. Future Scope & Commercialization</label>
                <input
                  type="text"
                  required
                  value={formData.futureScope}
                  onChange={(e) => handleChange('futureScope', e.target.value)}
                  className="form-input"
                />
              </div>

            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1.5rem' }}>
              <button
                type="button"
                onClick={() => setActiveTab('pitchdeck')}
                className="btn btn-secondary"
              >
                View Pitch Deck Slides
              </button>

              <button type="submit" className="btn btn-primary">
                <Send size={16} />
                <span>Submit & Publish to Innovation Souvenir</span>
              </button>
            </div>
          </form>

        </div>
      )}

      {/* TAB 2: MILESTONES & ROUNDS */}
      {activeTab === 'milestones' && (
        <div className="glass-card" style={{ padding: '2.5rem', background: '#ffffff' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem' }}>
            Live Hackathon Progression & Internal Rounds
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              {
                round: 'Phase 1: Initial Screening & Shortlisting',
                status: 'Completed / Approved',
                score: 'Qualified',
                time: 'Pre-Hackathon',
                color: '#059669'
              },
              {
                round: 'Round 1: Problem & Solution Validation',
                status: 'Evaluated',
                score: '18 / 20',
                time: 'Hour 08',
                color: '#059669'
              },
              {
                round: 'Round 2: Technical Review & Git Code Check',
                status: 'Evaluated',
                score: '19 / 20',
                time: 'Hour 20',
                color: '#059669'
              },
              {
                round: 'Round 3: Working Prototype / MVP Review',
                status: 'Evaluated',
                score: '18 / 20',
                time: 'Hour 32',
                color: '#059669'
              },
              {
                round: 'Final Round: Grand Jury & Industry Pitch',
                status: 'Completed (Total 92/100)',
                score: 'Winner - 1st Prize Software',
                time: 'Hour 36 / 48',
                color: '#d97706'
              }
            ].map((r, i) => (
              <div
                key={i}
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  padding: '1.25rem 1.5rem',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}
              >
                <div>
                  <h4 style={{ color: '#0f172a', fontSize: '1.05rem', fontWeight: 700 }}>{r.round}</h4>
                  <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Timestamp: {r.time}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{
                    padding: '0.3rem 0.8rem',
                    borderRadius: '9999px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    background: `${r.color}15`,
                    color: r.color,
                    border: `1px solid ${r.color}40`
                  }}>
                    {r.status}
                  </span>
                  <strong style={{ fontSize: '1.1rem', color: '#0f172a', fontFamily: 'var(--font-mono)' }}>
                    {r.score}
                  </strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: PREVIEW */}
      {activeTab === 'preview' && (
        <div className="glass-card" style={{ padding: '2.5rem', background: '#ffffff' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a' }}>
              Souvenir Publication Page Preview
            </h2>
            <button onClick={() => setActiveTab('abstract')} className="btn btn-sm btn-secondary">
              Edit Fields
            </button>
          </div>

          <div className="book-page-sheet" style={{ background: '#fafafa' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', color: '#1d4ed8', fontWeight: 700 }}>
                  Code: {formData.problemCode}
                </span>
                <h3 style={{ fontSize: '1.4rem', color: '#0f172a', fontWeight: 800, marginTop: '0.3rem' }}>
                  {formData.projectTitle}
                </h3>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 700, color: '#0f172a' }}>{formData.teamName}</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{formData.institution}</div>
              </div>
            </div>

            <div style={{ fontSize: '0.875rem', color: '#334155', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <p><strong>SDG Mapping:</strong> {formData.sdgGoal}</p>
              <p><strong>Industry Partner:</strong> {formData.industryPartner}</p>
              <p><strong>Problem:</strong> {formData.problemDescription}</p>
              <p><strong>Solution:</strong> {formData.proposedSolution}</p>
              <p><strong>Technology:</strong> {formData.technologyUsed}</p>
              <p><strong>Innovation:</strong> {formData.innovation}</p>
              <p><strong>Impact:</strong> {formData.expectedImpact}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

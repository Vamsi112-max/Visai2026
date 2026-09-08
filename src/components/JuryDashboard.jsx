import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Award, 
  CheckCircle2, 
  Trophy, 
  Sliders, 
  Star, 
  Sparkles, 
  Send, 
  Layers, 
  Globe, 
  Check 
} from 'lucide-react';
import { INITIAL_TEAMS } from '../data/visaiData';

export default function JuryDashboard() {
  const [teams, setTeams] = useState(INITIAL_TEAMS);
  const [selectedTeamId, setSelectedTeamId] = useState('team-101');
  const [activeRound, setActiveRound] = useState('Final Round');
  const [evalSuccess, setEvalSuccess] = useState(false);

  // Rubric Scores (0 - 20 each, Total 100)
  const [scores, setScores] = useState({
    innovation: 19,
    understanding: 18,
    implementation: 19,
    sdgImpact: 18,
    scalability: 18,
    comments: 'Superb demonstration of ultrasonic anomaly classification in real-time. High potential for direct adoption by L&T Valves.'
  });

  const selectedTeam = teams.find(t => t.id === selectedTeamId) || teams[0];
  const totalScore = scores.innovation + scores.understanding + scores.implementation + scores.sdgImpact + scores.scalability;

  const handleScoreChange = (field, val) => {
    setScores(prev => ({ ...prev, [field]: parseInt(val) || 0 }));
  };

  const handleSubmitEvaluation = (e) => {
    e.preventDefault();
    setTeams(prev => prev.map(t => {
      if (t.id === selectedTeamId) {
        return {
          ...t,
          finalScore: totalScore,
          juryComments: scores.comments
        };
      }
      return t;
    }));

    setEvalSuccess(true);
    confetti({
      particleCount: 110,
      spread: 70,
      origin: { y: 0.6 }
    });
    setTimeout(() => setEvalSuccess(false), 4000);
  };

  const sortedLeaderboard = [...teams].sort((a, b) => b.finalScore - a.finalScore);

  return (
    <div className="container" style={{ padding: '2.5rem 1.5rem' }}>
      
      {/* Jury Header */}
      <div className="glass-card" style={{
        padding: '2rem 2.5rem',
        marginBottom: '2rem',
        background: 'linear-gradient(135deg, #f5f3ff 0%, #ffffff 100%)',
        borderColor: '#ddd6fe'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              boxShadow: '0 4px 14px rgba(124, 58, 237, 0.3)'
            }}>
              <Award size={30} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem' }}>
                <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a' }}>Industry Grand Jury Portal</h1>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '0.2rem 0.6rem',
                  borderRadius: '9999px',
                  background: '#ede9fe',
                  color: '#6d28d9',
                  border: '1px solid #c4b5fd'
                }}>
                  Grand Jury Evaluator
                </span>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
                Dr. Marcus Vance (Renault Nissan) & Er. R. Natarajan (L&T Valves) • Official VISAI 2027 Scoring
              </p>
            </div>
          </div>

          {/* Round Selector */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {['Round 1 (Validation)', 'Round 2 (Tech Review)', 'Round 3 (Prototype)', 'Final Round (Grand Jury)'].map((r) => {
              const isActive = activeRound.includes(r.split(' ')[1]);
              return (
                <button
                  key={r}
                  onClick={() => setActiveRound(r)}
                  className={`btn btn-sm ${isActive ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ fontSize: '0.78rem' }}
                >
                  {r}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {evalSuccess && (
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
            <strong style={{ display: 'block', fontSize: '1rem' }}>Evaluation Recorded & Sealed!</strong>
            <span style={{ fontSize: '0.85rem' }}>
              Score of <strong>{totalScore} / 100</strong> successfully registered for {selectedTeam.teamName}. Live Leaderboard updated.
            </span>
          </div>
        </div>
      )}

      {/* Main Scoring Workspace & Leaderboard */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
        gap: '2rem',
        alignItems: 'start'
      }}>
        
        {/* EVALUATION SCORING SHEET */}
        <div className="glass-card" style={{ padding: '2rem', background: '#ffffff' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a' }}>
              Official Evaluation Rubric
            </h3>
            <span style={{
              fontSize: '1.25rem',
              fontWeight: 800,
              color: totalScore >= 90 ? '#d97706' : '#2563eb',
              fontFamily: 'var(--font-mono)'
            }}>
              Total: {totalScore} / 100
            </span>
          </div>

          {/* Select Team Dropdown */}
          <div className="form-group">
            <label className="form-label">Select Team to Evaluate</label>
            <select
              value={selectedTeamId}
              onChange={(e) => setSelectedTeamId(e.target.value)}
              className="form-select"
            >
              {teams.map(t => (
                <option key={t.id} value={t.id}>
                  {t.teamName} ({t.track} Track) — {t.allocatedProblem}
                </option>
              ))}
            </select>
          </div>

          {/* Team Brief Card */}
          <div style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            padding: '1rem',
            borderRadius: '10px',
            marginBottom: '1.5rem',
            fontSize: '0.85rem'
          }}>
            <div style={{ color: '#0f172a', fontWeight: 700, marginBottom: '0.2rem' }}>{selectedTeam.projectTitle}</div>
            <div style={{ color: '#64748b' }}>Institution: {selectedTeam.institution}</div>
            <div style={{ color: '#1d4ed8', fontWeight: 600 }}>Assigned Code: {selectedTeam.allocatedProblem}</div>
          </div>

          {/* Sliders Form */}
          <form onSubmit={handleSubmitEvaluation}>
            
            {/* Slider 1: Innovation */}
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.35rem' }}>
                <span style={{ color: '#1e293b', fontWeight: 600 }}>1. Innovation & Novelty (out of 20)</span>
                <span style={{ color: '#d97706', fontWeight: 800 }}>{scores.innovation} / 20</span>
              </div>
              <input
                type="range"
                min="0"
                max="20"
                value={scores.innovation}
                onChange={(e) => handleScoreChange('innovation', e.target.value)}
                style={{ width: '100%', accentColor: '#d97706' }}
              />
            </div>

            {/* Slider 2: Problem Understanding */}
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.35rem' }}>
                <span style={{ color: '#1e293b', fontWeight: 600 }}>2. Problem Understanding & Analysis (out of 20)</span>
                <span style={{ color: '#2563eb', fontWeight: 800 }}>{scores.understanding} / 20</span>
              </div>
              <input
                type="range"
                min="0"
                max="20"
                value={scores.understanding}
                onChange={(e) => handleScoreChange('understanding', e.target.value)}
                style={{ width: '100%', accentColor: '#2563eb' }}
              />
            </div>

            {/* Slider 3: Technical Implementation */}
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.35rem' }}>
                <span style={{ color: '#1e293b', fontWeight: 600 }}>3. Technical Implementation & Working Solution (out of 20)</span>
                <span style={{ color: '#059669', fontWeight: 800 }}>{scores.implementation} / 20</span>
              </div>
              <input
                type="range"
                min="0"
                max="20"
                value={scores.implementation}
                onChange={(e) => handleScoreChange('implementation', e.target.value)}
                style={{ width: '100%', accentColor: '#059669' }}
              />
            </div>

            {/* Slider 4: SDG Impact */}
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.35rem' }}>
                <span style={{ color: '#1e293b', fontWeight: 600 }}>4. SDG Target Impact & Societal Feasibility (out of 20)</span>
                <span style={{ color: '#7c3aed', fontWeight: 800 }}>{scores.sdgImpact} / 20</span>
              </div>
              <input
                type="range"
                min="0"
                max="20"
                value={scores.sdgImpact}
                onChange={(e) => handleScoreChange('sdgImpact', e.target.value)}
                style={{ width: '100%', accentColor: '#7c3aed' }}
              />
            </div>

            {/* Slider 5: Industry Relevance & Scalability */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.35rem' }}>
                <span style={{ color: '#1e293b', fontWeight: 600 }}>5. Industry Relevance, Patent & Scalability (out of 20)</span>
                <span style={{ color: '#ea580c', fontWeight: 800 }}>{scores.scalability} / 20</span>
              </div>
              <input
                type="range"
                min="0"
                max="20"
                value={scores.scalability}
                onChange={(e) => handleScoreChange('scalability', e.target.value)}
                style={{ width: '100%', accentColor: '#ea580c' }}
              />
            </div>

            {/* Jury Comments */}
            <div className="form-group">
              <label className="form-label">Grand Jury Feedback & Patent Recommendation</label>
              <textarea
                rows={3}
                value={scores.comments}
                onChange={(e) => setScores({ ...scores, comments: e.target.value })}
                className="form-textarea"
                placeholder="Provide constructive feedback for student team..."
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              <Send size={16} />
              <span>Submit Evaluation ({totalScore} / 100)</span>
            </button>
          </form>
        </div>

        {/* LIVE LEADERBOARD */}
        <div className="glass-card" style={{ padding: '2rem', background: '#ffffff' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Trophy size={20} color="#d97706" />
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a' }}>
                Grand Jury Live Standings
              </h3>
            </div>
            <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Real-time Rank</span>
          </div>

          <p style={{ fontSize: '0.875rem', color: '#475569', marginBottom: '1.25rem' }}>
            Top 2 performing teams will receive <strong>Vel Tech's Sponsored International Presentation in Malaysia</strong> plus patent identification through Vel Tech TBI.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {sortedLeaderboard.map((t, idx) => {
              const isTop2 = idx < 2;

              return (
                <div
                  key={t.id}
                  style={{
                    background: isTop2 ? '#fffbeb' : '#f8fafc',
                    border: `1px solid ${isTop2 ? '#fde68a' : '#e2e8f0'}`,
                    borderRadius: '12px',
                    padding: '0.9rem 1.15rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer'
                  }}
                  onClick={() => setSelectedTeamId(t.id)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: idx === 0 ? '#d97706' : idx === 1 ? '#64748b' : '#e2e8f0',
                      color: idx < 2 ? '#ffffff' : '#0f172a',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '0.8rem'
                    }}>
                      {idx + 1}
                    </div>

                    <div>
                      <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.9rem' }}>
                        {t.teamName}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                        {t.institution.split(',')[0]} • <span style={{ color: '#2563eb' }}>{t.track}</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{
                      fontSize: '1.1rem',
                      fontWeight: 800,
                      color: isTop2 ? '#b45309' : '#0f172a',
                      fontFamily: 'var(--font-mono)'
                    }}>
                      {t.finalScore} <span style={{ fontSize: '0.75rem', color: '#64748b' }}>/ 100</span>
                    </div>

                    {isTop2 && (
                      <span style={{
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        color: '#b45309',
                        background: '#fef3c7',
                        padding: '0.1rem 0.4rem',
                        borderRadius: '4px',
                        border: '1px solid #fde68a'
                      }}>
                        ✈️ Malaysia Trip Qualifier
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
}

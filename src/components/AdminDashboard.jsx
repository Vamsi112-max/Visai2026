import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  ShieldCheck, 
  Users, 
  Cpu, 
  Code2, 
  DollarSign, 
  BookOpen, 
  Plus, 
  CheckCircle, 
  XCircle, 
  Filter, 
  Download, 
  Sparkles,
  RefreshCw
} from 'lucide-react';
import { INITIAL_TEAMS, INITIAL_PROBLEM_STATEMENTS, SDG_LIST } from '../data/visaiData';

export default function AdminDashboard({ onAddProblemStatement, onTriggerSouvenirCompilation }) {
  const [teams, setTeams] = useState(INITIAL_TEAMS);
  const [trackFilter, setTrackFilter] = useState('all');
  const [compiling, setCompiling] = useState(false);
  const [compiledSuccess, setCompiledSuccess] = useState(false);
  const [showAddProblemModal, setShowAddProblemModal] = useState(false);

  const [newProblem, setNewProblem] = useState({
    code: 'VISAI-SDG08-IND07',
    title: '',
    track: 'Software',
    sdgId: 8,
    industryPartner: '',
    releaseType: 'On-Spot (Hackathon Venue)',
    description: '',
    techStack: 'Python, React, FastApi'
  });

  const handleStatusChange = (teamId, newStatus) => {
    setTeams(prev => prev.map(t => t.id === teamId ? { ...t, status: newStatus } : t));
  };

  const handleTrackSwitch = (teamId) => {
    setTeams(prev => prev.map(t => {
      if (t.id === teamId) {
        const nextTrack = t.track.toLowerCase() === 'software' ? 'Hardware' : 'Software';
        return { ...t, track: nextTrack };
      }
      return t;
    }));
  };

  const handleCompileSouvenir = () => {
    setCompiling(true);
    setTimeout(() => {
      setCompiling(false);
      setCompiledSuccess(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
      if (onTriggerSouvenirCompilation) {
        onTriggerSouvenirCompilation();
      }
      setTimeout(() => setCompiledSuccess(false), 5000);
    }, 1500);
  };

  const handleCreateProblem = (e) => {
    e.preventDefault();
    const sdgObj = SDG_LIST.find(s => s.id === parseInt(newProblem.sdgId)) || SDG_LIST[0];
    const created = {
      id: `ps-${Date.now()}`,
      code: newProblem.code,
      title: newProblem.title,
      track: newProblem.track,
      sdgId: parseInt(newProblem.sdgId),
      sdgName: sdgObj.name,
      sdgCode: sdgObj.code,
      sdgColor: sdgObj.color,
      industryPartner: newProblem.industryPartner,
      releaseType: newProblem.track === 'Software' ? 'On-Spot (Hackathon Venue)' : 'Released 7-10 Days Prior',
      releaseStatus: 'Active in System',
      description: newProblem.description,
      techStack: newProblem.techStack.split(',').map(s => s.trim()),
      impact: 'High Industry & SDG Alignment',
      industryOffer: 'Pilot Contract + Pre-placement Interview',
      dummyVersionAvailable: true,
      mentor: 'Industry Assigned Specialist'
    };

    if (onAddProblemStatement) {
      onAddProblemStatement(created);
    }
    setShowAddProblemModal(false);
  };

  const filteredTeams = teams.filter(t => 
    trackFilter === 'all' || t.track.toLowerCase() === trackFilter.toLowerCase()
  );

  const softwareCount = teams.filter(t => t.track.toLowerCase() === 'software').length;
  const hardwareCount = teams.filter(t => t.track.toLowerCase() === 'hardware').length;

  return (
    <div className="container" style={{ padding: '2.5rem 1.5rem' }}>
      
      {/* Admin Header */}
      <div className="glass-card" style={{
        padding: '2rem 2.5rem',
        marginBottom: '2rem',
        background: 'linear-gradient(135deg, #fef2f2 0%, #ffffff 100%)',
        borderColor: '#fca5a5'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              boxShadow: '0 4px 14px rgba(220, 38, 38, 0.3)'
            }}>
              <ShieldCheck size={30} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem' }}>
                <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a' }}>Super Admin Command Center</h1>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '0.2rem 0.6rem',
                  borderRadius: '9999px',
                  background: '#fee2e2',
                  color: '#dc2626',
                  border: '1px solid #fca5a5'
                }}>
                  Convener Level Access
                </span>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
                Dr. K. Senthil Kumar (Convener) • Vel Tech Organizing Committee • 17th Edition VISAI 2027
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => setShowAddProblemModal(true)}
              className="btn btn-sm btn-primary"
            >
              <Plus size={16} />
              <span>Add Problem Statement</span>
            </button>

            <button
              onClick={handleCompileSouvenir}
              disabled={compiling}
              className="btn btn-sm btn-amber"
            >
              <RefreshCw size={16} className={compiling ? 'animate-spin' : ''} />
              <span>{compiling ? 'Compiling Book...' : 'Automated Souvenir Compilation'}</span>
            </button>
          </div>
        </div>
      </div>

      {compiledSuccess && (
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
          <CheckCircle size={24} />
          <div>
            <strong style={{ display: 'block', fontSize: '1rem' }}>Official Innovation Souvenir Updated!</strong>
            <span style={{ fontSize: '0.85rem' }}>
              All peer-reviewed abstracts and Grand Jury evaluation scores were formatted and merged into the VISAI 2027 Project Book.
            </span>
          </div>
        </div>
      )}

      {/* KPI Stats Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1.25rem',
        marginBottom: '2rem'
      }}>
        <div className="glass-card" style={{ padding: '1.5rem', background: '#ffffff' }}>
          <div style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase', marginBottom: '0.4rem', fontWeight: 700 }}>Total Registered Teams</div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>303+</div>
          <div style={{ fontSize: '0.75rem', color: '#059669', fontWeight: 600 }}>+48 teams screened this week</div>
        </div>

        <div className="glass-card" style={{ padding: '1.5rem', background: '#ffffff' }}>
          <div style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase', marginBottom: '0.4rem', fontWeight: 700 }}>💻 Software Track Teams</div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0284c7' }}>{softwareCount * 30 + 160}</div>
          <div style={{ fontSize: '0.75rem', color: '#64748b' }}>On-spot problem release</div>
        </div>

        <div className="glass-card" style={{ padding: '1.5rem', background: '#ffffff' }}>
          <div style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase', marginBottom: '0.4rem', fontWeight: 700 }}>🔧 Hardware Track Teams</div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#059669' }}>{hardwareCount * 25 + 110}</div>
          <div style={{ fontSize: '0.75rem', color: '#64748b' }}>7-10 day research period active</div>
        </div>

        <div className="glass-card" style={{ padding: '1.5rem', background: '#ffffff' }}>
          <div style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase', marginBottom: '0.4rem', fontWeight: 700 }}>Stall & Expo Revenue</div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#d97706' }}>₹48,500</div>
          <div style={{ fontSize: '0.75rem', color: '#059669', fontWeight: 600 }}>Food & Tech Stalls confirmed</div>
        </div>
      </div>

      {/* Team Screening & Shortlisting Table */}
      <div className="glass-card" style={{ padding: '2rem', marginBottom: '2rem', background: '#ffffff' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '1.5rem'
        }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>
              Phase 1 Screening & Shortlisting Management
            </h3>
            <p style={{ fontSize: '0.825rem', color: '#64748b' }}>
              Screen initial abstracts/PPTs and approve teams under Software Track or Hardware Track.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <Filter size={15} color="#64748b" />
            <button
              onClick={() => setTrackFilter('all')}
              className={`btn btn-sm ${trackFilter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
            >
              All
            </button>
            <button
              onClick={() => setTrackFilter('software')}
              className={`btn btn-sm ${trackFilter === 'software' ? 'btn-primary' : 'btn-secondary'}`}
            >
              💻 Software
            </button>
            <button
              onClick={() => setTrackFilter('hardware')}
              className={`btn btn-sm ${trackFilter === 'hardware' ? 'btn-primary' : 'btn-secondary'}`}
            >
              🔧 Hardware
            </button>
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #e2e8f0', color: '#64748b', background: '#f8fafc' }}>
                <th style={{ padding: '0.85rem 1rem' }}>Team & College</th>
                <th style={{ padding: '0.85rem 1rem' }}>Track</th>
                <th style={{ padding: '0.85rem 1rem' }}>Challenge Code</th>
                <th style={{ padding: '0.85rem 1rem' }}>Screening Status</th>
                <th style={{ padding: '0.85rem 1rem' }}>Grand Jury Score</th>
                <th style={{ padding: '0.85rem 1rem', textAlign: 'right' }}>Admin Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTeams.map((team) => (
                <tr key={team.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '1rem' }}>
                    <div style={{ fontWeight: 700, color: '#0f172a' }}>{team.teamName}</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{team.institution}</div>
                    <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Lead: {team.leadName} ({team.email})</div>
                  </td>

                  <td style={{ padding: '1rem' }}>
                    <span className={team.track.toLowerCase() === 'software' ? 'track-software' : 'track-hardware'} style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '0.2rem 0.6rem',
                      borderRadius: '9999px'
                    }}>
                      {team.track}
                    </span>
                  </td>

                  <td style={{ padding: '1rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', color: '#1d4ed8', fontSize: '0.8rem', fontWeight: 600 }}>
                      {team.allocatedProblem}
                    </span>
                  </td>

                  <td style={{ padding: '1rem' }}>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '0.2rem 0.6rem',
                      borderRadius: '9999px',
                      background: team.status === 'Shortlisted' ? '#d1fae5' : '#fef3c7',
                      color: team.status === 'Shortlisted' ? '#065f46' : '#92400e',
                      border: `1px solid ${team.status === 'Shortlisted' ? '#a7f3d0' : '#fde68a'}`
                    }}>
                      {team.status}
                    </span>
                  </td>

                  <td style={{ padding: '1rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#0f172a' }}>
                    {team.finalScore > 0 ? `${team.finalScore} / 100` : 'Pending'}
                  </td>

                  <td style={{ padding: '1rem', textAlign: 'right' }}>
                    <div style={{ display: 'inline-flex', gap: '0.4rem' }}>
                      {team.status !== 'Shortlisted' ? (
                        <button
                          onClick={() => handleStatusChange(team.id, 'Shortlisted')}
                          className="btn btn-sm btn-primary"
                          title="Approve for Final Hackathon"
                        >
                          Approve
                        </button>
                      ) : (
                        <button
                          onClick={() => handleTrackSwitch(team.id)}
                          className="btn btn-sm btn-secondary"
                          title="Switch between Software and Hardware track"
                        >
                          Switch Track
                        </button>
                      )}

                      <button
                        onClick={() => handleStatusChange(team.id, 'Rejected')}
                        className="btn btn-sm"
                        style={{ background: '#fee2e2', color: '#dc2626', border: '1px solid #fca5a5' }}
                        title="Reject submission"
                      >
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL: ADD PROBLEM STATEMENT */}
      {showAddProblemModal && (
        <div className="modal-overlay" onClick={() => setShowAddProblemModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px' }}>
            <div className="modal-header">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>
                Add New Industry Challenge & SDG Code
              </h3>
              <button className="modal-close" onClick={() => setShowAddProblemModal(false)}>✕</button>
            </div>

            <form onSubmit={handleCreateProblem}>
              <div className="form-group">
                <label className="form-label">Unique Identity Code (e.g. VISAI-SDG06-IND01)</label>
                <input
                  type="text"
                  required
                  value={newProblem.code}
                  onChange={(e) => setNewProblem({ ...newProblem, code: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Problem Statement Title</label>
                <input
                  type="text"
                  required
                  value={newProblem.title}
                  placeholder="e.g. Autonomous Solar Irrigation Valve Controller"
                  onChange={(e) => setNewProblem({ ...newProblem, title: e.target.value })}
                  className="form-input"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Track</label>
                  <select
                    value={newProblem.track}
                    onChange={(e) => setNewProblem({ ...newProblem, track: e.target.value })}
                    className="form-select"
                  >
                    <option value="Software">Software Track</option>
                    <option value="Hardware">Hardware Track</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">SDG Goal</label>
                  <select
                    value={newProblem.sdgId}
                    onChange={(e) => setNewProblem({ ...newProblem, sdgId: e.target.value })}
                    className="form-select"
                  >
                    {SDG_LIST.map(sdg => (
                      <option key={sdg.id} value={sdg.id}>
                        {sdg.code} – {sdg.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Industry Partner / MNC</label>
                <input
                  type="text"
                  required
                  value={newProblem.industryPartner}
                  placeholder="e.g. Ashok Leyland, Renault Nissan, L&T"
                  onChange={(e) => setNewProblem({ ...newProblem, industryPartner: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Challenge Description</label>
                <textarea
                  required
                  rows={3}
                  value={newProblem.description}
                  placeholder="Explain the real-world engineering problem and deliverables..."
                  onChange={(e) => setNewProblem({ ...newProblem, description: e.target.value })}
                  className="form-textarea"
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1.5rem' }}>
                <button
                  type="button"
                  onClick={() => setShowAddProblemModal(false)}
                  className="btn btn-secondary"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Publish to VISAI Matrix
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

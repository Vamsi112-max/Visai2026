import React, { useState } from 'react';
import { 
  Wrench, 
  CheckCircle2, 
  AlertTriangle, 
  Bed, 
  Coffee, 
  ShieldAlert, 
  Radio, 
  Send, 
  Cpu, 
  Zap,
  Clock
} from 'lucide-react';
import { INITIAL_TEAMS } from '../data/visaiData';

export default function CoordinatorDashboard() {
  const [teams, setTeams] = useState(INITIAL_TEAMS);
  const [broadcastMessage, setBroadcastMessage] = useState('');
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      time: '11:45 PM',
      text: '☕ Midnight refreshment & Madras filter coffee is now open at Food Court 01.',
      type: 'info'
    },
    {
      id: 2,
      time: '09:00 PM',
      text: '🔧 Lab 4 Oscilloscopes and Soldering stations are available for Hardware teams.',
      type: 'tech'
    }
  ]);

  const toggleSafetyApproval = (teamId) => {
    setTeams(prev => prev.map(t => {
      if (t.id === teamId) {
        return { ...t, hardwareSafetyApproved: !t.hardwareSafetyApproved };
      }
      return t;
    }));
  };

  const handleSendBroadcast = (e) => {
    e.preventDefault();
    if (!broadcastMessage.trim()) return;

    setAnnouncements(prev => [
      {
        id: Date.now(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: broadcastMessage,
        type: 'broadcast'
      },
      ...prev
    ]);
    setBroadcastMessage('');
  };

  const hardwareTeams = teams.filter(t => t.track.toLowerCase() === 'hardware');

  return (
    <div className="container" style={{ padding: '2.5rem 1.5rem' }}>
      
      {/* Coordinator Header */}
      <div className="glass-card" style={{
        padding: '2rem 2.5rem',
        marginBottom: '2rem',
        background: 'linear-gradient(135deg, #ecfdf5 0%, #ffffff 100%)',
        borderColor: '#a7f3d0'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #059669, #047857)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              boxShadow: '0 4px 14px rgba(5, 150, 105, 0.3)'
            }}>
              <Wrench size={30} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem' }}>
                <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a' }}>Coordinator & Venue Logistics</h1>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '0.2rem 0.6rem',
                  borderRadius: '9999px',
                  background: '#d1fae5',
                  color: '#065f46',
                  border: '1px solid #a7f3d0'
                }}>
                  Lead Coordinator Desk
                </span>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
                Prof. S. Divya & Vel Tech Tech Support • 24/7 Logistics, Safety & Arrangements
              </p>
            </div>
          </div>

          <div style={{
            background: '#ffffff',
            padding: '0.6rem 1.25rem',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            fontSize: '0.85rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#059669',
            fontWeight: 600
          }}>
            <Zap size={16} />
            <span>Campus Grid: Stable 240V / Backup Genset Online</span>
          </div>
        </div>
      </div>

      {/* Participant Arrangements Tracker */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '1.25rem',
        marginBottom: '2rem'
      }}>
        <div className="glass-card" style={{ padding: '1.5rem', background: '#ffffff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#2563eb', marginBottom: '0.5rem' }}>
            <Bed size={18} />
            <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>Hostel & Rest Areas</span>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>420 / 450</div>
          <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Beds Allocated • Boys & Girls Hostels A & C</div>
        </div>

        <div className="glass-card" style={{ padding: '1.5rem', background: '#ffffff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#d97706', marginBottom: '0.5rem' }}>
            <Coffee size={18} />
            <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>Food & Refreshments</span>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#d97706' }}>Active 24/7</div>
          <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Meal coupons verified at Quadrangle Food Court</div>
        </div>

        <div className="glass-card" style={{ padding: '1.5rem', background: '#ffffff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#059669', marginBottom: '0.5rem' }}>
            <ShieldAlert size={18} />
            <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>Emergency & Security</span>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#059669' }}>On Standby</div>
          <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Ambulance station & campus security patrol</div>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
        gap: '2rem'
      }}>
        
        {/* HARDWARE COMPONENT INTAKE & SAFETY SCREENING */}
        <div className="glass-card" style={{ padding: '2rem', background: '#ffffff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Cpu size={20} color="#059669" />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>
              Hardware Component Intake & Safety Desk
            </h3>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '1.5rem' }}>
            Strict Rule: Participants must not bring pre-assembled prototypes. Verify raw microcontrollers, sensors, and chassis before granting live assembly clearance.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {hardwareTeams.map((team) => (
              <div
                key={team.id}
                style={{
                  background: '#f8fafc',
                  border: `1px solid ${team.hardwareSafetyApproved ? '#a7f3d0' : '#fecaca'}`,
                  borderRadius: '12px',
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}
              >
                <div>
                  <div style={{ fontWeight: 700, color: '#0f172a' }}>{team.teamName}</div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                    Challenge: <code>{team.allocatedProblem}</code>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#334155' }}>
                    Lead: {team.leadName} • {team.institution.split(',')[0]}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '0.2rem 0.6rem',
                    borderRadius: '9999px',
                    background: team.hardwareSafetyApproved ? '#d1fae5' : '#fee2e2',
                    color: team.hardwareSafetyApproved ? '#065f46' : '#dc2626'
                  }}>
                    {team.hardwareSafetyApproved ? 'Safety Cleared' : 'Pending Inspection'}
                  </span>

                  <button
                    onClick={() => toggleSafetyApproval(team.id)}
                    className={`btn btn-sm ${team.hardwareSafetyApproved ? 'btn-secondary' : 'btn-primary'}`}
                  >
                    {team.hardwareSafetyApproved ? 'Revoke' : 'Approve Kit'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VENUE BROADCASTER & ANNOUNCEMENTS */}
        <div className="glass-card" style={{ padding: '2rem', background: '#ffffff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Radio size={20} color="#2563eb" />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>
              Venue Live Broadcast & Participant Alerts
            </h3>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '1.25rem' }}>
            Push instant operational alerts to all student teams, lab monitors, and food court displays.
          </p>

          <form onSubmit={handleSendBroadcast} style={{ marginBottom: '1.5rem' }}>
            <div className="form-group">
              <textarea
                rows={3}
                value={broadcastMessage}
                onChange={(e) => setBroadcastMessage(e.target.value)}
                placeholder="Type announcement (e.g. Round 2 Git push deadline in 30 minutes, or Food Court dinner serving begins)..."
                className="form-textarea"
                required
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button type="submit" className="btn btn-sm btn-primary">
                <Send size={14} />
                <span>Broadcast to All Screens</span>
              </button>
            </div>
          </form>

          {/* Past Broadcasts */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
              Recent Broadcast Feed:
            </div>
            {announcements.map((ann) => (
              <div
                key={ann.id}
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '0.75rem 1rem',
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem'
                }}
              >
                <Clock size={14} color="#2563eb" style={{ marginTop: '2px', flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 700, marginRight: '0.5rem' }}>
                    {ann.time}
                  </span>
                  <span style={{ color: '#0f172a' }}>{ann.text}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
}

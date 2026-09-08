import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Clock, 
  Trophy, 
  ArrowRight, 
  Cpu, 
  Code2, 
  BookOpen, 
  Globe, 
  CheckCircle2,
  FileText
} from 'lucide-react';

export default function Hero({ onExploreProblems, onEnterPortal, onOpenSouvenir }) {
  // Live Countdown state to VISAI Hackathon Kickoff
  const [timeLeft, setTimeLeft] = useState({
    days: 42,
    hours: 14,
    minutes: 38,
    seconds: 19
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section" style={{ paddingTop: '3.5rem', paddingBottom: '4.5rem', overflow: 'hidden' }}>
      <div className="container">
        
        {/* Top Tagline Pill */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div className="badge-tag" style={{ background: 'rgba(56, 189, 248, 0.12)', borderColor: 'rgba(56, 189, 248, 0.3)' }}>
            <Sparkles size={14} className="float-element" />
            <span>Vel Tech Presents • VISAI 2027 • 17th Edition</span>
          </div>
        </div>

        {/* Hero Main Heading */}
        <div style={{ textAlign: 'center', maxWidth: '980px', margin: '0 auto 1.5rem' }}>
          <h1 style={{
            fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)',
            fontWeight: 900,
            lineHeight: 1.12,
            letterSpacing: '-0.035em',
            marginBottom: '1.25rem'
          }}>
            Real Problems. Real Innovation.{' '}
            <span className="gradient-text-cyan">Real Impact.</span>
          </h1>

          <p style={{
            fontSize: 'clamp(1.05rem, 1.8vw, 1.3rem)',
            color: '#cbd5e1',
            lineHeight: 1.65,
            maxWidth: '820px',
            margin: '0 auto'
          }}>
            Transforming conventional project exhibitions into a high-octane <strong>36 / 48-Hour SDG & Industry Innovation Hackathon</strong>. Direct industry problem statements from Ashok Leyland, Renault Nissan, L&T Valves, and UN SDG targets with peer-reviewed publication in the official <strong>VISAI 2027 Innovation Souvenir</strong>.
          </p>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          marginBottom: '3rem'
        }}>
          <button onClick={onExploreProblems} className="btn btn-lg btn-primary">
            <span>Explore Industry Challenges</span>
            <ArrowRight size={18} />
          </button>

          <button onClick={onEnterPortal} className="btn btn-lg btn-secondary">
            <span>Enter Role Portals & Demo Login</span>
          </button>

          <button onClick={onOpenSouvenir} className="btn btn-lg btn-amber">
            <BookOpen size={18} />
            <span>Innovation Souvenir Book</span>
          </button>
        </div>

        {/* Dual Track Banner Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.25rem',
          maxWidth: '1080px',
          margin: '0 auto 3.5rem'
        }}>
          {/* Software Track Box */}
          <div className="glass-card" style={{ padding: '1.75rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{
              position: 'absolute',
              top: '-30px',
              right: '-30px',
              width: '100px',
              height: '100px',
              background: 'rgba(6, 182, 212, 0.15)',
              borderRadius: '50%',
              filter: 'blur(25px)'
            }} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{ background: 'rgba(6, 182, 212, 0.2)', padding: '0.6rem', borderRadius: '12px', color: '#38bdf8' }}>
                  <Code2 size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>💻 Software Track</h3>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>AI, Cloud, Cyber, Mobile & Web</span>
                </div>
              </div>
              <span className="track-software" style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '9999px' }}>
                On-Spot Release
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#cbd5e1', marginBottom: '1rem' }}>
              Software problem statements are released <strong>exclusively at the hackathon venue</strong>. Teams ideate, code, integrate models, and deploy working MVPs under official 36/48-hour time constraint.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', fontSize: '0.75rem', color: '#38bdf8' }}>
              <span>• Zero Pre-Coding</span>
              <span>• Live Verification</span>
              <span>• AI & ML Benchmarks</span>
            </div>
          </div>

          {/* Hardware Track Box */}
          <div className="glass-card" style={{ padding: '1.75rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{
              position: 'absolute',
              top: '-30px',
              right: '-30px',
              width: '100px',
              height: '100px',
              background: 'rgba(16, 185, 129, 0.15)',
              borderRadius: '50%',
              filter: 'blur(25px)'
            }} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{ background: 'rgba(16, 185, 129, 0.2)', padding: '0.6rem', borderRadius: '12px', color: '#34d399' }}>
                  <Cpu size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>🔧 Hardware Track</h3>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>IoT, Robotics, Embedded & Sensors</span>
                </div>
              </div>
              <span className="track-hardware" style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '9999px' }}>
                7-10 Days Pre-Release
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#cbd5e1', marginBottom: '1rem' }}>
              Hardware challenges released <strong>7–10 days before the event</strong> to allow research, component sourcing, and architecture design. Full prototype assembly happens live at the hackathon.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', fontSize: '0.75rem', color: '#34d399' }}>
              <span>• Component Procurement</span>
              <span>• Safety Screening</span>
              <span>• Live Bench Prototyping</span>
            </div>
          </div>
        </div>

        {/* Live Countdown & Stats Strip */}
        <div className="glass-card" style={{
          padding: '1.75rem 2rem',
          maxWidth: '1080px',
          margin: '0 auto',
          background: 'linear-gradient(135deg, rgba(16, 20, 31, 0.95) 0%, rgba(30, 27, 75, 0.4) 100%)',
          borderColor: 'rgba(99, 102, 241, 0.3)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            alignItems: 'center'
          }}>
            {/* Countdown Box */}
            <div style={{ borderRight: '1px solid rgba(255, 255, 255, 0.08)', paddingRight: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                <Clock size={14} color="#38bdf8" />
                <span>Countdown to Kickoff</span>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-mono)' }}>{timeLeft.days}</div>
                  <div style={{ fontSize: '0.65rem', color: '#64748b' }}>DAYS</div>
                </div>
                <span style={{ fontSize: '1.2rem', color: '#475569' }}>:</span>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-mono)' }}>{timeLeft.hours}</div>
                  <div style={{ fontSize: '0.65rem', color: '#64748b' }}>HRS</div>
                </div>
                <span style={{ fontSize: '1.2rem', color: '#475569' }}>:</span>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-mono)' }}>{timeLeft.minutes}</div>
                  <div style={{ fontSize: '0.65rem', color: '#64748b' }}>MIN</div>
                </div>
                <span style={{ fontSize: '1.2rem', color: '#475569' }}>:</span>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>{timeLeft.seconds}</div>
                  <div style={{ fontSize: '0.65rem', color: '#64748b' }}>SEC</div>
                </div>
              </div>
            </div>

            {/* Stat 1 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fbbf24', fontFamily: 'var(--font-display)' }}>
                ₹5 Lakhs+
              </div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                Cash Prizes & Seed Grants
              </div>
            </div>

            {/* Stat 2 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#38bdf8', fontFamily: 'var(--font-display)' }}>
                303+
              </div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                Shortlisted Teams Nationwide
              </div>
            </div>

            {/* Stat 3 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#34d399', fontFamily: 'var(--font-display)' }}>
                Malaysia
              </div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                Fully-Funded International Trip
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

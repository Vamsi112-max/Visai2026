import React, { useState } from 'react';
import DraftDataTicker from './components/DraftDataTicker';
import CredentialsBanner from './components/CredentialsBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrackComparison from './components/TrackComparison';
import ProblemStatements from './components/ProblemStatements';
import SdgMatrix from './components/SdgMatrix';
import HackathonTimeline from './components/HackathonTimeline';
import SouvenirBook from './components/SouvenirBook';
import StallsExpo from './components/StallsExpo';
import AuthModal from './components/AuthModal';
import ParticipantDashboard from './components/ParticipantDashboard';
import AdminDashboard from './components/AdminDashboard';
import JuryDashboard from './components/JuryDashboard';
import CoordinatorDashboard from './components/CoordinatorDashboard';
import Footer from './components/Footer';
import { DEMO_CREDENTIALS, SOUVENIR_ARTICLES, INITIAL_PROBLEM_STATEMENTS } from './data/visaiData';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentRole, setCurrentRole] = useState(null); // null = public, or 'admin' | 'participant' | 'jury' | 'coordinator'
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [additionalSouvenirArticles, setAdditionalSouvenirArticles] = useState([]);
  const [problemStatementsList, setProblemStatementsList] = useState(INITIAL_PROBLEM_STATEMENTS);

  // Handle direct role selection from Credentials banner
  const handleSelectRole = (role) => {
    setCurrentRole(role);
    setActiveTab('portal');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    setCurrentRole(null);
    setActiveTab('overview');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePublishAbstractToSouvenir = (newArticle) => {
    setAdditionalSouvenirArticles(prev => [newArticle, ...prev]);
  };

  const handleAddProblemStatement = (newProb) => {
    setProblemStatementsList(prev => [newProb, ...prev]);
  };

  const handleTriggerSouvenirCompilation = () => {
    // simulated compilation action
    setActiveTab('souvenir');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* 0. DRAFT DATA FEED TICKER ON TOP */}
      <DraftDataTicker
        onSelectRole={handleSelectRole}
      />

      {/* 1. TOP FLOATING CREDENTIALS BANNER (Quick 1-Click Role Switcher) */}
      <CredentialsBanner
        currentRole={currentRole}
        onSelectRole={handleSelectRole}
        onOpenAuthModal={() => setIsAuthModalOpen(true)}
        onResetToPublic={handleLogout}
      />

      {/* 2. STICKY NAVBAR */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currentRole={currentRole}
        onLogout={handleLogout}
        onOpenAuthModal={() => setIsAuthModalOpen(true)}
      />

      {/* 3. MAIN CONTENT AREA */}
      <main style={{ flex: 1 }}>
        
        {/* If user is in a dedicated Role Portal View */}
        {activeTab === 'portal' && currentRole && (
          <div style={{ paddingBottom: '3rem' }}>
            <div style={{
              background: '#ffffff',
              borderBottom: '1px solid #e2e8f0',
              padding: '0.75rem 0',
              boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
            }}>
              <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ fontSize: '0.85rem', color: '#475569' }}>
                  Logged in role: <strong style={{ color: '#0f172a', textTransform: 'capitalize' }}>{currentRole}</strong> • Switch any role using the banner above
                </div>
                <button
                  onClick={() => setActiveTab('overview')}
                  className="btn btn-sm btn-secondary"
                >
                  ← Return to Public Event Site
                </button>
              </div>
            </div>

            {currentRole === 'participant' && (
              <ParticipantDashboard onPublishAbstractToSouvenir={handlePublishAbstractToSouvenir} />
            )}

            {currentRole === 'admin' && (
              <AdminDashboard 
                onAddProblemStatement={handleAddProblemStatement}
                onTriggerSouvenirCompilation={handleTriggerSouvenirCompilation}
              />
            )}

            {currentRole === 'jury' && (
              <JuryDashboard />
            )}

            {currentRole === 'coordinator' && (
              <CoordinatorDashboard />
            )}
          </div>
        )}

        {/* Standard Public & Event Navigation Views */}
        {activeTab !== 'portal' && (
          <>
            {activeTab === 'overview' && (
              <>
                <Hero
                  onExploreProblems={() => setActiveTab('problems')}
                  onEnterPortal={() => {
                    if (currentRole) setActiveTab('portal');
                    else setIsAuthModalOpen(true);
                  }}
                  onOpenSouvenir={() => setActiveTab('souvenir')}
                />
                <TrackComparison />
                <ProblemStatements onSelectProblem={() => {
                  setCurrentRole('participant');
                  setActiveTab('portal');
                }} />
                <SdgMatrix onFilterBySdg={() => setActiveTab('problems')} />
                <HackathonTimeline />
                <SouvenirBook additionalArticles={additionalSouvenirArticles} />
                <StallsExpo />
              </>
            )}

            {activeTab === 'tracks' && (
              <div style={{ paddingTop: '2rem' }}>
                <TrackComparison />
              </div>
            )}

            {activeTab === 'problems' && (
              <div style={{ paddingTop: '2rem' }}>
                <ProblemStatements onSelectProblem={() => {
                  setCurrentRole('participant');
                  setActiveTab('portal');
                }} />
              </div>
            )}

            {activeTab === 'sdgs' && (
              <div style={{ paddingTop: '2rem' }}>
                <SdgMatrix onFilterBySdg={() => setActiveTab('problems')} />
              </div>
            )}

            {activeTab === 'timeline' && (
              <div style={{ paddingTop: '2rem' }}>
                <HackathonTimeline />
              </div>
            )}

            {activeTab === 'souvenir' && (
              <div style={{ paddingTop: '2rem' }}>
                <SouvenirBook additionalArticles={additionalSouvenirArticles} />
              </div>
            )}

            {activeTab === 'stalls' && (
              <div style={{ paddingTop: '2rem' }}>
                <StallsExpo />
              </div>
            )}
          </>
        )}

      </main>

      {/* 4. FOOTER */}
      <Footer onOpenAuthModal={() => setIsAuthModalOpen(true)} />

      {/* 5. AUTH MODAL WITH PREFILL CREDENTIALS */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={(role) => {
          setCurrentRole(role);
          setActiveTab('portal');
        }}
      />

    </div>
  );
}

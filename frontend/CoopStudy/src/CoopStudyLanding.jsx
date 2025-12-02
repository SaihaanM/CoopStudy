// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./SignUp"; 
import Login from "./Login";


const styles = `
:root {
  --bg-dark: #020617;
  --bg-dark-2: #020617;
  --accent: #22c55e;
  --accent-soft: #4ade80;
  --accent-secondary: #38bdf8;
  --text-main: #e5e7eb;
  --text-muted: #9ca3af;
  --card-bg: rgba(15, 23, 42, 0.92);
  --border-subtle: rgba(148, 163, 184, 0.3);
  --shadow-strong: 0 24px 60px rgba(15, 23, 42, 0.9);
  --radius-xl: 24px;
  --radius-pill: 999px;
  --transition-fast: 180ms ease-out;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text",
    "Segoe UI", sans-serif;
  color: var(--text-main);
  background: radial-gradient(circle at 0% 0%, #0f172a 0, #020617 45%, #000 100%);
  overflow-x: hidden;
}

/* Animated gradient backdrop */
body::before {
  content: "";
  position: fixed;
  inset: -40%;
  background:
    radial-gradient(circle at 10% 20%, rgba(56, 189, 248, 0.14) 0, transparent 50%),
    radial-gradient(circle at 80% 10%, rgba(45, 212, 191, 0.16) 0, transparent 52%),
    radial-gradient(circle at 20% 80%, rgba(34, 197, 94, 0.14) 0, transparent 55%);
  filter: blur(10px);
  opacity: 0.9;
  z-index: -2;
  animation: gradientShift 24s ease-in-out infinite alternate;
}

@keyframes gradientShift {
  0% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    transform: translate3d(-4%, 2%, 0) scale(1.03);
  }
  100% {
    transform: translate3d(4%, -3%, 0) scale(1.05);
  }
}

.page {
  position: relative;
  min-height: 100vh;
  padding: 20px 18px 40px;
  display: flex;
  flex-direction: column;
  max-width: 1120px;
  margin: 0 auto;
}

/* Top nav */
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  background: linear-gradient(
    to right,
    rgba(15, 23, 42, 0.9),
    rgba(15, 23, 42, 0.82)
  );
  border-radius: 999px;
  border: 1px solid var(--border-subtle);
  backdrop-filter: blur(18px);
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.85);
  margin-bottom: 32px;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-orb {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #bbf7d0 0, #22c55e 40%, #15803d 75%);
  box-shadow:
    0 0 20px rgba(34, 197, 94, 0.8),
    0 0 45px rgba(34, 197, 94, 0.4);
  position: relative;
  overflow: hidden;
}

.logo-orb::after {
  content: "";
  position: absolute;
  inset: 20%;
  border-radius: inherit;
  border: 2px solid rgba(22, 163, 74, 0.4);
  filter: blur(1px);
}

.brand {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.82rem;
}

.brand-tag {
  font-size: 0.7rem;
  color: var(--text-muted);
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-pill {
  font-size: 0.7rem;
  padding: 6px 11px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.5);
  color: var(--text-muted);
  background: rgba(15, 23, 42, 0.7);
}

/* Main hero */
.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  gap: 32px;
  align-items: center;
  flex: 1;
}

@media (max-width: 840px) {
  .hero {
    grid-template-columns: minmax(0, 1fr);
    gap: 24px;
  }
}

.hero-text-card {
  padding: 26px 26px 24px;
  border-radius: var(--radius-xl);
  background: radial-gradient(circle at top left, rgba(34, 197, 94, 0.08), transparent 55%),
    radial-gradient(circle at bottom right, rgba(56, 189, 248, 0.1), transparent 60%),
    var(--card-bg);
  border: 1px solid var(--border-subtle);
  box-shadow: var(--shadow-strong);
  position: relative;
  overflow: hidden;
  transform: translateY(6px);
  opacity: 0;
  animation: heroFadeIn 700ms ease-out forwards;
}

@keyframes heroFadeIn {
  0% {
    opacity: 0;
    transform: translateY(18px) scale(0.98);
    filter: blur(6px);
  }
  60% {
    opacity: 1;
    transform: translateY(0) scale(1.01);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

.hero-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 11px;
  border-radius: var(--radius-pill);
  background: rgba(15, 23, 42, 0.86);
  border: 1px solid rgba(74, 222, 128, 0.6);
  color: var(--accent-soft);
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 14px;
}

.pill-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent-soft);
  box-shadow: 0 0 10px rgba(34, 197, 94, 0.9);
}

.hero-title {
  font-size: clamp(2.1rem, 5vw, 2.8rem);
  line-height: 1.1;
  margin-bottom: 14px;
}

.hero-title span {
  background: linear-gradient(to right, var(--accent-soft), var(--accent-secondary));
  -webkit-background-clip: text;
  color: transparent;
}

.hero-subtitle {
  font-size: 0.94rem;
  color: var(--text-muted);
  max-width: 32rem;
  margin-bottom: 18px;
}

.hero-sub-points {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  margin-bottom: 20px;
}

@media (max-width: 600px) {
  .hero-sub-points {
    grid-template-columns: minmax(0, 1fr);
  }
}

.hero-point {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  font-size: 0.8rem;
  color: #d1d5db;
}

.hero-point-dot {
  margin-top: 4px;
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.6);
}

/* Buttons */
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 12px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 11px 18px;
  border-radius: var(--radius-pill);
  font-size: 0.88rem;
  font-weight: 500;
  border: 1px solid transparent;
  text-decoration: none;
  cursor: pointer;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast),
    background var(--transition-fast), border-color var(--transition-fast),
    color var(--transition-fast);
  will-change: transform;
}

.btn-primary {
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-soft) 45%, #22c55e 100%);
  color: #022c22;
  box-shadow:
    0 18px 35px rgba(34, 197, 94, 0.45),
    0 0 30px rgba(22, 163, 74, 0.7);
}

.btn-primary:hover {
  transform: translateY(-1px) scale(1.02);
  box-shadow:
    0 24px 55px rgba(34, 197, 94, 0.6),
    0 0 40px rgba(22, 163, 74, 0.8);
  background: linear-gradient(135deg, #4ade80 0%, #22c55e 40%, #16a34a 100%);
}

.btn-secondary {
  background: rgba(15, 23, 42, 0.95);
  border-color: rgba(148, 163, 184, 0.7);
  color: var(--text-main);
}

.btn-secondary:hover {
  background: rgba(15, 23, 42, 0.85);
  border-color: rgba(148, 163, 184, 0.9);
  transform: translateY(-1px);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.85);
}

.btn-text {
  font-size: 0.78rem;
  color: var(--text-muted);
}

/* Right side “animated panel” */
.hero-panel {
  position: relative;
  padding: 22px 20px 20px;
  border-radius: var(--radius-xl);
  background: radial-gradient(circle at top right, rgba(56, 189, 248, 0.22), transparent 55%),
    radial-gradient(circle at bottom left, rgba(34, 197, 94, 0.18), transparent 60%),
    rgba(15, 23, 42, 0.95);
  border: 1px solid rgba(148, 163, 184, 0.5);
  box-shadow: var(--shadow-strong);
  overflow: hidden;
  transform-origin: center;
  animation: panelFloat 6.5s ease-in-out infinite alternate;
}

@keyframes panelFloat {
  0% {
    transform: translateY(3px) rotate(-0.8deg);
  }
  50% {
    transform: translateY(-6px) rotate(0.6deg);
  }
  100% {
    transform: translateY(2px) rotate(-0.3deg);
  }
}

.panel-badge-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  font-size: 0.74rem;
  color: var(--text-muted);
}

.panel-badge {
  padding: 4px 10px;
  border-radius: var(--radius-pill);
  border: 1px solid rgba(148, 163, 184, 0.6);
  background: rgba(15, 23, 42, 0.8);
}

.panel-chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.panel-chip {
  font-size: 0.7rem;
  padding: 4px 9px;
  border-radius: var(--radius-pill);
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.7);
  color: #cbd5f5;
}

.panel-metrics {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  margin-bottom: 18px;
}

.metric-card {
  padding: 10px 10px 9px;
  border-radius: 16px;
  background: rgba(15, 23, 42, 0.92);
  border: 1px solid rgba(148, 163, 184, 0.7);
  font-size: 0.78rem;
}

.metric-label {
  color: var(--text-muted);
  margin-bottom: 3px;
}

.metric-value {
  font-size: 1.15rem;
  font-weight: 600;
}

.metric-tag {
  font-size: 0.67rem;
  color: #a5b4fc;
}

/* “Progress ring” style graphic */
.panel-visual {
  margin-top: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.ring {
  width: 84px;
  height: 84px;
  border-radius: 50%;
  background:
    conic-gradient(from 210deg, var(--accent-soft) 0 62%, rgba(51, 65, 85, 1) 62% 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow:
    0 0 18px rgba(34, 197, 94, 0.7),
    0 0 35px rgba(59, 130, 246, 0.6);
}

.ring::after {
  content: "";
  position: absolute;
  inset: 18%;
  border-radius: inherit;
  background: radial-gradient(circle at top, #020617 0, #020617 100%);
  border: 1px solid rgba(148, 163, 184, 0.8);
}

.ring-score {
  position: relative;
  font-size: 1.1rem;
  font-weight: 600;
  color: #bbf7d0;
}

.ring-caption {
  font-size: 0.7rem;
  color: var(--text-muted);
  margin-top: 4px;
  text-align: center;
}

.panel-caption {
  font-size: 0.74rem;
  color: var(--text-muted);
  max-width: 11rem;
}

/* Footer-ish */
.footer-note {
  margin-top: 26px;
  font-size: 0.7rem;
  color: var(--text-muted);
  text-align: center;
}
`;

function Landing() {
  return (
    <>
      <style>{styles}</style>

      <main className="page">
        {/* Top nav */}
        <header className="nav">
          <div className="nav-left">
            <div className="logo-orb" />
            <div className="brand">
              <span className="brand-name">CoopStudy</span>
              <span className="brand-tag">Study smarter</span>
            </div>
          </div>
          <div className="nav-right">
            <span className="nav-pill">Built for busy students</span>
          </div>
        </header>

        {/* Hero */}
        <section className="hero">
          {/* Left: text + actions */}
          <div className="hero-text-card">
            <div className="hero-pill">
              <span className="pill-dot" />
              AI powered study workspace for your learning needs
            </div>
            <h1 className="hero-title">
              Turn your notes into a <span>personal study copilot</span>.
            </h1>
            <p className="hero-subtitle">
              Upload lectures, readings, and problem sets. CoopStudy turns them into smart
              explanations, quizzes, and reminders so you can crush classes.
            </p>

            <div className="hero-sub-points">
              <div className="hero-point">
                <span className="hero-point-dot" />
                <span>
                  Ask questions in plain English and get answers grounded in your own course
                  material.
                </span>
              </div>
              <div className="hero-point">
                <span className="hero-point-dot" />
                <span>
                  Auto generated flashcards, practice questions, and progress tracking per topic.
                </span>
              </div>
            </div>

            <div className="hero-actions">
              {/* SIGNUP BUTTON – React Router */}
              <Link to="/signup" className="btn btn-primary">
                Sign up
              </Link>

              {/* Login can stay a normal link or be routed later */}
              <a href="/login" className="btn btn-secondary">
                Log in
              </a>
            </div>
            <p className="btn-text">
              No complicated setup. Create an account, upload a course, and start asking questions.
            </p>
          </div>

          {/* Right: animated visual panel */}
          <aside className="hero-panel" aria-hidden="true">
            <div className="panel-badge-row">
              <div className="panel-badge">Tonight’s focus · ECON 201</div>
              <span>Session · 32 min</span>
            </div>

            <div className="panel-chip-row">
              <div className="panel-chip">Producer theory</div>
              <div className="panel-chip">Supply and Demand</div>
              <div className="panel-chip">Elasticity</div>
              <div className="panel-chip">Taxes</div>
            </div>

            <div className="panel-metrics">
              <div className="metric-card">
                <div className="metric-label">Questions mastered</div>
                <div className="metric-value">42 / 50</div>
                <div className="metric-tag">This week</div>
              </div>
              <div className="metric-card">
                <div className="metric-label">Confidence</div>
                <div className="metric-value">78%</div>
                <div className="metric-tag">Across 3 courses</div>
              </div>
            </div>

            <div className="panel-visual">
              <div>
                <div className="ring">
                  <span className="ring-score">78</span>
                </div>
                <div className="ring-caption">Current mastery</div>
              </div>
              <p className="panel-caption">
                CoopStudy watches what you get right and wrong to nudge you toward the topics that
                matter most.
              </p>
            </div>
          </aside>
        </section>

        <p className="footer-note">
          CoopStudy keeps courses, uploads, quizzes, and analytics organized in one dashboard so
          you can focus on learning, not logistics.
        </p>
      </main>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

// src/Signup.jsx
import React, { useState } from "react";

const styles = `
:root {
  --bg-dark: #020617;
  --accent: #22c55e;
  --accent-soft: #4ade80;
  --accent-secondary: #38bdf8;
  --text-main: #e5e7eb;
  --text-muted: #9ca3af;
  --card-bg: rgba(15, 23, 42, 0.95);
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

.signup-page {
  position: relative;
  min-height: 100vh;
  padding: 20px 16px 40px;
  display: flex;
  flex-direction: column;
  max-width: 960px;
  margin: 0 auto;
}

/* Top nav */
.signup-nav {
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

.signup-nav-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.signup-logo-orb {
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

.signup-logo-orb::after {
  content: "";
  position: absolute;
  inset: 20%;
  border-radius: inherit;
  border: 2px solid rgba(22, 163, 74, 0.4);
  filter: blur(1px);
}

.signup-brand {
  display: flex;
  flex-direction: column;
}

.signup-brand-name {
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.82rem;
}

.signup-brand-tag {
  font-size: 0.7rem;
  color: var(--text-muted);
}

.signup-nav-right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.signup-link {
  font-size: 0.8rem;
  color: var(--text-muted);
  text-decoration: none;
}

.signup-link span {
  color: var(--accent-soft);
}

/* Center layout */
.signup-main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.signup-card {
  width: 100%;
  max-width: 440px;
  padding: 26px 24px 22px;
  border-radius: var(--radius-xl);
  background: radial-gradient(circle at top left, rgba(34, 197, 94, 0.08), transparent 55%),
    radial-gradient(circle at bottom right, rgba(56, 189, 248, 0.1), transparent 60%),
    var(--card-bg);
  border: 1px solid var(--border-subtle);
  box-shadow: var(--shadow-strong);
  animation: fadeUp 600ms ease-out;
}

@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(18px) scale(0.98);
    filter: blur(4px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

.signup-pill {
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
  margin-bottom: 10px;
}

.signup-pill-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent-soft);
  box-shadow: 0 0 10px rgba(34, 197, 94, 0.9);
}

.signup-title {
  font-size: 1.6rem;
  margin-bottom: 6px;
}

.signup-subtitle {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 18px;
}

/* Form */
.signup-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.signup-label {
  font-size: 0.8rem;
  margin-bottom: 4px;
}

.signup-input {
  width: 100%;
  padding: 9px 10px;
  border-radius: 12px;
  border: 1px solid rgba(148, 163, 184, 0.6);
  background: rgba(15, 23, 42, 0.9);
  color: var(--text-main);
  font-size: 0.85rem;
  outline: none;
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast),
    background var(--transition-fast);
}

.signup-input::placeholder {
  color: rgba(148, 163, 184, 0.7);
}

.signup-input:focus {
  border-color: var(--accent-soft);
  box-shadow: 0 0 0 1px rgba(74, 222, 128, 0.4);
  background: rgba(15, 23, 42, 0.95);
}

.signup-row {
  display: flex;
  gap: 10px;
}

.signup-row > div {
  flex: 1;
}

/* Button */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 18px;
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
  width: 100%;
  margin-top: 6px;
}

.btn-primary:hover {
  transform: translateY(-1px) scale(1.02);
  box-shadow:
    0 24px 55px rgba(34, 197, 94, 0.6),
    0 0 40px rgba(22, 163, 74, 0.8);
  background: linear-gradient(135deg, #4ade80 0%, #22c55e 40%, #16a34a 100%);
}

.btn-primary:disabled {
  opacity: 0.7;
  cursor: default;
  transform: none;
  box-shadow: none;
}

/* Status text */
.signup-status {
  margin-top: 8px;
  font-size: 0.78rem;
}

.signup-status.error {
  color: #fecaca;
}

.signup-status.success {
  color: #bbf7d0;
}

/* Helper text below form */
.signup-helper {
  margin-top: 8px;
  font-size: 0.75rem;
  color: var(--text-muted);
}

/* Small link */
.signup-helper a {
  color: var(--accent-soft);
  text-decoration: none;
}
`;

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    if (password !== confirm) {
      setStatus({ type: "error", message: "Passwords do not match." });
      return;
    }

    const payload = {
      fullName,
      email: userEmail,
      password,
      createdAt: new Date().toISOString(),
    };

    try {
      setIsSubmitting(true);

      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Signup failed");
      }

      setStatus({
        type: "success",
        message: "Account created. You can log in now.",
      });
      setPassword("");
      setConfirm("");
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{styles}</style>
      <main className="signup-page">
        <header className="signup-nav">
          <div className="signup-nav-left">
            <div className="signup-logo-orb" />
            <div className="signup-brand">
              <span className="signup-brand-name">CoopStudy</span>
              <span className="signup-brand-tag">
                Cooperative studying, one cohort at a time
              </span>
            </div>
          </div>
          <div className="signup-nav-right">
            <a href="/login" className="signup-link">
              Already have an account? <span>Log in</span>
            </a>
          </div>
        </header>

        <section className="signup-main">
          <div className="signup-card">
            <div className="signup-pill">
              <span className="signup-pill-dot" />
              Create your CoopStudy account
            </div>
            <h1 className="signup-title">Sign up</h1>
            <p className="signup-subtitle">
              Join a study space where your notes, ideas, and problems can all come together and
              work together.
            </p>

            <form className="signup-form" onSubmit={handleSubmit}>
              <div>
                <label className="signup-label" htmlFor="fullName">
                  Full name
                </label>
                <input
                  id="fullName"
                  className="signup-input"
                  type="text"
                  placeholder="Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="signup-label" htmlFor="email">
                 Email
                </label>
                <input
                  id="email"
                  className="signup-input"
                  type="email"
                  placeholder="you@handle.ca"
                  value={userEmail}
                  onChange={(e) => setuserEmail(e.target.value)}
                  required
                />
              </div>

              <div className="signup-row">
                <div>
                  <label className="signup-label" htmlFor="password">
                    Password
                  </label>
                  <input
                    id="password"
                    className="signup-input"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                  />
                </div>
                <div>
                  <label className="signup-label" htmlFor="confirm">
                    Confirm
                  </label>
                  <input
                    id="confirm"
                    className="signup-input"
                    type="password"
                    placeholder="••••••••"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    required
                    minLength={6}
                  />
                </div>
              </div>

              <button
                className="btn btn-primary"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Creating account..." : "Create account"}
              </button>

              {status.message && (
                <div
                  className={`signup-status ${
                    status.type === "error" ? "error" : "success"
                  }`}
                >
                  {status.message}
                </div>
              )}
            </form>

            <p className="signup-helper">
              By signing up you agree to keep things collaborative and kind.{" "}
              <a href="/">Back to home</a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

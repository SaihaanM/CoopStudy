// src/Login.jsx
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

.login-page {
  position: relative;
  min-height: 100vh;
  padding: 20px 16px 40px;
  display: flex;
  flex-direction: column;
  max-width: 960px;
  margin: 0 auto;
}

/* Top nav */
.login-nav {
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

.login-nav-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.login-logo-orb {
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

.login-logo-orb::after {
  content: "";
  position: absolute;
  inset: 20%;
  border-radius: inherit;
  border: 2px solid rgba(22, 163, 74, 0.4);
  filter: blur(1px);
}

.login-brand {
  display: flex;
  flex-direction: column;
}

.login-brand-name {
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.82rem;
}

.login-brand-tag {
  font-size: 0.7rem;
  color: var(--text-muted);
}

.login-nav-right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.login-link {
  font-size: 0.8rem;
  color: var(--text-muted);
  text-decoration: none;
}

.login-link span {
  color: var(--accent-soft);
}

/* Center layout */
.login-main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-card {
  width: 100%;
  max-width: 420px;
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

.login-pill {
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

.login-pill-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent-soft);
  box-shadow: 0 0 10px rgba(34, 197, 94, 0.9);
}

.login-title {
  font-size: 1.6rem;
  margin-bottom: 6px;
}

.login-subtitle {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 18px;
}

/* Form */
.login-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.login-label {
  font-size: 0.8rem;
  margin-bottom: 4px;
}

.login-input {
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

.login-input::placeholder {
  color: rgba(148, 163, 184, 0.7);
}

.login-input:focus {
  border-color: var(--accent-soft);
  box-shadow: 0 0 0 1px rgba(74, 222, 128, 0.4);
  background: rgba(15, 23, 42, 0.95);
}

.login-row-inline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2px;
}

.login-remember {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.78rem;
  color: var(--text-muted);
}

.login-remember input {
  width: 13px;
  height: 13px;
}

.login-forgot {
  font-size: 0.78rem;
  color: var(--accent-secondary);
  text-decoration: none;
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
  margin-top: 10px;
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
.login-status {
  margin-top: 8px;
  font-size: 0.78rem;
}

.login-status.error {
  color: #fecaca;
}

.login-status.success {
  color: #bbf7d0;
}

/* Helper text below form */
.login-helper {
  margin-top: 8px;
  font-size: 0.75rem;
  color: var(--text-muted);
}

/* Small link */
.login-helper a {
  color: var(--accent-soft);
  text-decoration: none;
}
`;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    const payload = {
      email,
      password,
      remember,
      loggedInAt: new Date().toISOString(),
    };

    try {
      setIsSubmitting(true);

      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Login failed");
      }

      setStatus({
        type: "success",
        message: "Logged in. Your AI study copilot is ready.",
      });

      // TODO: redirect to dashboard once you have that page
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setStatus({
        type: "error",
        message: "Invalid email or password. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{styles}</style>

      <main className="login-page">
        <header className="login-nav">
          <div className="login-nav-left">
            <div className="login-logo-orb" />
            <div className="login-brand">
              <span className="login-brand-name">CoopStudy</span>
              <span className="login-brand-tag">
                Just you and your AI study copilot
              </span>
            </div>
          </div>
          <div className="login-nav-right">
            <a href="/signup" className="login-link">
              New here? <span>Create an account</span>
            </a>
          </div>
        </header>

        <section className="login-main">
          <div className="login-card">
            <div className="login-pill">
              <span className="login-pill-dot" />
              Welcome back to CoopStudy
            </div>
            <h1 className="login-title">Log in</h1>
            <p className="login-subtitle">
              Pick up where you left off and let CoopStudy keep you on track with your courses.
            </p>

            <form className="login-form" onSubmit={handleSubmit}>
              <div>
                <label className="login-label" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  className="login-input"
                  type="email"
                  placeholder="you@handle.ca"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="login-label" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  className="login-input"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                />
              </div>

              <div className="login-row-inline">
                <label className="login-remember">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  Keep me signed in on this device
                </label>
                <a href="#" className="login-forgot">
                  Forgot password?
                </a>
              </div>

              <button
                className="btn btn-primary"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Signing in..." : "Log in"}
              </button>

              {status.message && (
                <div
                  className={`login-status ${
                    status.type === "error" ? "error" : "success"
                  }`}
                >
                  {status.message}
                </div>
              )}
            </form>

            <p className="login-helper">
              CoopStudy uses your own uploads to power your AI assistant.{" "}
              <a href="/">Back to home</a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

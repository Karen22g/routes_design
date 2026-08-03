import { useEffect, useRef } from 'react'
import { initApp } from './engine'

export default function App() {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true
    initApp()
  }, [])

  return (
    <div id="ef-shell">
      <header id="ef-topbar">
        <div id="ef-tb-logo">
          <span className="ef-tb-ef">ef</span>
          <span className="ef-tb-routing">Routing</span>
        </div>
        <div id="ef-tb-spacer" />
        <button className="ef-tb-icon-btn" title="Help">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </button>
        <button className="ef-tb-icon-btn" title="Notifications">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </button>
        <div id="ef-tb-avatar" title="Profile">K</div>
      </header>

      <div id="ef-row">
        <nav id="ef-sidebar">
          <div id="ef-sb-logomark">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#27A767" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 6h18M3 12h13M3 18h15" />
            </svg>
          </div>
          <div id="ef-sb-nav">
            <button className="ef-nav-btn" title="Dashboard">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
              </svg>
            </button>
            <button className="ef-nav-btn ef-nav-active" title="Routes & Loads">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 17l3-8 4 5 3-3 4 6" /><circle cx="20" cy="7" r="2" />
              </svg>
            </button>
            <button className="ef-nav-btn" title="Dispatch">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              </svg>
            </button>
            <button className="ef-nav-btn" title="Fleet">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3" />
                <rect x="9" y="11" width="14" height="10" rx="2" />
                <circle cx="12" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
              </svg>
            </button>
            <button className="ef-nav-btn" title="Analytics">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </svg>
            </button>
          </div>
          <div id="ef-sb-bottom">
            <div id="ef-sb-avatar" title="Profile">K</div>
          </div>
        </nav>
        <div id="app" />
      </div>
    </div>
  )
}

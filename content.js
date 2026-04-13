#carbon-switch-banner {
    position: fixed;
    bottom: -120px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2147483647;
    width: calc(100% - 32px);
    max-width: 720px;
    transition: bottom 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    box-sizing: border-box;
  }
  #carbon-switch-banner.csb-visible { bottom: 16px; }
  #csb-inner {
    background: #052e16;
    color: #fff;
    border-radius: 14px;
    padding: 14px 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    box-shadow: 0 8px 40px rgba(0,0,0,0.35);
    border: 1px solid rgba(34,197,94,0.3);
  }
  #csb-leaf { font-size: 1.6em; flex-shrink: 0; }
  #csb-text { flex: 1; min-width: 0; }
  #csb-main { font-size: 14px; line-height: 1.4; color: #fff; }
  #csb-main strong { color: #86efac; }
  #csb-sub { font-size: 12px; color: rgba(255,255,255,0.6); margin-top: 3px; }
  #csb-actions { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
  #csb-cta {
    display: inline-block;
    background: #22c55e;
    color: #fff !important;
    text-decoration: none !important;
    padding: 9px 18px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 700;
    white-space: nowrap;
    border: none;
    cursor: pointer;
  }
  #csb-cta:hover { background: #16a34a !important; }
  #csb-close {
    background: rgba(255,255,255,0.12);
    border: none;
    color: rgba(255,255,255,0.7);
    font-size: 14px;
    cursor: pointer;
    padding: 6px 8px;
    border-radius: 6px;
  }
  #csb-close:hover { background: rgba(255,255,255,0.22); color: #fff; }

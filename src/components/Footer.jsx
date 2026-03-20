// ── Footer Component ──
// ใช้ซ้ำได้ทุกหน้า ไม่ต้องเขียนซ้ำ

function Footer() {
  return (
    <footer>
      <div className="footer-logo">Test website Cafe</div>
      <div className="footer-tagline">Every sip tells a story</div>
      <div className="footer-socials">
        <a href="#" className="social-btn" title="Facebook">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
          </svg>
        </a>
        <a href="#" className="social-btn" title="Instagram">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
        </a>
        <a href="tel:0812345678" className="social-btn" title="โทร">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.95 13a19.79 19.79 0 01-3.07-8.67A2 2 0 012.88 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
        </a>
      </div>
      <div className="footer-copy">© 2025 Test website Cafe · All rights reserved</div>
    </footer>
  )
}

export default Footer

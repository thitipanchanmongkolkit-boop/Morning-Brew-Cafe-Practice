// ── HomePage Component ──
// รับ props: onNavigate (ฟังก์ชันเปลี่ยนหน้า)

import Footer from './Footer'

function HomePage({ onNavigate }) {
  return (
    <div className="page">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg"></div>

        <div className="hero-content">
          <p className="hero-eyebrow">☕ &nbsp; Crafted with love, served with warmth</p>
          <h1 className="hero-title">
            Test<br /><em>website</em>
          </h1>
          <p className="hero-sub">เริ่มต้นทุกวันด้วยกาแฟดีๆ และบรรยากาศอบอุ่น</p>

          {/* กดแล้วเปลี่ยนไปหน้า menu */}
          <button className="hero-cta" onClick={() => onNavigate('menu')}>
            ดูเมนูของเรา
            <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
            </svg>
          </button>
        </div>

        {/* ไอคอนกาแฟพร้อม animation ไอน้ำ */}
        <div className="steam-wrap">
          <div className="steam-cup">
            <div className="steam-line"></div>
            <div className="steam-line"></div>
            <div className="steam-line"></div>
            <svg className="cup-icon" viewBox="0 0 72 72" fill="none">
              <rect x="14" y="32" width="44" height="6" rx="3" fill="currentColor" opacity="0.7"/>
              <path d="M16 38 Q18 60 36 62 Q54 60 56 38 Z" fill="currentColor" opacity="0.5"/>
              <path d="M56 44 Q66 44 66 52 Q66 60 56 60" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.6"/>
            </svg>
          </div>
        </div>
      </section>

      {/* ── FEATURES STRIP ── */}
      <div className="features-strip">
        <div className="feature-item">
          <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
          </svg>
          เปิดทุกวัน 7:00 – 20:00
        </div>
        <div className="feature-item">
          <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          เมล็ดกาแฟคัดพิเศษ
        </div>
        <div className="feature-item">
          <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
          </svg>
          ใจกลางเมือง สะดวกสบาย
        </div>
        <div className="feature-item">
          <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
          </svg>
          บรรยากาศอบอุ่น ผ่อนคลาย
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default HomePage

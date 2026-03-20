// ── Navbar Component ──
// รับ props: currentPage (หน้าปัจจุบัน), onNavigate (ฟังก์ชันเปลี่ยนหน้า)

function Navbar({ currentPage, onNavigate }) {
  return (
    <nav>
      {/* โลโก้ร้าน — กดแล้วไปหน้า home */}
      <div className="nav-logo" onClick={() => onNavigate('home')}>
        <svg viewBox="0 0 28 28" fill="none" width="28" height="28">
          <path d="M5 20 Q6 10 14 10 Q22 10 23 20 Z" fill="none" stroke="#C68B4A" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M23 14 Q27 14 27 17 Q27 20 23 20" fill="none" stroke="#C68B4A" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="4" y1="22" x2="24" y2="22" stroke="#C68B4A" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M11 7 Q11 4 13 4 Q13 6.5 11 7" fill="none" stroke="#C68B4A" strokeWidth="1.2" strokeLinecap="round"/>
          <path d="M15 6 Q15 3 17 3 Q17 5.5 15 6" fill="none" stroke="#C68B4A" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
        Test website
      </div>

      {/* เมนูนำทาง */}
      <ul className="nav-links">
        <li>
          <a
            className={currentPage === 'home' ? 'active' : ''}
            onClick={() => onNavigate('home')}
          >
            Home
          </a>
        </li>
        <li>
          <a
            className={currentPage === 'menu' ? 'active' : ''}
            onClick={() => onNavigate('menu')}
          >
            Menu
          </a>
        </li>
        <li>
          <a
            className={currentPage === 'about' ? 'active' : ''}
            onClick={() => onNavigate('about')}
          >
            About
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

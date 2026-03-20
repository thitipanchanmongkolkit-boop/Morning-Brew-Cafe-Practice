// ── AboutPage Component ──

import Footer from './Footer'

function AboutPage() {
  function handleSubmit(e) {
    e.preventDefault()
    alert('✅ ส่งข้อความสำเร็จ! เราจะติดต่อกลับในเร็วๆ นี้ครับ')
    e.target.reset()
  }

  return (
    <div className="page">
      <div className="page-header">
        <p className="page-tag">✦ Our Story</p>
        <h1 className="page-title">About <em>Us</em></h1>
      </div>

      <div className="about-body">

        {/* เรื่องราวของร้าน */}
        <div className="story-block">
          <p className="section-eyebrow">Our Story</p>
          <h2 className="section-heading">เริ่มจาก<br /><em>ความรักในกาแฟ</em></h2>
          <p className="story-text">
            Test website Cafe เริ่มต้นจากความฝันเล็กๆ ของเราที่อยากสร้างพื้นที่อบอุ่น
            ให้ทุกคนได้พักผ่อนและเติมพลังงานด้วยกาแฟดีๆ เราคัดสรรเมล็ดกาแฟจากแหล่งผลิตชั้นดี
            และคั่วสดทุกสัปดาห์เพื่อให้ได้รสชาติที่ดีที่สุดในทุกแก้วครับ
          </p>
        </div>

        <div className="divider"></div>

        {/* ข้อมูลติดต่อ */}
        <p className="section-eyebrow" style={{ marginBottom: 16 }}>Contact & Location</p>
        <div className="info-cards">
          <div className="info-card">
            <div className="info-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div className="info-card-label">ที่อยู่</div>
            <div className="info-card-value">123 ถ.สุขุมวิท<br />กรุงเทพฯ 10110</div>
          </div>
          <div className="info-card">
            <div className="info-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.95 13a19.79 19.79 0 01-3.07-8.67A2 2 0 012.88 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </div>
            <div className="info-card-label">โทรศัพท์</div>
            <div className="info-card-value"><a href="tel:0812345678">081-234-5678</a></div>
          </div>
          <div className="info-card">
            <div className="info-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div className="info-card-label">เวลาเปิด</div>
            <div className="info-card-value">จ–ศ 7:00–20:00<br />ส–อา 8:00–21:00</div>
          </div>
          <div className="info-card">
            <div className="info-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div className="info-card-label">อีเมล</div>
            <div className="info-card-value"><a href="mailto:hello@testcafe.com">hello@testcafe.com</a></div>
          </div>
        </div>

        <div className="divider"></div>

        {/* ตารางเวลา */}
        <p className="section-eyebrow" style={{ marginBottom: 16 }}>Opening Hours</p>
        <table className="hours-table" style={{ marginBottom: 48 }}>
          <tbody>
            <tr><td>จันทร์ – ศุกร์</td><td>7:00 – 20:00</td></tr>
            <tr><td>เสาร์ – อาทิตย์</td><td>8:00 – 21:00</td></tr>
            <tr><td>วันหยุดนักขัตฤกษ์</td><td>9:00 – 18:00</td></tr>
          </tbody>
        </table>

        {/* ฟอร์มติดต่อ */}
        <h2 className="section-heading" style={{ marginBottom: 20 }}>
          จองโต๊ะ / <em>สอบถามจัดเลี้ยง</em>
        </h2>
        <div className="form-card">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">ชื่อ</label>
                <input className="form-input" type="text" placeholder="ชื่อของคุณ" required />
              </div>
              <div className="form-group">
                <label className="form-label">เบอร์โทร</label>
                <input className="form-input" type="tel" placeholder="08x-xxx-xxxx" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">ข้อความ</label>
              <textarea className="form-textarea" placeholder="บอกรายละเอียดได้เลยครับ..." required />
            </div>
            <button type="submit" className="form-submit">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
              ส่งข้อความ
            </button>
          </form>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default AboutPage

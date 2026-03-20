// ── MenuPage Component ──
// หน้าเมนู — มี State ของตะกร้าสินค้าอยู่ที่นี่

import { useState } from 'react'
import MenuCard from './MenuCard'
import Footer from './Footer'

// ── ข้อมูลเมนูทั้งหมด (แยกออกมาเป็น array ให้จัดการง่าย) ──
const MENU_DATA = [
  {
    category: 'Espresso & Coffee',
    items: [
      { name: 'Espresso',    desc: 'ช็อตเข้มข้น กลมกล่อม',       price: 50 },
      { name: 'Americano',   desc: 'เอสเปรสโซ่ผสมน้ำร้อน',        price: 65 },
      { name: 'Latte',       desc: 'เอสเปรสโซ่ + นมสด',           price: 75 },
      { name: 'Cappuccino',  desc: 'โฟมนมหนา หอมกลิ่นกาแฟ',       price: 75 },
      { name: 'Flat White',  desc: 'เข้มข้น เนื้อนมเนียน',         price: 80 },
      { name: 'Mocha',       desc: 'กาแฟ + ช็อกโกแลต',             price: 85 },
    ],
  },
  {
    category: 'Cold & Iced',
    items: [
      { name: 'Iced Latte',        desc: 'เย็นชื่นใจ นมสดเต็มๆ',       price: 80 },
      { name: 'Cold Brew',         desc: 'แช่เย็น 12 ชม. ไม่ขม',        price: 90 },
      { name: 'Iced Matcha Latte', desc: 'ชาเขียว + นมสด',              price: 90 },
      { name: 'Caramel Frappe',    desc: 'ปั่นเนียน หอมคาราเมล',        price: 95 },
    ],
  },
  {
    category: 'Bakery & Snacks',
    items: [
      { name: 'Butter Croissant',   desc: 'หอมเนย กรอบนอกนุ่มใน',   price: 65 },
      { name: 'Banana Bread',       desc: 'กล้วยหอมคลาสสิก',         price: 60 },
      { name: 'Chocolate Brownie',  desc: 'เข้มข้น ชุ่มฉ่ำ',          price: 65 },
      { name: 'Cheese Cake Slice',  desc: 'เนื้อนุ่มละมุน',            price: 85 },
    ],
  },
]

function MenuPage() {
  // ── State: ตะกร้าสินค้า ──
  const [cart, setCart] = useState([])

  // ── State: Modal สั่งซื้อ ──
  const [orderModal, setOrderModal] = useState(null) // { name, price, qty }

  // ── State: Modal ตะกร้า ──
  const [showCheckout, setShowCheckout] = useState(false)

  // ── เปิด Modal สั่งซื้อ ──
  function handleOpenOrder(name, price) {
    setOrderModal({ name, price, qty: 1, basePrice: price })
  }

  // ── เพิ่ม/ลดจำนวน ──
  function handleQty(num) {
    setOrderModal(prev => {
      const qty = Math.max(1, prev.qty + num)
      return { ...prev, qty, price: prev.basePrice * qty }
    })
  }

  // ── เพิ่มลงตะกร้า ──
  function handleAddToCart() {
    const { name, basePrice, qty } = orderModal
    setCart(prev => {
      const existing = prev.findIndex(i => i.name === name)
      if (existing > -1) {
        // มีของชิ้นนี้แล้ว → เพิ่มจำนวน
        const updated = [...prev]
        updated[existing].qty += qty
        updated[existing].total = updated[existing].qty * basePrice
        return updated
      }
      // ไม่มี → เพิ่มใหม่
      return [...prev, { name, basePrice, qty, total: basePrice * qty }]
    })
    setOrderModal(null)
  }

  // ── ลบของออกจากตะกร้า ──
  function handleRemove(index) {
    setCart(prev => prev.filter((_, i) => i !== index))
  }

  // ── ยอดรวม ──
  const grandTotal = cart.reduce((sum, item) => sum + item.total, 0)
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0)

  return (
    <div className="page">

      {/* Header */}
      <div className="page-header">
        <p className="page-tag">☕ Our Selection</p>
        <h1 className="page-title">Our <em>Menu</em></h1>
      </div>

      {/* รายการเมนู — วน Loop ตาม MENU_DATA */}
      <div className="menu-body">
        {MENU_DATA.map(section => (
          <div className="menu-section" key={section.category}>
            <div className="menu-section-label">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
              </svg>
              <span className="menu-section-name">{section.category}</span>
              <div className="menu-section-line"></div>
            </div>

            <div className="menu-grid">
              {/* วน Loop แสดง MenuCard แต่ละรายการ */}
              {section.items.map(item => (
                <MenuCard
                  key={item.name}
                  name={item.name}
                  desc={item.desc}
                  price={item.price}
                  onOrder={handleOpenOrder}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── ไอคอนตะกร้า (แสดงเมื่อมีของ) ── */}
      {totalItems > 0 && (
        <div className="cart-icon-wrap" onClick={() => setShowCheckout(true)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          <span className="cart-badge">{totalItems}</span>
        </div>
      )}

      {/* ── Modal สั่งซื้อ ── */}
      {orderModal && (
        <div className="modal-overlay" onClick={() => setOrderModal(null)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <div className="modal-title">{orderModal.name}</div>
            <div className="modal-price">฿{orderModal.price}</div>

            <div className="qty-row">
              <button className="qty-btn" onClick={() => handleQty(-1)}>−</button>
              <div className="qty-display">{orderModal.qty}</div>
              <button className="qty-btn" onClick={() => handleQty(1)}>+</button>
            </div>

            <div className="modal-actions">
              <button className="btn-cancel" onClick={() => setOrderModal(null)}>ยกเลิก</button>
              <button className="btn-add" onClick={handleAddToCart}>เพิ่มลงตะกร้า</button>
            </div>
          </div>
        </div>
      )}

      {/* ── Modal ตะกร้า (Checkout) ── */}
      {showCheckout && (
        <div className="modal-overlay" onClick={() => setShowCheckout(false)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <div className="modal-title" style={{ marginBottom: 20 }}>🛍 ตะกร้าของคุณ</div>

            {cart.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '20px', color: '#999' }}>ตะกร้าว่างเปล่า...</div>
            ) : (
              cart.map((item, index) => (
                <div className="order-item" key={index}>
                  <div>
                    <strong>{item.name}</strong><br />
                    <small style={{ color: '#888' }}>฿{item.basePrice} x {item.qty}</small>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span>฿{item.total}</span>
                    <button
                      onClick={() => handleRemove(index)}
                      style={{ background: 'none', border: 'none', color: '#ff4444', cursor: 'pointer', fontSize: '1.2rem' }}
                    >×</button>
                  </div>
                </div>
              ))
            )}

            <div className="grand-total-row">
              <span>รวมทั้งหมด</span>
              <span>฿{grandTotal}</span>
            </div>

            <button
              className="btn-checkout"
              onClick={() => {
                if (cart.length === 0) return alert('กรุณาเลือกสินค้าก่อนสั่งซื้อครับ')
                alert(`🎉 สั่งซื้อสำเร็จ!\nยอดชำระทั้งหมด: ฿${grandTotal}`)
                setCart([])
                setShowCheckout(false)
              }}
            >
              สั่งซื้อเลย ฿{grandTotal}
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default MenuPage

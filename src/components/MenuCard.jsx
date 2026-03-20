// ── MenuCard Component ──
// รับ props: name (ชื่อเมนู), desc (คำอธิบาย), price (ราคา), onOrder (ฟังก์ชันสั่งซื้อ)
// Component นี้แสดงการ์ดเมนู 1 รายการ สามารถนำไปใช้ซ้ำได้เรื่อยๆ

function MenuCard({ name, desc, price, onOrder }) {
  return (
    <div className="menu-card" onClick={() => onOrder(name, price)}>
      <div className="menu-item-info">
        <div className="menu-item-name">{name}</div>
        <div className="menu-item-desc">{desc}</div>
      </div>
      <div className="menu-item-price">฿{price}</div>
    </div>
  )
}

export default MenuCard

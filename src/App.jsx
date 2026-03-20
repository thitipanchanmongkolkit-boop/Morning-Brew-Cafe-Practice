// ── App.jsx ──
// ไฟล์หลักที่ควบคุมทุกอย่าง
// จัดการว่าตอนนี้อยู่หน้าไหน แล้ว render Component ที่ถูกต้อง

import { useState } from 'react'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import MenuPage from './components/MenuPage'
import AboutPage from './components/AboutPage'

function App() {
  // ── State: หน้าปัจจุบัน ──
  // ค่าเป็นได้ 3 อย่าง: 'home' | 'menu' | 'about'
  const [currentPage, setCurrentPage] = useState('home')

  // ── ฟังก์ชันเปลี่ยนหน้า ──
  // ส่งไปให้ Navbar และ Component ต่างๆ ใช้
  function navigate(page) {
    setCurrentPage(page)
    window.scrollTo(0, 0) // scroll ขึ้นบนทุกครั้งที่เปลี่ยนหน้า
  }

  // ── เลือก Component ตามหน้าปัจจุบัน ──
  function renderPage() {
    if (currentPage === 'home')  return <HomePage onNavigate={navigate} />
    if (currentPage === 'menu')  return <MenuPage />
    if (currentPage === 'about') return <AboutPage />
  }

  return (
    <>
      {/* Navbar อยู่ทุกหน้า */}
      <Navbar currentPage={currentPage} onNavigate={navigate} />

      {/* แสดง Component ตามหน้าที่เลือก */}
      {renderPage()}
    </>
  )
}

export default App

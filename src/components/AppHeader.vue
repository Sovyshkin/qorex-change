<template>
  <header class="header" v-motion-fade-in>
    <div class="logo" v-motion-slide-visible-left>
      <img :src="logoSvg" alt="Logo">
    </div>
    
    <!-- Desktop Navigation -->
    <nav class="list-group desktop-nav">
      <li
        v-for="item in navigation" 
        :key="item.name" 
        class="item-group"
        @click="scrollToSection(item.href)"
        v-motion-slide-visible-top
      >
        {{ item.name }}
      </li>
    </nav>
    
    <!-- Desktop Login Button -->
    <button class="btn desktop-btn" v-motion-slide-visible-right>
      Войти
    </button>
    
    <!-- Mobile Menu Button -->
    <button 
      class="mobile-menu-btn"
      @click="toggleMobileMenu"
    >
      <span class="hamburger-line" :class="{ 'active': isMobileMenuOpen }"></span>
      <span class="hamburger-line" :class="{ 'active': isMobileMenuOpen }"></span>
      <span class="hamburger-line" :class="{ 'active': isMobileMenuOpen }"></span>
    </button>
    
    <!-- Mobile Navigation -->
    <transition name="mobile-menu">
      <div v-if="isMobileMenuOpen" class="mobile-menu">
        <nav class="mobile-nav">
          <li
            v-for="item in navigation" 
            :key="item.name" 
            class="mobile-item"
            @click="scrollToSection(item.href)"
          >
            {{ item.name }}
          </li>
        </nav>
        <button 
          class="btn mobile-btn" 
          @click="closeMobileMenu"
        >
          Войти
        </button>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import logoSvg from '../assets/logo.svg'

const isMobileMenuOpen = ref(false)

const navigation = [
  { name: 'О сервисе', href: 'service' },
  { name: 'Правила обмена', href: 'change' },
  { name: 'FAQ', href: 'faq' },
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Функция скролла к секции
const scrollToSection = (href: string) => {
  const element = document.getElementById(href)
  if (element) {
    const headerHeight = 80 // Высота фиксированного хедера
    const elementPosition = element.offsetTop - headerHeight
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
  }
  closeMobileMenu() // Закрываем мобильное меню
}

// Закрытие меню при клике вне его
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  const menu = document.querySelector('.mobile-menu')
  const button = document.querySelector('.mobile-menu-btn')
  
  if (isMobileMenuOpen.value && menu && button) {
    if (!menu.contains(target) && !button.contains(target)) {
      closeMobileMenu()
    }
  }
}

// Закрытие меню при нажатии Escape
const handleEscapeKey = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isMobileMenuOpen.value) {
    closeMobileMenu()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleEscapeKey)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleEscapeKey)
})
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
}

.logo {
  z-index: 20;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

/* Desktop Navigation */
.desktop-nav {
  display: flex;
  align-items: center;
  gap: 30px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.desktop-btn {
  display: block;
}

.item-group {
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  opacity: 1 !important;
  transform: translateY(0) !important;
  display: block !important;
  visibility: visible !important;
}

.item-group::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(190, 248, 13, 0.1), transparent);
  transition: left 0.5s ease;
}

.item-group:hover::before {
  left: 100%;
}

.item-group:hover {
  background-color: rgba(190, 248, 13, 0.1);
  transform: translateY(-2px);
  color: #BEF80D;
  cursor: pointer;
}

/* Buttons */
.btn {
  border: 1px solid #BEF80D;
  padding: 12px 28px;
  border-radius: 100px;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(190, 248, 13, 0.3), transparent);
  transition: left 0.6s ease;
}

.btn:hover::before {
  left: 100%;
}

.btn:hover {
  background-color: #BEF80D;
  color: #000;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(190, 248, 13, 0.3);
}

.btn:active {
  transform: translateY(0);
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background: rgba(190, 248, 13, 0.1);
  border: 2px solid #BEF80D;
  border-radius: 8px;
  cursor: pointer;
  z-index: 21;
  transition: all 0.3s ease;
  position: relative;
  gap: 4px;
  opacity: 1 !important;
  visibility: visible !important;
  transform: none !important;
}

.mobile-menu-btn:hover {
  transform: scale(1.05);
  background: rgba(190, 248, 13, 0.2);
  border-color: #BEF80D;
  box-shadow: 0 4px 15px rgba(190, 248, 13, 0.3);
}

.mobile-menu-btn:active {
  transform: scale(0.95);
}

.hamburger-line {
  width: 24px;
  height: 2px;
  background-color: #BEF80D;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border-radius: 2px;
  transform-origin: center;
}

.hamburger-line.active:nth-child(1) {
  transform: rotate(45deg);
  background-color: #BEF80D;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: center;
  transform: translate(-50%, -50%) rotate(45deg);
}

.hamburger-line.active:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.hamburger-line.active:nth-child(3) {
  transform: rotate(-45deg);
  background-color: #BEF80D;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: center;
  transform: translate(-50%, -50%) rotate(-45deg);
}

/* Mobile Menu */
.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(10, 16, 11, 0.98);
  backdrop-filter: blur(20px);
  padding: 25px 20px 30px;
  border-radius: 0 0 20px 20px;
  z-index: 19;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(190, 248, 13, 0.1);
  border-top: none;
}

.mobile-nav {
  list-style: none;
  padding: 0;
  margin: 0 0 25px 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.mobile-item {
  padding: 16px 20px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  background: transparent;
  border: 1px solid transparent;
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateX(0) !important;
  display: block !important;
}

.mobile-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(190, 248, 13, 0.1), transparent);
  transition: left 0.5s ease;
  z-index: -1;
}

.mobile-item:hover::before {
  left: 100%;
}

.mobile-item:hover {
  color: #BEF80D;
  background: rgba(190, 248, 13, 0.05);
  border-color: rgba(190, 248, 13, 0.2);
  transform: translateX(5px) scale(1.02);
}

.mobile-item:active {
  transform: translateX(5px) scale(0.98);
}

.mobile-btn {
  width: 100%;
  padding: 16px 20px;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
  border-radius: 12px;
}

/* Mobile Menu Transitions */
.mobile-menu-enter-active {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.mobile-menu-leave-active {
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.mobile-menu-enter-from {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
}

.mobile-menu-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.mobile-menu-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-15px) scale(0.98);
}

/* Дополнительные эффекты для мобильного меню */
.mobile-menu::before {
  content: '';
  position: absolute;
  top: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 4px;
  background: #BEF80D;
  border-radius: 2px;
  opacity: 0.7;
}

/* Убираем все проблемные анимации */
.mobile-btn {
  opacity: 1 !important;
  visibility: visible !important;
  transform: none !important;
  display: block !important;
}

/* Responsive Design - Четкие точки перелома */
.desktop-nav,
.desktop-btn {
  display: flex;
}

.mobile-menu-btn {
  display: none;
}

/* Десктоп - от 769px и выше */
@media (min-width: 769px) {
  .desktop-nav,
  .desktop-btn {
    display: flex !important;
  }
  
  .mobile-menu-btn {
    display: none !important;
  }
}

/* Планшет/Мобильный - 768px и ниже */
@media (max-width: 768px) {
  .header {
    padding: 15px 20px;
  }
  
  .desktop-nav,
  .desktop-btn {
    display: none !important;
  }
  
  .mobile-menu-btn {
    display: flex !important;
    visibility: visible !important;
    opacity: 1 !important;
  }
  
  .logo img {
    height: 35px;
  }
}

@media (max-width: 1024px) and (min-width: 769px) {
  .header {
    padding: 18px 30px;
  }
}

@media (max-width: 480px) {
  .header {
    padding: 12px 15px;
  }
  
  .logo img {
    height: 32px;
  }
  
  .mobile-menu-btn {
    width: 42px;
    height: 42px;
    display: flex !important;
    visibility: visible !important;
    opacity: 1 !important;
  }
  
  .hamburger-line {
    width: 22px;
  }
  
  .desktop-nav,
  .desktop-btn {
    display: none !important;
    visibility: hidden !important;
  }
  
  .mobile-menu {
    padding: 20px 15px 25px;
    border-radius: 0 0 16px 16px;
  }
  
  .mobile-item {
    font-size: 15px;
    padding: 14px 16px;
    border-radius: 10px;
  }
  
  .mobile-btn {
    padding: 14px 18px;
    font-size: 15px;
    border-radius: 10px;
  }
}

/* Дополнительные стили для очень маленьких экранов */
@media (max-width: 360px) {
  .header {
    padding: 10px 12px;
  }
  
  .logo img {
    height: 28px;
  }
  
  .mobile-menu-btn {
    width: 40px;
    height: 40px;
    display: flex !important;
    visibility: visible !important;
    opacity: 1 !important;
    background: #BEF80D;
    border: 2px solid #BEF80D;
  }
  
  .hamburger-line {
    background-color: #000;
    width: 20px;
  }
  
  .hamburger-line.active:nth-child(1) {
    background-color: #000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  
  .hamburger-line.active:nth-child(3) {
    background-color: #000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  
  .desktop-nav,
  .desktop-btn {
    display: none !important;
    visibility: hidden !important;
  }
  
  .mobile-menu {
    padding: 15px 12px 20px;
  }
  
  .mobile-item {
    font-size: 14px;
    padding: 12px 14px;
  }
  
  .mobile-btn {
    padding: 12px 16px;
    font-size: 14px;
  }
}

@media (min-width: 769px) {
  .mobile-menu {
    display: none !important;
  }
}

/* Desktop hover animations */
@media (min-width: 769px) {
  .logo img {
    transition: all 0.3s ease;
  }
  
  .logo:hover img {
    filter: drop-shadow(0 0 10px rgba(190, 248, 13, 0.5));
  }
}
</style>
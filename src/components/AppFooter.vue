<script setup lang="ts">
import { ref } from 'vue'
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
</script>

<template>
  <footer class="footer" v-motion-fade-visible>
    <div class="logo" v-motion-slide-visible-left>
      <img :src="logoSvg" alt="Logo">
    </div>
    
    <!-- Desktop Navigation -->
    <nav class="desktop-nav">
      <li
        v-for="(item, index) in navigation" 
        :key="item.name" 
        class="item-group"
        v-motion-slide-visible-top
        :delay="(index + 1) * 150"
      >
        {{ item.name }}
      </li>
    </nav>
    
    <!-- Telegram Contact -->
    <div class="telegram-contact desktop-contact" v-motion-slide-visible-right>
      <div class="telegram-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-.38.24-1.07.7-.96.64-1.99 1.27-2.17 1.35-.63.3-1.22.32-1.78.13-.24-.08-.43-.15-.59-.2-.2-.06-.43-.13-.37-.27.06-.14.27-.28.64-.46l2.37-.93c1.11-.44 2.25-.94 2.25-.94s.8-.26 1.3.16c.5.42.42 1.19.42 1.19z" fill="currentColor"/>
        </svg>
      </div>
      <span class="telegram-username">@qorex_support</span>
    </div>
    
    <!-- Mobile Menu Button -->
    <button 
      class="mobile-menu-btn md:hidden"
      @click="toggleMobileMenu"
      v-motion-slide-visible-right
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
            v-for="(item, index) in navigation" 
            :key="item.name" 
            class="mobile-item"
            v-motion-slide-visible-left
            :delay="index * 100"
          >
            {{ item.name }}
          </li>
        </nav>
        <div class="telegram-contact mobile-contact" v-motion-slide-visible-left :delay="300">
          <div class="telegram-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-.38.24-1.07.7-.96.64-1.99 1.27-2.17 1.35-.63.3-1.22.32-1.78.13-.24-.08-.43-.15-.59-.2-.2-.06-.43-.13-.37-.27.06-.14.27-.28.64-.46l2.37-.93c1.11-.44 2.25-.94 2.25-.94s.8-.26 1.3.16c.5.42.42 1.19.42 1.19z" fill="currentColor"/>
            </svg>
          </div>
          <span class="telegram-username">@qorex_support</span>
        </div>
      </div>
    </transition>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  position: relative;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(190, 248, 13, 0.1);
  margin-top: 60px;
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
  opacity: 1;
  transform: translateY(0);
}

.item-group {
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(-20px);
  animation: slideInTop 0.6s ease forwards;
}

@keyframes slideInTop {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.item-group:nth-child(1) {
  animation-delay: 0.2s;
}

.item-group:nth-child(2) {
  animation-delay: 0.35s;
}

.item-group:nth-child(3) {
  animation-delay: 0.5s;
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
}

/* Telegram Contact */
.telegram-contact {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  border-radius: 100px;
  background: transparent;
  border: 1px solid #BEF80D;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-decoration: none;
}

.telegram-contact::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(190, 248, 13, 0.3), transparent);
  transition: left 0.6s ease;
}

.telegram-contact:hover::before {
  left: 100%;
}

.telegram-contact:hover {
  background-color: #BEF80D;
  color: #000;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(190, 248, 13, 0.3);
}

.telegram-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  color: #BEF80D;
}

.telegram-contact:hover .telegram-icon {
  color: #000;
  transform: scale(1.1);
}

.telegram-username {
  font-weight: 600;
  font-size: 16px;
  color: #BEF80D;
  transition: color 0.3s ease;
}

.telegram-contact:hover .telegram-username {
  color: #000;
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 21;
  transition: transform 0.3s ease;
}

.mobile-menu-btn:hover {
  transform: scale(1.1);
}

.hamburger-line {
  width: 25px;
  height: 3px;
  background-color: #fff;
  margin: 3px 0;
  transition: all 0.3s ease;
  border-radius: 2px;
}

.hamburger-line.active:nth-child(1) {
  transform: rotate(45deg) translate(9px, 9px);
  background-color: #BEF80D;
}

.hamburger-line.active:nth-child(2) {
  opacity: 0;
}

.hamburger-line.active:nth-child(3) {
  transform: rotate(-45deg) translate(9px, -9px);
  background-color: #BEF80D;
}

/* Mobile Menu */
.mobile-menu {
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  padding: 30px 40px;
  border-radius: 20px 20px 0 0;
  z-index: 19;
}

.mobile-nav {
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
}

.mobile-item {
  padding: 15px 0;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-item:hover {
  color: #BEF80D;
  transform: translateX(10px);
}

.mobile-contact {
  width: 100%;
  justify-content: center;
}

/* Mobile Menu Transitions */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.mobile-menu-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .footer {
    padding: 18px 30px;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 15px 20px;
  }
  
  .desktop-nav,
  .desktop-contact {
    display: none;
  }
  
  .mobile-menu-btn {
    display: flex;
  }
  
  .logo img {
    height: 35px;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 12px 15px;
  }
  
  .logo img {
    height: 30px;
  }
  
  .mobile-menu-btn {
    width: 40px;
    height: 40px;
  }
  
  .mobile-menu {
    bottom: 60px;
    padding: 15px;
  }
  
  .mobile-item {
    font-size: 16px;
    padding: 12px 0;
  }
  
  .telegram-username {
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
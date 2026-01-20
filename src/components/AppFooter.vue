<script setup lang="ts">
// ref больше не нужен
import logoSvg from '../assets/logo.svg'

// Убрано: больше не нужно состояние для мобильного меню

const desktopNavigation = [
  { name: 'О сервисе', href: '/', type: 'scroll', target: 'service' },
  { name: 'Правила обмена', href: '/exchange-rules', type: 'route' },
  { name: 'Пользовательское соглашение', href: '/user-agreement', type: 'route' },
  { name: 'Политика конфиденциальности', href: '/privacy-policy', type: 'route' },
  { name: 'FAQ', href: '/', type: 'scroll', target: 'faq' },
]

const mobileNavigation = [
  { name: 'О сервисе', href: '/', type: 'scroll', target: 'service' },
  { name: 'Пользовательское соглашение', href: '/user-agreement', type: 'route' },
  { name: 'Политика конфиденциальности', href: '/privacy-policy', type: 'route' },
  { name: 'Правила обмена', href: '/exchange-rules', type: 'route' },
  { name: 'FAQ', href: '/', type: 'scroll', target: 'faq' },
]

const handleNavigation = (item: any) => {
  if (item.type === 'route') {
    window.location.href = item.href
  } else if (item.type === 'scroll') {
    if (window.location.pathname !== '/') {
      window.location.href = '/#' + item.target
    } else {
      const element = document.getElementById(item.target)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}

// Мобильное меню теперь всегда видимо
</script>

<template>
  <footer class="footer" v-motion-fade-visible>
    <!-- Main Footer Content -->
    <div class="footer-main">
      <div class="logo" v-motion-slide-visible-left>
        <img :src="logoSvg" alt="Logo">
      </div>
      
      <!-- Desktop Navigation -->
      <nav class="desktop-nav">
        <li
          v-for="item in desktopNavigation" 
          :key="item.name" 
          class="item-group"
          v-motion-slide-visible-top
          :delay="50"
          @click="handleNavigation(item)"
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
    </div>
    
    <!-- Mobile Navigation (Always Visible) -->
    <nav class="mobile-nav">
      <li
        v-for="(item, index) in mobileNavigation" 
        :key="item.name" 
        class="mobile-item"
        v-motion-slide-visible-up
        :delay="index * 50"
        @click="handleNavigation(item)"
      >
        {{ item.name }}
      </li>
    </nav>
    
    <!-- Mobile Telegram Contact -->
    <div class="telegram-contact mobile-contact" v-motion-slide-visible-right>
      <div class="telegram-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-.38.24-1.07.7-.96.64-1.99 1.27-2.17 1.35-.63.3-1.22.32-1.78.13-.24-.08-.43-.15-.59-.2-.2-.06-.43-.13-.37-.27.06-.14.27-.28.64-.46l2.37-.93c1.11-.44 2.25-.94 2.25-.94s.8-.26 1.3.16c.5.42.42 1.19.42 1.19z" fill="currentColor"/>
        </svg>
      </div>
      <span class="telegram-username">@qorex_support</span>
    </div>

    <!-- Desktop Legal Information (Bottom) -->
    <div class="legal-info desktop-legal" v-motion-slide-visible-up :delay="200">
      <div class="legal-item">
        <span class="legal-label">ИНН:</span>
        <span class="legal-value">501806456002</span>
      </div>
      <div class="legal-item">
        <span class="legal-label">ИП:</span>
        <span class="legal-value">Баскакова Ирина Анатольевна</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px 40px;
  position: relative;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(190, 248, 13, 0.1);
  margin-top: 60px;
}

.footer-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
  opacity: 1;
  transform: translateY(0);
}

/* Анимации через v-motion работают корректно */

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

/* Mobile Navigation - Always Visible */
.mobile-nav {
  display: none;
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile-contact {
  display: none;
}

/* Legal Information */
.legal-info {
  display: none;
}

.desktop-legal {
  display: block;
  text-align: center;
  opacity: 0.7;
  padding-top: 10px;
  border-top: 1px solid rgba(190, 248, 13, 0.1);
}

.legal-item {
  display: inline-flex;
  gap: 4px;
  margin: 0 15px 2px 0;
  font-size: 10px;
  color: #666;
  align-items: center;
}

.legal-label {
  font-weight: 400;
  color: #888;
  opacity: 0.8;
}

.legal-value {
  line-height: 1.2;
  color: #999;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .footer {
    padding: 18px 30px;
  }
}

@media (max-width: 768px) {
  .footer {
    gap: 25px;
    padding: 30px 20px;
    align-items: center;
    text-align: center;
  }

  .footer-main {
    flex-direction: column;
    gap: 25px;
  }
  
  .desktop-nav,
  .desktop-contact,
  .desktop-legal {
    display: none;
  }
  
  .mobile-nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .mobile-item {
    padding: 8px 16px;
    border-radius: 8px;
    transition: all 0.3s ease;
    cursor: pointer;
    font-size: 14px;
    border: 1px solid rgba(190, 248, 13, 0.3);
  }
  
  .mobile-item:hover {
    background-color: rgba(190, 248, 13, 0.1);
    color: #BEF80D;
    transform: translateY(-2px);
  }
  
  .mobile-contact {
    display: flex;
    justify-content: center;
    padding: 10px 20px;
  }

  .legal-info {
    display: block;
    text-align: center;
    padding: 10px 20px 0;
    border-top: 1px solid rgba(190, 248, 13, 0.1);
    opacity: 0.6;
  }

  .legal-info .legal-item {
    justify-content: center;
    font-size: 9px;
    margin-bottom: 1px;
  }
  
  .logo img {
    height: 35px;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 25px 20px;
    gap: 20px;
  }
  
  .logo img {
    height: 30px;
  }
  
  .mobile-nav {
    gap: 10px;
  }
  
  .mobile-item {
    font-size: 12px;
    padding: 6px 12px;
  }
  
  .mobile-contact {
    padding: 8px 16px;
  }

  .legal-info {
    display: block;
    padding: 8px 20px 0;
    opacity: 0.5;
  }

  .legal-item {
    font-size: 8px;
    margin-bottom: 0;
  }
  
  .telegram-username {
    font-size: 12px;
  }
  
  .telegram-icon svg {
    width: 16px;
    height: 16px;
  }
}

@media (min-width: 769px) {
  .mobile-nav,
  .mobile-contact {
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
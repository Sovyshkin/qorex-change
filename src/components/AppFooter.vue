<script setup lang="ts">
// ref больше не нужен
import logoSvg from '../assets/logo.svg'

// Убрано: больше не нужно состояние для мобильного меню

const desktopNavigation = [
  { name: 'О сервисе', href: '/', type: 'scroll', target: 'service' },
  { name: 'Правила обмена', href: '/exchange-rules', type: 'route' },
  { name: 'Публичная оферта', href: '/public-offer', type: 'route' },
  { name: 'Пользовательское соглашение', href: '/user-agreement', type: 'route' },
  { name: 'Политика конфиденциальности', href: '/privacy-policy', type: 'route' },
  { name: 'FAQ', href: '/', type: 'scroll', target: 'faq' },
]

const mobileNavigation = [
  { name: 'О сервисе', href: '/', type: 'scroll', target: 'service' },
  { name: 'Публичная оферта', href: '/public-offer', type: 'route' },
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
      
      <!-- Contacts -->
      <div class="contacts-wrapper desktop-contact" v-motion-slide-visible-right>
        <a href="tel:+78985578149" class="contact-item phone-contact">
          <div class="contact-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" fill="currentColor"/>
            </svg>
          </div>
          <span class="contact-text">+7 985 578-14-96</span>
        </a>
        <a href="mailto:support@qorexchange.com" class="contact-item email-contact">
          <div class="contact-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
            </svg>
          </div>
          <span class="contact-text">support@qorexchange.com</span>
        </a>
        <div class="contact-item telegram-contact">
          <div class="contact-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-.38.24-1.07.7-.96.64-1.99 1.27-2.17 1.35-.63.3-1.22.32-1.78.13-.24-.08-.43-.15-.59-.2-.2-.06-.43-.13-.37-.27.06-.14.27-.28.64-.46l2.37-.93c1.11-.44 2.25-.94 2.25-.94s.8-.26 1.3.16c.5.42.42 1.19.42 1.19z" fill="currentColor"/>
            </svg>
          </div>
          <span class="contact-text">@qorex_support</span>
        </div>
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
    
    <!-- Mobile Contacts -->
    <div class="contacts-wrapper mobile-contact" v-motion-slide-visible-right>
      <a href="tel:+78985578149" class="contact-item phone-contact mobile-phone">
        <div class="contact-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" fill="currentColor"/>
          </svg>
        </div>
        <span class="contact-text">+7 985 578-14-96</span>
      </a>
      <a href="mailto:support@qorexchange.com" class="contact-item email-contact mobile-email">
        <div class="contact-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
          </svg>
        </div>
        <span class="contact-text">support@qorexchange.com</span>
      </a>
      <div class="contact-item telegram-contact mobile-telegram">
        <div class="contact-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-.38.24-1.07.7-.96.64-1.99 1.27-2.17 1.35-.63.3-1.22.32-1.78.13-.24-.08-.43-.15-.59-.2-.2-.06-.43-.13-.37-.27.06-.14.27-.28.64-.46l2.37-.93c1.11-.44 2.25-.94 2.25-.94s.8-.26 1.3.16c.5.42.42 1.19.42 1.19z" fill="currentColor"/>
          </svg>
        </div>
        <span class="contact-text">@qorex_support</span>
      </div>
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
      <div class="legal-item">
        <span class="legal-label">ОГРН:</span>
        <span class="legal-value">326508100012554</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px 60px;
  position: relative;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(190, 248, 13, 0.1);
  margin-top: 60px;
  max-width: 100%;
  box-sizing: border-box;
}

.footer-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
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

/* Contacts Wrapper */
.contacts-wrapper {
  display: flex;
  align-items: center;
  gap: 15px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 18px;
  border-radius: 100px;
  background: transparent;
  border: 1px solid rgba(190, 248, 13, 0.4);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  text-decoration: none;
}

.contact-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(190, 248, 13, 0.2), transparent);
  transition: left 0.5s ease;
}

.contact-item:hover::before {
  left: 100%;
}

.contact-item:hover {
  background: linear-gradient(135deg, rgba(190, 248, 13, 0.15), rgba(190, 248, 13, 0.05));
  border-color: #BEF80D;
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(190, 248, 13, 0.2);
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  color: #BEF80D;
}

.contact-item:hover .contact-icon {
  transform: scale(1.15) rotate(5deg);
  filter: drop-shadow(0 0 8px rgba(190, 248, 13, 0.6));
}

.contact-text {
  font-weight: 500;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
  white-space: nowrap;
}

.contact-item:hover .contact-text {
  color: #BEF80D;
  letter-spacing: 0.3px;
}

.email-contact {
  border-color: rgba(100, 180, 255, 0.4);
}

.email-contact .contact-icon {
  color: #64B4FF;
}

.email-contact:hover {
  background: linear-gradient(135deg, rgba(100, 180, 255, 0.15), rgba(100, 180, 255, 0.05));
  border-color: #64B4FF;
  box-shadow: 0 10px 30px rgba(100, 180, 255, 0.2);
}

.email-contact:hover .contact-text {
  color: #64B4FF;
}

.email-contact:hover .contact-icon {
  filter: drop-shadow(0 0 8px rgba(100, 180, 255, 0.6));
}

/* Phone Contact */
.phone-contact {
  border-color: rgba(147, 51, 234, 0.4);
}

.phone-contact .contact-icon {
  color: #9333EA;
}

.phone-contact:hover {
  background: linear-gradient(135deg, rgba(147, 51, 234, 0.15), rgba(147, 51, 234, 0.05));
  border-color: #9333EA;
  box-shadow: 0 10px 30px rgba(147, 51, 234, 0.2);
}

.phone-contact:hover .contact-text {
  color: #9333EA;
}

.phone-contact:hover .contact-icon {
  filter: drop-shadow(0 0 8px rgba(147, 51, 234, 0.6));
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
  max-width: 1800px;
  margin: 0 auto;
  width: 100%;
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
@media (max-width: 1700px) and (min-width: 1401px) {
  .footer {
    padding: 20px 50px;
  }

  .desktop-nav {
    gap: 25px;
  }

  .item-group {
    padding: 8px 14px;
    font-size: 15px;
  }

  .contacts-wrapper {
    gap: 14px;
  }

  .contact-item {
    padding: 10px 16px;
  }

  .contact-text {
    font-size: 14px;
  }

  .logo img {
    height: 42px;
  }
}

@media (max-width: 1400px) and (min-width: 1201px) {
  .footer {
    padding: 18px 40px;
  }

  .desktop-nav {
    gap: 22px;
    flex-wrap: nowrap;
  }

  .item-group {
    padding: 7px 13px;
    font-size: 14px;
  }

  .contacts-wrapper {
    gap: 13px;
  }

  .contact-item {
    padding: 9px 15px;
  }

  .contact-text {
    font-size: 13px;
  }

  .logo img {
    height: 40px;
  }

  .legal-item {
    font-size: 9.5px;
    margin: 0 13px 2px 0;
  }
}

@media (max-width: 1200px) and (min-width: 1025px) {
  .footer {
    padding: 18px 35px;
  }

  .desktop-nav {
    gap: 18px;
    flex-wrap: wrap;
  }

  .item-group {
    padding: 6px 12px;
    font-size: 13px;
  }

  .contacts-wrapper {
    gap: 12px;
  }

  .contact-item {
    padding: 8px 14px;
  }

  .contact-text {
    font-size: 12px;
  }

  .contact-icon svg {
    width: 18px;
    height: 18px;
  }

  .logo img {
    height: 38px;
  }

  .legal-item {
    font-size: 9px;
    margin: 0 12px 2px 0;
  }
}

@media (max-width: 1700px) and (min-width: 769px) {
  .footer {
    padding: 16px 30px;
  }

  .footer-main {
    gap: 15px;
  }

  .desktop-nav {
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .item-group {
    padding: 6px 10px;
    font-size: 12px;
  }

  .contacts-wrapper {
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .contact-item {
    padding: 7px 12px;
  }

  .contact-text {
    font-size: 11px;
  }

  .contact-icon svg {
    width: 16px;
    height: 16px;
  }

  .logo img {
    height: 36px;
  }

  .legal-item {
    font-size: 8px;
    margin: 0 10px 2px 0;
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
    flex-direction: column;
    gap: 10px;
    padding: 0;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }

  .mobile-contact .contact-item {
    width: 100%;
    flex-direction: column;
    padding: 14px 8px;
    gap: 8px;
    text-align: center;
  }

  .mobile-contact .contact-text {
    font-size: 11px;
    word-break: break-word;
    line-height: 1.3;
  }

  .mobile-contact .contact-icon {
    margin: 0 auto;
  }

  .mobile-contact .contact-icon svg {
    width: 24px;
    height: 24px;
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
    gap: 8px;
    max-width: 100%;
  }

  .mobile-contact .contact-item {
    padding: 12px 6px;
  }

  .mobile-contact .contact-text {
    font-size: 10px;
  }

  .mobile-contact .contact-icon svg {
    width: 20px;
    height: 20px;
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
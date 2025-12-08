<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
let intervalId = null

const reviews = ref([
  {
    id: 1,
    name: 'Алексей М.',
    avatar: 'AM',
    rating: 5,
    text: 'Супер быстрый обмен! Буквально за 3 минуты получил USDT на кошелек. Курс честный, комиссии прозрачные. Теперь только через этот сервис меняю.',
    date: '2 дня назад'
  },
  {
    id: 2,
    name: 'Мария К.',
    avatar: 'МК', 
    rating: 5,
    text: 'Долго искала надежный обменник. Здесь все четко - указала адрес, оплатила, получила крипту. Поддержка реально работает 24/7, помогли разобраться с первой операцией.',
    date: '1 неделю назад'
  },
  {
    id: 3,
    name: 'Дмитрий П.',
    avatar: 'ДП',
    rating: 5,
    text: 'Обменял крупную сумму через этот сервис. Все прошло гладко, средства пришли точно в срок. Никаких скрытых комиссий, все как обещали. Рекомендую!',
    date: '3 дня назад'
  },
  {
    id: 4,
    name: 'Анна С.',
    avatar: 'АС',
    rating: 4,
    text: 'Пользуюсь уже месяц для регулярных обменов. Очень удобно и быстро. Единственное - хотелось бы больше способов оплаты, но в целом очень доволна сервисом.',
    date: '5 дней назад'
  },
  {
    id: 5,
    name: 'Игорь Т.',
    avatar: 'ИТ',
    rating: 5,
    text: 'Новичок в криптовалютах, но здесь все интуитивно понятно. Сделал уже несколько обменов - все четко работает. Спасибо за простоту!',
    date: '1 день назад'
  }
])

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % reviews.value.length
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? reviews.value.length - 1 : currentSlide.value - 1
}

const goToSlide = (index) => {
  currentSlide.value = index
}

const startAutoSlide = () => {
  intervalId = setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopAutoSlide = () => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}

onMounted(() => {
  startAutoSlide()
})

onUnmounted(() => {
  stopAutoSlide()
})
</script>

<template>
  <section class="reviews-section">
    <h2 id="reviews-title" v-motion-slide-visible-top>Отзывы наших клиентов</h2>
    
    <div 
      class="reviews-container"
      @mouseenter="stopAutoSlide"
      @mouseleave="startAutoSlide"
    >
      <!-- Navigation Arrows -->
      <button class="nav-arrow nav-arrow-left" @click="prevSlide" v-motion-slide-visible-left>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      
      <button class="nav-arrow nav-arrow-right" @click="nextSlide" v-motion-slide-visible-right>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      
      <!-- Reviews Slider -->
      <div class="reviews-slider">
        <div 
          class="reviews-track"
          :style="{ transform: `translateX(-${currentSlide * 20}%)` }"
        >
          <div 
            v-for="review in reviews" 
            :key="review.id"
            class="review-card"
          >
            <div class="review-header">
              <div class="reviewer-info">
                <div class="avatar">{{ review.avatar }}</div>
                <div class="reviewer-details">
                  <h3 class="reviewer-name">{{ review.name }}</h3>
                  <div class="review-rating">
                    <span 
                      v-for="star in 5" 
                      :key="star"
                      class="star"
                      :class="{ active: star <= review.rating }"
                    >
                      ★
                    </span>
                  </div>
                </div>
              </div>
              <span class="review-date">{{ review.date }}</span>
            </div>
            
            <p class="review-text">{{ review.text }}</p>
            
            <div class="review-footer">
              <div class="verified-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#BEF80D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Проверенный отзыв</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Dots Indicator -->
      <div class="dots-indicator" v-motion-slide-visible-bottom>
        <button 
          v-for="(review, index) in reviews" 
          :key="review.id"
          class="dot"
          :class="{ active: currentSlide === index }"
          @click="goToSlide(index)"
        ></button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reviews-section {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  box-sizing: border-box;
}

h2 {
  color: #FFFFFF;
  font-size: 36px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 20px;
}

.reviews-container {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border: 2px solid #BEF80D;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 50%;
  color: #BEF80D;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
  backdrop-filter: blur(10px);
}

.nav-arrow:hover {
  background: #BEF80D;
  color: #000;
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 8px 25px rgba(190, 248, 13, 0.4);
}

.nav-arrow-left {
  left: -25px;
}

.nav-arrow-right {
  right: -25px;
}

.reviews-slider {
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
}

.reviews-track {
  display: flex;
  width: 500%; /* 5 слайдов по 100% каждый */
  transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  will-change: transform;
}

.review-card {
  width: 20%; /* 100% / 5 слайдов = 20% */
  flex-shrink: 0;
  background: linear-gradient(135deg, #0A100B 0%, #1a1a1a 100%);
  border-radius: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
}

.review-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #BEF80D, #7ED321);
}

.review-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
}

.reviewer-info {
  display: flex;
  align-items: center;
  gap: 16px;
}

.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #BEF80D, #7ED321);
  color: #000;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.reviewer-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.reviewer-name {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.review-rating {
  display: flex;
  gap: 2px;
}

.star {
  color: #666;
  font-size: 18px;
  transition: color 0.3s ease;
}

.star.active {
  color: #BEF80D;
  text-shadow: 0 0 10px rgba(190, 248, 13, 0.5);
}

.review-date {
  color: #9AA0A0;
  font-size: 14px;
  flex-shrink: 0;
}

.review-text {
  color: #fff;
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
  text-align: left;
  font-style: italic;
  position: relative;
}


.review-footer {
  display: flex;
  justify-content: flex-end;
}

.verified-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #BEF80D;
  font-size: 14px;
  font-weight: 500;
}

.dots-indicator {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 30px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid #666;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: #BEF80D;
  border-color: #BEF80D;
  box-shadow: 0 0 15px rgba(190, 248, 13, 0.5);
}

.dot:hover {
  border-color: #BEF80D;
  transform: scale(1.2);
}

/* Полная адаптивность */
@media (max-width: 1024px) {
  .reviews-section {
    padding: 20px 30px;
  }
  
  h2 {
    font-size: 32px;
  }
  
  .review-card {
    padding: 35px 30px;
  }
}

@media (max-width: 768px) {
  .reviews-section {
    padding: 30px 20px;
  }
  
  h2 {
    font-size: 28px;
    margin-bottom: 15px;
  }
  
  .nav-arrow {
    width: 40px;
    height: 40px;
  }
  
  .nav-arrow-left {
    left: -10px;
  }
  
  .nav-arrow-right {
    right: -10px;
  }
  
  .review-card {
    padding: 25px 20px;
    gap: 20px;
  }
  
  .reviewer-info {
    gap: 12px;
  }
  
  .avatar {
    width: 50px;
    height: 50px;
    font-size: 16px;
  }
  
  .reviewer-name {
    font-size: 18px;
  }
  
  .review-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  
  .review-date {
    align-self: flex-end;
    font-size: 13px;
  }
  
  .review-text {
    font-size: 15px;
  }
  
  .dots-indicator {
    margin-top: 25px;
    gap: 10px;
  }
}

@media (max-width: 480px) {
  .reviews-section {
    padding: 30px 20px;
  }
  
  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .nav-arrow {
    width: 36px;
    height: 36px;
  }
  
  .nav-arrow-left {
    left: -5px;
  }
  
  .nav-arrow-right {
    right: -5px;
  }
  
  .review-card {
    padding: 20px 15px;
    gap: 16px;
  }
  
  .reviewer-info {
    gap: 10px;
  }
  
  .avatar {
    width: 45px;
    height: 45px;
    font-size: 14px;
  }
  
  .reviewer-name {
    font-size: 16px;
  }
  
  .review-text {
    font-size: 14px;
    line-height: 1.5;
  }
  
  .review-text::before {
    font-size: 40px;
    top: -15px;
    left: -5px;
  }
  
  .star {
    font-size: 16px;
  }
  
  .verified-badge {
    font-size: 12px;
    gap: 6px;
  }
  
  .verified-badge svg {
    width: 14px;
    height: 14px;
  }
  
  .dots-indicator {
    margin-top: 20px;
    gap: 8px;
  }
  
  .dot {
    width: 10px;
    height: 10px;
  }
}

/* Дополнительные эффекты */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.review-card {
  animation: slideIn 0.6s ease forwards;
}
</style>
<script setup>
import { ref } from 'vue'

const faqs = ref([
  {
    id: 1,
    question: 'Как долго проходит обмен?',
    answer: 'Обмен происходит практически мгновенно! В большинстве случаев средства поступают на ваш кошелек в течение 2-5 минут после подтверждения оплаты.',
    isOpen: false
  },
  {
    id: 2,
    question: 'Какие есть лимиты на обмен?',
    answer: 'Минимальная сумма обмена составляет 500 RUB (эквивалент ~5 USDT). Максимальная сумма — 513 000 RUB (эквивалент ~5 000 USDT). Это позволяет как делать небольшие тестовые транзакции, так и крупные обмены.',
    isOpen: false
  },
  {
    id: 3,
    question: 'Безопасен ли обмен через ваш сервис?',
    answer: 'Абсолютно! Мы используем только проверенные платежные шлюзы и SSL-шифрование. Средства отправляются строго на указанный вами адрес кошелька. Наш сервис работает автоматически, мы не храним ваши средства.',
    isOpen: false
  },
  {
    id: 4,
    question: 'Что делать, если обмен не прошел?',
    answer: 'Если возникли проблемы с обменом, сразу обращайтесь в нашу службу поддержки через Telegram или email. Мы работаем 24/7 и решаем любые вопросы в течение 15 минут. Также можете отследить статус операции по номеру заявки.',
    isOpen: false
  },
  {
    id: 5,
    question: 'Есть ли скрытые комиссии?',
    answer: 'Никаких скрытых комиссий! Все комиссии указываются заранее при создании заявки. Курс обмена фиксируется на момент создания заявки и не изменяется в процессе операции.',
    isOpen: false
  }
])

const toggleFAQ = (id) => {
  faqs.value = faqs.value.map(faq => ({
    ...faq,
    isOpen: faq.id === id ? !faq.isOpen : false
  }))
}
</script>

<template>
  <div class="faq-section">
    <h1 v-motion-slide-visible-top>Часто задаваемые вопросы</h1>
    
    <div class="faq-container">
      <div 
        v-for="(faq, index) in faqs" 
        :key="faq.id"
        class="faq-item"
        v-motion-slide-visible-bottom
        :delay="index * 150"
      >
        <button 
          class="faq-question" 
          @click="toggleFAQ(faq.id)"
          :class="{ active: faq.isOpen }"
        >
          <span>{{ faq.question }}</span>
          <div class="faq-icon" :class="{ rotated: faq.isOpen }">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </button>
        
        <transition name="faq-answer">
          <div v-if="faq.isOpen" class="faq-answer">
            <p>{{ faq.answer }}</p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.faq-section {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  box-sizing: border-box;
}

h1 {
  color: #FFFFFF;
  font-size: 36px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 20px;
}

.faq-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.faq-item {
  background-color: #0A100B;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
}

.faq-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(190, 248, 13, 0.05), transparent);
  transition: left 0.6s ease;
  z-index: 1;
}

.faq-item:hover::before {
  left: 100%;
}

.faq-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(190, 248, 13, 0.15);
}

.faq-question {
  width: 100%;
  padding: 24px 30px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
}

.faq-question:hover {
  color: #BEF80D;
}

.faq-question.active {
  color: #BEF80D;
}

.faq-icon {
  color: #9AA0A0;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  display: flex;
  align-items: center;
  justify-content: center;
}

.faq-icon.rotated {
  transform: rotate(180deg);
  color: #BEF80D;
}

.faq-question:hover .faq-icon {
  color: #BEF80D;
  transform: scale(1.1);
}

.faq-question.active:hover .faq-icon {
  transform: rotate(180deg) scale(1.1);
}

.faq-answer {
  padding: 30px;
  position: relative;
  z-index: 2;
}

.faq-answer p {
  color: #9AA0A0;
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
  transition: color 0.3s ease;
}

.faq-item:hover .faq-answer p {
  color: #fff;
}

/* Анимации для ответов */
.faq-answer-enter-active {
  transition: all 0.5s ease-out;
  overflow: hidden;
}

.faq-answer-leave-active {
  transition: all 0.3s ease-in;
  overflow: hidden;
}

.faq-answer-enter-from {
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
}

.faq-answer-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
}

.faq-answer-enter-to {
  opacity: 1;
  max-height: 300px;
  transform: translateY(0);
}

.faq-answer-leave-from {
  opacity: 1;
  max-height: 300px;
  transform: translateY(0);
}

/* Адаптивность */
@media (max-width: 1024px) {
  .faq-section {
    padding: 20px;
  }
  
  h1 {
    font-size: 32px;
  }
}

@media (max-width: 768px) {
  .faq-section {
    padding: 20px 15px;
  }
  
  h1 {
    font-size: 28px;
  }
  
  .faq-item {
    margin-bottom: 15px;
  }
  
  .faq-question {
    padding: 18px;
    font-size: 16px;
  }
  
  .faq-answer {
    padding: 18px;
  }
  
  .faq-answer p {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .faq-section {
    padding: 15px 10px;
  }
  
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .faq-question {
    padding: 15px;
    font-size: 15px;
    gap: 10px;
  }
  
  .faq-answer {
    padding: 15px;
  }
  
  .faq-answer p {
    font-size: 13px;
    line-height: 1.5;
  }
  
  .faq-icon {
    width: 20px;
    height: 20px;
  }
}

/* Стили для accessibility */
.faq-question:focus {
  outline: 2px solid #BEF80D;
  outline-offset: 2px;
}

/* Дополнительные анимации при активации */
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.faq-item.active {
  animation: pulse 0.3s ease;
}
</style>
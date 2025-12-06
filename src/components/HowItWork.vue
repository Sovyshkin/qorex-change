<script setup>
import { ref, onMounted } from 'vue'

const steps = ref([
  {
    id: 1,
    title: 'Указываете адрес кошелька',
    description: 'Вводите TRC20-адрес кошелька, куда хотите получить свои USDT',
    icon: '/src/assets/block-2-1.svg'
  },
  {
    id: 2,
    title: 'Указываете сумму',
    description: 'Выбираете сколько хотите получить',
    icon: '/src/assets/block-2-2.svg'
  },
  {
    id: 3,
    title: 'Оплачиваете удобно',
    description: 'Оплата занимает меньше минуты',
    icon: '/src/assets/block-2-3.svg'
  },
  {
    id: 4,
    title: 'Получаете валюту',
    description: 'Быстрее, чем вы успеете открыть приложение кошелька',
    icon: '/src/assets/block-2-4.svg'
  }
])
</script>

<template>
  <section class="how-it-works">
      <h2 class="section-title">Как это работает</h2>
      
      <div class="steps-grid">
        <div 
          v-for="step in steps" 
          :key="step.id"
          class="step-card"
          v-motion-slide-visible-bottom
          :delay="step.id * 100"
        >
          <div class="step-icon">
            <img :src="step.icon" :alt="`Step ${step.id} icon`" />
          </div>
          <div class="dot"></div>
          <h3 class="step-title">{{ step.title }}</h3>
          <p class="step-description">{{ step.description }}</p>
        </div>
      </div>
  </section>
</template>

<style scoped>
.how-it-works {
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  position: relative;
}

.section-title {
  font-size: 36px;
  text-align: center;
}

.steps-grid {
  display: flex;
  align-items: start;
  justify-content: space-between;
  position: relative;
}

/* Линия, проходящая через все точки */
.steps-grid::before {
  content: '';
  position: absolute;
  top: 144px; /* Позиция на уровне точек */
  left: 12.5%; /* Начинается от центра первой точки */
  right: 12.5%; /* Заканчивается в центре последней точки */
  width: 75%; /* Проходит через все точки */
  height: 2px;
  background: linear-gradient(90deg, 
    #BEF80D 0%, 
    #BEF80D 33%, 
    #7ED321 66%, 
    #27322D 100%
  );
  z-index: 1;
}

.step-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 25%;
    position: relative;
    z-index: 2;
}

.dot {
    width: 12px;
    height: 12px;
    background-color: #BEF80D;
    border-radius: 50%;
    border: 3px solid #000;
    position: relative;
    z-index: 3;
}

.step-title {
    font-size: 20px;
    text-align: center;
    margin-top: 10px;
}

.step-description {
    font-size: 16px;
    color: #9AA0A0;
    text-align: center;
}

/* Адаптивность */
@media (max-width: 1024px) {
  .how-it-works {
    padding: 80px 20px;
  }
  
  .section-title {
    font-size: 32px;
  }
  
  .step-card {
    width: 22%;
  }
}

@media (max-width: 768px) {
  .how-it-works {
    padding: 60px 20px;
  }
  
  .section-title {
    font-size: 28px;
  }
  
  .steps-grid {
    flex-direction: column;
    gap: 40px;
    align-items: center;
  }
  
  .steps-grid::before {
    display: none;
  }
  
  .step-card {
    width: 100%;
    max-width: 300px;
  }
  
  .dot {
    background-color: #BEF80D;
    border-color: #BEF80D;
  }
}

@media (max-width: 480px) {
  .how-it-works {
    padding: 40px 15px;
    gap: 40px;
  }
  
  .section-title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .step-card {
    gap: 15px;
    max-width: 280px;
  }
  
  .step-icon img {
    width: 60px;
    height: 60px;
  }
  
  .step-title {
    font-size: 16px;
  }
  
  .step-description {
    font-size: 13px;
  }
}
</style>

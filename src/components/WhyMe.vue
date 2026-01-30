<script setup>
const cards = [{
    title: 'Быстро и честно',
    desc: 'Переводы проходят в считанные минуты. Никаких скрытых комиссий — всё видно заранее.',
    icon: 'fast.svg'
}, {
    title: "Просто даже для новичков",
    desc: 'Минимум действий: адрес → сумма → оплата → готово.',
    icon: 'easy.svg'
}, {
    title: "Всегда рядом",
    desc: 'Если что-то непонятно — мы отвечаем в поддержку 24/7.',
    icon: 'always.svg'
}, {
    title: "Мы ценим вашу безопасность",
    desc: 'Работаем только с проверенными платёжными шлюзами и отправляем транзакции строго на указанный вами адрес.',
    icon: 'safety.svg'
}]
</script>
<template>
  <div class="wrap">
    <h2 id="advantages-title" v-motion-slide-visible-top>Почему Qorex Fast Change — правильный выбор?</h2>
    
    <!-- Первый ряд -->
    <div class="cards-row">
        <!-- Большая карточка -->
        <div class="card large-card" v-motion-slide-visible-left :delay="200">
            <div class="info">
                <span class="title">Быстро и честно</span>
                <p class="desc">Переводы проходят в считанные минуты. Никаких скрытых комиссий — всё видно заранее.</p>
            </div>
            <div class="wrap-icon">
                <img src="../assets/fast.svg" alt="Быстро и честно" />
            </div>
        </div>
        
        <!-- Маленькая карточка -->
        <div class="card small-card" v-motion-slide-visible-right :delay="400">
            <div class="info">
                <span class="title">Просто даже для новичков</span>
                <p class="desc">Минимум действий: адрес → сумма → оплата → готово.</p>
            </div>
            <div class="wrap-icon">
                <img src="../assets/easy.svg" alt="Просто даже для новичков" />
            </div>
        </div>
    </div>
    
    <!-- Второй ряд -->
    <div class="cards-row">
        <!-- Маленькая карточка -->
        <div class="card small-card" v-motion-slide-visible-left :delay="600">
            <div class="info">
                <span class="title">Всегда рядом</span>
                <p class="desc">Если что-то непонятно — мы отвечаем в поддержку 24/7.</p>
            </div>
            <div class="wrap-icon">
                <img src="../assets/always.svg" alt="Всегда рядом" />
            </div>
        </div>
        
        <!-- Большая карточка -->
        <div class="card large-card" v-motion-slide-visible-right :delay="800">
            <div class="info">
                <span class="title">Мы ценим вашу безопасность</span>
                <p class="desc">Работаем только с проверенными платёжными шлюзами и отправляем транзакции строго на указанный вами адрес.</p>
            </div>
            <div class="wrap-icon">
                <img src="../assets/safety.svg" alt="Мы ценим вашу безопасность" />
            </div>
        </div>
    </div>
  </div>
</template>
<style scoped>
.wrap {
    width: 100%;
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
}

.cards-row {
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
}

.card {
    background-color: #0A100B;
    border: 1px solid transparent;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    box-sizing: border-box;
    min-width: 0;
    overflow: hidden;
    position: relative;
}

.card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(190, 248, 13, 0.1), transparent);
    transition: left 0.6s ease;
    z-index: 1;
}

.card:hover::before {
    left: 100%;
}

.large-card {
    padding: 50px;
    min-height: 180px;
    max-height: 260px;
    flex: 1.2;
}

.small-card {
    padding: 30px;
    min-height: 140px;
    max-height: 220px;
    flex: 0.8;
}

.card:hover {
    transform: translateY(-8px) scale(1.02);
    border-color: #BEF80D;
    box-shadow: 0 15px 35px rgba(190, 248, 13, 0.3);
}

.card:active {
    transform: translateY(-4px) scale(1.01);
}

.info {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;
    min-width: 0;
    position: relative;
    z-index: 2;
}

.desc {
    color: #9AA0A0;
    font-size: 16px;
    line-height: 1.5;
    transition: color 0.3s ease;
}

.title {
    font-size: 20px;
    font-weight: 500;
    color: white;
    transition: all 0.3s ease;
    position: relative;
}

.card:hover .title {
    color: #BEF80D;
    transform: translateX(5px);
}

.card:hover .desc {
    color: #fff;
}

.wrap-icon {
    transition: all 0.4s ease;
    position: relative;
    z-index: 2;
}

.wrap-icon img {
    transition: all 0.4s ease;
    filter: grayscale(50%);
}

.card:hover .wrap-icon {
    transform: rotate(5deg) scale(1.1);
}

.card:hover .wrap-icon img {
    filter: grayscale(0%) drop-shadow(0 5px 15px rgba(190, 248, 13, 0.4));
}

/* Адаптивность */
@media (max-width: 1150px) and (min-width: 769px) {
  .wrap {
    padding: 20px 30px;
  }
  
  h2 {
    font-size: 30px;
  }
  
  .cards-row {
    gap: 15px;
  }
  
  .large-card {
    padding: 35px;
    min-height: 200px;
    max-height: 240px;
    flex: 1;
  }
  
  .small-card {
    padding: 25px;
    min-height: 180px;
    max-height: 220px;
    flex: 1;
  }
  
  .title {
    font-size: 18px;
  }
  
  .desc {
    font-size: 14px;
    line-height: 1.4;
  }
  
  .wrap-icon img {
    width: 60px;
    height: 60px;
  }
}

@media (max-width: 1024px) and (min-width: 1151px) {
  .wrap {
    padding: 20px;
  }
  
  h2 {
    font-size: 32px;
  }
  
  .large-card {
    min-height: 280px;
  }
  
  .small-card {
    min-height: 220px;
  }
}

@media (max-width: 768px) {
  .wrap {
    padding: 30px 20px;
    gap: 30px;
  }
  
  h2 {
    font-size: 28px;
    text-align: center;
  }
  
  .cards-row {
    flex-direction: column;
    gap: 20px;
  }
  
  .large-card, .small-card {
    width: 100%;
    min-height: 200px;
    max-width: 400px;
    margin: 0 auto;
  }
  
  .card {
    padding: 20px;
  }
  
  .title {
    font-size: 18px;
  }
  
  .desc {
    font-size: 14px;
  }
  
  .wrap-icon {
    width: 60px;
    height: 60px;
  }
}

@media (max-width: 480px) {
  .wrap {
    padding: 30px 20px;
    gap: 25px;
  }
  
  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .large-card, .small-card {
    min-height: 180px;
    max-width: 100%;
  }
  
  .card {
    padding: 15px;
    gap: 15px;
  }
  
  .title {
    font-size: 16px;
  }
  
  .desc {
    font-size: 13px;
    line-height: 1.4;
  }
  
  .wrap-icon {
    width: 50px;
    height: 50px;
  }
  
  .card::before {
    opacity: 0.3;
  }
}
</style>

<script setup>
// Плавный скролл к форме заявки
// Плавный скролл к форме заявки с повторными попытками, если элемент ещё не рендерится
const scrollToExchange = (attempt = 0) => {
  const targetId = 'exchange-title'
  const el = document.getElementById(targetId)
  if (el) {
    const headerHeight = 80
    const elementPosition = el.getBoundingClientRect().top + window.scrollY - headerHeight
    window.scrollTo({ top: elementPosition, behavior: 'smooth' })
    return true
  }
  if (attempt < 20) {
    setTimeout(() => scrollToExchange(attempt + 1), 100)
  }
  return false
}

const goToExchange = () => {
  if (window.location.pathname !== '/') {
    window.location.href = '/#exchange-title'
  } else {
    scrollToExchange()
  }
}
</script>
<template>
    <section class="usdt-block">
        <header class="left" v-motion-slide-visible-left>
                <h1 id="service-title">
                    <span class="green">USDT за пару минут.</span><br>
Быстро, безопасно,<br>
без лишних шагов.
                </h1>
          <p class="desc">
            Qorex Fast Change – простой сервис для покупки USDT. Указываете свой кошелек, 
            сумму, оплачиваете – и монеты отправляются вам сразу после подтверждения 
            платежа.
          </p>
          <div>
            <button class="btn" type="button" aria-label="Начать процесс покупки USDT" @click="goToExchange">
              Купить USDT
            </button>
          </div>
        </header>
        <figure class="right">
            <img src="../assets/block_1.png" alt="Криптовалюта USDT - быстрый и безопасный обмен" />
        </figure>
    </section>
</template>
<style scoped>
.usdt-block {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 20px;
}

.left {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

h1 {
    font-size: 64px;
    text-transform: uppercase;
    margin: 0;
}

.green {
    color: #BEF80D;
    font-size: 64px;
    text-transform: uppercase;
}

.desc {
    color: #9AA0A0;
}

.right {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.right img {
    position: relative;
    z-index: 1;
    max-width: 100%;
    height: auto;
    filter: drop-shadow(0 0 10px rgba(195, 248, 36, 0.3)) 
            drop-shadow(0 0 20px rgba(195, 248, 36, 0.2));
    transition: filter 0.3s ease;
}

.right img:hover {
    filter: drop-shadow(0 0 15px rgba(195, 248, 36, 0.4)) 
            drop-shadow(0 0 30px rgba(195, 248, 36, 0.3));
}

.btn {
    background-color: #BEF80D;
    padding: 16px 28px;
    border-radius: 100px;
    color: #2B5000;
    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn:hover {
    background-color: #C3F824;
    transform: translateY(-2px);
}

/* Адаптивность */
@media (max-width: 1024px) {
  .usdt-block {
    padding: 80px 20px;
  }
  
  h1 {
    font-size: 48px;
  }
  
  .green {
    font-size: 48px;
  }
}

@media (max-width: 768px) {
  .usdt-block {
    flex-direction: column;
    padding: 30px 0;
    text-align: center;
  }
  
  .left {
    width: 100%;
    padding: 0 20px;
    order: 2;
  }
  
  .right {
    padding: 0 20px;
    order: 1;
    margin-bottom: 30px;
  }
  
  h1 {
    font-size: 36px;
  }
  
  .green {
    font-size: 36px;
  }
  
  .desc {
    font-size: 16px;
    text-align: center;
  }
  
  .right {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .usdt-block {
    padding: 30px 0;
  }
  
  h1 {
    font-size: 28px;
  }
  
  .green {
    font-size: 28px;
  }
  
  .desc {
    font-size: 14px;
    text-align: center;
    margin: 0 auto;
    max-width: 320px;
  }
  
  .btn {
    padding: 14px 24px;
    font-size: 14px;
    width: 100%;
    max-width: 200px;
  }
}
</style>
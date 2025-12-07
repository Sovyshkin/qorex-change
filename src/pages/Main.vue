<script setup lang="ts">
// @ts-ignore
import AppHeader from '../components/AppHeader.vue'
// @ts-ignore
import UsdtBlock from '../components/UsdtBlock.vue'
// @ts-ignore
import HowItWork from '../components/HowItWork.vue'
// @ts-ignore
import PersonalData from '../components/PersonalData.vue'
// @ts-ignore
import WhyMe from '../components/WhyMe.vue'
// @ts-ignore
import FAQ from '../components/FAQ.vue'
// @ts-ignore
import Reviews from '../components/Reviews.vue'
// @ts-ignore
import AppFooter from '../components/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen grid-background">
    <AppHeader />

    <main class="main-content" role="main">
      <!-- USDT Block Section -->
      <section id="service" aria-labelledby="service-title">
        <UsdtBlock />
        <HowItWork />
      </section>
      
      <!-- Personal Data Section -->
      <section id="change" aria-labelledby="exchange-title">
        <PersonalData />
      </section>
      
      <!-- Why Me Section -->
      <section aria-labelledby="advantages-title">
        <WhyMe />
      </section>
      
      <!-- Reviews Section -->
      <section aria-labelledby="reviews-title">
        <Reviews />
      </section>
      
      <!-- FAQ Section -->
      <section id="faq" aria-labelledby="faq-title">
        <FAQ />
      </section>
    </main>
    
    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<style scoped>
.main-content {
  width: 100%;
  padding-top: 80px; /* Отступ для фиксированного хедера */
  display: flex;
  flex-direction: column;
  gap: 40px;
}

/* Полная адаптивность */
@media (max-width: 1024px) {
  .main-content {
    padding-top: 70px;
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .main-content {
    padding-top: 60px;
    gap: 25px;
  }
}

@media (max-width: 480px) {
  .main-content {
    padding-top: 50px; /* Меньший отступ для мобильных */
    gap: 20px;
  }
}

/* Стили для секций */
section {
  width: 100%;
  position: relative;
}

section#service {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

section#change,
section#faq {
  display: flex;
  flex-direction: column;
}
</style>
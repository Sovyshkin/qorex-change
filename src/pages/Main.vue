<script setup lang="ts">
import AppHeader from '../components/AppHeader.vue'
import UsdtBlock from '../components/UsdtBlock.vue'
import HowItWork from '../components/HowItWork.vue'
import PersonalData from '../components/PersonalData.vue'
import WhyMe from '../components/WhyMe.vue'
import FAQ from '../components/FAQ.vue'
import Reviews from '../components/Reviews.vue'
import AppFooter from '../components/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen grid-background">
    <AppHeader />

    <main class="main-content">
      <!-- USDT Block Section -->
      <section id="service">
        <UsdtBlock />
        <HowItWork />
      </section>
      
      <!-- Personal Data Section -->
      <section id="change">
        <PersonalData />
      </section>
      
      <!-- Why Me Section -->
      <WhyMe />
      
      <!-- Reviews Section -->
      <Reviews />
      
      <!-- FAQ Section -->
      <section id="faq">
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
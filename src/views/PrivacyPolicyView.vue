<template>
  <div class="privacy-policy-view">
    <AppHeader />
    <main role="main">
      <PrivacyPolicy />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import AppHeader from '../components/AppHeader.vue'
// @ts-ignore
import AppFooter from '../components/AppFooter.vue'
// @ts-ignore
import PrivacyPolicy from '../components/PrivacyPolicy.vue'

// SEO meta данные для страницы политики конфиденциальности
import { useHead } from '@vueuse/head'

useHead({
  title: 'Политика конфиденциальности - QorexNchange | Обработка персональных данных',
  meta: [
    {
      name: 'description',
      content: 'Ознакомьтесь с политикой конфиденциальности QorexNchange. Порядок обработки и защиты персональных данных пользователей криптобиржи.'
    },
    {
      name: 'keywords',
      content: 'политика конфиденциальности, персональные данные, QorexNchange, защита данных, приватность, GDPR'
    },
    // Open Graph
    {
      property: 'og:title',
      content: 'Политика конфиденциальности - QorexNchange'
    },
    {
      property: 'og:description',
      content: 'Ознакомьтесь с политикой конфиденциальности QorexNchange'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    // Twitter Card
    {
      name: 'twitter:title',
      content: 'Политика конфиденциальности - QorexNchange'
    },
    {
      name: 'twitter:description',
      content: 'Ознакомьтесь с политикой конфиденциальности QorexNchange'
    }
  ]
})
</script>

<style scoped>
.privacy-policy-view {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
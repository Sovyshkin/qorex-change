<template>
  <div class="exchange-rules-view">
    <AppHeader />
    <main role="main">
      <ExchangeRules />
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
import ExchangeRules from '../components/ExchangeRules.vue'

// SEO meta данные для страницы правил
import { useHead } from '@vueuse/head'

useHead({
  title: 'Правила обмена - QorexNchange | Условия использования криптобиржи',
  meta: [
    {
      name: 'description',
      content: 'Ознакомьтесь с правилами обмена и условиями использования криптобиржи QorexNchange. Безопасные обмены криптовалют с прозрачными условиями.'
    },
    {
      name: 'keywords',
      content: 'правила обмена, условия использования, QorexNchange, криптобиржа, обмен криптовалют, правила сервиса'
    },
    // Open Graph
    {
      property: 'og:title',
      content: 'Правила обмена - QorexNchange'
    },
    {
      property: 'og:description',
      content: 'Ознакомьтесь с правилами обмена и условиями использования криптобиржи QorexNchange'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    // Twitter Card
    {
      name: 'twitter:title',
      content: 'Правила обмена - QorexNchange'
    },
    {
      name: 'twitter:description',
      content: 'Ознакомьтесь с правилами обмена и условиями использования криптобиржи QorexNchange'
    }
  ]
})
</script>

<style scoped>
.exchange-rules-view {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
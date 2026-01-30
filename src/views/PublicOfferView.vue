<template>
  <div class="public-offer-view">
    <AppHeader />
    <main role="main">
      <PublicOffer />
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
import PublicOffer from '../components/PublicOffer.vue'

// SEO meta данные для страницы публичной оферты
import { useHead } from '@vueuse/head'

useHead({
  title: 'Публичная оферта - QorexNchange | Договор об оказании услуг',
  meta: [
    {
      name: 'description',
      content: 'Публичная оферта о заключении договора об оказании услуг обмена криптовалюты на QorexNchange. Условия и порядок предоставления услуг.'
    },
    {
      name: 'keywords',
      content: 'публичная оферта, договор оказания услуг, QorexNchange, криптобиржа, условия обмена, оферта обменника'
    },
    // Open Graph
    {
      property: 'og:title',
      content: 'Публичная оферта - QorexNchange'
    },
    {
      property: 'og:description',
      content: 'Публичная оферта о заключении договора об оказании услуг обмена криптовалюты'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    // Twitter Card
    {
      name: 'twitter:title',
      content: 'Публичная оферта - QorexNchange'
    },
    {
      name: 'twitter:description',
      content: 'Публичная оферта о заключении договора об оказании услуг обмена криптовалюты'
    }
  ]
})
</script>

<style scoped>
.public-offer-view {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>

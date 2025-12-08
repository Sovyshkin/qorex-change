<template>
  <div class="user-agreement-view">
    <AppHeader />
    <main role="main">
      <UserAgreement />
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
import UserAgreement from '../components/UserAgreement.vue'

// SEO meta данные для страницы пользовательского соглашения
import { useHead } from '@vueuse/head'

useHead({
  title: 'Пользовательское соглашение - QorexNchange | Условия использования',
  meta: [
    {
      name: 'description',
      content: 'Ознакомьтесь с пользовательским соглашением QorexNchange. Права и обязанности сторон при использовании сервиса обмена криптовалют.'
    },
    {
      name: 'keywords',
      content: 'пользовательское соглашение, условия использования, QorexNchange, криптобиржа, права пользователя, обязанности администрации'
    },
    // Open Graph
    {
      property: 'og:title',
      content: 'Пользовательское соглашение - QorexNchange'
    },
    {
      property: 'og:description',
      content: 'Ознакомьтесь с пользовательским соглашением QorexNchange'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    // Twitter Card
    {
      name: 'twitter:title',
      content: 'Пользовательское соглашение - QorexNchange'
    },
    {
      name: 'twitter:description',
      content: 'Ознакомьтесь с пользовательским соглашением QorexNchange'
    }
  ]
})
</script>

<style scoped>
.user-agreement-view {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
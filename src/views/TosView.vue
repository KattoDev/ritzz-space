<script setup>
import router from '@/router'
import PageHeader from '@/components/PageHeader.vue'
import { TOS } from '@/components/information/commisions'

if (localStorage.getItem('lang') == null) {
  localStorage.setItem('route', '/commisions/termsOfService')
  router.push('commisions')
}
let lang = localStorage.getItem('lang') === 'en' ? 0 : 1
</script>
<template>
  <header>
    <PageHeader />
  </header>
  <main>
    <div id="title">
      <h1>{{ TOS[lang].title }}</h1>
      <h2>{{ TOS[lang].subtitle }}</h2>
    </div>
    <div v-for="(values, keys) in TOS[lang].TOS" :key="keys" class="terms">
      <h1>{{ keys }}</h1>
      <ul>
        <li v-for="term in values" :key="term">{{ term }}</li>
      </ul>
      <div>
        <img src="../assets/images/branches.png" alt="branches" />
        <img src="../assets/images/branches.png" alt="branches" />
      </div>
    </div>
  </main>
</template>
<style lang="css" scoped>
main {
  text-transform: uppercase;
}
div {
  width: 600px;
}

ul {
  margin-left: 20px;
  font-size: 1.1rem;
  list-style: url('../assets/images/star.svg');
}

.terms h1 {
  margin-bottom: 20px;
}

.terms div {
  display: flex;
  justify-content: center;
}
.terms img {
  margin: 40px 0;
  width: 300px;
}
#title {
  margin-bottom: 20px;
  text-align: center;
}
</style>

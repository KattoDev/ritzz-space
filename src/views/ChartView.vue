<script lang="js" setup>
import PageHeader from '@/components/PageHeader.vue'
import router from '@/router'
import { chart } from '@/components/information/commisions'

if (localStorage.getItem('lang') == null) {
  localStorage.setItem('route', '/commisions/chart')
  router.push('/commisions')
}

let lang = localStorage.getItem('lang') === 'en' ? 0 : 1
</script>
<template>
  <header>
    <PageHeader />
  </header>
  <main>
    <h1>{{ chart[lang].title }}</h1>
    <table>
      <thead>
        <tr>
          <th v-for="header in chart[lang].table.headers" :key="header">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in chart[lang].table.tableBody" :key="row">
          <td v-for="data in row" :key="data">
            {{ data }}
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
<style lang="css" scoped>
table {
  border: 1px solid black;
}

table th {
  border: 1px solid black;
  padding: 0 10px;
}

table td {
  border: 1px solid black;
  padding: 0 10px;
}
</style>

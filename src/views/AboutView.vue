<script setup>
import { about, journey } from '@/components/information/about'
import PageHeader from '@/components/PageHeader.vue'
import Placeholder from '@/components/Placeholder.vue'
</script>

<template>
  <header>
    <PageHeader></PageHeader>
  </header>
  <main>
    <h1>about me</h1>

    <div class="row" id="about">
      <div class="column col-left-60">
        <div class="info">
          <p v-for="info in about" :key="info">{{ info }}</p>
        </div>
        <div class="journey">
          <h1>my journey / experience</h1>
          <div class="experience info">
            <p v-for="xp in journey" :key="xp">{{ xp }}</p>
          </div>
        </div>
      </div>
      <div class="column col-right-40">
        <Placeholder />

        <div class="contact">
          <ul>
            <li>
              <img src="/src/assets/images/icons/mail.svg" alt="" />
              <p>mail@mail.com</p>
            </li>
            <li>
              <img src="/src/assets/images/icons/telegram.svg" alt="" />
              <p>@StarlightDreamer56</p>
            </li>
            <li>
              <img src="/src/assets/images/icons/twitter.svg" alt="" />
              <p>@RitzzRiver</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

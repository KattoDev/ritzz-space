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
<style lang="css" scoped>
#about {
  margin-top: 20px;
  background-color: transparent;
  gap: 40px;
  width: calc(100dvw - 200px);
  box-shadow: 1px 1px 10px rgb(155, 154, 154);
  font-size: 20px;
  margin-bottom: 50px;
}

.column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.col-left-60 {
  width: 60%;
}

.col-right-40 {
  width: 40%;
  margin-top: 50px;
}

.column img {
  width: 200px;
  border-radius: 100%;
  border: 2px solid var(--accent);
}

.journey {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.journey h1 {
  margin-bottom: 10px;
}

.experience {
  background-color: var(--primary);
  color: var(--secondary);
}

.experience p {
  margin-bottom: 10px;
}

.info {
  width: 80%;
  padding: 20px;
  border-radius: 5px;
}

.contact {
  margin-top: 60px;
  border-radius: 5px;
  background-color: var(--secondary);
}

.contact img {
  width: 30px;
}

.contact li {
  display: flex;
  align-items: center;
  margin: 10px;
  gap: 10px;
  font-size: 20px;
  height: 20px;
}
</style>

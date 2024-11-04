<script setup>
import { about, journey } from '@/components/information/about'
import { message } from '@/components/information/home'
import PageHeader from '@/components/PageHeader.vue'
import Placeholder from '@/components/Placeholder.vue'
</script>

<template>
  <header>
    <PageHeader />
  </header>
  <main id="home">
    <div class="row">
      <div class="column">
        <div class="message">
          <h1>{{ message }}</h1>
        </div>
        <hr />
        <div class="contact">
          <div class="row">
            <div class="column col-left-30">
              <Placeholder />
            </div>
            <div class="column col-right-70">
              <p>If you like my art</p>
              <p>follow me on:</p>
              <div class="buttons">
                <button>Twitter</button>
                <button>Instagram</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <Placeholder />
      </div>
    </div>
  </main>
</template>

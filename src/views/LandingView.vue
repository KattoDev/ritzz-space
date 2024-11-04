<script setup>
import Placeholder from '@/components/Placeholder.vue'
import { commisionStatus } from '@/components/information/commisions'
import { alerts, intro } from '@/components/information/void.js'
</script>

<template>
  <div id="space">
    <div class="container">
      <div class="row">
        <div class="column">
          <Placeholder />
          <div class="status">
            <h6>Commisions Status</h6>
            <svg
              v-if="commisionStatus"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
        </div>
        <div class="column">
          <div id="intro">
            <p>{{ intro[0] }}</p>
            <p>{{ intro[1] }}</p>
          </div>
          <p class="divider">--------------------------------</p>
          <div id="info">
            <p>✨</p>
            <span> {{ alerts[0] }}</span>
            <p>: {{ alerts[1] }}</p>
          </div>
          <p class="divider">--------------------------------</p>
          <h6>
            IMPORTANT: this site is under construction, some functions may not
            work as expected
          </h6>
        </div>
      </div>
      <div id="door">
        <p>Would you like to enter?</p>
        <ul id="keys">
          <li>
            <a href="home"><img src="" alt="yessss" /></a>
          </li>
          <li>
            <a href="https://www.google.com"><img src="" alt="heck no" /></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

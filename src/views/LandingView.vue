<script setup>
import Placeholder from '@/components/Placeholder.vue'
import { commisionStatus } from '@/components/information/commisions'
import { alerts, intro } from '@/components/information/void.js'
</script>

<template>
  <div
    class="tw-w-dvw tw-h-dvh tw-flex tw-justify-center tw-items-center tw-bg-space"
  >
    <div class="container tw-w-[450px] tw-text-white">
      <div
        class="tw-bg-[rgba(0,0,0,0.5)] tw-p-3 tw-rounded-2xl tw-flex tw-gap-3"
      >
        <div class="tw-overflow-hidden tw-w-1/2 tw-break-words">
          <Placeholder />
          <div class="tw-flex tw-gap-1 tw-pt-2 tw-justify-center">
            <h6>Commisions Status</h6>
            <img
              v-if="commisionStatus"
              class="tw-w-5"
              src="../assets/images/icons/check.svg"
              alt="check"
            />
            <img
              v-else
              class="tw-w-5"
              src="../assets/images/icons/uncheck.svg"
              alt="uncheck"
            />
          </div>
        </div>
        <div class="tw-overflow-hidden tw-w-1/2 tw-break-words">
          <div>
            <p>{{ intro[0] }}</p>
            <p>{{ intro[1] }}</p>
          </div>
          <p class="tw-text-alert">--------------------------------</p>
          <div class="tw-flex">
            <p>✨</p>
            <span class="tw-font-bold"> {{ alerts[0] }}</span>
            <p>: {{ alerts[1] }}</p>
          </div>
          <p class="tw-text-alert">--------------------------------</p>
          <h6 class="tw-font-bold tw-text-amber-900">
            IMPORTANT: this site is under construction, some functions may not
            work as expected
          </h6>
        </div>
      </div>
      <div class="tw-m-5 tw-flex tw-flex-col tw-items-center">
        <p class="tw-text-2xl">Would you like to enter?</p>
        <ul class="tw-text-xl tw-flex tw-gap-3">
          <li>
            <a href="home"><img src="" alt="yessss" /></a>
          </li>
          <li>
            <a href="https://youtu.be/FtutLA63Cp8"
              ><img src="" alt="heck no"
            /></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
import { status } from './information/commisions'
</script>

<template>
  <menu class="tw-h-16 tw-flex tw-justify-center tw-items-center">
    <ul class="tw-absolute tw-left-2">
      <li>
        <a class="tw-text-text" href="/about">about</a>
      </li>
    </ul>
    <a class="tw-text-text" href="/home">
      <img
        class="tw-w-24"
        src="../assets/images/signature.png"
        alt="RitzzRiver"
      />
    </a>
    <ul class="tw-absolute tw-right-20 tw-flex tw-gap-6">
      <li>
        <a class="tw-text-text" href="/gallery">my works</a>
      </li>
      <li>
        <a class="tw-text-text tw-flex tw-gap-1" href="#"
          >commisions
          <img
            class="tw-w-5 tw-rotate-0 tw-text-text"
            src="../assets/images/icons/menu.svg"
            alt="menu"
          />
        </a>
        <ul
          id="sub-menu"
          class="tw-bg-background tw-absolute tw-flex tw-flex-col tw-w-full tw-opacity-0 tw-pointer-events-none"
        >
          <li class="tw-inline tw-h-16 tw-relative">
            <a
              class="tw-text-text tw-flex tw-items-center tw-pt-0 tw-pl-3 tw-h-16"
              href="#"
              >Status: {{ status }}</a
            >
          </li>
          <li class="tw-inline tw-h-16 tw-relative">
            <a
              class="tw-text-text tw-flex tw-items-center tw-pt-0 tw-pl-3 tw-h-16"
              href="/commisions/termsOfService"
              >Terms of service</a
            >
          </li>
          <li class="tw-inline tw-h-16 tw-relative">
            <a
              class="tw-text-text tw-flex tw-items-center tw-pt-0 tw-pl-3 tw-h-16"
              href="/commisions/chart"
              >Commision chart</a
            >
          </li>
        </ul>
      </li>
    </ul>
  </menu>
  <hr />
</template>

<style scoped>
menu ul li a:hover {
  background-color: var(--primary);
  color: var(--background);
}

menu #sub-menu {
  transition:
    top 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
}

menu li:hover #sub-menu {
  opacity: 1;
  pointer-events: all;
  top: var(60px);
}
</style>

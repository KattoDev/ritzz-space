<script setup lang="ts">
import { status } from './information/commisions'
</script>

<template>
  <menu>
    <ul id="menu-left">
      <li><a href="about">about</a></li>
    </ul>
    <a href="/home">
      <h1>RitzzRiver</h1>
    </a>
    <ul id="menu-right">
      <li><a href="gallery">my works</a></li>
      <li>
        <a href="#"
          >commisions
          <svg
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </a>
        <ul id="sub-menu">
          <li>
            <a href="#">Status: {{ status }}</a>
          </li>
          <li><a href="commisions/termsOfService">Terms of service</a></li>
          <li><a href="commisions/chart">Commision chart</a></li>
        </ul>
      </li>
    </ul>
  </menu>
  <hr />
</template>

<style scoped>
menu {
  height: var(--menu-height);
  display: flex;
  justify-content: center;
  align-items: center;
}

menu #menu-left {
  position: absolute;
  left: 2%;
}

menu #menu-right {
  position: absolute;
  right: 2%;
}

menu a {
  color: var(--text);
  text-decoration: none;
}

menu a h1 {
  font-size: 30px;
}

menu ul {
  display: flex;
}

menu ul li {
  display: inline;
  height: var(--menu-height);
  position: relative;
}

menu ul li a {
  text-decoration: none;
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 10px;
}

menu ul li svg {
  width: 20px;
  rotate: 0deg;
  transition: rotate 0.3s ease-in-out;
}

menu ul li a:hover {
  background-color: var(--primary);
  color: var(--background);
}

menu ul li a:hover svg {
  rotate: 90deg;
}

menu #sub-menu {
  background-color: var(--background);
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  opacity: 0;
  pointer-events: none;
  transition:
    top 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
}

menu #sub-menu li a {
  height: var(--menu-height);
  align-items: center;
}

menu li:hover #sub-menu {
  opacity: 1;
  pointer-events: all;
  top: var(--menu-height);
}
/* menu {
  height: 60px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  justify-content: center;
  gap: 100px;
  font-size: 30px;
}

hr {
  margin: 0;
}
menu ul {
  display: flex;
  gap: 5px;
}

menu ul svg {
  width: 20px;
  rotate: 0deg;
  transition: rotate 0.3s ease-in-out;
}

menu ul li {
  display: flex;
  background-color: var(--background);
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out;
  height: 60px;
}

menu ul li a {
  text-decoration: none;
}
menu h1 {
  transform: translate(50%);
}

menu ul li:hover {
  background-color: var(--primary);
}
menu ul li:hover a {
  color: var(--background);
}

menu ul li:hover svg {
  rotate: 90deg;
}

menu #menu-right {
  margin-left: 20px;
}
menu #menu-left {
  margin-right: 20px;
} */
</style>

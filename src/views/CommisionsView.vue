<script setup>
import router from '@/router'

function langes() {
  localStorage.setItem('lang', 'es')
  router.push(localStorage.getItem('route'))
  localStorage.removeItem('route')
}
function langen() {
  localStorage.setItem('lang', 'en')
  router.push(localStorage.getItem('route'))
  localStorage.removeItem('route')
}
</script>
<template>
  <div class="warning">
    <strong>HOLD UP</strong>
    <p>Before you proceed, select your language preferences</p>

    <div id="buttons">
      <button @click="langes">Spanish</button>
      <button @click="langen">English</button>
    </div>
  </div>
</template>
<style lang="css" scoped>
strong {
  font-size: 40px;
  font-weight: bold;
}

p {
  font-size: 20px;
}

button {
  padding: 10px 40px;
  border: none;
  background-color: var(--primary);
  border-radius: 5px;
  color: var(--background);
  transition: background-color 0.3s ease-in-out;
  transition: box-shadow 0.3s ease-in-out;
}

button:hover {
  cursor: pointer;
  background-color: var(--text);
  box-shadow: 1px 1px 5px var(--primary);
}

.warning {
  border: 1px solid black;
  height: 100dvh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#buttons {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  width: 200px;
  gap: 20px;
}
</style>

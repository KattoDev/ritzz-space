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
    <div class="tw-bg-[rgba(0,0,0,0.5)] tw-p-3 tw-rounded-2xl tw-flex tw-gap-3">
      <div class="tw-overflow-hidden tw-w-1/2 tw-break-words">
        <div class="message">
          <h1>{{ message }}</h1>
        </div>
        <hr />
        <div class="contact">
          <div
            class="tw-bg-[rgba(0,0,0,0.5)] tw-p-3 tw-rounded-2xl tw-flex tw-gap-3"
          >
            <div class="tw-overflow-hidden tw-w-1/2 tw-break-words col-left-30">
              <Placeholder />
            </div>
            <div
              class="tw-overflow-hidden tw-w-1/2 tw-break-words col-right-70"
            >
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
      <div class="tw-overflow-hidden tw-w-1/2 tw-break-words">
        <Placeholder />
      </div>
    </div>
  </main>
</template>

<style lang="css" scoped>
#home {
  width: 100dvw;
  display: block;
}

hr {
  width: 95%;
}

.row .column .message {
  height: 200px;
  display: flex;
  align-items: center;
}
.row {
  background-color: transparent;
  border-radius: 0;
}

.row .column {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.row .column .contact {
  margin-top: 20px;
  padding: 20px;
  width: 80%;
  height: 150px;
  background-color: var(--accent);
  border-radius: 10px 100px 10px 10px;
  display: flex;
  justify-content: center;
  border: 1px solid rebeccapurple;
}

.row .column .contact .row {
  width: 100%;
}

.row .column .contact .col-left-30 {
  width: 30%;
}

.row .column .contact .col-right-70 {
  width: 70%;
}

#home .contact button {
  margin: 5px 10px;
  padding: 5px 15px;
  border: none;
  color: var(--text);
  background-color: var(--secondary);
  border-radius: 20px;
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out;
}

#home .contact button:hover {
  background-color: var(--primary);
  color: var(--secondary);
}
#home .row .column .contact img {
  width: 80px;
  height: 80px;
  border-radius: 20px;
}
#home .row .column img {
  height: calc(100dvh - 90px);
  width: 500px;
  border-radius: 20px;
}
</style>

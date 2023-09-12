<template>
  <div class="about">
    <h1>This is an about page</h1>

    <h2>Parameter value from Router</h2>
    <h3>{{ $route.params.id }}</h3>
    <h3>{{ $route.params.postid }}</h3>
    <button
      @click="
        {
          $router.push('/');
        }
      "
    >
      Back to Home Page
    </button>

    <button @click="goToHomepage">Back to Home Page 2</button>

    <button @click="router.go(-2)">Two Step Back</button>
    <br />

    <RouterLink :to="{ name: 'about', params: { id: 400 } }"
      >Back to About Page
    </RouterLink>

    <button @click="router.push('/routers')">To Router Page</button>
  </div>

  <RouterView />
</template>

<script setup>
import { RouterView, RouterLink } from "vue-router";
import router from "../router";

function goToHomepage() {
  router.push("/");
}
</script>

<style scoped>
div {
  border: 5px outset rebeccapurple;
  background-color: aquamarine;
  text-align: center;
  height: 300px;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

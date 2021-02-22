<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>What is it about?</h2>
    <div v-if="Math.random() > 0.5">
      <h3>Choclate</h3>
    </div>
    <div v-else>
      <h3>Vanilla</h3>
    </div>
  </div>

</template>

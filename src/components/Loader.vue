<template>
  <div
    class="d-flex justify-content-center align-items-center loader"
    v-if="!isLoaded"
  >
    <div class="ball1 balls"></div>
    <div class="mx-2 ball2 balls"></div>
    <div class="ball3 balls"></div>
  </div>
</template>

<script>
export default {
  name: "LoaderComponent",

  props: ["isLoaded"],
};
</script>

<style scoped>
.loader {
  width: 100vw;
  height: 100vh;

  background: var(--primary-dark-color);

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 999;
}

.balls {
  width: 20px;
  height: 20px;

  border-radius: 50%;

  background: var(--primary-color);

  animation-name: bigsmall;
  animation-iteration-count: infinite;
  animation-duration: 1s;
  animation-timing-function: ease;
}
.ball1 {
  animation-delay: 0.4s;
}
.ball2 {
  animation-delay: 0.7s;
}

.ball3 {
  animation-delay: 0.9s;
}

@keyframes bigsmall {
  0% {
    transform: scale(1.4);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.8;);
  }
}
</style>

<template>
  <a
    :href="link"
    class="d-inline-block action__button__contact__me"
    :target="target"
    >{{ btnType }}</a
  >
</template>

<script>
export default {
  name: "CallToAction.vue",
  props: ["btnType", "link", "target"],
};
</script>

<style scoped>
.action__button__contact__me {
  border: 2px solid var(--primary-color);
  color: var(--primary-color);

  transition: all 0.5s;
  text-transform: uppercase;
}

.action__button__contact__me:hover {
  background: var(--primary-color);
  color: var(--primary-dark-color);
}

@media screen and (max-width: 600px) {
  .action__button__contact__me {
    font-size: 17px;
  }
}
</style>

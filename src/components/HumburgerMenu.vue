<template>
  <div class="humburger__container" @click="needCollapse">
    <div
      class="humburger__top"
      :class="{
        top__bottom__full: $props.needCollapse,
        top__slide: $props.needCollapse,
      }"
    ></div>
    <div
      class="humburger"
      :class="{ humburger__gone: $props.needCollapse }"
    ></div>
    <div
      class="humburger__bottom"
      :class="{
        top__bottom__full: $props.needCollapse,
        bottom__slide: $props.needCollapse,
      }"
    ></div>
  </div>
</template>
<script>
export default {
  name: "HumburgerMenuComponent",

  props: {
    needCollapse: Boolean,
  },
};
</script>

<style scoped>
.humburger__container {
  width: 30px;
  height: 20px;

  position: relative;

  margin-right: 1em;
  margin-bottom: 0.3em;
  cursor: pointer;
}

.humburger__gone {
  opacity: 0;
}

.humburger,
.humburger__top,
.humburger__bottom {
  position: absolute;

  transition: all 0.6s;
}

.humburger__top {
  width: 65%;
  height: 1.5px;

  top: 0;
  left: 0;

  left: 50%;
  transform: translate(-50%);

  background-color: var(--primary-light-color);
}

.humburger {
  width: 100%;
  height: 1.1px;

  top: 10px;
  left: 0;

  background-color: var(--primary-light-color);
}

.humburger__bottom {
  width: 65%;
  height: 1.5px;

  top: 20px;
  left: 50%;

  transform: translate(-50%);

  background-color: var(--primary-light-color);
}

.top__bottom__full {
  width: 100%;
}

.top__slide {
  transform-origin: left;
  transform: translate(-50%) rotate(45deg);
}

.bottom__slide {
  transform-origin: left;
  transform: translateX(-50%) rotate(-46deg);
}
</style>

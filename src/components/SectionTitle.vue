<template>
  <div class="text-center">
    <h5>{{ upperHeader }}</h5>
    <h2 class="h1 fw-bold">{{ bigHeader }}</h2>
    <p>{{ paragraph }}</p>
  </div>
</template>

<script>
export default {
  name: "SectionTitleComponent",
  props: ["upperHeader", "bigHeader", "paragraph"],
};
</script>

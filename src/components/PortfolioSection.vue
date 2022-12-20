<template>
  <div class="pt-5">
    <div>
      <SectionTitle
        upperHeader="PROJECTS"
        bigHeader="What I Did"
        paragraph="These are my memories."
      />
    </div>

    <FilterProjectSection />
  </div>
</template>

<script>
import SectionTitle from "./SectionTitle.vue";
import FilterProjectSection from "./FilterProjectSection.vue";

export default {
  name: "PortfolioSectionComponent",
  components: {
    SectionTitle,
    FilterProjectSection,
  },
};
</script>

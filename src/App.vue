<template>
  <div>
    <Loader :isLoaded="isShow" />
    <div v-show="isShow">
      <section id="hero-section" ref="HeroSection" class="dark__section">
        <div class="container">
          <Navigation />
          <HeroSection />
        </div>
      </section>

      <section id="service-section" ref="ServiceSection" class="light__section">
        <div class="container">
          <ServiceSection />
        </div>
      </section>

      <section id="skill-section" ref="SkillSection" class="dark__section">
        <div class="container">
          <SkillSection />
        </div>
      </section>

      <section id="portfolio-section" class="light__section">
        <div class="container pb-0 pb-lg-4">
          <img
            src="./assets/img/TopCornorBall.svg"
            class="d-none d-lg-block d-xl-block top__cornor__decoration"
          />
          <PortfolioSection />
        </div>
      </section>
      <section id="footer-section" class="light__section" style="height: 100%">
        <FooterSection />
      </section>
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import HeroSection from "./components/HeroSection.vue";
import ServiceSection from "./components/ServiceSection.vue";
import SkillSection from "./components/SkillSection.vue";
import PortfolioSection from "./components/PortfolioSection.vue";
import FooterSection from "./components/FooterSection.vue";
import Loader from "./components/Loader.vue";

export default {
  name: "App",
  components: {
    Navigation,
    HeroSection,
    ServiceSection,
    SkillSection,
    PortfolioSection,
    FooterSection,
    Loader,
  },

  data() {
    return {
      isShow: false,
    };
  },

  methods: {
    getHeight(ele) {
      const sectionHeight = ele.clientHeight;
      return sectionHeight;
    },
  },

  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") this.isShow = true;
    };
  },
};
</script>

<style></style>

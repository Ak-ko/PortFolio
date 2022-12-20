<template>
  <nav>
    <div
      class="d-flex justify-content-between align-items-center pt-3 pt-md-4 pt-lg-5 pt-xl-5"
    >
      <div>
        <a href="#hero-section">
          <img src="../assets/img/Logo.svg" alt="logo" />
        </a>
      </div>
      <div class="d-block d-md-none d-lg-none d-xl-none" @click="show = !show">
        <HumburgerMenu :needCollapse="show" />
      </div>
      <div class="d-none d-md-block d-lg-block d-xl-block">
        <a href="#hero-section" class="p-2 me-3 nav-links">Home</a>
        <a href="#service-section" class="p-2 me-3 nav-links">Services</a>
        <a href="#skill-section" class="p-2 me-3 nav-links">Skills</a>
        <a href="#portfolio-section" class="p-2 me-3 nav-links">Portfolio</a>
        <a href="#footer-section" class="p-2 pe-3 border-end nav-links"
          >Contact</a
        >
        <a
          href="https://www.facebook.com/profile.php?id=100008789864076"
          target="_blank"
          class="p-2 nav-logo-links"
        >
          <fa-icon icon="fa-brands fa-facebook" />
        </a>
        <a
          href="https://t.me/Akko_786"
          target="_blank"
          class="p-2 nav-logo-links"
        >
          <fa-icon icon="fa-brands fa-telegram" />
        </a>
        <a
          href="https://www.linkedin.com/in/aung-khant-ko-ko-6525b1214/"
          class="p-2 nav-logo-links"
          target="_blank"
        >
          <fa-icon icon="fa-brands fa-linkedin" />
        </a>
      </div>
    </div>
    <div
      ref="insideNav"
      class="mt-2 nav__inside"
      :class="{ showInsideNav: show }"
    >
      <a
        href="#hero-section"
        class="d-block p-3 nav-logo-links homes inside__links"
        :class="{ showHomes: show }"
        >Home</a
      >
      <a
        href="#service-section"
        class="d-block p-3 nav-logo-links abouts inside__links"
        :class="{ showAbouts: show }"
        >Services</a
      >
      <a
        href="#skill-section"
        class="d-block p-3 nav-logo-links abouts inside__links"
        :class="{ showAbouts: show }"
        >Skills</a
      >
      <a
        href="#portfolio-section"
        class="d-block p-3 nav-logo-links portfolios inside__links"
        :class="{ showPortfolios: show }"
        >Portfolio</a
      >
      <a
        href="#footer-section"
        class="d-block p-3 nav-logo-links contacts inside__links"
        :class="{ showContacts: show }"
        >Contact</a
      >
      <div class="icons p-3 inside__links" :class="{ showIcons: show }">
        <a
          href="https://www.facebook.com/profile.php?id=100008789864076"
          class="fs-3 nav-logo-links"
          target="_blank"
        >
          <fa-icon icon="fa-brands fa-facebook" />
        </a>
        <a
          href="https://t.me/Akko_786"
          target="_blank"
          class="mx-3 fs-3 nav-logo-links"
        >
          <fa-icon icon="fa-brands fa-telegram" />
        </a>
        <a
          href="https://www.linkedin.com/in/aung-khant-ko-ko-6525b1214/"
          class="fs-3 nav-logo-links"
          target="_blank"
        >
          <fa-icon icon="fa-brands fa-linkedin" />
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import HumburgerMenu from "./HumburgerMenu.vue";
export default {
  name: "NavigationComponent",
  data() {
    return {
      show: false,
    };
  },

  components: {
    HumburgerMenu,
  },

  mounted() {
    this.$refs.insideNav.childNodes.forEach((child) => {
      child.onclick = () => {
        this.show = false;
      };
    });
  },
};
</script>

<style scoped>
nav {
  position: relative;
}

.nav-links {
  color: var(--primary-light-color);
  position: relative;
}

.nav-logo-links {
  color: var(--primary-light-color);
  transition: color 0.5s;
}

.nav-logo-links:hover {
  color: var(--primary-color);
}

.nav-links::before {
  content: "";

  width: 50%;
  height: 2px;

  background-color: var(--primary-color);
  position: absolute;
  bottom: 0;
  left: 50%;

  transform: translate(-50%) rotateY(90deg);

  transition: all 0.5s;
}
.nav-links:hover {
  color: var(--primary-color);
  transition: all 0.5s;
}

.nav-links:hover::before {
  transform: translate(-50%) rotateY(0deg);
}

.nav__inside {
  position: absolute;
  width: 100%;
  visibility: hidden;
}

.showInsideNav {
  visibility: visible;
}

.homes {
  transform: translateX(-400px);
  transition: all 0.7s;
}

.abouts {
  transform: translateX(-400px);
  transition: all 0.9s;
}

.portfolios {
  transform: translateX(-400px);
  transition: all 1.2s;
}

.contacts {
  transform: translateX(-400px);
  transition: all 1.4s;
}

.icons {
  transform: translateX(-400px);
  transition: all 1.7s;
}

.inside__links {
  opacity: 0;
  background: var(--primary-dark-color);
}

.showHomes,
.showAbouts,
.showPortfolios,
.showContacts,
.showIcons {
  transform: translate(0);
  opacity: 1;
}

@media screen and (min-width: 800px) {
  .showHomes,
  .showAbouts,
  .showPortfolios,
  .showContacts,
  .showIcons {
    transform: translate(0);
    opacity: 0;
  }
}
</style>

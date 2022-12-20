<template>
  <div>
    <div class="py-5 pb-md-3 pb-lg-3 pb-xl-3">
      <div class="row mt-4 mt-md-5 mt-lg-5 mt-xl-5 pt-md-5 pt-lg-5 pt-xl-5 g-0">
        <div class="col-12 col-md-12 col-lg-3 col-xl-3">
          <div class="text-center text-lg-start text-xl-start mb-md-4">
            <h1 class="mb-4">
              Aung<br class="d-none d-lg-block d-xl-block" />
              Khant
              <img
                src="../assets/img/dot.svg"
                alt="a yellow dot"
                class="mt-3"
              />
            </h1>

            <div class="underline mx-auto mx-lg-0 mx-xl-0"></div>

            <div
              class="d-flex align-items-center justify-content-center justify-content-lg-start justify-content-xl-start mt-2"
            >
              <a
                href="https://www.instagram.com/aung_khant_ko_ko/"
                target="_blank"
                class="actionButtons"
                >Instagram</a
              >
              <div class="mx-2 sidelines"></div>
              <a
                href="https://www.linkedin.com/in/aung-khant-ko-ko-6525b1214/"
                target="_blank"
                class="actionButtons"
                >LinkedIn</a
              >
            </div>

            <CallToAction
              href="#footer-section"
              btnType="Contact Me"
              class="mt-5 px-4 py-3"
            />
          </div>
        </div>

        <div class="col-12 col-md-12 col-lg-5 col-xl-5">
          <div class="">
            <img
              src="../assets/img/heroimg2.svg"
              class="d-block mt-4 mx-lg-0 mt-md-0 hero__img"
              alt="hero img"
            />
          </div>
        </div>

        <div class="col-12 col-md-12 col-lg-4 col-xl-4">
          <div
            class="mt-5 mt-lg-0 mt-xl-0 text-center text-lg-start text-xl-start"
          >
            <h5>INTRODUCTION</h5>
            <h1 class="h1 fw-bold">
              A Full Stack<br />
              Web Developer
            </h1>
            <p>
              I am a full stack website developer who loves to create websites.
              I code in Vue and Laravel combination.
            </p>
            <a href="#service-section" class="learn__more__link"
              >Learn More <fa-icon icon="fa-solid fa-arrow-down"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CallToAction from "./CallToAction.vue";
export default {
  name: "HeroSectionComponent",
  components: {
    CallToAction,
  },
};
</script>

<style scoped>
.underline {
  width: 50px;
  height: 2px;

  background-color: var(--primary-color);
}

a {
  color: var(--primary-light-color);
  font-weight: 500;
}

.sidelines {
  width: 2px;
  height: 18px;
  background: transparent;
  background-color: var(--primary-light-color);
}

.actionButtons {
  transition: color 0.5s;
}

.actionButtons:hover {
  color: var(--primary-color);
}

.imgDiv {
  width: 300px;
  height: 400px;

  background-color: var(--primary-light-color);
}

.learn__more__link {
  color: var(--primary-color);
}

.hero__img {
  opacity: 0.8;
  width: 100%;
}

@media screen and (min-width: 600px) {
  .hero__img {
    width: 60%;
    margin: auto;
  }
}
@media screen and (min-width: 1000px) {
  .hero__img {
    width: 85%;
  }
}
</style>

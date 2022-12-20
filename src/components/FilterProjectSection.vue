<template>
  <div>
    <div class="d-none d-lg-block text-center mt-5 link__section">
      <span @click="projects = showAll()" :class="{ 'active-link': active1 }"
        >All</span
      >
      <span
        class="mx-5"
        :class="{ 'active-link': active2 }"
        @click="projects = showFrontEnd()"
        >Front-End</span
      >
      <span
        class="me-5"
        :class="{ 'active-link': active3 }"
        @click="projects = showFullStack()"
        >Full-Stack</span
      >
      <span @click="projects = showUiUx()" :class="{ 'active-link': active4 }"
        >UiUx</span
      >
    </div>

    <div class="d-none mt-4 projects__container d-lg-grid d-xl-grid">
      <div
        v-for="project in projects"
        :key="project.id"
        class="project__img__container"
        ref="projectImgContainer"
      >
        <a :href="project.github" target="_blank">
          <img
            :src="getImage(project.image)"
            :alt="project.mainCategory"
            class="img-fluid"
          />
        </a>
        <div class="bottom__bar">
          <span>{{ project.projectName }}</span>
        </div>
      </div>
    </div>

    <div
      class="d-block d-lg-none d-xl-none projects__small__container pt-4 pt-lg-0"
    >
      <div class="holder__of__imgs" ref="projectImgs">
        <div v-for="project in projects" :key="project.id">
          <a :href="project.github" target="_blank">
            <img
              :src="getImage(project.image)"
              :alt="project.mainCategory"
              class="d-block imgs"
              :class="`img${project.id.toString()}`"
              :id="project.id.toString()"
            />
          </a>
        </div>
      </div>
    </div>
    <div
      class="d-flex justify-content-center mt-3 d-lg-none d-xl-none pb-3 pb-lg-0 carousel__container"
    >
      <div
        class="me-1 carousel__indicators"
        :class="{ indicator__active: first }"
      ></div>
      <div
        class="me-1 carousel__indicators"
        :class="{ indicator__active: second }"
      ></div>
      <div
        class="me-1 carousel__indicators"
        :class="{ indicator__active: third }"
      ></div>
      <div
        class="me-1 carousel__indicators"
        :class="{ indicator__active: fourth }"
      ></div>
      <div
        class="me-1 carousel__indicators"
        :class="{ indicator__active: fifth }"
      ></div>
    </div>
  </div>
</template>
<script>
import sourceData from "../projects";
export default {
  name: "FilterProjectSection",

  data() {
    return {
      sourceData,
      projects: [],
      first: false,
      second: false,
      third: false,
      fourth: false,
      fifth: false,

      currentZindex: 0,
      zIndexs: [1, 2, 3, 4, 5],

      MOVE_THRESHOLD: 100,
      initialX: 0,
      moveX: 0,

      active1: false,
      active2: false,
      active3: false,
      active4: false,
    };
  },
  methods: {
    getImage(nameOfPicture) {
      return require("../assets/img/" + nameOfPicture);
    },

    showFirstIndicator() {
      this.first = true;
      this.second = false;
      this.third = false;
      this.fourth = false;
      this.fifth = false;
    },

    showSecondIndicator() {
      this.second = true;
      this.first = false;
    },

    showThirdIndicator() {
      this.third = true;
      this.first = false;
      this.second = false;
    },

    showFourthIndicator() {
      this.fourth = true;
      this.first = false;
      this.second = false;
      this.third = false;
    },

    showFifthIndicator() {
      this.fifth = true;
      this.first = false;
      this.second = false;
      this.third = false;
      this.fourth = false;
    },

    slideImg(img) {
      img.addEventListener("touchstart", (e) => {
        this.initialX = e.touches[0].clientX;
      });

      img.addEventListener("touchmove", (e) => {
        let currentX = e.touches[0].pageX;
        this.moveX = currentX - this.initialX;
      });

      img.addEventListener("touchend", (event) => {
        let imgZindex = Number(window.getComputedStyle(img).zIndex);
        if (this.moveX < this.MOVE_THRESHOLD * Math.sign(this.moveX)) {
          this.moveX = 0;
          if (event.target.id === "1") {
            this.showSecondIndicator();
            imgZindex = -5;
            img.style.zIndex = imgZindex;
          } else if (event.target.id === "2") {
            this.showThirdIndicator();
            imgZindex = -4;
            img.style.zIndex = imgZindex;
          } else if (event.target.id === "3") {
            this.showFourthIndicator();
            imgZindex = -3;
            img.style.zIndex = imgZindex;
          } else if (event.target.id === "4") {
            this.showFifthIndicator();
            imgZindex = -2;
            img.style.zIndex = imgZindex;
          } else {
            this.showFirstIndicator();
            imgZindex = -1;
            img.style.zIndex = imgZindex;
          }
          if (imgZindex === -1) {
            this.showFifthIndicator();
            img.style.zIndex = "5";
          }
        }
      });
    },

    active(link1, link2, link3, link4) {
      this.active1 = link1;
      this.active2 = link2;
      this.active3 = link3;
      this.active4 = link4;
    },

    showAll() {
      this.active(true, false, false, false);
      return this.sourceData.filter((project) => project.category === "all");
    },

    showFrontEnd() {
      this.active(false, true, false, false);
      return this.sourceData.filter(
        (project) => project.mainCategory === "frontend"
      );
    },
    showFullStack() {
      this.active(false, false, true, false);
      return this.sourceData.filter(
        (project) => project.mainCategory === "fullstack"
      );
    },
    showUiUx() {
      this.active(false, false, false, true);
      return this.sourceData.filter(
        (project) => project.mainCategory === "uiux"
      );
    },
  },

  created() {
    this.projects = this.sourceData;
  },

  mounted() {
    this.first = true;

    const img1 = document.querySelector(".img1");
    const img2 = document.querySelector(".img2");
    const img3 = document.querySelector(".img3");
    const img4 = document.querySelector(".img4");
    const img5 = document.querySelector(".img5");

    this.slideImg(img1);
    this.slideImg(img2);
    this.slideImg(img3);
    this.slideImg(img4);
    this.slideImg(img5);
  },
};
</script>

<style scoped>
.link__section {
  color: var(--primary-light-color);
  font-weight: 400;
}

.link__section span {
  cursor: pointer;
  letter-spacing: 1.3px;
  transition: color 0.5s;
}

.link__section span:hover {
  color: var(--primary-color);
}

.projects {
  cursor: pointer;
}

.projects__container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 300px);
  gap: 10px;
}

@media screen and (max-width: 1440px) {
  .projects__container {
    grid-template-rows: repeat(2, 240px);
  }
}

.projects__container div img {
  display: block;
  height: 100%;
  width: 100%;

  cursor: pointer;

  transform: scale(1);
  transition: all 0.5s;
}

.hide__projects__img {
  transform: scale(0);
}

.project__img__container {
  position: relative;
}

.bottom__bar {
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;

  background: var(--primary-dark-color);
  text-align: center;
}

.bottom__bar span {
  color: var(--primary-light-color);

  transition: all 0.5s;
}

.project__img__container:hover.project__img__container span {
  color: var(--primary-color);
}

/* For mobile and tablets */
.holder__of__imgs {
  height: 230px;
  position: relative;

  overflow: hidden;
}

.projects__small__container div div img {
  height: 230px;
  width: 100%;

  max-width: 600px;

  position: absolute;
  top: 0;
  left: 0;

  border: 3px solid var(--primary-color);

  transform-origin: left center;
}

@media screen and (min-width: 600px) {
  .projects__small__container div div img {
    left: 50%;
    transform: translate(-50%);
  }
}

.projects__small__container div div:nth-of-type(1) img {
  z-index: 5;
}
.projects__small__container div div:nth-of-type(2) img {
  z-index: 4;
}
.projects__small__container div div:nth-of-type(3) img {
  z-index: 3;
}
.projects__small__container div div:nth-of-type(4) img {
  z-index: 2;
}
.projects__small__container div div:nth-of-type(5) img {
  z-index: 1;
}

.carousel__indicators {
  width: 7px;
  height: 7px;
  background: gray;

  border-radius: 50%;
}

.indicator__active {
  background: var(--primary-light-color);
}

.active-link {
  color: var(--primary-color);
}
</style>

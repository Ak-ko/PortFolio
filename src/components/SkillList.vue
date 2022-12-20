<template>
  <div>
    <div class="row" ref="desireSection">
      <div class="col-12 col-md-12 col-lg-4 col-xl-4">
        <div class="mt-3">
          <h4>{{ fskill }}</h4>
          <ul class="mt-4">
            <div
              class="d-block d-lg-flex d-xl-flex justify-content-lg-between justify-content-xl-between"
            >
              <div>
                <li v-for="skill in fskills" class="mb-4" :key="skill.language">
                  <div>
                    <span ref="skillLanguage">{{ skill.language }}</span>

                    <div
                      class="d-block d-lg-none d-xl-none mt-2 mt-lg-0 mt-xl-0 skill__bar"
                      style="width: 0%"
                      :class="skill.bar"
                      ref="frontSkillMobile"
                    >
                      <div class="skill__ball"></div>
                    </div>
                  </div>
                </li>
              </div>

              <div
                class="d-none d-lg-inline-block d-xl-inline-block w-100 h-100 mt-2 ms-0 ms-lg-2 ms-xl-2"
              >
                <li
                  :key="skill.language"
                  v-for="skill in fskills"
                  class="mb-5 align-self-center"
                  style="list-style: none"
                >
                  <div
                    class="d-none d-lg-block d-xl-block mt-lg-0 mt-xl-0 skill__bar"
                    :class="skill.bar"
                    style="width: 0%"
                    ref="frontSkillDesktop"
                  >
                    <div class="skill__ball"></div>
                  </div>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <div class="col-12 col-md-12 col-lg-4 col xl-4">
        <div class="mt-3">
          <h4>{{ bskill }}</h4>
          <ul class="mt-4">
            <div
              class="d-block d-lg-flex d-xl-flex justify-content-lg-between justify-content-xl-between"
            >
              <div>
                <li v-for="skill in bskills" class="mb-4" :key="skill.language">
                  <div class="">
                    <span>{{ skill.language }}</span>
                    <div
                      class="d-block d-lg-none d-xl-none mt-2 mt-lg-0 mt-xl-0 skill__bar"
                      :class="skill.bar"
                      style="width: 0%"
                      ref="backSkillMobile"
                    >
                      <div class="skill__ball"></div>
                    </div>
                  </div>
                </li>
              </div>
              <div class="d-none d-lg-block d-xl-block w-100 h-100 mt-2">
                <li
                  :key="skill.language"
                  v-for="skill in bskills"
                  class="mb-5 ms-0 mt-0 mt-lg-1 mt-xl-1 ms-lg-3 ms-xl-3 align-self-center"
                  style="list-style: none"
                >
                  <div
                    class="d-none d-lg-block d-xl-block mt-lg-0 mt-xl-0 skill__bar"
                    :class="skill.bar"
                    style="width: 0%"
                    ref="backSkillDesktop"
                  >
                    <div class="skill__ball"></div>
                  </div>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <div class="col-12 col-md-12 col-lg-4 col-xl-4">
        <div class="mt-3">
          <h4>{{ uskill }}</h4>
          <ul class="mt-4">
            <div
              class="d-block d-lg-flex d-xl-flex justify-content-lg-between justify-content-xl-between"
            >
              <div>
                <li v-for="skill in uskills" class="mb-4" :key="skill.language">
                  <div class="">
                    <span>{{ skill.language }}</span>
                    <div
                      class="d-block d-lg-none d-xl-none mt-2 mt-lg-0 mt-xl-0 skill__bar"
                      :class="skill.bar"
                      style="width: 0%"
                      ref="uiSkillMobile"
                    >
                      <div class="skill__ball"></div>
                    </div>
                  </div>
                </li>
              </div>
              <div class="d-none d-lg-block d-xl-block w-100 h-100 mt-2">
                <li
                  :key="skill.language"
                  v-for="skill in uskills"
                  class="mt-0 mb-5 ms-0 mt-lg-1 mt-xl-1 ms-lg-3 ms-xl-3 align-self-center"
                  style="list-style: none; width: 0%"
                  ref="uiSkillDesktop"
                >
                  <div
                    class="d-none d-lg-block d-xl-block mt-lg-0 mt-xl-0 skill__bar"
                    :class="skill.bar"
                    v-motion
                    :initial="{ width: '0%' }"
                    :enter="{ width: skill.percent + '%' }"
                    :delay="900"
                  >
                    <div class="skill__ball"></div>
                  </div>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillListComponent",

  props: {
    fskill: {
      type: String,
      required: true,
    },
    fskills: {
      type: Array,
      required: true,
    },

    bskill: {
      type: String,
      required: true,
    },
    bskills: {
      type: Array,
      required: true,
    },

    uskill: {
      type: String,
      require: true,
    },

    uskills: {
      type: Array,
      require: true,
    },
  },

  methods: {
    getFrontPercents() {
      let percents = [];
      this.fskills.forEach((skill) => {
        percents.push(skill.percent);
      });
      return percents;
    },

    getBackPercents() {
      let percents = [];
      this.bskills.forEach((skill) => {
        percents.push(skill.percent);
      });
      return percents;
    },
    getUiPercents() {
      let percents = [];
      this.uskills.forEach((skill) => {
        percents.push(skill.percent);
      });
      return percents;
    },
  },

  mounted() {
    this.$refs.skillLanguage.forEach((skill) => {
      if (skill.textContent === "BS") {
        skill.onmouseover = () => (skill.textContent = "BootStrap");
        skill.onmouseout = () => (skill.textContent = "BS");
      }

      if (skill.textContent === "TW") {
        skill.onmouseover = () => (skill.textContent = "Tailwind");
        skill.onmouseout = () => (skill.textContent = "TW");
      }
    });

    let frontPercents = this.getFrontPercents();
    let backPercents = this.getBackPercents();
    let uiPercents = this.getUiPercents();

    let i = 0;

    window.onscroll = () => {
      const desire_position = this.$refs.desireSection;
      const frontBars = this.$refs.frontSkillMobile;
      const frontBarsD = this.$refs.frontSkillDesktop;

      const backBars = this.$refs.backSkillMobile;
      const backBarsD = this.$refs.backSkillDesktop;

      const uiBars = this.$refs.uiSkillMobile;
      const uiBarsD = this.$refs.uiSkillDesktop;

      if (window.scrollY > desire_position.offsetHeight * 2 + 700) {
        while (i < frontBars.length) {
          frontBars[i].style.width = `${frontPercents[i]}%`;
          frontBarsD[i].style.width = `${frontPercents[i]}%`;

          frontBars[i].style.transition = "all 0.5s";
          frontBarsD[i].style.transition = "all 0.5s";
          i++;
        }
        i = 0;
        while (i < backBars.length) {
          backBars[i].style.width = `${backPercents[i]}%`;
          backBarsD[i].style.width = `${backPercents[i]}%`;

          backBars[i].style.transition = "all 0.5s";
          backBarsD[i].style.transition = "all 0.5s";
          i++;
        }
        i = 0;
        while (i < uiBars.length) {
          uiBars[i].style.width = `${uiPercents[i]}%`;
          uiBarsD[i].style.width = `${uiPercents[i]}%`;

          uiBars[i].style.transition = "all 0.5s";
          uiBarsD[i].style.transition = "all 0.5s";
          i++;
        }
      }
    };
  },
};
</script>

<style scoped>
ul li span {
  color: var(--primary-light-color);
}

ul li::marker {
  color: var(--primary-color) !important;
}

.skill__ball {
  width: 10px;
  height: 10px;

  background: var(--primary-color);
  border-radius: 50%;

  position: absolute;
  top: 50%;
  left: 0;

  transform: translateY(-50%);
}

.skill__bar {
  height: 2px;

  background: var(--primary-color);

  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;

  position: relative;
}
/*
.html__bar {
  width: 100%;
}

.css__bar {
  width: 85%;
}

.js__bar {
  width: 80%;
}

.bootstrap__bar {
  width: 90%;
}

.tailwind__bar {
  width: 80%;
}

.vue__bar {
  width: 75%;
}
*/

/* 
.php__bar {
  width: 80%;
}

.laravel__bar {
  width: 80%;
}

.django__bar {
  width: 75%;
}

.api__bar,
.mysql__bar {
  width: 90%;
}

.figma__bar {
  width: 60%;
}
*/
.delay__text {
  transition: all 0.5s;
}
</style>

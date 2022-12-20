<template>
  <div class="py-5">
    <div>
      <SectionTitle
        upperHeader="SKILLS"
        bigHeader="What I Can Do"
        paragraph="These are my expert things."
      />
    </div>
    <SkillList
      fskill="Web Front-End"
      bskill="Web Back-End"
      uskill="Web Design App"
      :fskills="frontEndSkills"
      :bskills="backEndSkills"
      :uskills="uiUxSkills"
      class="mt-5 pt-5 mb-3"
    />

    <div
      class="d-flex flex-column flex-md-row justify-content-center justify-content-lg-start justify-content-xl-start"
    >
      <CallToAction
        link="https://documentcloud.adobe.com/gsuiteintegration/index.html?state=%7B%22ids%22%3A%5B%221_iNdf9PE9TAWTZ6LPQbN4_dJ4-Wyr2n2%22%5D%2C%22action%22%3A%22open%22%2C%22userId%22%3A%22112621405753612713574%22%2C%22resourceKeys%22%3A%7B%7D%7D"
        target="_blank"
        btnType="Download Resume"
        class="px-3 py-2 text-center text-md-start text-lg-start text-xl-start"
      />
    </div>
  </div>
</template>

<script>
import SectionTitle from "./SectionTitle.vue";
import SkillList from "./SkillList.vue";
import CallToAction from "./CallToAction.vue";

export default {
  name: "SkillSectionComponent",
  components: {
    SectionTitle,
    SkillList,
    CallToAction,
  },
  data() {
    return {
      frontEndSkills: [
        {
          language: "HTML",
          bar: "html__bar",
          percent: 100,
        },
        {
          language: "CSS",
          bar: "css__bar",
          percent: 85,
        },
        {
          language: "JS",
          bar: "js__bar",
          percent: 80,
        },
        {
          language: "BS",
          bar: "bootstrap__bar",
          percent: 90,
        },
        {
          language: "TW",
          bar: "tailwind__bar",
          percent: 80,
        },
        {
          language: "Vue 3",
          bar: "vue__bar",
          percent: 75,
        },
      ],

      backEndSkills: [
        {
          language: "Php",
          bar: "php__bar",
          percent: 80,
        },
        {
          language: "Laravel",
          bar: "laravel__bar",
          percent: 80,
        },
        {
          language: "Django",
          bar: "django__bar",
          percent: 75,
        },
        {
          language: "Api",
          bar: "api__bar",
          percent: 90,
        },
        {
          language: "MySQL",
          bar: "mysql__bar",
          percent: 90,
        },
      ],

      uiUxSkills: [
        {
          language: "Figma",
          bar: "figma__bar",
          percent: 60,
        },
      ],
    };
  },
  methods: {
    getImage(nameOfPicture) {
      return require("../assets/img/" + nameOfPicture);
    },
  },
};
</script>

<style scoped></style>

<template>
  <main class="py-5">
    <div class="mt-3 pt-4 text-center">
      <SectionTitle
        upperHeader="SERVICES"
        bigHeader="What I am Good At"
        paragraph="These are my passions."
      />
      <div class="row mt-5 pb-5 g-3">
        <div class="col-12 col-md-6 col-lg-3 col-xl-3">
          <div class="card card__component">
            <div class="card-body p-0 py-5">
              <div
                class="d-flex justify-content-center align-items-center mt-5"
              >
                <div
                  class="d-flex justify-content-center align-items-center flex-column"
                >
                  <fa-icon
                    icon="fa-solid fa-pencil"
                    class="mb-5"
                    style="font-size: 90px"
                  />
                  <span class="h5 card__text">Ui / Ux Designer</span>
                </div>
              </div>
              <div class="progress rounded-0 progress__bar">
                <div
                  class="progress-bar"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 50%"
                >
                  <span style="margin-top: 1px">50%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 col-xl-3">
          <div class="card card__component">
            <div class="card-body p-0 py-5">
              <div
                class="d-flex justify-content-center align-items-center mt-5"
              >
                <div
                  class="d-flex justify-content-center align-items-center flex-column"
                >
                  <fa-icon
                    icon="fa-solid fa-code"
                    class="mb-5"
                    style="font-size: 90px"
                  />
                  <span class="h5 card__text">Front-End Dev</span>
                </div>
              </div>
              <div class="progress rounded-0 progress__bar">
                <div
                  class="progress-bar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 90%"
                >
                  <span style="margin-top: 1px">90%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 col-xl-3">
          <div class="card card__component">
            <div class="card-body p-0 py-5">
              <div
                class="d-flex justify-content-center align-items-center mt-5"
              >
                <div
                  class="d-flex justify-content-center align-items-center flex-column"
                >
                  <fa-icon
                    icon="fa-solid fa-server"
                    class="mb-5"
                    style="font-size: 90px"
                  />
                  <span class="h5 card__text">Back-End Dev</span>
                </div>
              </div>
              <div class="progress rounded-0 progress__bar">
                <div
                  class="progress-bar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 75%"
                >
                  <span style="margin-top: 1px">75%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 col-xl-3">
          <div class="card card__component">
            <div class="card-body p-0 py-5">
              <div
                class="d-flex justify-content-center align-items-center mt-5"
              >
                <div
                  class="d-flex justify-content-center align-items-center flex-column"
                >
                  <fa-icon
                    icon="fa-solid fa-comment"
                    class="mb-5"
                    style="font-size: 90px"
                  />
                  <span class="h5 card__text">Communication</span>
                </div>
              </div>
              <div class="progress rounded-0 progress__bar">
                <div
                  class="progress-bar"
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 95%"
                >
                  <span style="margin-top: 1px">95%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-0 pt-0 mt-md-5 mt-lg-5 mt-xl-5 pt-lg-5 pt-xl-5">
        <a
          href="#skill-section"
          class="d-flex justify-content-center align-items-center mx-auto downward__link"
        >
          <fa-icon icon="fa-solid fa-angle-down" />
        </a>
      </div>
    </div>
  </main>
</template>

<script>
import SectionTitle from "./SectionTitle.vue";
export default {
  name: "ServiceSectionComponent",

  components: {
    SectionTitle,
  },
};
</script>

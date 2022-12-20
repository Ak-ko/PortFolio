<template>
  <div class="pt-5 py-2">
    <div class="container">
      <SectionTitle
        upperHeader="CONTACTS"
        bigHeader="Where I am"
        paragraph="Catch me right here."
      />

      <div class="mt-5 px-0 px-lg-5">
        <div class="row mb-2 mb-lg-0 md-xl-0 g-2">
          <div class="col-12 col-lg-4 col-xl-4">
            <div class="mb-2">
              <a
                href="mailto:aungkhant.kk111@gmail.com"
                class="d-flex align-items-center px-3 footer__action__buttons"
                target="_blank"
              >
                <fa-icon
                  icon="fa-solid fa-envelope"
                  class="fs-4 footer__icons"
                />
                <span
                  class="d-none d-md-block d-lg-block d-xl-block fw-bold ms-3"
                  >aungkhant.kk111@gmail.com</span
                >
                <span class="d-block d-md-none d-lg-none d-xl-none fw-bold ms-3"
                  >aungkhant.kk111@...</span
                >
              </a>
            </div>
          </div>
          <div class="col-12 col-lg-4 col-xl-4">
            <div class="mb-2">
              <a
                href="tel:+959422273300"
                class="d-flex align-items-center px-3 footer__action__buttons"
              >
                <fa-icon
                  icon="fa-solid fa-phone-flip"
                  class="fs-4 footer__icons"
                />
                <span class="fw-bold ms-3">+95 9 422 273 300</span>
              </a>
            </div>
          </div>
          <div class="col-12 col-lg-4 col-xl-4 mx-md-auto mx-lg-0 mx-xl-0">
            <div class="mb-2">
              <a
                href="https://www.facebook.com/profile.php?id=100008789864076"
                target="_blank"
                class="d-flex align-items-center px-3 footer__action__buttons"
              >
                <fa-icon
                  icon="fa-brands fa-facebook"
                  class="fs-4 footer__icons"
                />
                <span class="fw-bold ms-3">Aung Khant Ko Ko</span>
              </a>
            </div>
          </div>
        </div>
        <div class="row g-2 justify-content-center">
          <div class="col-12 col-lg-4">
            <div class="mb-2">
              <a
                href="https://www.linkedin.com/in/aung-khant-ko-ko-6525b1214/"
                target="_blank"
                class="d-flex align-items-center px-3 footer__action__buttons"
              >
                <fa-icon
                  icon="fa-brands fa-linkedin"
                  class="fs-4 footer__icons"
                />
                <span class="fw-bold ms-3">Aung Khant Ko Ko</span>
              </a>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div>
              <a
                href="https://wa.me/+959422273300"
                target="_blank"
                class="d-flex align-items-center px-3 footer__action__buttons"
              >
                <fa-icon
                  icon="fa-brands fa-whatsapp"
                  class="fs-4 footer__icons"
                />
                <span class="fw-bold ms-3">Aung Khant</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-5 d-flex justify-content-center justify-content-md-end justify-content-lg-end"
      >
        <a
          href="#hero-section"
          class="d-flex justify-content-center align-items-center ms-0 ms-lg-auto ms-xl-auto mx-lg-0 mx-xl-0 downward__link footer__upward__link"
        >
          <fa-icon icon="fa-solid fa-angle-down" />
        </a>
      </div>
    </div>
    <div class="copyright">
      <hr class="mt-5 copyright__section__line" />
      <div class="text-center text-light pb-2">
        <fa-icon icon="fa-solid fa-copyright" class="me-1" />Copyright - Aung
        Khant | All Rights Reserved.
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "./SectionTitle.vue";
export default {
  name: "FooterSectionComponent",
  components: {
    SectionTitle,
  },
};
</script>
<style scoped>
.footer__action__buttons {
  width: 100%;
  height: 50px;

  font-family: Nunito, sans-serif;

  color: var(--primary-color);

  background: var(--primary-dark-color);
}

.footer__icons {
  color: var(--primary-light-color);
}

.footer__upward__link {
  border-radius: 0;
}

.footer__upward__link .fa-angle-down {
  transform: rotate(180deg);
}

.copyright__section__line {
  border-top-color: var(--primary-color);
  opacity: 1;
}
</style>

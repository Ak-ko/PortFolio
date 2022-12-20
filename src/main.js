import { createApp } from "vue";
import App from "./App.vue";

// bootstrap 5
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// custome css
import "../src/assets/css/style.css";

// font awesome
// library
import { library } from "@fortawesome/fontawesome-svg-core";

// icon component
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// icon
import {
  faFacebook,
  faTelegram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import {
  faArrowDown,
  faPencil,
  faCode,
  faServer,
  faComment,
  faAngleDown,
  faEnvelope,
  faPhoneFlip,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";

// @vueuse/motion
import { MotionPlugin } from "@vueuse/motion";

library.add(
  faFacebook,
  faTelegram,
  faLinkedin,
  faWhatsapp,
  faArrowDown,
  faPencil,
  faCode,
  faServer,
  faComment,
  faAngleDown,
  faEnvelope,
  faPhoneFlip,
  faCopyright
);

createApp(App)
  .component("fa-icon", FontAwesomeIcon)
  .use(MotionPlugin)
  .mount("#app");

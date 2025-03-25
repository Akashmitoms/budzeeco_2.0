import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PopUp from "./components/common/PopUp.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */

import {
  faAngleDown,
  faAnglesRight,
  faBars,
  faBullseye,
  faChartLine,
  faChevronRight,
  faCircleCheck,
  faCircleDollarToSlot,
  faCoins,
  faEnvelope,
  faFileInvoiceDollar,
  faFileShield,
  faFileSignature,
  faGraduationCap,
  faHeadset,
  faHouseCircleCheck,
  faMapLocation,
  faMapLocationDot,
  faMobileScreenButton,
  faMoneyBills,
  faMoneyBillTrendUp,
  faPeopleArrows,
  faPersonCircleCheck,
  faPhoneVolume,
  faPiggyBank,
  faSackDollar,
  faUserShield,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(
  faPiggyBank,
  faMoneyBillTrendUp,
  faCoins,
  faChartLine,
  faFileInvoiceDollar,
  faHouseCircleCheck,
  faSackDollar,
  faFileSignature,
  faCircleDollarToSlot,
  faBullseye,
  faMoneyBills,
  faChevronRight,
  faGraduationCap,
  faBars,
  faAnglesRight,
  faPhoneVolume,
  faEnvelope,
  faMapLocationDot,
  faFacebook,
  faTwitter,
  faInstagram,
  faFileShield,
  faCircleCheck,
  faAngleDown,
  faXmark,
  faPersonCircleCheck,
  faHeadset,
  faPhoneVolume,
  faMobileScreenButton,
  faPeopleArrows,
  faUserShield,
  faLinkedin,
  faYoutube,
  faXmark
);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.component("pop-up", PopUp);
app.use(router);

app.mount("#app");

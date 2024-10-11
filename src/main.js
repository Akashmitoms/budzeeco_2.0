import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */

import { faAngleDown, faAnglesRight, faBars, faBullseye, faChartLine, faChevronRight, faCircleCheck, faCircleDollarToSlot, faCoins, faEnvelope, faFileInvoiceDollar, faFileShield, faFileSignature, faGraduationCap, faHouseCircleCheck, faMapLocation, faMapLocationDot, faMoneyBills, faMoneyBillTrendUp, faPhoneVolume, faPiggyBank, faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faPiggyBank, faMoneyBillTrendUp, faCoins, faChartLine, faFileInvoiceDollar, faHouseCircleCheck, faSackDollar, faFileSignature, faCircleDollarToSlot,
    faBullseye, faMoneyBills, faChevronRight, faGraduationCap, faBars, faAnglesRight, faPhoneVolume, faEnvelope, faMapLocationDot, faFacebook, faTwitter, faInstagram, 
    faFileShield, faCircleCheck, faAngleDown )


const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')

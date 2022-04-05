import './css/styles/index.css'

// import VuetomUI from '@lauset/vuetom-ui'
import Layout from './layouts/Layout.vue'
import NotFound from './layouts/NotFound.vue'

// VuetomUI
import VtAlert from './vuetomui/alert/index'
import VtButton from './vuetomui/button/index'
import VtCard from './vuetomui/card/index'
import VtIcon from './vuetomui/icon/index'
import VtLink from './vuetomui/link/index'
import VtRow from './vuetomui/row/index'
import VtCol from './vuetomui/col/index'

const components = [
  VtAlert,
  VtButton,
  VtCard,
  VtIcon,
  VtLink,
  VtRow,
  VtCol
]

const install = function (app, opts = {}) {
  components.forEach(component => {
    app.component(component.name, component)
  })

// TODO: 之后进行优化，可以通过 app.config.globalProperties 进行修正
// Vue.prototype.$ELEMENT = {
//   size: opts.size || '',
//   zIndex: opts.zIndex || 2000
// };
// VuetomUI.$ELEMENT = {
//   size: opts.size || '',
//   zIndex: opts.zIndex || 2000
// }
// app.config.globalProperties.$msgbox = MessageBox;
// app.config.globalProperties.$alert = MessageBox.alert;
// app.config.globalProperties.$confirm = MessageBox.confirm;
// app.config.globalProperties.$prompt = MessageBox.prompt;
// app.config.globalProperties.$message = message
// app.config.globalProperties.$notify = Notification
}

const VuetomUI = {
  name: 'VuetomUI',
  version: '2.3.0',
  install,
  VtAlert,
  VtButton,
  VtCard,
  VtIcon,
  VtLink,
  VtRow,
  VtCol
}

const VuetomThemeConfig = []

const theme = {
  Layout,
  NotFound
}

export default theme
export { VuetomUI, VuetomThemeConfig }
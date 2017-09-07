import Popover from './components/popover.vue'
import directive from './components/popover.js'
import './styles/less/index.less'

const install = function (Vue, opts = {}) {
  if (install.installed) return

  Vue.component('VmPopover', Popover)
  Vue.directive('popover', directive)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  Popover,
  directive
}

export default {
  install,
  Popover,
  directive
}
import Menu from './menu.vue'

Menu.install = function (Vue) {
  Vue.component(Menu.name, Menu)
}

export const ZoneMenu = Menu

export default ZoneMenu

export * from './'

import Button from './button.vue'

Button.install = function (Vue) {
  Vue.component(Button.name, Button)
}

export const ZoneButton = Button

export default ZoneButton

export * from './'

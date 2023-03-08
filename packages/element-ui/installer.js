import { ZoneMenu } from './components/menu'

const elmUiComponents = [
  ZoneMenu
]

export const installer = (Vue) => {
  elmUiComponents.forEach((comp) => {
    Vue.component(comp.name, comp)
  })
}

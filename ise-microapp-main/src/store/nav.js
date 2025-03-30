import { ref } from 'vue'

export const navStatus = ref(true)

export const changeNavStatus = (value) => {
  navStatus.value = value
}

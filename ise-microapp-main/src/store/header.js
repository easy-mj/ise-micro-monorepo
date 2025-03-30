import { ref } from 'vue'

export const headerStatus = ref(true)

export const changeHeaderStatus = (value) => {
  headerStatus.value = value
}

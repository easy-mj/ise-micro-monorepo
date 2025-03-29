import { ref } from 'vue'

export const loadingStatus = ref(false)

export const changeLoading = (status) => {
  loadingStatus.value = status
}

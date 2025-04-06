import * as appInfo from './index'

export const subNavList = [
  {
    name: 'ise-microapp-vue2',
    activeRule: '/ise-microapp-vue2',
    container: '#micro-subapp-container',
    entry: '//localhost:8001',
    props: {
      appInfo
    }
  },
  {
    name: 'ise-microapp-vue3',
    activeRule: '/ise-microapp-vue3',
    container: '#micro-subapp-container',
    entry: '//localhost:8002',
    props: {
      appInfo
    }
  },
  {
    name: 'ise-microapp-react15',
    activeRule: '/ise-microapp-react15',
    container: '#micro-subapp-container',
    entry: '//localhost:8003',
    props: {
      appInfo
    }
  },
  {
    name: 'ise-microapp-react16',
    activeRule: '/ise-microapp-react16',
    container: '#micro-subapp-container',
    entry: '//localhost:8004',
    props: {
      appInfo
    }
  }
]

const childProcess = require('child_process')
const path = require('path')

const filePath = {
  'ise-microapp-vue2': path.join(__dirname, '../ise-microapp-vue2'),
  'ise-microapp-vue3': path.join(__dirname, '../ise-microapp-vue3'),
  'ise-microapp-react15': path.join(__dirname, '../ise-microapp-react15'),
  'ise-microapp-react16': path.join(__dirname, '../ise-microapp-react16'),
  'ise-microapp-service': path.join(__dirname, '../ise-microapp-service')
}

// cd 子应用的目录，使用 pnpm serve 启动项目
function runChild() {
  Object.values(filePath).forEach((item) => {
    childProcess.spawn(`cd ${item} && pnpm serve`, {
      stdio: 'inherit',
      shell: true
    })
  })
}
runChild()

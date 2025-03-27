const childProcess = require('child_process')
const path = require('path')

const filePath = {
  'ise-microapp-vue2': path.join(__dirname, '../ise-microapp-vue2'),
  'ise-microapp-vue3': path.join(__dirname, '../ise-microapp-vue3')
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

import React, { useEffect } from 'react'
import globalConfig from '../../config/globalConfig'
import LoginPanel from './components/LoginPanel.jsx'
import { getMain } from '../../utils/mainApp.js'

import './index.scss'

const Login = () => {
  useEffect(() => {
    // 登录页面中隐藏头部和导航栏
    const { changeHeaderStatus, changeNavStatus } = getMain().appInfo
    changeHeaderStatus(false)
    changeNavStatus(false)
  }, [])

  return (
    <div className="login">
      <img
        className="loginBackground"
        src={`${globalConfig.baseUrl}/login-background.png`}
      />
      <LoginPanel />
    </div>
  )
}

export default Login

import React from 'react'
import globalConfig from '../../config/globalConfig'
import LoginPanel from './components/LoginPanel.jsx'
import { main } from '../../utils/global'

import './index.scss'

const Login = () => {
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

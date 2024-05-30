import { useEffect } from 'react'
import request from '@/utils/request'

const Login = () => {
  useEffect(() => {
    request.post('/user/login', {
      id: 12345
    })
  }, [])
  return <div>Login</div>
}

export default Login

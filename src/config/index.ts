/**
 * 环境配置封装
 * */

type ENV = 'dev' | 'test' | 'prd'

// let env: ENV = 'dev'

// if (location.host === 'localhost:8080') {
//   env = 'dev'
// } else if (location.host === 'driver-stg.marsview.cc') {
//   env = 'test'
// } else {
//   env = 'prd'
// }

const env = (document.documentElement.dataset.nev as ENV) || 'dev'

const config = {
  dev: {
    baseApi: '/api',
    uploadApi: 'http://api-driver-dev.marsview.cc',
    mock: false,
    mockApi: ''
  },
  test: {
    baseApi: '/api',
    uploadApi: 'http://api-driver-dev.marsview.cc',
    mock: true,
    mockApi: ''
  },
  prd: {
    baseApi: '/api',
    uploadApi: 'http://api-driver-dev.marsview.cc',
    mock: true,
    mockApi: ''
  }
}

export default {
  env,
  ...config[env]
}

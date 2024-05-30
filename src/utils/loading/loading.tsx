import { Spin } from 'antd'
import './loading.less'

const Loading = ({ tip = 'Loading' }: { tip?: string }) => {
  return (
    <Spin tip={tip} size='large' className='request-loading'>
      <div></div>
    </Spin>
  )
}

export default Loading

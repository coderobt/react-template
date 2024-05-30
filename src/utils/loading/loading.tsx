import { Spin } from 'antd'

const Loading = ({ tip = 'Loading' }: { tip?: string }) => {
  return <Spin tip={tip} className='request-loading' />
}

export default Loading

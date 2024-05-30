import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const nav = useNavigate();

  const handleClick = () => {
    nav('/');
  };
  return (
    <Result
      status='403'
      title='403'
      subTitle='抱歉，您没有此页面的访问权限'
      extra={
        <Button type='primary' onClick={handleClick}>
          回首页
        </Button>
      }
    />
  );
};

export default NotFound;

import { useLocation } from 'react-router-dom';
import HeaderBanner from './modules/HeaderBanner';
import List from './modules/List'
export function Component() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // 获取具体的查询参数
  const keyword = searchParams.get('keyword');

  return (
    <div className='w-full h-full flex flex-col'>
      <HeaderBanner keyword={keyword} />
      <List keyword={keyword} />
    </div>
  );
}
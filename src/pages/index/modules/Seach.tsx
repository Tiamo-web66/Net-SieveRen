import logo from '@/assets/imgs/logo.png';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { AutoComplete, message, Input, Card } from 'antd';

const tabList = [
  {
    key: 'tab1',
    tab: '今日热门',
  },
  {
    key: 'tab2',
    tab: '本月热门',
  },
];

const contentList: Record<string, React.ReactNode> = {
  tab1: <><a className='block' href="" title='2797-逆袭从预知未来开始（88集）'>2797-逆袭从预知未来开始（88集）</a><a className='block' href="" title='2797-逆袭从预知未来开始（88集）'>2797-逆袭从预知未来开始（87集）</a></>,
  tab2: <><a className='block' href="" title='新增资源-书法合集'>新增资源-书法合集</a><a className='block' href="" title='2797-不装了我是榜一大哥（71集）张子寒&桉淇'>2797-不装了我是榜一大哥（71集）张子寒&桉淇</a></>,
};

const Seach = memo(() => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [messageApi, contextHolder] = message.useMessage();
  function onSearchFunc(value: string) {
    if (value === "") {
      return messageApi.open({
        type: 'warning',
        content: t('common.searchTip'),
      });
    }
    navigate(`/seach?keyword=${encodeURIComponent(value)}`);
  }

  const [activeTabKey1, setActiveTabKey1] = useState<string>('tab1');

  const onTab1Change = (key: string) => {
    setActiveTabKey1(key);
  };

  return (
    <div className="h-full flex flex-col items-center pt-8 overflow-y-scroll">
      <div className="h-80px">
        <div className="box-border cursor-pointer pb-3 text-center text-2xl font-extrabold">
          <img
            src={logo}
            alt=""
            className="mr-5 inline-block h-45px w-45px rounded-full"
          />
          <span>Net-SieveRen</span>
        </div>
        <span className="block text-sm">致力于免费提供夸克网盘、阿里云盘、迅雷网盘的资源搜索服务</span>
      </div>
      <div className='w-108 my-10'>
          {contextHolder}
          <AutoComplete
            popupMatchSelectWidth={252}
            style={{ width: '100%' }}
          >
            <Input.Search size="large" placeholder="请输入关键字进行搜索" onSearch={(value) => onSearchFunc(value)} />
        </AutoComplete>
      </div>
      <div className='mb-3'>
        <Card size="small" title="公告" className='w-108'>
          <p>📢 通知：电影，电视剧，综艺都可以搜索，搜索结果不理想，试一试精确模式和时间排序</p>
        </Card>
      </div>
      <div className='w-108 mt-3'>
        <Card
          style={{ width: '100%' }}
          title="热门资源"
          tabList={tabList}
          activeTabKey={activeTabKey1}
          onTabChange={onTab1Change}
        >
          {contentList[activeTabKey1]}
        </Card>
      </div>
    </div>
  );
});
export default Seach;

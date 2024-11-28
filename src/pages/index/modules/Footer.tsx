import DarkModeContainer from '@/components/stateless/common/DarkModeContainer';

const Footer = memo(() => {
  return (
    <DarkModeContainer className='flex flex-col justify-center items-center px-50 max-h-70px'>
      <span className='text-center font-normal text-xs text-slate-500'>
          敬告与声明：您的请求将通过第三方搜索 如bing、谷歌、百度等引擎获得原始数据,
          最终以非人工方式自动生成美化页面，用于精确呈现。本站不产生/存储任何数据,
          也从未参与录制、上传，所有资源均来自网络、及网友提交； 无意冒犯任何公司、用户的权益、版权，
          你可以邮件联系，并提供相应证明和需要屏蔽的关键词 (Tiamo@163.com) 欢迎有权重的同类型网站来交换友链；
      </span>
      <span className='cursor-pointer'>
          © 2024 Net-SieveRen  Powered by TiAmo
      </span>
    </DarkModeContainer>
  );
});
export default Footer;

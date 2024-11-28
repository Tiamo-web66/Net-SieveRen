import ThemeSchemaSwitch from '@/components/stateful/ThemeSchemaSwitch';
import DarkModeContainer from '@/components/stateless/common/DarkModeContainer';
import LangSwitch from '@/components/stateful/LangSwitch';
import logo from '@/assets/imgs/logo.png';
import type { AutoCompleteProps } from 'antd';
import HeaderUserAvatar from './HeaderUserAvater';
import { AutoComplete, Input } from 'antd';
interface HeaderBannerProps {
  keyword?: string | null; // 可选的字符串类型
}
const getRandomInt = (max: number, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

const searchResult = (query: string) =>
  new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>
              Found {query} on{' '}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
});
const HeaderBanner: React.FC<HeaderBannerProps> = ({ keyword }) => {
  const { t } = useTranslation();
  const [options, setOptions] = useState<AutoCompleteProps['options']>([]);
  const handleSearch = (value: string) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value: string) => {
    console.log('onSelect', value);
  };
  return (
    <DarkModeContainer className="flex flex-y-center justify-between justify-items-stretch p-4 px-8 pl-32 shadow-header">
      <div className="h-full flex-y-center cursor-pointer text-2xl font-extrabold">
        <img
          src={logo}
          alt=""
          className="mr-5 inline-block h-45px w-45px rounded-full"
        />
        云渊
      </div>
      <div>
        <AutoComplete
            popupMatchSelectWidth={252}
            style={{ width: 300 }}
            size="large"
            options={options}
            onSelect={onSelect}
            onSearch={handleSearch}
            defaultValue= {keyword}
            >
            <Input.Search size="large" placeholder="请输入关键词进行搜索！" enterButton />
        </AutoComplete>
      </div>
      <div className="h-full flex-y-center justify-end">
        <LangSwitch />
        <ThemeSchemaSwitch />
        <HeaderUserAvatar />
      </div>
    </DarkModeContainer>
  );
};

export default HeaderBanner;

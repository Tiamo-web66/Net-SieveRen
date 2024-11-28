import ThemeSchemaSwitch from '@/components/stateful/ThemeSchemaSwitch';
import DarkModeContainer from '@/components/stateless/common/DarkModeContainer';
import LangSwitch from '@/components/stateful/LangSwitch';
import logo from '@/assets/imgs/logo.png';
import HeaderUserAvatar from './HeaderUserAvater';
const HeaderBanner = () => {
  return (
    <DarkModeContainer className="flex flex-y-center justify-between justify-items-stretch p-4 px-8 pl-32 shadow-header">
      <div className="h-full flex-y-center cursor-pointer text-2xl font-extrabold">
        <img
          src={logo}
          alt=""
          className="mr-5 inline-block h-45px w-45px rounded-full"
        />
        Net-SieveRen
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

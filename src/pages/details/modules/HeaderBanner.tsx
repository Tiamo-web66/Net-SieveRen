import ThemeSchemaSwitch from '@/components/stateful/ThemeSchemaSwitch';
import DarkModeContainer from '@/components/stateless/common/DarkModeContainer';
import LangSwitch from '@/components/stateful/LangSwitch';
import logo from '@/assets/imgs/logo.png';
import HeaderUserAvatar from './HeaderUserAvater';
import { useNavigate } from 'react-router-dom';

const APPTILE  = import.meta.env.VITE_APP_TITLE;
const navigate = useNavigate();
function goIndex() {
  navigate('/index')
}
const HeaderBanner = () => {
  return (
    <DarkModeContainer className="flex flex-y-center justify-between justify-items-stretch p-4 px-8 pl-32 shadow-header">
      <div className="h-full flex-y-center cursor-pointer text-2xl font-extrabold">
        <img
          src={logo}
          alt=""
          className="mr-5 inline-block h-45px w-45px rounded-full"
        />
        {APPTILE}
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

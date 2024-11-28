import { Button, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import ButtonIcon from '@/components/stateless/custom/ButtonIcon';
import SvgIcon from '@/components/stateless/custom/SvgIcon';
import { selectToken, selectUserInfo } from '@/store/slice/auth';

const HeaderUserAvatar = memo(() => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const token = useAppSelector(selectToken);
  const userInfo = useAppSelector(selectUserInfo);
  function logout() {
    window?.$modal?.confirm({
      title: t('common.tip'),
      content: t('common.logoutConfirm'),
      okText: t('common.confirm'),
      cancelText: t('common.cancel'),
      onOk: () => {

      }
    });
  }
  function loginOrRegister() {
    navigate('/login');
  }

  const items: MenuProps['items'] = [
    {
      label: (
        <div className="flex-center gap-8px">
          <SvgIcon
            icon="ph:user-circle"
            className="text-icon"
          />
          {t('common.managementAdmin')}
        </div>
      ),
      key: '0'
    },
    {
      type: 'divider'
    },
    {
      label: (
        <div className="flex-center gap-8px">
          <SvgIcon
            icon="ph:sign-out"
            className="text-icon"
          />
          {t('common.logout')}
        </div>
      ),
      key: '1'
    }
  ];
  function onClick({ key }: { key: string }) {
    if (key === '1') {
      logout();
    } else {
      navigate('/home');
    }
  }
  return token ? (
    <Dropdown
      placement="bottomRight"
      trigger={['click']}
      menu={{ items, onClick }}
    >
      <div>
        <ButtonIcon>
          <SvgIcon
            icon="ph:user-circle"
            className="text-icon-large"
          />
          <span className="text-16px font-medium">{userInfo.userName}</span>
        </ButtonIcon>
      </div>
    </Dropdown>
  ) : (
    <Button onClick={loginOrRegister}>{t('page.login.common.loginOrRegister')}</Button>
  );
});

export default HeaderUserAvatar;

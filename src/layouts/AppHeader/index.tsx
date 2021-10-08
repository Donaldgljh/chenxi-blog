import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Layout, Dropdown, Menu, MenuProps } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { toggleFullScreen } from 'cxUtil/index';

const { Header } = Layout;

interface IHeaderProps {
  collapsed: boolean;
  toggleCollapsed: () => void;
}

const AppHeader: FC<IHeaderProps> = (props) => {
  const { collapsed, toggleCollapsed } = props;
  const { t, i18n } = useTranslation('app');
  const location = useLocation();
  const [fullScreen, setFullScreen] = useState(false);

  const handleSelect: MenuProps['onClick'] = useCallback(
    ({ key }) => {
      i18n.changeLanguage(key);
    },
    [i18n]
  );

  const languageMenu = useMemo(() => {
    return (
      <Menu onClick={handleSelect} selectedKeys={[i18n.language]}>
        <Menu.Item key={'zh'}>中文</Menu.Item>
        <Menu.Item key={'en'}>English</Menu.Item>
      </Menu>
    );
  }, [handleSelect, i18n.language]);

  useEffect(() => {
    if (!document.fullscreenElement) {
      setFullScreen(false);
    } else {
      setFullScreen(true);
    }
  }, []);

  const toggleScreen = useCallback(() => {
    toggleFullScreen();
    setFullScreen(!fullScreen);
  }, [fullScreen]);

  console.log(location);

  return (
    <Header className="app-main-header">
      <div>
        {collapsed ? (
          <MenuUnfoldOutlined onClick={toggleCollapsed} />
        ) : (
          <MenuFoldOutlined onClick={toggleCollapsed} />
        )}
      </div>
      <div className="operate-menu">
        {!fullScreen ? (
          <FullscreenOutlined onClick={toggleScreen} />
        ) : (
          <FullscreenExitOutlined onClick={toggleScreen} />
        )}
        <Dropdown overlay={languageMenu}>
          <span onClick={(e) => e.preventDefault()}>{t('language')}</span>
        </Dropdown>
      </div>
    </Header>
  );
};

export default AppHeader;

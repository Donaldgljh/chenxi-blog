import React, { FC, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Animation from '@/components/Animation';
import dolphin from '@/assets/lottie/dolphin.json';
import { Menu, Layout } from 'antd';
import { IMenusProps } from '../menu';
import 'antd/es/tooltip/style';

const MenuItem = Menu.Item;
const { Sider } = Layout;

interface SideBarProps {
  collapsed: boolean;
  menus: IMenusProps[];
}

const SideBar: FC<SideBarProps> = (props) => {
  const { collapsed, menus } = props;
  const history = useHistory();
  const location = useLocation();

  const selectedKeys = useMemo(() => {
    return menus
      .filter((menu) => location.pathname.includes(menu.path))
      .map((menu) => menu.key);
  }, [location.pathname, menus]);

  const goHome = () => {
    history.push('/vite-react-app/dashboard');
  };

  const goPath = (path: string) => {
    history.push(path);
  };

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="app-side-bar"
    >
      <div className="logo" onClick={goHome}>
        <Animation animationData={dolphin as any} className="icon" />
      </div>
      <Menu mode="inline" theme="dark" selectedKeys={selectedKeys}>
        {menus.map((menu) => {
          return (
            <MenuItem
              key={menu.key}
              icon={menu.icon}
              onClick={() => {
                goPath(menu.path);
              }}
            >
              {menu.title}
            </MenuItem>
          );
        })}
      </Menu>
    </Sider>
  );
};

export default SideBar;

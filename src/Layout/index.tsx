import React, { FC, useState, useMemo } from 'react';
import { Layout } from 'antd';
import './index.less';
import SideBar from './SideBar';
import Header from './Header';
import Content from './Content';
import { menus } from './menu';
import '@/utils/i18n';
import DocumentTitle from 'react-document-title';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { firstUpperCase } from '@/utils/index';

const AppLayout: FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const { t } = useTranslation('app');

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const title = useMemo(() => {
    const locationArr = location.pathname.split('/');
    return t(firstUpperCase(locationArr[locationArr.length - 1]));
  }, [location.pathname, t]);

  return (
    <DocumentTitle title={title}>
      <Layout className="app-container">
        <SideBar collapsed={collapsed} menus={menus} />
        <Layout className="app-main">
          <Header collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
          <Content menus={menus} />
        </Layout>
      </Layout>
    </DocumentTitle>
  );
};

export default AppLayout;

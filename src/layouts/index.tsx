import React, { FC, useState, useMemo } from 'react';
import { Layout } from 'antd';
import './index.less';
import AppSideBar from './AppSideBar';
import AppHeader from './AppHeader';
import AppContent from './AppContent';
import { menus } from './menu';
import 'cxUtil/i18n';
import DocumentTitle from 'react-document-title';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { firstUpperCase } from 'cxUtil/index';

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
        <AppSideBar collapsed={collapsed} menus={menus} />
        <Layout className="app-main">
          <AppHeader collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
          <AppContent menus={menus} />
        </Layout>
      </Layout>
    </DocumentTitle>
  );
};

export default AppLayout;

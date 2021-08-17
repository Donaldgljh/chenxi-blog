import React, { FC, Suspense, useEffect } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import CenteredSpin from '@/components/CenteredSpin';
import { Layout } from 'antd';
import { IMenusProps } from '../menu';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

const { Content } = Layout;

interface AppContentProps {
  menus: IMenusProps[];
}

const LazyLoad = () => {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  });

  return null;
};

const AppContent: FC<AppContentProps> = (props) => {
  const { menus } = props;
  return (
    <Content className="app-main-content">
      <Switch>
        <Suspense fallback={<LazyLoad />}>
          {menus.map((item) => {
            return (
              <Route
                path={item.path}
                component={item.component}
                key={item.path}
              />
            );
          })}
          <Redirect from="/" to="/vite-react-app/dashboard" />
        </Suspense>
      </Switch>
    </Content>
  );
};

export default AppContent;

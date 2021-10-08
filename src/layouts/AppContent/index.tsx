import React, { FC, Suspense, useEffect } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { Layout } from 'antd';
import { IMenusProps } from '../menu';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { WaterMark } from '@ant-design/pro-layout';

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
      <WaterMark content="晨曦">
        <Switch>
          <Suspense fallback={<LazyLoad />}>
            {menus.map((item) => {
              return (
                <Route
                  path={item.path}
                  component={item.component}
                  key={item.path}
                  exact
                />
              );
            })}
          </Suspense>
          <Redirect to="/dashboard" />
        </Switch>
      </WaterMark>
    </Content>
  );
};

export default AppContent;

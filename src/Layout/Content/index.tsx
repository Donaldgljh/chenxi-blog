import React, { FC, Suspense } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import CenteredSpin from '@/components/CenteredSpin';
import { Layout } from 'antd';
import { IMenusProps } from '../menu';
const { Content } = Layout;

interface AppContentProps {
  menus: IMenusProps[];
}

const AppContent: FC<AppContentProps> = (props) => {
  const { menus } = props;
  return (
    <Content className="app-main-content">
      <Switch>
        <Suspense fallback={<CenteredSpin />}>
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

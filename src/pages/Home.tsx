import React, { useMemo, lazy, FC, Suspense, useEffect } from 'react';
import { NavLink, Switch, Redirect, Route, useHistory } from 'react-router-dom';
import cusLightVars from '@/themes/light.json';
import Animation from '@/components/Animation';
import CenteredSpin from '@/components/CenteredSpin';
import walking from '@/assets/walking.json';
import './index.less';

const Home: FC = () => {
  const history = useHistory();

  useEffect(() => {
    (document.querySelector('html') as any)!.style = Object.entries(
      cusLightVars
    ).reduce((text, [key, value]) => `${text}${key}:${value};`, '');
  }, []);

  const menu = useMemo(() => {
    return [
      {
        path: '/home',
        name: '主页',
        component: lazy(() => import('./Knowledge'))
      },
      {
        path: '/knowledge',
        name: '学习笔记',
        component: lazy(() => import('./Knowledge'))
      },
      {
        path: '/share',
        name: '分享',
        component: lazy(() => import('./Resume'))
      },
      {
        path: '/resume',
        name: '简历',
        component: lazy(() => import('./Resume'))
      }
    ];
  }, []);

  const goHome = () => {
    history.push('/');
  };

  return (
    <div className="cx_container">
      <Suspense fallback={<CenteredSpin />}>
        <nav className="cx_nav">
          <div className="cx_nav_left">
            <span onClick={goHome}>
              <Animation animationData={walking as any} className="home-icon" />
            </span>
            {menu.map((item) => {
              return (
                <NavLink
                  to={item.path}
                  key={item.name}
                  className="nav-link"
                  activeClassName={'nav-link-active'}
                >
                  {item.name}
                </NavLink>
              );
            })}
          </div>
          <div className="cx_nav_right"></div>
        </nav>
        <div className="cx_content">
          <Switch>
            {menu.map((item) => {
              return (
                <Route
                  path={item.path}
                  component={item.component}
                  key={item.name}
                />
              );
            })}
            <Redirect from="/" to="/home" />
          </Switch>
        </div>
      </Suspense>
    </div>
  );
};

export default Home;

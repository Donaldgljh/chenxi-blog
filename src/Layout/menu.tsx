import React, { ReactElement, LazyExoticComponent, lazy } from 'react';
import {
  DashboardOutlined,
  FileExcelOutlined,
  BarChartOutlined
} from '@ant-design/icons';
import { Translation } from 'react-i18next';

export interface IMenusProps {
  key: string;
  path: string;
  title: ReactElement;
  icon: ReactElement;
  component: LazyExoticComponent<any>;
}

export interface TransComponentProps {
  text: string;
}

export const t = (text: string) => {
  return <Translation>{(tr) => tr(text)}</Translation>;
};

export const menus: IMenusProps[] = [
  {
    path: '/vite-react-app/dashboard',
    title: t('Dashboard'),
    key: 'dashboard',
    icon: <DashboardOutlined />,
    component: lazy(() => import('@/pages/Dashboard'))
  },
  {
    path: '/vite-react-app/excel',
    title: t('Excel'),
    key: 'excel',
    icon: <FileExcelOutlined />,
    component: lazy(() => import('@/pages/Excel'))
  },
  {
    path: '/vite-react-app/chart',
    title: t('Chart'),
    key: 'chart',
    icon: <BarChartOutlined />,
    component: lazy(() => import('@/pages/Chart'))
  }
];

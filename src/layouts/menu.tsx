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
    path: '/dashboard',
    title: t('Dashboard'),
    key: 'dashboard',
    icon: <DashboardOutlined />,
    component: lazy(() => import('cxPage/Dashboard'))
  },
  {
    path: '/excel',
    title: t('Excel'),
    key: 'excel',
    icon: <FileExcelOutlined />,
    component: lazy(() => import('cxPage/Excel'))
  },
  {
    path: '/chart',
    title: t('Chart'),
    key: 'chart',
    icon: <BarChartOutlined />,
    component: lazy(() => import('cxPage/Chart'))
  }
];

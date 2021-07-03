import React, { FC } from 'react';
import Animation from '../Animation';
import loader from '@/assets/loader.json';
import './index.less';

const CenteredSpin: FC = () => {
  return <Animation animationData={loader as any} className="centered-spin" />;
};

export default CenteredSpin;

import React, { FC, memo } from 'react';
import Overview from './Overview';

const Dashboard: FC = () => {
  return (
    <div>
      <Overview />
    </div>
  );
};

export default memo(Dashboard);

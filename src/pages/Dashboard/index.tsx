import React, { FC, memo } from 'react';
import Overview from './Overview';
import { getFiles } from '@/api/upload';
import { useRequest } from 'ahooks';

const Dashboard: FC = () => {
  const {} = useRequest(getFiles, {
    onSuccess: (res) => {
      console.log(res);
    }
  });
  return (
    <div>
      <Overview />
    </div>
  );
};

export default memo(Dashboard);

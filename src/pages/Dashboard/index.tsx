import React, { FC, memo, useEffect } from 'react';
import Overview from './Overview';
import { createUser } from 'cxApi/upload';
import { useRequest } from 'ahooks';

const Dashboard: FC = () => {
  const { run } = useRequest(() => createUser({ id: '', user: 'cx' }), {
    manual: true,
    onSuccess: (res) => {
      console.log(res);
    }
  });

  useEffect(() => {
    run();
  }, []);

  return (
    <div>
      <Overview />
    </div>
  );
};

export default memo(Dashboard);

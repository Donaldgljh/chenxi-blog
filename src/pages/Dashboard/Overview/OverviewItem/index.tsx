import React, { FC, memo, ReactElement } from 'react';
import './index.less';

interface OverviewItemProps {
  title: string | ReactElement;
}

const OverviewItem: FC<OverviewItemProps> = (props) => {
  const { title } = props;

  return (
    <div className="overview-item">
      <div className="overview-item-header">
        <span className="title">{title}</span>
      </div>
      <div className="overview-item-content"></div>
    </div>
  );
};

export default memo(OverviewItem);

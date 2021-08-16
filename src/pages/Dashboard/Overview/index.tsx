import React, { FC, memo } from 'react';
import { Row, Col } from 'antd';
import OverviewItem from './OverviewItem';

const Overview: FC = () => {
  return (
    <Row gutter={24}>
      <Col span={8}>
        <OverviewItem title={'公告'} />
      </Col>
      <Col span={8}>
        <OverviewItem title={'待办'} />
      </Col>
    </Row>
  );
};

export default memo(Overview);

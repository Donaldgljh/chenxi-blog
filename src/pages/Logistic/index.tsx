import React, { FC } from 'react';
import { Upload, Form, Input, Button, message } from 'antd';
import { UploadChangeParam } from 'antd/es/upload';
import { UploadOutlined } from '@ant-design/icons';
import { useRequest } from 'ahooks';
import { getLists } from 'cxApi/upload';
import 'antd/es/message/style/index';
import './index.less';

const FormItem = Form.Item;

message.config({
  duration: 2000000
});

const Logistic: FC = () => {
  const [form] = Form.useForm();

  const { run } = useRequest(getLists, {
    manual: true,
    onSuccess: (res) => {
      console.log(res);
    }
  });

  const onFinish = (values: { date: string }) => {
    run();
    console.log('Finish:', values);
  };

  const UploadProps = {
    name: 'file',
    maxCount: 1,
    action: '/api/upload/uploadExcel',
    showUploadList: false,
    onChange(info: UploadChangeParam) {
      if (info.file.status === 'done') {
        message.success(`${info.file.name}上传成功`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name}上传失败,数据已存在`);
      }
    }
  };

  return (
    <div className="cx-logistic-wrapper">
      <div className="query-box">
        <Form form={form} layout="inline" onFinish={onFinish}>
          <FormItem label="日期" name="date">
            <Input placeholder="输入日期" />
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">
              查询
            </Button>
          </FormItem>
          <FormItem>
            <Upload {...UploadProps}>
              <Button icon={<UploadOutlined />}>导入</Button>
            </Upload>
          </FormItem>
        </Form>
      </div>
      <div className="list-box">123</div>
    </div>
  );
};

export default Logistic;

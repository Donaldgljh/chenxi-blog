import React, { FC, memo } from 'react';
import { Upload, message } from 'antd';
import { RcFile } from 'antd/es/upload';
import { InboxOutlined } from '@ant-design/icons';
import XLSX from 'xlsx';
import { useTranslation } from 'react-i18next';
import './index.less';

interface ExcelReaderProps {
  onUpload: (data: string[][]) => void;
  extendClassName: string;
}

const { Dragger } = Upload;

const ExcelReader: FC<ExcelReaderProps> = (props) => {
  const { onUpload, extendClassName } = props;
  const { t } = useTranslation('app');
  const UploadProps = {
    beforeUpload: (file: RcFile) => {
      if (!file.type.includes('sheet')) {
        message.error('只接受Excel文件');
        return;
      }
      const reader = new FileReader();
      const rABS = !!reader.readAsBinaryString;
      reader.onload = (e) => {
        if (e.target && e.target.result) {
          /* Parse data */
          const bstr = e.target.result;
          const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array' });
          /* Get first worksheet */
          const wsname = wb.SheetNames[0];
          const ws = wb.Sheets[wsname];
          /* Convert array of arrays */
          const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
          /* Update state */
          onUpload(data as string[][]);
        }
      };
      if (rABS) reader.readAsBinaryString(file);
      else reader.readAsArrayBuffer(file);
      return false;
    },
    action: '/api/upload/uploadExcel',
    maxCount: 1,
    showUploadList: false,
    progress: {
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068'
      },
      strokeWidth: 3,
      format: (percent: any) => `${parseFloat(percent.toFixed(2))}%`
    }
  };

  return (
    <div className={`excel-dragger ${extendClassName}`}>
      <Dragger {...UploadProps}>
        <InboxOutlined className="upload-icon" />
        <p>{t('Click or drag file to this area to upload')}</p>
      </Dragger>
    </div>
  );
};

export default memo(ExcelReader);

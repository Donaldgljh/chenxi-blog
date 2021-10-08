import React, { FC, memo, useMemo, useState, useRef, useEffect } from 'react';
import { Table, Space, Button, message } from 'antd';
import ExcelReader from 'cxComponent/ExcelReader';
import { useTranslation } from 'react-i18next';
import { debounce } from 'lodash';
import XLSX from 'xlsx';
import './index.less';

const Excel: FC = () => {
  const [csvData, setCsvData] = useState<string[][]>([]);
  const [height, setHeight] = useState<number>(240);
  const { t } = useTranslation('app');
  const ref = useRef(null);

  const exportFile = () => {
    /* convert state to workbook */
    if (!csvData.length) {
      message.error(t('No Data'));
      return;
    }
    const ws = XLSX.utils.aoa_to_sheet(csvData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'SheetJS');
    /* generate XLSX file and send to client */
    XLSX.writeFile(wb, 'sheetjs.xlsx');
  };

  useEffect(() => {
    const onResize = debounce(() => {
      if (ref && ref.current) {
        setHeight(
          (ref.current as any).getBoundingClientRect()!.height -
            (ref.current as any).getBoundingClientRect()!.top -
            260
        );
      }
    }, 100);
    setHeight(
      (ref.current as any).getBoundingClientRect()!.height -
        (ref.current as any).getBoundingClientRect()!.top -
        260
    );
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const onUpload = (data: string[][]) => {
    setCsvData(data);
  };

  const columnsAndDataSource = useMemo(() => {
    let columns: any[] = [];
    let dataSource: any[] = [];
    if (Array.isArray(csvData) && csvData.length > 0) {
      columns = csvData[0].map((item) => {
        return { title: item, dataIndex: item, key: item };
      });
      if (csvData.length > 1) {
        const datas = csvData.slice(1, csvData.length);
        dataSource = datas.map((data) => {
          const obj: any = { id: Math.random() };
          csvData[0].map((column, index) => {
            obj[column] = data[index];
          });
          return obj;
        });
      }
    }
    return { columns, dataSource };
  }, [csvData]);

  return (
    <div className="excel-wrapper" ref={ref}>
      <ExcelReader onUpload={onUpload} extendClassName="excel-upload" />
      <div className="table-wrapper">
        <Space className="table-operate">
          <Button type="primary" onClick={exportFile}>
            {t('Export Excel')}
          </Button>
        </Space>
        <Table
          columns={columnsAndDataSource.columns}
          dataSource={columnsAndDataSource.dataSource}
          className="excel-table"
          scroll={{ y: height }}
          bordered
          rowKey={(record) => record.id}
        />
      </div>
    </div>
  );
};

export default memo(Excel);

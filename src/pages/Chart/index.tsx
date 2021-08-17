import React, { FC, memo, useEffect, useRef } from 'react';
import * as echarts from 'echarts/core';
import { BarChart, LineChart } from 'echarts/charts';
import {
  GridComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  DataZoomComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import './index.less';

echarts.use([
  GridComponent,
  BarChart,
  CanvasRenderer,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  LineChart,
  DataZoomComponent
]);

const Chart: FC = () => {
  const ref = useRef(null);

  useEffect(() => {
    let chart: echarts.ECharts;
    if (!!ref.current) {
      chart = echarts.init(ref.current!);
      const option = {
        title: {
          text: '动态数据',
          subtext: '纯属虚构'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#283b56'
            }
          }
        },
        legend: {
          data: ['最新成交价', '预购队列']
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
          }
        },
        dataZoom: {
          show: false,
          start: 0,
          end: 100
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true,
            data: (function () {
              let now = new Date();
              const res = [];
              let len = 10;
              while (len--) {
                res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
                now = new Date(now - 2000);
              }
              return res;
            })()
          },
          {
            type: 'category',
            boundaryGap: true,
            data: (function () {
              const res = [];
              let len = 10;
              while (len--) {
                res.push(10 - len - 1);
              }
              return res;
            })()
          }
        ],
        yAxis: [
          {
            type: 'value',
            scale: true,
            name: '价格',
            max: 30,
            min: 0,
            boundaryGap: [0.2, 0.2]
          },
          {
            type: 'value',
            scale: true,
            name: '预购量',
            max: 1200,
            min: 0,
            boundaryGap: [0.2, 0.2]
          }
        ],
        series: [
          {
            name: '预购队列',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: (function () {
              const res = [];
              let len = 10;
              while (len--) {
                res.push(Math.round(Math.random() * 1000));
              }
              return res;
            })()
          },
          {
            name: '最新成交价',
            type: 'line',
            data: (function () {
              const res = [];
              let len = 0;
              while (len < 10) {
                res.push((Math.random() * 10 + 5).toFixed(1) - 0);
                len++;
              }
              return res;
            })()
          }
        ]
      };
      const app: any = {};
      app.count = 11;
      chart.setOption(option);
      setInterval(() => {
        const axisData = new Date().toLocaleTimeString().replace(/^\D*/, '');
        const data0 = option.series[0].data;
        const data1 = option.series[1].data;
        data0.shift();
        data0.push(Math.round(Math.random() * 1000));
        data1.shift();
        data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

        option.xAxis[0].data.shift();
        option.xAxis[0].data.push(axisData);
        option.xAxis[1].data.shift();
        option.xAxis[1].data.push(app.count++);
        chart.setOption(option);
      }, 2100);
    }
    const onResize = () => {
      chart.resize();
    };
    window.addEventListener('resize', onResize);
    return () => {
      chart.dispose();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <div ref={ref} className="chart"></div>;
};

export default memo(Chart);

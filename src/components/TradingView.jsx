import { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';
import { Card } from '@mantine/core';

export default function TradingView({ symbol = 'BTCUSDT' }) {
  const chartContainerRef = useRef();
  const chartRef = useRef();

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 500,
      layout: {
        background: { color: '#1A1B1E' },
        textColor: '#DDD'
      },
      grid: {
        vertLines: { color: '#2B2B43' },
        horzLines: { color: '#2B2B43' }
      }
    });

    const candleSeries = chart.addCandlestickSeries();
    
    // Fetch and update data
    const fetchData = async () => {
      // In production, fetch real data here
      const demoData = [
        { time: '2023-01-01', open: 100, high: 105, low: 95, close: 102 },
        { time: '2023-01-02', open: 102, high: 108, low: 100, close: 105 }
      ];
      candleSeries.setData(demoData);
    };

    fetchData();
    chartRef.current = chart;

    return () => {
      chart.remove();
    };
  }, [symbol]);

  return (
    <Card shadow="sm" p="xs">
      <div ref={chartContainerRef} />
    </Card>
  );
}

import { useState } from 'react';
import { Container, Card, Text, Select, MultiSelect, NumberInput, Switch, Button } from '@mantine/core';

export default function SignalGenerator() {
  const [config, setConfig] = useState({
    indicators: [],
    filters: [],
    priority: 'medium',
    notifications: true
  });

  const indicators = [
    { value: 'sma_cross', label: 'SMA Crossover' },
    { value: 'rsi_oversold', label: 'RSI Oversold' },
    { value: 'macd_cross', label: 'MACD Crossover' }
  ];

  const filters = [
    { value: 'volume', label: 'Volume Filter' },
    { value: 'trend', label: 'Trend Filter' },
    { value: 'volatility', label: 'Volatility Filter' }
  ];

  return (
    <Container>
      <Card shadow="sm" p="lg">
        <Text size="xl" weight={500} mb="md">Signal Configuration</Text>

        <MultiSelect
          label="Select Indicators"
          data={indicators}
          value={config.indicators}
          onChange={(value) => setConfig(prev => ({ ...prev, indicators: value }))}
          mb="md"
        />

        <MultiSelect
          label="Apply Filters"
          data={filters}
          value={config.filters}
          onChange={(value) => setConfig(prev => ({ ...prev, filters: value }))}
          mb="md"
        />

        <Select
          label="Signal Priority"
          value={config.priority}
          onChange={(value) => setConfig(prev => ({ ...prev, priority: value }))}
          data={[
            { value: 'high', label: 'High Priority' },
            { value: 'medium', label: 'Medium Priority' },
            { value: 'low', label: 'Low Priority' }
          ]}
          mb="md"
        />

        <Switch
          label="Enable Notifications"
          checked={config.notifications}
          onChange={(e) => setConfig(prev => ({ 
            ...prev, 
            notifications: e.currentTarget.checked 
          }))}
          mb="xl"
        />

        <Button fullWidth color="blue">
          Save Configuration
        </Button>
      </Card>
    </Container>
  );
}

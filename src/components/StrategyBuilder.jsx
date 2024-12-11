import { useState } from 'react';
import { Container, Select, NumberInput, Button, Group, Card, Text, Stack } from '@mantine/core';

export default function StrategyBuilder() {
  const [strategy, setStrategy] = useState({
    indicators: [],
    conditions: [],
    filters: []
  });

  const indicators = [
    { value: 'sma', label: 'Simple Moving Average' },
    { value: 'ema', label: 'Exponential Moving Average' },
    { value: 'rsi', label: 'Relative Strength Index' },
    { value: 'macd', label: 'MACD' }
  ];

  const addIndicator = (indicator) => {
    setStrategy(prev => ({
      ...prev,
      indicators: [...prev.indicators, { type: indicator, params: {} }]
    }));
  };

  return (
    <Container>
      <Card shadow="sm" p="lg" mb="md">
        <Text size="xl" weight={500} mb="md">Strategy Builder</Text>
        
        <Stack spacing="md">
          <Select
            label="Add Indicator"
            placeholder="Select indicator"
            data={indicators}
            onChange={(value) => addIndicator(value)}
          />

          {strategy.indicators.map((ind, i) => (
            <Group key={i} grow>
              <Text>{indicators.find(i => i.value === ind.type)?.label}</Text>
              {ind.type === 'sma' && (
                <NumberInput
                  label="Period"
                  value={ind.params.period || 14}
                  onChange={(value) => {
                    const newIndicators = [...strategy.indicators];
                    newIndicators[i].params.period = value;
                    setStrategy(prev => ({ ...prev, indicators: newIndicators }));
                  }}
                />
              )}
            </Group>
          ))}

          <Button color="blue" onClick={() => console.log(strategy)}>
            Save Strategy
          </Button>
        </Stack>
      </Card>
    </Container>
  );
}

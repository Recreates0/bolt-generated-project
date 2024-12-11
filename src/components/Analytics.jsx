import { Container, Grid, Card, Text } from '@mantine/core';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useTranslation } from 'react-i18next';

export default function Analytics() {
  const { t } = useTranslation();
  const data = [
    { date: '2023-01', pnl: 1200 },
    { date: '2023-02', pnl: 1800 },
    { date: '2023-03', pnl: 1400 },
    { date: '2023-04', pnl: 2200 }
  ];

  return (
    <Container size="xl">
      <Grid>
        <Grid.Col span={12}>
          <Card shadow="sm">
            <Text size="xl" weight={500} mb="md">
              {t('dashboard.analytics')}
            </Text>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="pnl" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

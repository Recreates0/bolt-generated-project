import { useState } from 'react';
import { Container, Tabs, Grid, Card } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import Analytics from './Analytics';
import TradingView from './TradingView';
import Settings from './Settings';
import Signals from './Signals';
import StrategyBuilder from './StrategyBuilder';
import SignalGenerator from './SignalGenerator';
import ThemeCustomizer from './ThemeCustomizer';

export default function Dashboard() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('signals');

  return (
    <Container size="xl" mt="xl">
      <Tabs value={activeTab} onTabChange={setActiveTab}>
        <Tabs.List>
          <Tabs.Tab value="signals">Signals</Tabs.Tab>
          <Tabs.Tab value="strategy">Strategy</Tabs.Tab>
          <Tabs.Tab value="charts">Charts</Tabs.Tab>
          <Tabs.Tab value="analytics">Analytics</Tabs.Tab>
          <Tabs.Tab value="customize">Customize</Tabs.Tab>
          <Tabs.Tab value="settings">Settings</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="signals" pt="xl">
          <Grid>
            <Grid.Col span={8}>
              <Signals />
            </Grid.Col>
            <Grid.Col span={4}>
              <SignalGenerator />
            </Grid.Col>
          </Grid>
        </Tabs.Panel>

        <Tabs.Panel value="strategy" pt="xl">
          <StrategyBuilder />
        </Tabs.Panel>

        <Tabs.Panel value="charts" pt="xl">
          <TradingView />
        </Tabs.Panel>

        <Tabs.Panel value="analytics" pt="xl">
          <Analytics />
        </Tabs.Panel>

        <Tabs.Panel value="customize" pt="xl">
          <ThemeCustomizer />
        </Tabs.Panel>

        <Tabs.Panel value="settings" pt="xl">
          <Settings />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
}

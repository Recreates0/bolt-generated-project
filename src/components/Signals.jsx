import { useState } from 'react';
import { Container, Tabs, Grid } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import Analytics from './Analytics';
import TradingView from './TradingView';
import Settings from './Settings';
import Signals from './Signals';

export default function Dashboard() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('signals');

  return (
    <Container size="xl" mt="xl">
      <Tabs value={activeTab} onTabChange={setActiveTab}>
        <Tabs.List>
          <Tabs.Tab value="signals">{t('dashboard.signals')}</Tabs.Tab>
          <Tabs.Tab value="charts">Charts</Tabs.Tab>
          <Tabs.Tab value="analytics">{t('dashboard.analytics')}</Tabs.Tab>
          <Tabs.Tab value="settings">{t('dashboard.settings')}</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="signals" pt="xl">
          <Signals />
        </Tabs.Panel>

        <Tabs.Panel value="charts" pt="xl">
          <TradingView />
        </Tabs.Panel>

        <Tabs.Panel value="analytics" pt="xl">
          <Analytics />
        </Tabs.Panel>

        <Tabs.Panel value="settings" pt="xl">
          <Settings />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
}

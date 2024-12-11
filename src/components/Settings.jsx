import { useState } from 'react';
import { Container, Switch, Select, Button, TextInput } from '@mantine/core';
import { useTranslation } from 'react-i18next';

export default function Settings() {
  const { t, i18n } = useTranslation();
  const [notifications, setNotifications] = useState({
    signals: true,
    news: true,
    trades: true
  });

  return (
    <Container size="sm">
      <Select
        label="Language"
        value={i18n.language}
        onChange={(value) => i18n.changeLanguage(value)}
        data={[
          { value: 'en', label: 'English' },
          { value: 'es', label: 'Español' }
        ]}
        mb="md"
      />

      <Switch
        label="Trading Signals Notifications"
        checked={notifications.signals}
        onChange={(e) => setNotifications({
          ...notifications,
          signals: e.currentTarget.checked
        })}
        mb="sm"
      />

      <Switch
        label="Market News Notifications"
        checked={notifications.news}
        onChange={(e) => setNotifications({
          ...notifications,
          news: e.currentTarget.checked
        })}
        mb="sm"
      />

      <Switch
        label="Trade Execution Notifications"
        checked={notifications.trades}
        onChange={(e) => setNotifications({
          ...notifications,
          trades: e.currentTarget.checked
        })}
        mb="xl"
      />
    </Container>
  );
}

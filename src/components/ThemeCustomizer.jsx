import { useState } from 'react';
import { Container, ColorInput, SegmentedControl, Card, Text, Button } from '@mantine/core';

export default function ThemeCustomizer() {
  const [theme, setTheme] = useState({
    mode: 'dark',
    primary: '#339AF0',
    secondary: '#845EF7',
    background: '#1A1B1E'
  });

  return (
    <Container>
      <Card shadow="sm" p="lg">
        <Text size="xl" weight={500} mb="md">Theme Customization</Text>

        <SegmentedControl
          value={theme.mode}
          onChange={(value) => setTheme(prev => ({ ...prev, mode: value }))}
          data={[
            { label: 'Light', value: 'light' },
            { label: 'Dark', value: 'dark' }
          ]}
          mb="md"
        />

        <ColorInput
          label="Primary Color"
          value={theme.primary}
          onChange={(value) => setTheme(prev => ({ ...prev, primary: value }))}
          mb="md"
        />

        <ColorInput
          label="Secondary Color"
          value={theme.secondary}
          onChange={(value) => setTheme(prev => ({ ...prev, secondary: value }))}
          mb="md"
        />

        <ColorInput
          label="Background Color"
          value={theme.background}
          onChange={(value) => setTheme(prev => ({ ...prev, background: value }))}
          mb="xl"
        />

        <Button fullWidth color="blue">
          Apply Theme
        </Button>
      </Card>
    </Container>
  );
}

import { useState } from 'react';
import { TextInput, Button, Container, Title, Text } from '@mantine/core';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [step, setStep] = useState('email');
  const navigate = useNavigate();

  const sendCode = async () => {
    try {
      await axios.post('/api/auth/send-code', { email });
      setStep('code');
    } catch (err) {
      console.error(err);
    }
  };

  const verifyCode = async () => {
    try {
      const { data } = await axios.post('/api/auth/verify', { email, code });
      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container size="xs" mt="xl">
      <Title align="center" mb="xl">Authentication</Title>
      
      {step === 'email' ? (
        <>
          <TextInput
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            mb="md"
          />
          <Button fullWidth onClick={sendCode}>
            Send Code
          </Button>
        </>
      ) : (
        <>
          <TextInput
            label="Authentication Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            mb="md"
          />
          <Button fullWidth onClick={verifyCode}>
            Verify Code
          </Button>
        </>
      )}
    </Container>
  );
}

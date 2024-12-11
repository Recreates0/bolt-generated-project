
import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Store verification codes in memory (use Redis in production)
const verificationCodes = new Map();
const userSessions = new Map();

// Generate 6-digit verification code
const generateVerificationCode = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Verification code endpoint
app.post('/api/auth/send-code', (req, res) => {
  const { email } = req.body;
  
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const code = generateVerificationCode();
  
  // Store code with 5-minute expiration
  verificationCodes.set(email, {
    code,
    expires: Date.now() + 5 * 60 * 1000,
    attempts: 0
  });

  // In production, send actual email
  console.log(`Verification code for ${email}: ${code}`);
  
  res.json({ message: 'Verification code sent successfully' });
});

// Verify code endpoint
app.post('/api/auth/verify-code', (req, res) => {
  const { email, code } = req.body;
  
  const verification = verificationCodes.get(email);
  
  if (!verification) {
    return res.status(400).json({ error: 'No verification code found' });
  }

  if (Date.now() > verification.expires) {
    verificationCodes.delete(email);
    return res.status(400).json({ error: 'Verification code expired' });
  }

  if (verification.attempts >= 3) {
    verificationCodes.delete(email);
    return res.status(400).json({ error: 'Too many attempts. Please request a new code.' });
  }

  if (verification.code !== code) {
    verification.attempts++;
    return res.status(400).json({ error: 'Invalid verification code' });
  }

  // Generate session token
  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '24h' });
  
  // Clear verification code
  verificationCodes.delete(email);
  
  // Store user session
  userSessions.set(email, { token, loginTime: Date.now() });
  
  res.json({ token });
});

// Verify Gmail with Quotex account
app.post('/api/auth/verify-gmail', (req, res) => {
  const { gmail, quotexEmail } = req.body;
  
  if (gmail !== quotexEmail) {
    return res.status(400).json({ 
      error: 'Gmail does not match Quotex account email' 
    });
  }

  res.json({ message: 'Gmail verified successfully' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
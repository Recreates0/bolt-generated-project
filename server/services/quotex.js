
import axios from 'axios';
import logger from '../config/logger.js';

const quotexAPI = axios.create({
  baseURL: process.env.QUOTEX_API_URL,
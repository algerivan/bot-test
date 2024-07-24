import {
  BotManager,
  MetaWhatsAppProvider,
  MemoryStorage,
} from 'wecare-bot-builder';
import { MainBot } from './bots/main.bot';
import dotenv from 'dotenv';

dotenv.config();

const provider = new MetaWhatsAppProvider(
  process.env.WHATSAPP_API_URL || '',
  process.env.WHATSAPP_ACCESS_TOKEN || '',
  process.env.WEBHOOK_VERIFY_TOKEN || ''
);

const storage = new MemoryStorage();

const botManager = new BotManager('main', provider, storage);

async function initializeBot() {
  await botManager.initialize();

  const mainBot = new MainBot();
  botManager.registerBot(mainBot);

  botManager.setupWebhook({
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    path: '/webhook',
  });
}

initializeBot().catch(console.error);

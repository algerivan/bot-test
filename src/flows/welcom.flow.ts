import { FlowFunction } from 'wecare-bot-builder';

export const welcomeFlow: FlowFunction = async (message, context) => {
  await context.sendMessage(
    '¡Bienvenido a nuestro bot! ¿En qué puedo ayudarte hoy?'
  );
  context.nextFlow('menu');
};

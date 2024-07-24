import { FlowFunction } from 'wecare-bot-builder';

export const menuFlow: FlowFunction = async (message, context) => {
  const lowerBody = message.textBody.toLowerCase();

  if (lowerBody.includes('ayuda')) {
    await context.sendMessage(
      'Puedo ayudarte con información sobre nuestros servicios. Por favor, especifica qué te interesa.'
    );
  } else if (lowerBody.includes('servicios')) {
    await context.sendMessage(
      'Ofrecemos varios servicios, incluyendo consultas médicas, seguimiento de tratamientos y más. ¿Sobre cuál te gustaría saber más?'
    );
  } else {
    await context.sendMessage(
      "No entendí tu solicitud. Por favor, intenta de nuevo o escribe 'ayuda' para más información."
    );
  }
  context.stayInFlow();
};

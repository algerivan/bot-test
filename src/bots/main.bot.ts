import { Bot, Flow } from 'wecare-bot-builder';
import { welcomeFlow } from '../flows/welcom.flow';
import { menuFlow } from '../flows/menu.flow';

export class MainBot implements Bot {
  name = 'main';
  private flows: Map<string, Flow['handler']> = new Map();

  constructor() {
    this.registerFlows([
      { id: 'welcome', handler: welcomeFlow },
      { id: 'menu', handler: menuFlow },
    ]);
  }

  getInitialFlow(): string {
    return 'welcome';
  }

  getFlows(): Map<string, Flow['handler']> {
    return this.flows;
  }

  registerFlows(flows: { id: string; handler: Flow['handler'] }[]): void {
    flows.forEach((flow) => this.flows.set(flow.id, flow.handler));
  }
}

import { ActionFactory } from './ActionFactory'

export class ShowTasksActionFactory extends ActionFactory {
  getType() {
    return 'SHOW_TASKS'
  }
}

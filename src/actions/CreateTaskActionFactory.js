import { ActionFactory } from './ActionFactory'

export class CreateTaskActionFactory extends ActionFactory {
  getType() {
    return 'CREATE_TASK'
  }
}

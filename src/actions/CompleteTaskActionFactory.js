import { ActionFactory } from './ActionFactory'

export class CompleteTaskActionFactory extends ActionFactory {
  getType() {
    return 'COMPLETE_TASK'
  }

  create(id, isComplete) {
    return {
      type: this.getType(),
      id,
      value: isComplete,
    }
  }
}

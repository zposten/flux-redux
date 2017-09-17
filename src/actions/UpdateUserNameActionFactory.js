import { ActionFactory } from './ActionFactory'

export class UpdateUserNameActionFactory extends ActionFactory {
  getType() {
    return 'UPDATE_USERNAME'
  }
}

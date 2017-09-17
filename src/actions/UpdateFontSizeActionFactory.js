import { ActionFactory } from './ActionFactory'

export class UpdateFontSizeActionFactory extends ActionFactory {
  getType() {
    return 'UPDATE_FONT_SIZE'
  }
}

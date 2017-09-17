import { Store } from './flux'
import { UpdateUserNameActionFactory } from './actions'
import { UpdateFontSizeActionFactory } from './actions'

export class UserPrefsStore extends Store {
  getInitialState() {
    let prefs = localStorage['preferences']
    return prefs ? JSON.parse(prefs)
                 : { userName: 'Zach', fontSize: 'small' }
  }

  __onDispatch(action) {
    switch(action.type) {
      case new UpdateUserNameActionFactory().getType():
        this.__state.userName = action.value
        this.__emitChange()
        break;
      case new UpdateFontSizeActionFactory().getType():
        this.__state.fontSize = action.value
        this.__emitChange()
        break;
    }
  }

  getUserPreferences() {
    return this.__state
  }
}

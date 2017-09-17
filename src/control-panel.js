import { Dispatcher } from './flux'
import { UserPrefsStore } from './UserPrefsStore'

import { UpdateUserNameActionFactory } from './actions'
import { UpdateFontSizeActionFactory } from './actions'

const controlPanelDispatcher = new Dispatcher()
const userPrefsStore = new UserPrefsStore(controlPanelDispatcher);

document.getElementById('userNameInput').addEventListener('input', ({target}) => {
  const name = target.value
  console.log("Dispatching...", name);
  controlPanelDispatcher.dispatch(new UpdateUserNameActionFactory().create(name))
})

document.forms.fontSizeForm.fontSize.forEach(element => {
  element.addEventListener('change', ({target}) => {
    const size = target.value
    console.log("Dispatching...", 'font size change')
    controlPanelDispatcher.dispatch(new UpdateFontSizeActionFactory().create(size))
  })
})

userPrefsStore.addListener((state) => {
  console.info('The current state is ...', state)
  render(state)
  localStorage['preferences'] = JSON.stringify(state)
})

const render = ({userName, fontSize}) => {
  document.getElementById('userName').innerText = userName
  document.getElementsByClassName('container')[0].style.fontSize = getPixelsFromFontSize(fontSize)
  document.forms.fontSizeForm.fontSize.value = fontSize

  function getPixelsFromFontSize(fontSize) {
    return fontSize === 'small' ? '16px' : '24px'
  }
}

render(userPrefsStore.getUserPreferences())

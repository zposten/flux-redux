import { createStore } from 'redux'

const defaultState = {
  messages: [
    {
      date: new Date('2017-09-17 6:48:00'),
      author: 'Everyone',
      content: 'Zach is so cool',
    },
    {
      date: new Date('2017-09-17 6:49:00'),
      author: 'Zach',
      content: "You're too kind",
    },
    {
      date: new Date('2017-09-17 6:50:00'),
      author: 'Everyone',
      content: "Nahh, it's true",
    },
  ],
  userStatus: 'ONLINE',
}

const reducer = (state = defaultState) => state
const store = createStore(reducer)


const render = () => {
  const { messages, userStatus } = store.getState()

  let msgHtml = messages.sort((a, b) => b.date - a.date)
                        .map(message => `<div>${message.author}: ${message.content}</div>`)

  document.getElementById('messages').innerHTML =

}

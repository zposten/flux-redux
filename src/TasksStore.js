import { ReduceStore } from './flux'
import { generate as id } from 'shortid'

export class TasksStore extends ReduceStore {
  getInitialState() {
    return {
      tasks: [
        {
          id: id(),
          content: 'Update CSS styles',
          complete: false,
        },
        {
          id: id(),
          content: 'Add unit tests',
          complete: false,
        },
        {
          id: id(),
          content: 'Post to social media',
          complete: false,
        },
        {
          id: id(),
          content: 'Install hard drive',
          complete: true,
        },
      ],
      showComplete: true
    }
  }

  getSTate() {
    return this.__state
  }

  reduce(state, action) {
    console.log('Reducing...', state, action)
    return state
  }
}

import { ReduceStore } from './flux'
import { generate as id } from 'shortid'
import { CreateTaskActionFactory, CompleteTaskActionFactory, ShowTasksActionFactory } from './actions'

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

  getState() {
    return this.__state
  }

  reduce(state, action) {
    console.log('Reducing...', state, action);
    let newState

    switch(action.type) {
      case new CreateTaskActionFactory().getType():
        newState = { ...state, tasks: [...state.tasks] }
        newState.tasks.push({
          id: id(),
          content: action.value,
          complete: false,
        })
        return newState
      case new ShowTasksActionFactory().getType():
        return {
          ...state,
          tasks: [...state.tasks],
          showComplete: action.value
        }
      case new CompleteTaskActionFactory().getType():
        newState = { ...state, tasks: [...state.tasks]}
        const affectedElementIndex = newState.tasks.findIndex(t => t.id === action.id)
        newState.tasks[affectedElementIndex] = { ...state.tasks[affectedElementIndex], complete: action.value}
        return newState
    }
    return state
  }
}

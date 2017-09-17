import { Dispatcher, ReduceStore } from './flux'
import { TasksStore } from './TasksStore'

import { CreateTaskActionFactory, CompleteTaskActionFactory, ShowTasksActionFactory } from './actions'

const tasksDispatcher = new Dispatcher()
const tasksStore = new TasksStore(tasksDispatcher)

const TaskComponent = ({content, complete, id}) => (
  `<section>
    ${content} <input type="checkbox"
                      name="taskCompleteCheck"
                      data-taskid=${id}
                      ${complete ? 'checked' : ''} />
  </section>`
)

const render = () => {
  const tasksSection = document.getElementById('tasks')
  const state = tasksStore.getState()
  const rendered = state.tasks
                        .filter(task => state.showComplete ? true : !task.complete)
                        .map(TaskComponent).join('')

  tasksSection.innerHTML = rendered

  document.getElementsByName('taskCompleteCheck').forEach(element => {
    element.addEventListener('change', e => {
      const id = e.target.attributes['data-taskid'].value
      const isChecked = e.target.checked

      tasksDispatcher.dispatch(new CompleteTaskActionFactory().create(id, isChecked))
    })
  })
}

document.forms.newTask.addEventListener('submit', e => {
  e.preventDefault() // Stop the page from refreshing
  const name = e.target.newTaskName.value

  if (name) {
    tasksDispatcher.dispatch(new CreateTaskActionFactory().create(name))
    e.target.newTaskName.value = null // Empty the text box so the user can enter another task
  }
})

document.getElementById('showComplete').addEventListener('change', ({target}) => {
  const showComplete = target.checked
  tasksDispatcher.dispatch(new ShowTasksActionFactory().create(showComplete))
})

tasksStore.addListener(() => render())

tasksDispatcher.dispatch('TEST_DISPATCH')

render()

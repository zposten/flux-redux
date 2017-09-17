import { Dispatcher, ReduceStore } from './flux'
import { TasksStore } from './TasksStore'

const tasksDispatcher = new Dispatcher()
const tasksStore = new TasksStore(tasksDispatcher)

tasksDispatcher.dispatch('TEST_DISPATCH')

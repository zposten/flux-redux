import { Store } from './Store'

export class ReduceStore extends Store {
  constructor(dispatcher) {
    super(dispatcher)
    this.__history = []
  }

  reduce(state, action) {
    throw new Error('Subclasses must implement reduce method of a Flux ReduceStore')
  }

  __onDispatch(action) {
    const newState = this.reduce(this.__state, action)
    if (newState === this.__state) return

    // Because there is no limit put on this, eventually we'll run
    // out of memory and die XO
    this.__history.push(this.__state)
    this.__state = newState
    this.__emitChange()
  }

  revertToLastState() {
    if (this.__history.length == 0) return
    this.__state = this.__history.pop()
    this.__emitChange()
  }
}

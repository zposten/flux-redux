export class ActionFactory {
  getType() {
    throw new Error('ActionFactory subclass must override function getType')
  }

  create(value) {
    return {
      type: this.getType(),
      value: value,
    }
  }
}

class TodoConstructor {
  constructor(id, title, text, time, statusDone) {
    this.id = id
    this.title = title
    this.text = text
    this.time = time
    this.statusDone = statusDone || false
  }
  getPrettyTime() {
    return this.time.getUTCHours() + '.' + (this.time.getUTCMinutes() > 9 ? this.time.getUTCMinutes() : '0' + this.time.getUTCMinutes())
  }
}

export default TodoConstructor

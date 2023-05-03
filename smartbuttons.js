class SmartButton {
    Button
    constructor(inner, action) {
        this.Button = document.createElement('button')
        this.Button.innerHTML = inner
        this.Button.onclick = action
    }
}

class ActionButton extends SmartButton {
    constructor(inner, action, ...assignments) {
        super(inner, action)
        assignments.forEach((asg) => { Object.assign(this.Button, asg) })
        return this.Button
    }
}

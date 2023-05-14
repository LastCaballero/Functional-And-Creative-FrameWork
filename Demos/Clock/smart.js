class SmartBox {
    Box
    constructor( what, inner ){
        this.Box = document.createElement( what )
        this.Box.innerHTML = inner
        this.Box.className = 'oo' + this.Box.tagName
    }
    SetClassName(name){
        this.Box.className = name
    }   
}

class StaticBox extends SmartBox {
    constructor(what, inner){
        super( what, inner)
        return this.Box
    }
}

class ActionBox extends SmartBox{
    constructor( what, inner, action ){
        super( what, inner )
        this.Box.onclick = action
        return this.Box
    }
}

class UpDownBox extends SmartBox{
    constructor(inner, Action){
        super('button', inner)
        this.Box.onclick = Action
        this.Box.style.borderRadius = "90%"
        return this.Box
    }
}

class NumberBox extends SmartBox{
    Number
    constructor( what, number ){
        super(what, number)
        this.Number = number
    }
    GetBox() { return this.Box }
    Up(){
        this.Number++
        this.Box.innerHTML = this.Number
    }
    Down(){
        this.Number--
        this.Box.innerHTML = this.Number
    }
}

function AttachTo(where, ...what){
    const Where = document.querySelector(where)
    what.forEach( ( w )=> { Where.append( w ) } )
}







class Capsule {
    Container
    constructor(what) {
        this.Container = document.createElement(what)
    }
}

class SecondCapsule extends Capsule {
    TextNode
    constructor(what) {
        super(what)
        this.TextNode = document.createTextNode('')
        this.StartIntervall()
        this.Container.append(this.TextNode)
        return this.Container
    }
    StartIntervall() {
        setInterval(() => {
            let text = new Date().getSeconds()
            this.TextNode.textContent = String(text).length == 1 ? '0' + String(text) : text
        }, 1000)
    }
}

class MinuteCapsule extends Capsule {
    TextNode
    constructor(what) {
        super(what)
        this.TextNode = document.createTextNode('')
        this.StartIntervall()
        this.Container.append(this.TextNode)
        return this.Container
    }
    StartIntervall() {
        setInterval(() => {
            let text = new Date().getMinutes()
            this.TextNode.textContent = String(text).length == 1 ? '0' + String(text) : text
        }, 1000)
    }
}

class HourCapsule extends Capsule {
    TextNode
    constructor(what) {
        super(what)
        this.TextNode = document.createTextNode('')
        this.StartIntervall()
        this.Container.append(this.TextNode)
        return this.Container
    }
    StartIntervall() {
        setInterval(() => {
            let text = new Date().getHours()
            this.TextNode.textContent = String(text).length == 1 ? '0' + String(text) : text
        }, 1000)
    }
}

class TimeButton {
    Button
    Stamps
    constructor() {
        this.Button = document.createElement('button')
        this.Button.innerHTML = new Date().toLocaleTimeString()

        this.Stamps = []
        this.Button.onclick = () => { 
            this.Stamps.append(new Date()) 
            this.Button.innerHTML = new Date().toLocaleTimeString()
        }
    }
    GetButton() { return this.Button }
    GetStamps() { return this.Stamps }
    GetCalculated(){
        return Math.floor(this.Stamps.reduce((acc, date, index) => {
            if (index === 0) {
              return 0;
            }
            const diffInMilliseconds = date - this.Stamps[index - 1];
            return acc + diffInMilliseconds;
          }, 0) / 1000 );
    }
}

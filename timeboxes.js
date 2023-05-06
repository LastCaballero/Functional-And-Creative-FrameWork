
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
    DIV
    P1
    P2
    constructP1() {
        this.P1 = document.createElement('p')
    }
    constructP2() {
        this.P2 = document.createElement('p')
    }

    constructButton(inner) {
        this.Button = document.createElement('Button')
        this.Button.innerHTML = inner
        this.Button.onclick = () => {
            if( this.Stamps.push(new Date().getTime()) > 1 ) {
                this.SetP1()
                this.SetP2()
            } 
            
        }
    }
    constructDiv() {
        this.DIV = document.createElement('div')
        this.DIV.style.flexDirection = "row"
        this.DIV.append(this.Button, this.P1, this.P2)
    }
    constructor(btn_inner) {
        this.Stamps = []
        this.constructP1()
        this.constructP2()
        this.constructButton(btn_inner)
        this.constructDiv()
    }
    Get(){ return this.DIV }
    GetStamps() { return this.Stamps }
    GetCalculated() {
        let sum = 0
        for(let i = 0 ; i < this.Stamps.length -1 ; i++){
            sum += this.Stamps[i+1] - this.Stamps[i] 
        }
        return ((sum / this.Stamps.length) / 1000).toFixed(3)
    }
    SetP1() {
        this.P1.innerHTML = "average: " + this.GetCalculated()
    }
    SetP2(){
        this.P2.innerHTML = "counts: " + this.Stamps.length
    }
}

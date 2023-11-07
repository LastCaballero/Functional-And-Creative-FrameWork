class SmartBox {
    Box
    constructor(what, inner) {
        this.Box = document.createElement(what)
        this.Box.innerHTML = inner
        this.Box.className = 'oo' + this.Box.tagName
    }
    SetClassName(name) {
        this.Box.className = name
    }
}

class StaticBox extends SmartBox {
    constructor(what, inner) {
        super(what, inner)
        return this.Box
    }
}

class ActionBox extends SmartBox {
    constructor(what, inner, action) {
        super(what, inner)
        this.Box.onclick = action
        return this.Box
    }
}

class UpDownBox extends SmartBox {
    constructor(inner, Action) {
        super('button', inner)
        this.Box.onclick = Action
        this.Box.style.borderRadius = "90%"
        return this.Box
    }
}



class NumberBox extends SmartBox {
    Number
    constructor(what, number) {
        super(what, number)
        this.Number = number
        Object.assign(this.Box,
            {
                Up: () => {
                    this.Number++
                    this.Box.innerHTML = this.Number
                }
            },
            {
                Down: () => {
                    this.Number--
                    this.Box.innerHTML = this.Number
                }
            }
        )
        return this.Box
    }
}

function AttachTo(where, ...what) {
    const Where = document.querySelector(where)
    what.forEach((w) => { Where.append(w) })
}


class CounterRow {
    static instances
    static sum
    static average
    
    count   = 0
    div     = document.createElement('div')
    button  = document.createElement('button')
    text    = document.createElement('p')
    clicks  = document.createElement('p')
    average = document.createElement('p')
    
    constructor( name ) {
        
        this.text.innerHTML = count
        
        this.button.innerHTML = name
        this.button.onclick = () => {
            count++
            CounterRow.sum      += this.count
            this.text.innerHTML = count
        }
        
        this.div.className = 'counterrow'        
        this.div.append( this.text, this.button, this.clicks, this.average )
        
        CounterRow.instances++
        
        return this.div
    }
}






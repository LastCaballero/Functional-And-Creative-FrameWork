let Box = () => { return document.createElement('div') }

class Factory {
    static Component

    static Create ( what ) {
        this.Component = document.createElement( what )
    }

    static Content ( inner ) {
        this.Component.innerText = inner
    }

    static Enrichment () {

    }
    static Get () {
        return Object.create( this.Component )
    }
}


function StandardComponent(what, inner, enrichment) {
    let comp = document.createElement(what)
    comp.innerText = inner
    if(enrichment) {
        Object.assign(comp, enrichment)
    }
    return comp;
}

function ActionParagraph(action) {
    let p = document.createElement('p')
    p.style.border = '1px solid blue'
    p.style.borderRadius = '8px'
    p.style.color = 'white'
    p.onclick = action
    return p
}

function NumberedParagraph ( num ) {
    let p = document.createElement('p')
    p.innerText = num ? num : 0
    p.Up = () => { ( p.innerText )++ }
    p.Down = () => { ( p.innerText )-- }
    return p
}

function ActionButton(inner, action) {
    let button = document.createElement('button')
    button.innerText = inner
    button.onclick = action
    return button
}

function CounterButton() {
    let button = document.createElement('button')
    let val = 0
    button.innerText = val
    button.onclick = () => {
        val++
        button.innerText = val
    }
    return button
}



function NamedCounterButton(number, name) {
    let button = document.createElement('button')
    let p_num = document.createElement('p')
    let p_text = document.createElement('p')
    p_num.style.fontSize = '1.4em'
    p_text.style.fontSize = '0.7em'
    p_text.setAttribute('contenteditable', 'true')
    button.append(p_num, p_text)
    p_num.innerText = number ? number : 0
    p_text.innerText = name ? name : 'some name'
    button.onclick = () => {
        (p_num.innerText)++
    }
    return button
}

function CounterButtonGroup(n) {
    let buttons = new Array(n)
    for (let index = 0; index < buttons.length; index++) {
        buttons[index] = CounterButton()
    }
    let box = document.createElement('div')
    buttons.forEach(button => box.append(button))
    return box
}


function ButtonActionGroup( name, num ) {
    let group = Box('div')
    group.style.margin = '5px'
    group.style.display = 'grid'
    group.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr'
    group.style.gap = '5px'
    let display_num = NumberedParagraph( num ? num : 0 )
    let display_text = StandardComponent('p', name ? name : 'no name')
    let change = ActionButton(
        'change', () => {
            display_text.innerText = prompt('change text...')
        }
    )
    let del = ActionButton(
        'delete', () => {
            group.remove()
        }
    )
    let plus = ActionButton( '+', () => { display_num.Up() } )
    let minus = ActionButton( '-', () => { display_num.Down() } )
    group.append(
        display_num,
        display_text,
        change,
        del,
        plus,
        minus
    )
    return group
}


function Seconds() {
    let par = document.createElement('p')
    let digit
    window.setInterval(() => {
        digit = new Date().getSeconds()
        digit = String(digit).length == 1 ? '0' + digit : digit
        par.innerText = digit
    }, 1000)
    return par
}

function Minutes() {
    let par = document.createElement('p')
    let digit
    window.setInterval(() => {
        digit = new Date().getMinutes()
        digit = String(digit).length == 1 ? '0' + digit : digit
        par.innerText = digit
    }, 1000)
    return par
}

function Hours() {
    let par = document.createElement('p')
    let digit
    window.setInterval(() => {
        digit = new Date().getHours()
        digit = String(digit).length == 1 ? '0' + digit : digit
        par.innerText = digit
    }, 1000)
    return par
}

function DigitalClock( gap ){
    let wrapper = Box()
    wrapper.style.display = 'inline'
    let clock = Box()
    clock.style.display = 'flex'
    clock.style.gap = gap ? gap: 4
    clock.append(
        Hours(),
        StandardComponent('p', ':'),
        Minutes(),
        StandardComponent('p', ':'),
        Seconds()
    )
    wrapper.append( clock )
    return wrapper
}

function CycleComponent ( stdcomponent , size, millisecs ) {
    let comp = stdcomponent ? stdcomponent : StandardComponent('p','hallo')
    comp.style.width = size ? size : 200
    comp.style.height = size ? size : 200
    comp.style.border = '1px solid black'
    let timeout = millisecs ? millisecs : 1000 
    window.setInterval(() => {
        let secs = new Date().getSeconds()
        comp.style.rotate =  360/secs + "deg"
    }, timeout)
    return comp
}

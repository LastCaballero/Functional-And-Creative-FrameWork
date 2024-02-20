function Standard( what, inner, enrichment ){
    let comp = document.createElement( what )
    comp.innerText = inner
    Object.assign( comp, enrichment )
    return comp ;
}



function ActionButton( inner, action ) {
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

function ActionParagraph ( action ) {
    let p = document.createElement('p')
    p.style.border = '1px solid blue'
    p.style.borderRadius = '8px'
    p.style.color = 'white'
    p.onclick = action
    return p
}

function NamedCounterButton (number ,name){
    let button = document.createElement('button')
    let p_num = document.createElement('p')
    let p_text = document.createElement('p')
    p_text.setAttribute('contenteditable', 'true')
    button.append(p_num, p_text)
    p_num.innerText = number ? number : 0
    p_text.innerText = name ? name : 'some name'
    button.onclick = () => {
        (p_num.innerText)++
    }
    
    return button
}

function CounterButtonGroup( n ) {
    let buttons = new Array( n )
    for (let index = 0; index < buttons.length; index++) {
        buttons[index] = CounterButton()
    }
    let box = document.createElement('div')
    buttons.forEach( button => box.append( button ) )
    return box
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

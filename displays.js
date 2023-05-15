



class CalcDisplay {
    P1
    P2
    PH
    DIV
    constructor(gap) {
        this.P1 = document.createElement('p')
        this.P2 = document.createElement('p')
        this.P1.style.marginBottom = '0px'
        this.P2.style.marginTop = '0px'
        if (gap == null) {
            gap = '8px'
        }
        this.BuildDiv(gap)
        
    }
    BuildDiv(gap) {
        this.DIV = document.createElement('div')
        this.DIV.style.display = 'flex'
        this.DIV.style.flexDirection = 'column'
        this.DIV.style.gap = gap
        this.DIV.append(this.P1, this.P2)
    }
    Get() {
        return this.DIV
    }
    Rub(){
        let ac_val = this.P1.innerHTML
        this.P1.innerHTML = ac_val.substring(0, ac_val.length - 1 )
        this.SetP2()
        if(this.P1.innerHTML == ''){
            this.P2.innerHTML = ''
        }
    }
    Set(newval) {
        this.P1.innerHTML = this.P1.innerHTML + String(newval)
        this.SetP2()
    }
    SetP2() {
        let val
        try {
            val = eval(this.P1.innerHTML)
        }catch(error){
            console.log(error)
        }
        
        if (typeof val != 'undefined') {
            this.P2.innerHTML = val
        }
    }
}




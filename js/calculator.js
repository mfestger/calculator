/**
 * Created by michaelfestger on 4/17/17.
 */

'use strict'


var buttons = document.querySelectorAll('input[type="button')
buttons.forEach((button) => {
  button.addEventListener('click', function () {
    var val = button.value
    var inputs = document.querySelectorAll('input[type="text"]')
    var phase
    function clear () {
      inputs.forEach( (i) => { i.value = '' })
    }
    function evaluate () {
      var lho = parseInt(inputs[0].value)
      var op = inputs[1].value
      var rho = parseInt(inputs[2].value)
      var result
      switch (op) {
        case '+':
          result = lho + rho
          break
        case '-':
          result = lho - rho
          break
        case 'x':
          result = lho * rho
          break
        case '/':
          result = lho / rho
          break
      }
      console.log(result)
      clear()
      return result
    }
    // Determine phase
    if (inputs[1].value) { phase = 2} // Pending evaluation
    else { phase = 1 } //Pending LHO
    console.log(`Currently in phase: ${phase}`)

    if (isNaN(parseInt(val)) == false) {
      if(phase == 1)
        inputs[0].value += val
      else
        inputs[2].value += val
    }else {
      switch (val) {
        case '+':
          if (inputs[0].value !== '')
            inputs[1].value = val
          break
        case '-':
          // subtract
          if (inputs[0].value !== '')
            inputs[1].value = val
          // if(phase == 3)
          break
        case 'x':
          // multiply
          if (inputs[0].value !== '')
            inputs[1].value = val
          // if(phase == 3)
          break
        case '/':
          // Divide
          if (inputs[0].value !== '')
            inputs[1].value = val
          // if(phase == 3)
          break
        case '=':
          inputs[0].value = evaluate()
          // TO-DO possibly add flag for input0 after eval

          break
        case 'C':
          clear()
          break
      }
    }
  })
})

function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}
var wallpapers = [
'https://i.redd.it/dtinkdtc37qy.jpg',
]

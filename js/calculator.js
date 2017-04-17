/**
 * Created by michaelfestger on 4/17/17.
 */

"use strict";

var buttons = document.querySelectorAll('input[type="button')
buttons.forEach( (button) => {
  button.addEventListener('click', function() {
    var val = button.value
    var inputs = document.querySelectorAll('input[type="text"]');
    var phase;
    function evaluate() {
      var lho = parseInt(inputs[0].value)
      var op = inputs[1].value
      var rho = parseInt(inputs[2].value)
      var result;
      switch(op) {
        case '+':
          result =  lho + rho
          break;
        case '-':
          result =  lho - rho
          break;
        case 'x':
          result =  lho * rho
          break;
        case '/':
          result =  lho / rho
          break;
      }
      console.log(result)
      return result
    }
    //Determine phase
    if (inputs[1].value == '' && inputs[2].value == '') { phase = 1 } 
    else if (inputs[2] == '') { phase = 2 }
    else { phase = 3 }
    console.log(`Currently in phase: ${phase}`)
    if ( !(isNaN(parseInt(val))) && phase !== 2) {
      inputs[phase-1].value += val
    }
    else {
      switch(val) {
      case '+':
        if (inputs[0].value !== '')
          inputs[1].value = val
        break;
      case '-':
        //subtract
        if (inputs[0].value !== '')
          inputs[1].value = val
        //if(phase == 3)
        break;
      case 'x':
        //multiply
        if (inputs[0].value !== '')
          inputs[1].value = val
        //if(phase == 3)
        break;
      case '/':
        //Divide
        if (inputs[0].value !== '')
          inputs[1].value = val
        //if(phase == 3)
        break;
      case '=':
        alert(evaluate())
        //Compute and re-assign input1
          
        break;
      case 'C':
        inputs.forEach( (i) => { i.value = '' })
        break;
      }
    }

  })
})
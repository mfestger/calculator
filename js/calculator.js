/**
 * Created by michaelfestger on 4/17/17.
 */

"use strict";

var buttons = document.querySelectorAll('input[type="button')
buttons.forEach( (button) => {
  button.addEventListener('click', function() {
    var value = button.val
    var inputs = document.querySelectorAll('input[type="text"]');
    var phase;
    //Determine phase
    if (inputs[0].value !== '') { phase = 1 }
    if (inputs[1].value !== '') { phase = 2 }
    if (inputs[2].value !== '') { phase = 3 }
    //console.log(`Currently in phase: ${phase}`)

    switch(val) {
    case '+':
      if(phase == 2)
      break;
    case '-':
      //subtract
      break;
    case 'x':
      //multiply
      break;
    case '/':
      //Divide
      break;
    case '=':
      //Compute and re-assign input1
      break;
    case 'C':
      //Reset current input
      //Halt and catch fire if input empty
      break;
    }
  })
})
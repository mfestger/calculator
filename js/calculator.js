'use strict'

function Calculator (button) {
  var val = button.value
  var inputs = document.querySelectorAll('input[type="text"]')
  console.log(`Val : ${val}`)

  function clear () {
    inputs.forEach(i => {
      i.value = ''
    })
  }

  function evaluate () {
    var lho = parseInt(inputs[0].value)
    var opr = inputs[1].value
    var rho = parseInt(inputs[2].value)
    var result
    switch (opr) {
      case '+':
        result = lho + rho
        break
      case '-':
        result = lho - rho
        break
      case '×':
        result = lho * rho
        break
      case '÷':
        result = lho / rho
        break
    }
    inputs[0].setAttribute('cleared', '') // Prevents appending to i[0] return
    clear()
    return result
  }
  // Determine phase of calculation
  var phase = {
    0: !(inputs[0].value), // Awaiting LHO
    1: !!(inputs[1].value), // Awaiting RHO
    2: !!(inputs[2].value) // Both operands are ready
  }

  if (!isNaN(val)) { // We can only omit casting val becasue isNaN('0') => false
    if (!phase[1]) {
      inputs[0].value = inputs[0].hasAttribute('cleared') ? val : inputs[0].value + val
    } else {
      inputs[2].value += val
    }
    inputs[0].removeAttribute('cleared') // Job's done
  } else if (!phase[0]) {
    switch (val) {
      case '=':
        if (phase[2]) { inputs[0].value = evaluate() }
        break
      case 'c':
        console.log("Clear!!") // DEBUG
        clear()
        break
      case 'Backspace':
        if (!phase[1]) {
          inputs[0].value = inputs[0].value.slice(0, inputs[0].value.length - 1)
        } else {
          inputs[2].value = inputs[2].value.slice(0, inputs[2].value.length - 1)
          if (inputs[2].value.length === 0) { inputs[1].value = '' }
        }
        break
      default: // We can infer that we are assigning some operator
        if (phase[2]) {
          inputs[0].value = evaluate()
          inputs[1] = val
        } else {}
        inputs[1].value = val
    }
  }
}

var buttons = document.querySelectorAll('input[type="button')
buttons.forEach(button => {
  button.addEventListener('click', () => Calculator(button))
})

window.addEventListener('keydown', keyHandler)
function keyHandler (event) {
  console.log(event.key) // DEBUG
  try {
    var key = document.querySelector(`input[value="${event.key}"`) || document.querySelector(`input[op="${event.key}"]`)
    key.click()
  } catch (e) {
    if (e instanceof TypeError) { /* WE R RLY LZY */ }
  }
  console.log(key) // DEBUG
}

function shuffle (a) {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i)
    ;[a[i - 1], a[j]] = [a[j], a[i - 1]]
  }
}

var wallpapers = [
  'https://i.redd.it/dtinkdtc37qy.jpg'
]

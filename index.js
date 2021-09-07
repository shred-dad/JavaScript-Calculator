const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const clearButton = document.querySelector('[data-c]')
const clearAllButton = document.querySelector('[data-ca]')
const equalsButton = document.querySelector('[data-equals]')
const inputBox = document.querySelector(".input-field")
const dotButton = document.querySelector('[data-dot]')

let operator = ''

function calculate() {
    let arr = inputBox.value.split(operator)
    switch (operator) {
        case '-':
            inputBox.value = parseFloat(arr[0]) - parseFloat(arr[1])
            break
        case '+':
            inputBox.value = parseFloat(arr[0]) + parseFloat(arr[1])
            break
        case '÷':
            if (arr[0] === '0') {
                inputBox.value = ''
                operator = ''
                break
            }
            inputBox.value = parseFloat(arr[0]) / parseFloat(arr[1])
            break
        case '*':
            inputBox.value = parseFloat(arr[0]) * parseFloat(arr[1])
            break
        default:
            return
    }
    operator = ''
}

numberButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        inputBox.value = inputBox.value + btn.textContent
        console.log(operator)
    })
})

dotButton.addEventListener('click', button => {
    console.log(dotButton.textContent)
    if (inputBox.value.includes('.') && operator === '') {
        return
    } else if (inputBox.value.includes('.') && operator !== '' && inputBox.value.split('.').length - 1 >= 2) {
        return
    }
    inputBox.value = inputBox.value + dotButton.textContent
})

operatorButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (inputBox.value.length === 0) {
            return
        }
        console.log(operator)
        if (operator != '') {
            calculate(inputBox.value)
        }
        operator = btn.textContent
        inputBox.value = inputBox.value + btn.textContent
        console.log(operator)
    })
})

clearButton.addEventListener('click', button => {
    inputBox.value = inputBox.value.slice(0, -1)

})

clearAllButton.addEventListener('click', button => {
    inputBox.value = ''
})

equalsButton.addEventListener('click', () => {
    console.log(operator)
    if (operator === null) {
    } else {
        calculate(inputBox.Value)
    }
})
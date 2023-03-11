const display = document.querySelector('.display')
const controlButtons = document.querySelector('.controls').children
const allSymbols = ['+', '-', '/', 'X', 'AC', '%', '=']
const signSymbol = ['+/-']

let firstValue = ''
let secondValue = ''
let symbol = ''
let result = ''

const calculate = () => {
    firstValue = parseFloat(firstValue)
    secondValue = parseFloat(secondValue)

    if (symbol === '+') result = firstValue + secondValue
    if (symbol === '-') result = firstValue - secondValue
    if (symbol === 'X') result = firstValue * secondValue
    if (symbol === '/') result = firstValue / secondValue
    if (symbol === '%') result = firstValue % secondValue

    display.innerText = result
    firstValue = result
    secondValue = ''
}

for (let button of controlButtons) {
    button.addEventListener('click', () => {
        const {innerText: btnValue } = button
        const btnValueIsSymbol = allSymbols.includes(btnValue)

        if (!secondValue && btnValue === '=') return null

        if (btnValue === 'AC') {
            firstValue = ''
            secondValue = ''
            return display.innerText = ''
        }

        if(firstValue !== '' && btnValueIsSymbol) {
            secondValue && calculate()
            symbol = btnValue
        }

        else if (!symbol) firstValue += btnValue
        else if (symbol) secondValue += btnValue

        if (btnValue !== '=' && btnValue !== '+/-') display.innerText += btnValue
      /*  if (btnValue === '+/-' && !symbol) {
            firstValue *= -1 
            display.innerText *= -1
        }
        if (btnValue === '+/-' && symbol) {
            secondValue *= -1
            display.innerText *= -1
        } */
    })
}

